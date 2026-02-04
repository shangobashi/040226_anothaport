import * as THREE from 'three';

// Vertex Shader
// Handles displacement of vertices to create a liquid/breathing effect
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  // Simplex noise function (simplified)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    // Gradients
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    // Low frequency organic movement
    float noiseVal = snoise(position * 0.8 + uTime * 0.2);
    
    // High frequency ripples
    float ripple = snoise(position * 4.0 + uTime * 0.5) * 0.05;
    
    vec3 newPos = position + normal * (noiseVal * 0.3 + ripple);
    vPosition = newPos;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

// Fragment Shader
// Handles lighting and the ordered dithering effect
const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;
  
  // Dither Matrix 4x4
  const mat4 ditherTable = mat4(
    0.0,  8.0,  2.0, 10.0,
    12.0, 4.0, 14.0, 6.0,
    3.0, 11.0, 1.0,  9.0,
    15.0, 7.0, 13.0, 5.0
  ) / 16.0;

  void main() {
    // 1. Basic Lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 2.0));
    vec3 viewDir = normalize(-vPosition); // Simplified view dir
    
    // Diffuse
    float diff = max(dot(vNormal, lightDir), 0.0);
    
    // Specular (techy sharp specular)
    vec3 reflectDir = reflect(-lightDir, vNormal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
    
    // Rim light (for that AI ghost look)
    float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
    rim = pow(rim, 3.0);
    
    // Combine lighting intensity
    float intensity = diff * 0.5 + spec * 0.8 + rim * 0.6;
    
    // 2. Dithering
    // Get screen coordinates for the dither pattern pattern to stay screen-locked (cleaner look)
    vec2 screenPos = gl_FragCoord.xy;
    int x = int(mod(screenPos.x, 4.0));
    int y = int(mod(screenPos.y, 4.0));
    float threshold = 0.0;
    
    // Manual matrix access because GLSL ES 1.0 indexing limitations (in some envs)
    // but in WebGL 2.0 or decent 1.0 extensions, dynamic indexing is okay-ish.
    // Let's be explicit to be safe.
    if(x == 0) {
      if(y == 0) threshold = ditherTable[0][0];
      if(y == 1) threshold = ditherTable[0][1];
      if(y == 2) threshold = ditherTable[0][2];
      if(y == 3) threshold = ditherTable[0][3];
    } else if(x == 1) {
      if(y == 0) threshold = ditherTable[1][0];
      if(y == 1) threshold = ditherTable[1][1];
      if(y == 2) threshold = ditherTable[1][2];
      if(y == 3) threshold = ditherTable[1][3];
    } else if(x == 2) {
      if(y == 0) threshold = ditherTable[2][0];
      if(y == 1) threshold = ditherTable[2][1];
      if(y == 2) threshold = ditherTable[2][2];
      if(y == 3) threshold = ditherTable[2][3];
    } else { // x == 3
      if(y == 0) threshold = ditherTable[3][0];
      if(y == 1) threshold = ditherTable[3][1];
      if(y == 2) threshold = ditherTable[3][2];
      if(y == 3) threshold = ditherTable[3][3];
    }

    // 3. Final Color Mixing
    // If intensity > threshold, we show the "bright" color. Otherwise dark.
    // To make it feel "AI", we won't just use black/white. We'll use void black and metallic silver/blue.
    
    vec3 darkColor = vec3(0.01, 0.01, 0.02); // Deep void
    vec3 brightColor = vec3(0.9, 0.95, 1.0); // Cold silver
    
    // Add a subtle gradient based on vertical position
    vec3 accentColor = vec3(0.4, 0.4, 0.5); // Midtone grey
    
    vec3 finalColor = darkColor;
    
    // Dithering logic
    if (intensity > threshold) {
        finalColor = brightColor;
    } else if (intensity > threshold * 0.5) {
        // Optional: Mid-tone dither band for softer transitions
        finalColor = mix(darkColor, accentColor, 0.5);
    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export const DitherMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
  },
  side: THREE.DoubleSide
});
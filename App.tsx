import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { Scene } from './components/Scene';
import { UIOverlay } from './components/UIOverlay';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: false, alpha: false }} // Disable default antialias for sharper pixel look if desired
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Content Layer */}
      <main className="relative z-10 w-full">
        <UIOverlay />
      </main>
      
      <Loader 
        containerStyles={{ background: '#030303' }}
        barStyles={{ background: '#ffffff', height: '2px' }}
        dataStyles={{ fontFamily: 'Space Grotesk', fontSize: '12px' }}
      />
    </div>
  );
};

export default App;
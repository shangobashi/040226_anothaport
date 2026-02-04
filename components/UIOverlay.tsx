import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe, Layers, Mail, Box, ExternalLink, Linkedin, PenTool, Github, Twitter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "YORUBA_OS",
    category: "OS Design",
    year: "2026",
    link: "https://shangobashi.com",
    // Abstract Flowing Data Lines - Represents the Operating System
    imageUrl: "/placeholder1.png" 
  },
  {
    id: 2,
    title: "ALKEBULAN_NEXUS",
    category: "Design Systems",
    year: "2023",
    link: "https://shangobashi.com",
    // Interconnected Dark Cubes - Represents the Nexus/Network
    imageUrl: "/placeholder2.png" 
  },
  {
    id: 3,
    title: "NOK_TERRA",
    category: "Architecture / AR",
    year: "2023",
    link: "https://shangobashi.com",
    // Dark Monolithic Structure - Represents Nok Terra Architecture
    imageUrl: "/placeholder3.png" 
  },
  {
    id: 4,
    title: "ORISHA_SYNTH",
    category: "Hardware",
    year: "2022",
    link: "https://shangobashi.com",
    // Traditional Djembe drum detail - Represents the 'Synth' and rhythm connection
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop" 
  }
];

export const UIOverlay: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col gap-24 relative z-10">
      {/* Gradient Overlay for Header Readability */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 to-transparent pointer-events-none z-0" />

      {/* Header / Nav */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center w-full text-white z-50 relative pt-4"
      >
        <div className="flex flex-col drop-shadow-md">
          <h1 className="text-xl font-bold font-mono tracking-tighter text-white">SHANGO_BASHI</h1>
          <span className="text-xs font-mono text-zinc-300 font-semibold tracking-wide">FULL-STACK/AI ENGINEER</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-mono tracking-wide text-zinc-200 drop-shadow-md font-medium">
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')}
            className="hover:text-white transition-colors bg-black/20 px-2 py-1 rounded hover:bg-black/50 cursor-pointer"
          >
            [ WORK ]
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="hover:text-white transition-colors bg-black/20 px-2 py-1 rounded hover:bg-black/50 cursor-pointer"
          >
            [ ABOUT ]
          </a>
          <a 
            href="mailto:shangobashi@gmail.com" 
            className="hover:text-white transition-colors bg-black/20 px-2 py-1 rounded hover:bg-black/50 cursor-pointer"
          >
            [ CONTACT ]
          </a>
          <a 
            href="https://x.com/shangobashi"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors bg-black/20 px-2 py-1 rounded hover:bg-black/50 cursor-pointer"
          >
            [ TWITTER ]
          </a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-start relative z-10 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[2px] w-12 bg-white shadow-[0_0_10px_white]"></div>
             <span className="text-xs font-mono tracking-widest text-white font-bold bg-black/50 px-2 py-1 backdrop-blur-sm">PORTFOLIO // 2026</span>
          </div>
          
          <div className="relative">
            <h2 className="text-6xl md:text-9xl font-medium tracking-tight leading-[0.9] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)] mix-blend-normal">
              CRAFTING <br />
              <span className="font-mono text-4xl md:text-6xl tracking-tighter text-zinc-200 block mt-2 drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">THE FUTURE</span>
            </h2>
          </div>

          <p className="mt-8 max-w-lg text-zinc-100 text-base md:text-lg font-mono leading-relaxed drop-shadow-sm bg-zinc-950/90 p-6 backdrop-blur-xl border-l-4 border-white shadow-2xl">
            Full-Stack/AI Engineer crafting the future through AI, Data, and Creative Technology.
          </p>
          
          <div className="mt-12 flex gap-4">
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="group relative px-6 py-3 border border-zinc-400 bg-black hover:bg-white hover:text-black transition-all duration-300 inline-block shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
            >
               <span className="relative z-10 font-mono text-sm flex items-center gap-2 font-bold">
                 VIEW PROJECTS <ArrowDownRight size={16} />
               </span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl p-8 font-mono text-xs shadow-2xl"
      >
         <div className="flex flex-col gap-2">
           <span className="text-zinc-500 tracking-wider font-bold">ROLE</span>
           <span className="text-zinc-100 text-sm font-semibold">FULL-STACK/AI ENGINEER</span>
         </div>
         <div className="flex flex-col gap-2">
           <span className="text-zinc-500 tracking-wider font-bold">STATUS</span>
           <span className="flex items-center gap-2 text-zinc-100 text-sm font-semibold">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div> 
             OPEN FOR WORK
           </span>
         </div>
         <div className="flex flex-col gap-2">
           <span className="text-zinc-500 tracking-wider font-bold">FOCUS</span>
           <span className="text-zinc-100 text-sm font-semibold">AI / DATA / WEB3</span>
         </div>
         <div className="flex flex-col gap-2">
           <span className="text-zinc-500 tracking-wider font-bold">SOCIAL</span>
           <a href="https://linkedin.com/in/shangobashi" target="_blank" rel="noopener noreferrer" className="text-zinc-100 text-sm font-semibold underline hover:text-accent">LINKEDIN</a>
           <a href="https://x.com/shangobashi" target="_blank" rel="noopener noreferrer" className="text-zinc-100 text-sm font-semibold underline hover:text-accent">TWITTER</a>
         </div>
      </motion.div>

      {/* Projects Grid */}
      <section id="work" className="py-20 px-6 -mx-6 bg-black/80 backdrop-blur-lg">
        <div className="flex items-end justify-between mb-16 border-b border-zinc-700 pb-4">
          <h3 className="text-4xl font-light tracking-tight text-white drop-shadow-md">SELECTED_WORK</h3>
          <span className="font-mono text-xs text-zinc-400 hidden md:block">STATIC PREVIEWS // CACHED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((project, idx) => (
             <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="py-20 px-6 -mx-6 bg-zinc-950/95 border-t border-zinc-800 backdrop-blur-xl shadow-2xl">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4">
               <h3 className="text-sm font-mono text-zinc-400 mb-8 border-l-2 border-zinc-700 pl-4 font-bold">[ DOMAINS ]</h3>
               <ul className="space-y-4 font-mono text-sm text-zinc-200 font-medium">
                  <li className="flex items-center gap-3"><Layers size={16} className="text-zinc-500"/> AI ENGINEERING</li>
                  <li className="flex items-center gap-3"><Box size={16} className="text-zinc-500"/> CREATIVE TECH</li>
                  <li className="flex items-center gap-3"><Globe size={16} className="text-zinc-500"/> WEB & BLOCKCHAIN</li>
               </ul>
            </div>
            <div className="col-span-12 md:col-span-8">
               <p className="text-2xl md:text-3xl font-light leading-snug text-white mb-8 drop-shadow-md">
                  I am <span className="font-bold border-b-2 border-white/30 pb-1">Shango Bashi</span>, a passionate Full-Stack/AI Engineer.
               </p>
               <div className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-2xl space-y-6 font-medium">
                  <p>
                    My journey spans across web development, AI engineering and blockchain development, where I strive to create innovative solutions that push the boundaries of what's possible.
                  </p>
                  <p>
                    Beyond code, I'm a sound engineer and artist, bringing a unique creative perspective to technical challenges. This blend of technical expertise and artistic vision allows me to craft experiences that are both functional and beautiful.
                  </p>
               </div>
               <div className="flex gap-4 mt-10">
                 <a href="https://shangobashi.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black border border-white rounded-sm font-mono text-sm font-bold hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                   PORTFOLIO <ExternalLink size={14} />
                 </a>
                 <a href="https://blog.shangobashi.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black border border-white rounded-sm font-mono text-sm font-bold hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                   WRITINGS <ExternalLink size={14} />
                 </a>
               </div>
            </div>
         </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 -mx-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 bg-black text-white">
         <div>
            <h2 className="text-6xl font-light tracking-tighter mb-4 text-white drop-shadow-lg">LET'S CREATE <br/><span className="text-zinc-500">TOGETHER</span></h2>
            <p className="text-zinc-400 mb-6 max-w-md font-mono text-sm">Ready to bring your next project to life? Let's discuss how we can innovate together.</p>
            <a href="mailto:shangobashi@gmail.com" className="inline-flex items-center gap-3 text-xl text-zinc-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 font-medium">
              <Mail size={24} /> shangobashi@gmail.com
            </a>
         </div>
         
         <div className="flex flex-col gap-6 text-right">
            <div className="flex gap-8 font-mono text-sm items-center text-zinc-400">
               <a href="https://www.linkedin.com/in/shango-bashi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 font-bold">
                 <Linkedin size={16} /> LINKEDIN
               </a>
               <a href="https://github.com/shangobashi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 font-bold">
                 <Github size={16} /> GITHUB
               </a>
               <a href="https://x.com/shangobashi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 font-bold">
                 <Twitter size={16} /> TWITTER
               </a>
            </div>
            <span className="text-xs text-zinc-600 font-mono mt-4">
               © 2026 SHANGO BASHI.
            </span>
         </div>
      </footer>
    </div>
  );
};

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  return (
    <motion.a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer block"
    >
       <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-zinc-900 border border-zinc-800 group-hover:border-zinc-500 transition-all shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {/* Dither pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-30 z-20 pointer-events-none mix-blend-overlay"></div>
          
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 brightness-90"
          />
          
          <div className="absolute bottom-6 left-6 z-30">
             <div className="bg-black/90 backdrop-blur-md px-3 py-1 inline-flex items-center gap-2 border border-white/20 shadow-lg">
               <span className="text-xs font-mono uppercase tracking-widest text-zinc-100 font-bold">{project.category}</span>
             </div>
          </div>
          
          <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
             <div className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <ExternalLink size={20} />
             </div>
          </div>
       </div>
       
       <div className="flex justify-between items-baseline border-b border-zinc-700 pb-4 group-hover:border-zinc-400 transition-colors">
          <h4 className="text-2xl font-normal tracking-tight text-white group-hover:text-zinc-200 transition-colors drop-shadow-md">{project.title}</h4>
          <span className="font-mono text-xs text-zinc-400 font-medium">{project.year}</span>
       </div>
    </motion.a>
  );
};
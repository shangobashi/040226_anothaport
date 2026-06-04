import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  Bot,
  CheckCircle2,
  Clock3,
  Database,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Lock,
  Mail,
  Twitter,
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  link: string;
  imageUrl: string;
  status: 'Live' | 'In Production';
  isClickable: boolean;
  desktopOrder: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'FieldTheoryX',
    category: 'Windows CLI Tool',
    description: 'FieldTheoryX is a Windows CLI tool for extracting, structuring, and organizing X bookmarks into usable knowledge sets. It turns scattered saved posts into a disciplined research workflow built for retrieval, analysis, and long-term signal preservation.',
    year: '2026',
    link: 'https://fieldtheoryx.issalabs.xyz',
    imageUrl: '/placeholder1.png',
    status: 'Live',
    isClickable: true,
    desktopOrder: 'md:order-1',
  },
  {
    id: 2,
    title: 'FollowGraph',
    category: 'Chrome / Brave Extension',
    description: 'FollowGraph is a Chrome and Brave extension for managing X accounts through graph-aware workflows. It helps map relationships, organize audience intelligence, and bring operational clarity to high-signal social networks.',
    year: '2026',
    link: 'https://followgraph.issalabs.xyz',
    imageUrl: '/placeholder2.png',
    status: 'In Production',
    isClickable: false,
    desktopOrder: 'md:order-2',
  },
  {
    id: 3,
    title: 'CADb',
    category: 'Agentic System',
    description: 'CADb, the Central Artificial Deploy-beast, is an agent harness designed to plug 300+ operational skills directly into agents such as Hermes or Openclaw. Its analytical core is modeled on Cheikh Anta Diop: historically grounded, systems-minded, and built for disciplined reasoning under deployment pressure.',
    year: '2026',
    link: 'https://brain.issalabs.xyz',
    imageUrl: '/placeholder3.png',
    status: 'In Production',
    isClickable: false,
    desktopOrder: 'md:order-4',
  },
  {
    id: 4,
    title: 'ISSALABS',
    category: 'AI Lab',
    description: 'ISSALABS is the AI lab behind the portfolio: a product and research system for turning agent workflows, graph intelligence, technical publishing, and applied AI experiments into deployable software surfaces.',
    year: '2026',
    link: 'https://issalabs.xyz',
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop',
    status: 'Live',
    isClickable: true,
    desktopOrder: 'md:order-3',
  },
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
    <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 py-5 sm:gap-18 sm:px-6 sm:py-8 md:gap-24 md:px-12">
      <div className="pointer-events-none fixed left-0 top-0 z-0 h-32 w-full bg-gradient-to-b from-black/90 to-transparent" />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 flex w-full flex-col gap-4 pt-2 text-white sm:flex-row sm:items-center sm:justify-between sm:pt-4"
      >
        <div className="min-w-0 drop-shadow-md">
          <h1 className="font-mono text-lg font-bold tracking-normal text-white sm:text-xl">SHANGO_BASHI</h1>
          <span className="block font-mono text-[11px] font-semibold tracking-wide text-zinc-300 sm:text-xs">SOFTWARE ENGINEER</span>
        </div>
        <nav className="hidden gap-8 font-mono text-sm font-medium tracking-wide text-zinc-200 drop-shadow-md md:flex">
          <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="cursor-pointer rounded bg-black/20 px-2 py-1 transition-colors hover:bg-black/50 hover:text-white">
            [ WORK ]
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="cursor-pointer rounded bg-black/20 px-2 py-1 transition-colors hover:bg-black/50 hover:text-white">
            [ ABOUT ]
          </a>
          <a href="mailto:shangobashi@gmail.com" className="cursor-pointer rounded bg-black/20 px-2 py-1 transition-colors hover:bg-black/50 hover:text-white">
            [ CONTACT ]
          </a>
          <a href="https://x.com/shangobashi" target="_blank" rel="noopener noreferrer" className="cursor-pointer rounded bg-black/20 px-2 py-1 transition-colors hover:bg-black/50 hover:text-white">
            [ TWITTER ]
          </a>
        </nav>
      </motion.header>

      <section className="relative z-10 mt-4 flex min-h-[58vh] items-center sm:mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <div className="h-[2px] w-8 bg-white shadow-[0_0_10px_white] sm:w-12" />
            <span className="bg-black/55 px-2 py-1 font-mono text-[11px] font-bold tracking-widest text-white backdrop-blur-sm sm:text-xs">PORTFOLIO // 2026</span>
          </div>

          <h2 className="text-[clamp(3.05rem,15vw,8rem)] font-medium leading-[0.9] tracking-normal text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
            CRAFTING <br />
            <span className="mt-2 block font-mono text-[clamp(2rem,9vw,4.5rem)] tracking-normal text-zinc-200 drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">THE FUTURE</span>
          </h2>

          <p className="mt-7 max-w-xl border-l-4 border-white bg-zinc-950/90 p-4 font-mono text-sm leading-relaxed text-zinc-100 shadow-2xl backdrop-blur-xl sm:mt-8 sm:p-6 sm:text-base md:text-lg">
            Software engineer building AI-native products, agentic systems, and structured software that solves real problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-12">
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="group inline-flex items-center gap-2 border border-zinc-400 bg-black px-5 py-3 font-mono text-sm font-bold transition-all duration-300 hover:bg-white hover:text-black">
              VIEW PROJECTS <ArrowDownRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 border border-zinc-800 bg-zinc-950/90 p-5 font-mono text-xs shadow-2xl backdrop-blur-xl sm:grid-cols-2 sm:p-6 md:grid-cols-4 md:p-8"
      >
        <StatBlock label="ROLE" value="SOFTWARE ENGINEER" />
        <div className="flex flex-col gap-2">
          <span className="font-bold tracking-wider text-zinc-500">STATUS</span>
          <span className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
            <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            OPEN FOR WORK
          </span>
        </div>
        <StatBlock label="FOCUS" value="AI / DATA / AGENTIC" />
        <div className="flex flex-col gap-2">
          <span className="font-bold tracking-wider text-zinc-500">SOCIAL</span>
          <a href="https://linkedin.com/in/shangobashi" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-100 underline transition-colors hover:text-accent">LINKEDIN</a>
          <a href="https://x.com/shangobashi" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-100 underline transition-colors hover:text-accent">TWITTER</a>
        </div>
      </motion.div>

      <section id="work" className="-mx-4 bg-black/80 px-4 py-14 backdrop-blur-lg sm:-mx-6 sm:px-6 sm:py-16 md:-mx-6 md:py-20">
        <div className="mb-10 flex flex-col gap-3 border-b border-zinc-700 pb-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-3xl font-light tracking-normal text-white drop-shadow-md sm:text-4xl">SELECTED_WORK</h3>
          <span className="font-mono text-xs text-zinc-400">PRODUCTS // CURRENT STATUS</span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      <section id="about" className="-mx-4 border-t border-zinc-800 bg-zinc-950/95 px-4 py-14 shadow-2xl backdrop-blur-xl sm:-mx-6 sm:px-6 sm:py-16 md:-mx-6 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <h3 className="mb-6 border-l-2 border-zinc-700 pl-4 font-mono text-sm font-bold text-zinc-400 md:mb-8">[ DOMAINS ]</h3>
            <ul className="space-y-4 font-mono text-sm font-medium text-zinc-200">
              <li className="flex items-center gap-3"><Layers size={16} className="shrink-0 text-zinc-500" /> FULL-STACK DEV</li>
              <li className="flex items-center gap-3"><Database size={16} className="shrink-0 text-zinc-500" /> DATA ENGINEERING</li>
              <li className="flex items-center gap-3"><Bot size={16} className="shrink-0 text-zinc-500" /> ML & AGENTIC SYSTEMS</li>
            </ul>
          </div>
          <div className="md:col-span-8">
            <p className="mb-8 text-2xl font-light leading-snug text-white drop-shadow-md sm:text-3xl">
              I am <span className="border-b-2 border-white/30 pb-1 font-bold">Shango Bashi</span>, a software engineer focused on full-stack development, data engineering, machine learning, and agentic systems.
            </p>
            <div className="mb-8 max-w-2xl space-y-5 text-base font-medium leading-relaxed text-zinc-300 sm:text-lg">
              <p>
                I build AI-native products, workflows, and software that go beyond chat: structured systems designed to use tools, work with data, and solve real problems.
              </p>
              <p>
                My background in sound engineering and art continues to inform my technical work, giving me a strong bias toward systems that are not only functional, but also clear, coherent, and thoughtfully designed.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <a href="https://github.com/shangobashi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-white bg-white px-4 py-3 font-mono text-sm font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all hover:bg-zinc-200 sm:px-5">
                PROJECTS <ExternalLink size={14} />
              </a>
              <a href="https://blog.shangobashi.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-white bg-white px-4 py-3 font-mono text-sm font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all hover:bg-zinc-200 sm:px-5">
                WRITINGS <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="-mx-4 flex flex-col gap-10 border-t border-zinc-800 bg-black px-4 py-14 text-white sm:-mx-6 sm:px-6 sm:py-16 md:-mx-6 md:flex-row md:items-end md:justify-between md:gap-12 md:py-20">
        <div className="min-w-0">
          <h2 className="mb-4 text-[clamp(2.75rem,13vw,4.5rem)] font-light leading-[0.95] tracking-normal text-white drop-shadow-lg">
            LET'S CREATE <br /><span className="text-zinc-500">TOGETHER</span>
          </h2>
          <p className="mb-6 max-w-md font-mono text-sm text-zinc-400">Building AI-native products and structured systems. Let's discuss how we can work together.</p>
          <a href="mailto:shangobashi@gmail.com" className="inline-flex max-w-full items-center gap-3 break-all border-b border-transparent pb-1 text-base font-medium text-zinc-300 transition-colors hover:border-white hover:text-white sm:text-xl">
            <Mail size={22} className="shrink-0" /> shangobashi@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-6 md:text-right">
          <div className="flex flex-wrap gap-4 font-mono text-sm text-zinc-400 sm:gap-6 md:justify-end">
            <a href="https://www.linkedin.com/in/shango-bashi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold transition-colors hover:text-white">
              <Linkedin size={16} /> LINKEDIN
            </a>
            <a href="https://github.com/shangobashi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold transition-colors hover:text-white">
              <Github size={16} /> GITHUB
            </a>
            <a href="https://x.com/shangobashi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold transition-colors hover:text-white">
              <Twitter size={16} /> TWITTER
            </a>
          </div>
          <span className="font-mono text-xs text-zinc-600">
            © 2026 SHANGO BASHI.
          </span>
        </div>
      </footer>
    </div>
  );
};

const StatBlock: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col gap-2">
    <span className="font-bold tracking-wider text-zinc-500">{label}</span>
    <span className="text-sm font-semibold text-zinc-100">{value}</span>
  </div>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isLive = project.status === 'Live';
  const cardBody = (
    <>
      <div className={`relative mb-5 aspect-[4/5] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg transition-all sm:mb-6 ${isLive ? 'group-hover:border-zinc-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'border-zinc-800/80'}`}>
        <div className="pointer-events-none absolute inset-0 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-30 mix-blend-overlay" />
        {!isLive && <div className="absolute inset-0 z-10 bg-black/35" />}

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={project.imageUrl}
          alt={project.title}
          className={`h-full w-full object-cover filter grayscale contrast-125 brightness-90 transition-transform duration-700 ease-out ${isLive ? 'group-hover:scale-105' : 'opacity-70'}`}
        />

        <div className="absolute left-4 top-4 z-30 sm:left-6 sm:top-6">
          <StatusBadge status={project.status} />
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-30 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="inline-flex max-w-full items-center gap-2 border border-white/20 bg-black/90 px-3 py-1 shadow-lg backdrop-blur-md">
            <span className="truncate font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-100 sm:text-xs">{project.category}</span>
          </div>
        </div>

        <div className={`absolute right-4 top-4 z-30 transition-all duration-300 sm:right-6 sm:top-6 ${isLive ? 'opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100' : 'opacity-100'}`}>
          <div className={`${isLive ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border border-white/10 bg-black/80 text-zinc-400'} rounded-full p-2.5 sm:p-3`}>
            {isLive ? <ExternalLink size={18} /> : <Lock size={18} />}
          </div>
        </div>
      </div>

      <div className={`border-b pb-4 transition-colors ${isLive ? 'border-zinc-700 group-hover:border-zinc-400' : 'border-zinc-800'}`}>
        <div className="mb-3 flex items-start justify-between gap-4">
          <h4 className={`text-2xl font-normal tracking-normal text-white drop-shadow-md transition-colors sm:text-3xl ${isLive ? 'group-hover:text-zinc-200' : ''}`}>{project.title}</h4>
          <span className="shrink-0 pt-1 font-mono text-xs font-medium text-zinc-400">{project.year}</span>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">{project.description}</p>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`${project.desktopOrder} min-w-0`}
    >
      {project.isClickable ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
          {cardBody}
        </a>
      ) : (
        <div aria-disabled="true" className="group block cursor-default">
          {cardBody}
        </div>
      )}
    </motion.div>
  );
};

const StatusBadge: React.FC<{ status: Project['status'] }> = ({ status }) => {
  const isLive = status === 'Live';

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide shadow-lg backdrop-blur-md ${isLive ? 'border-emerald-300/35 bg-emerald-400/15 text-emerald-100' : 'border-amber-200/25 bg-zinc-950/80 text-amber-100'}`}>
      {isLive ? <CheckCircle2 size={13} /> : <Clock3 size={13} />}
      {status}
    </span>
  );
};

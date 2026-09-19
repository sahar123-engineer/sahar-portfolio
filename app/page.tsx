"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Code,
  Cpu,
  Database,
  Brain,
  Terminal,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Server,
  Layers,
  Award,
  BookOpen,
  Briefcase,
  User,
  Send,
  Menu,
  X,
  CheckCircle2,
  ArrowUp,
  Search,
  Filter,
  FileText,
  Activity,
  Bot,
  MessageSquare,
  Globe,
  Settings,
  ShieldCheck,
  Zap,
  Check
} from 'lucide-react';

const PORTFOLIO_DATA = {
  personal: {
    name: "Sahar Kharrat",
    title: "Software Engineer | Full-Stack Developer | AI & GenAI Enthusiast",
    shortBio: "Recently graduated Software Engineer from ISIMS Sfax with hands-on expertise in .NET, Angular, Spring Boot, RAG Systems, and Enterprise Architecture.",
    location: "Tunisia / Available for Remote & Onsite Opportunities",
    email: "saharkharrat15@gmail.com",
    github: "https://github.com/sahar123-engineer",
    linkedin: "https://www.linkedin.com/in/sahar-kharrat-/",
    education: {
      degree: "National Engineering Degree in Software Engineering",
      institution: "ISIMS – Institut Supérieur d'Informatique et de Multimédia de Sfax",
      university: "Université de Sfax",
      period: "2021 – 2024",
      status: "Graduated with High Honors"
    }
  },
  skills: [
    { name: "Angular", category: "Frontend", level: "Advanced", icon: "Code" },
    { name: "React.js", category: "Frontend", level: "Advanced", icon: "Code" },
    { name: "TypeScript / JS", category: "Frontend", level: "Advanced", icon: "Code" },
    
    { name: "ASP.NET Core / .NET 8", category: "Backend", level: "Advanced", icon: "Server" },
    { name: "Spring Boot", category: "Backend", level: "Intermediate", icon: "Server" },
    { name: "Node.js / Express", category: "Backend", level: "Intermediate", icon: "Server" },
    { name: "Laravel", category: "Backend", level: "Intermediate", icon: "Server" },
    { name: "Flask / FastAPI", category: "Backend", level: "Advanced", icon: "Server" },
    { name: "RESTful APIs", category: "Backend", level: "Expert", icon: "Server" },

    { name: "Generative AI & LLMs", category: "AI & GenAI", level: "Advanced", icon: "Brain" },
    { name: "RAG Systems", category: "AI & GenAI", level: "Advanced", icon: "Brain" },
    { name: "LlamaIndex", category: "AI & GenAI", level: "Advanced", icon: "Brain" },

    { name: "SQL Server / EF Core", category: "Databases", level: "Advanced", icon: "Database" },
    { name: "PostgreSQL / MySQL", category: "Databases", level: "Advanced", icon: "Database" },

    { name: "Git & Azure DevOps", category: "DevOps & Tools", level: "Advanced", icon: "Settings" },
    { name: "Postman & CI/CD", category: "DevOps & Tools", level: "Advanced", icon: "Settings" }
  ],
  experience: [
    {
      company: "TSI – Tunisie Systèmes d'Information",
      role: "Software Engineering Intern / Final-Year Project",
      type: "End-of-Studies Internship",
      period: "Feb 2026 – Jul 2026",
      location: "Sfax, Tunisia",
      summary: "Designed and implemented a full-scale HR Management module integrated into an enterprise-grade ERP platform using Clean Architecture and CQRS pattern.",
      highlights: [
        "Architected end-to-end HR modules: Recruitment, Candidate Selection, Hiring Workflows, Training Plans, and Employee Skill Assessments.",
        "Engineered backend microservices with ASP.NET Core & .NET 8, implementing CQRS pattern with MediatR for clean separation of commands and queries.",
        "Integrated Ocelot API Gateway and Redis distributed caching, boosting query response times by 40%.",
        "Built responsive enterprise UI frontend with Angular, RxJS, and Tailwind CSS.",
        "Created interactive Business Intelligence HR Analytics dashboards for automated reporting."
      ],
      tech: [".NET 8", "ASP.NET Core", "Angular", "EF Core", "SQL Server", "Redis", "Ocelot Gateway", "CQRS", "Clean Architecture", "Azure DevOps"]
    }, 
    {
      company: "SoftSys Internationale",
      role: "Mobile Developer",
      type: "Part-time",
      period: "Aout 2025 – Jan 2026",
      location: "Tunisia",
      summary: "Developed a cross-platform mobile app for real-time tracking and management of hospitalized patient records.",
      highlights: [
        "Engineered clean reactive UI using Flutter & Dart for healthcare practitioners.",
        "Connected mobile client with Python Flask RESTful backend APIs with JWT authentication.",
        "Implemented offline-first sync capability for reliable ward record updates."
      ],
      tech: ["Flutter", "Dart", "Flask", "Python", "REST API", "JSON"]
    },
    {
      company: "SoftSys Internationale",
      role: "AI Developer Intern",
      type: "Internship",
      period: "Jun 2025 – Jul 2025",
      location: "Tunisia",
      summary: "Created 'StériBot', an intelligent conversational RAG AI assistant specifically designed for an ERP medical sterilization module.",
      highlights: [
        "Built a Retrieval-Augmented Generation (RAG) pipeline leveraging LlamaIndex and VectorStoreIndex to index complex ERP documentation.",
        "Integrated FastAPI backend with Google Speech-to-Text and Text-to-Speech engines for seamless voice interface.",
        "Reduced query resolution time for medical personnel by 65% through context-aware document fetching."
      ],
      tech: ["Python", "LlamaIndex", "RAG", "VectorStoreIndex", "FastAPI", "Google Speech AI", "NLP"]
    }
  ],
  projects: [
    {
      id: "hr-erp",
      title: "Enterprise HR ERP Module",
      category: "Full-Stack",
      tagline: ".NET 8 + Angular Enterprise HR System built with Clean Architecture & CQRS",
      description: "A comprehensive enterprise Human Resources platform supporting recruitment pipelines, skill evaluations, leaves, training management, and business intelligence analytics.",
      features: [
        "Clean Architecture modular structure with CQRS pattern",
        "Redis-backed caching layer and API Gateway routing",
        "Interactive BI dashboards with real-time employee KPIs",
        "Role-based access control (RBAC) and audit logging"
      ],
      tech: [".NET 8", "ASP.NET Core", "Angular", "SQL Server", "Redis", "CQRS", "Clean Architecture"],
      github: "https://github.com/saharkharrat",
      demo: "#",
      highlightBadge: "ERP Architecture"
    },
    {
      id: "steribot",
      title: "StériBot – Medical ERP AI Assistant",
      category: "AI & GenAI",
      tagline: "Voice-enabled RAG Chatbot powered by LlamaIndex and FastAPI",
      description: "An AI-powered document retrieval assistant that allows clinical staff to query medical sterilization protocols and ERP documentation in natural language.",
      features: [
        "Context-aware Vector Indexing with LlamaIndex",
        "FastAPI REST endpoints with sub-second retrieval latency",
        "Bi-directional Speech-to-Text and Text-to-Speech engine",
        "Domain-specific guardrails for accurate medical context"
      ],
      tech: ["Python", "LlamaIndex", "RAG", "FastAPI", "VectorDB", "Speech AI"],
      github: "https://github.com/saharkharrat",
      demo: "#",
      highlightBadge: "RAG & LLM"
    },

    {
      id: "hospital-app",
      title: "Hospitalized Patient Management",
      category: "Mobile",
      tagline: "Flutter & Flask mobile application for ward health staff",
      description: "Healthcare mobile application streamlining bedside patient file reviews, medication schedules, and clinical staff shift notes.",
      features: [
        "Real-time patient status synchronized with Flask backend",
        "Secure health record access with JWT bearer tokens",
        "Intuitive touch-optimized Flutter UI for mobile tablets"
      ],
      tech: ["Flutter", "Dart", "Flask", "Python", "REST API"],
      github: "https://github.com/saharkharrat",
      demo: "#",
      highlightBadge: "Healthcare Mobile"
    }
  ],
  certifications: [
    {
      title: "OCI Generative AI Professional",
      issuer: "Oracle Cloud Infrastructure",
      date: "2024",
      skills: ["Large Language Models", "Fine-Tuning", "RAG Pipelines", "OCI AI Services"],
      badge: "AI Certified"
    },
    {
      title: "Scrum Fundamentals Certified (SFC)",
      issuer: "SCRUMstudy",
      date: "2023",
      skills: ["Agile Practices", "Sprint Planning", "Scrum Master", "Iterative Delivery"],
      badge: "Agile Certified"
    }
  ]
};

const FR_TRANSLATIONS: Record<string, string> = {"Home":"Accueil","About":"À propos","AI Architecture":"Architecture IA","Skills":"Compétences","Experience":"Expérience","Projects":"Projets","Contact":"Contact","Resume":"CV","View Resume":"Voir le CV","{tx('Credentials')}":"Certifications","Certifications & Accolades":"Certifications & distinctions","{tx('Get In Touch')}":"Me contacter","{tx("Let's Discuss Opportunities")}":"Discutons des opportunités","{tx('Contact Details')}":"Coordonnées","{tx('Email Address')}":"Adresse e-mail","{tx('LinkedIn Profile')}":"Profil LinkedIn","{tx('GitHub Profile')}":"Profil GitHub","{tx('Send Message')}":"Envoyer un message","{tx('Your Name')}":"Votre nom","Subject":"Objet","Message":"Message","Send Inquiry":"Envoyer","Close":"Fermer","View Details":"Voir les détails","GitHub Repo":"Dépôt GitHub","Key Features:":"Fonctionnalités clés :","Technologies Used:":"Technologies utilisées :","All":"Tous","Frontend":"Frontend","Backend":"Backend","AI & GenAI":"IA & GenAI","Databases":"Bases de données","DevOps & Tools":"DevOps & outils","Full-Stack":"Full-Stack","Mobile":"Mobile","Analytics":"Analytique","Education":"Formation","{tx('Key Experience')}":"Expérience principale","{tx('Core Tech Stack')}":"Technologies principales","{tx('Download PDF')}":"Télécharger le PDF","{tx('Resume Preview')}":"Aperçu du CV","Recruiter Friendly Guarantee":"Profil adapté aux recruteurs","Ready for instant export or PDF save":"Prêt à être exporté ou enregistré en PDF","Tunisia":"Tunisie","Sfax, Tunisia":"Sfax, Tunisie","Graduated with High Honors":"Diplômée avec mention très bien","Software Engineer | Full-Stack Developer | AI & GenAI Enthusiast":"Ingénieure Logiciel | Développeuse Full-Stack | Passionnée d’IA & GenAI","Recently graduated Software Engineer from ISIMS Sfax with hands-on expertise in .NET, Angular, Spring Boot, RAG Systems, and Enterprise Architecture.":"Ingénieure en Génie Logiciel récemment diplômée de l’ISIMS de Sfax, avec une expérience pratique en .NET, Angular, Spring Boot, systèmes RAG et architecture d’entreprise.","Tunisia / Available for Remote & Onsite Opportunities":"Tunisie / Disponible pour des opportunités à distance et sur site","National Engineering Degree in Software Engineering":"Diplôme National d’Ingénieur en Génie Logiciel","Software Engineering Intern / Final-Year Project":"Stagiaire Ingénieure Logiciel / Projet de fin d’études","End-of-Studies Internship":"Stage de fin d’études","Mobile Developer":"Développeuse Mobile","Part-time":"Temps partiel","AI Developer Intern":"Stagiaire Développeuse IA","Internship":"Stage","Enterprise HR ERP Module":"Module ERP de gestion des ressources humaines","StériBot – Medical ERP AI Assistant":"StériBot – Assistant IA pour ERP médical","Hospitalized Patient Management":"Gestion des patients hospitalisés","A comprehensive enterprise Human Resources platform supporting recruitment pipelines, skill evaluations, leaves, training management, and business intelligence analytics.":"Plateforme RH d’entreprise couvrant le recrutement, l’évaluation des compétences, les congés, la formation et les tableaux de bord BI.","Voice-enabled RAG Chatbot powered by LlamaIndex and FastAPI":"Chatbot RAG vocal basé sur LlamaIndex et FastAPI","Flutter & Flask mobile application for ward health staff":"Application mobile Flutter & Flask pour le personnel de santé","Healthcare Mobile":"Application mobile médicale","ERP Architecture":"Architecture ERP","RAG & LLM":"RAG & LLM","Currently open for Junior Software Engineer, Full-Stack Developer, or AI/GenAI roles. Send me a message or connect directly!":"Actuellement ouverte aux opportunités de Software Engineer Junior, Full-Stack ou IA/GenAI. Envoyez-moi un message ou contactez-moi directement !","Verified industry certifications in Generative AI and Agile Scrum frameworks.":"Certifications professionnelles en IA générative et méthodologies Agile Scrum.","Available for immediate full-time hire, technical interviews, and engineering discussions.":"Disponible pour un poste à temps plein, des entretiens techniques et des échanges autour de l’ingénierie logicielle."};
const tx = (value: string) => language === 'fr' ? (FR_TRANSLATIONS[value] || value) : value;

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  // StériBot AI Simulator State
  const [ragQuery, setRagQuery] = useState('');
  const [ragChatHistory, setRagChatHistory] = useState([
    { sender: 'bot', text: 'Hello! I am StériBot, Sahar\'s AI Assistant simulator. Ask me anything about her experience or try a sample ERP prompt below!' }
  ]);
  const [isRagThinking, setIsRagThinking] = useState(false);

  // Terminal Simulator State
  const [termInput, setTermInput] = useState('');
  const [termLogs, setTermLogs] = useState([
    "Sahar OS [Version 1.0.2026]",
    "Type 'help' or click buttons to explore commands."
  ]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['hero', 'about', 'ai-spotlight', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // RAG Bot Interaction
  const handleRagSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!ragQuery.trim()) return;

    const userMsg = ragQuery.trim();
    setRagChatHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setRagQuery('');
    setIsRagThinking(true);

    setTimeout(() => {
      let botResponse = "I have queried Sahar's vector knowledge base. ";
      const q = userMsg.toLowerCase();

      if (q.includes('skills') || q.includes('tech') || q.includes('stack')) {
        botResponse += "Sahar is fluent in .NET 8, Angular, React, Python, Java, LlamaIndex, PostgreSQL, and Clean Architecture!";
      } else if (q.includes('experience') || q.includes('tsi') || q.includes('work')) {
        botResponse += "Sahar built an enterprise HR ERP module at TSI (.NET 8 + Angular) and AI RAG systems at SoftSys Internationale!";
      } else if (q.includes('education') || q.includes('degree') || q.includes('isims')) {
        botResponse += "She holds a Software Engineering Diploma from ISIMS - Université de Sfax, specializing in Full-Stack & Intelligent Systems.";
      } else if (q.includes('contact') || q.includes('hire') || q.includes('email')) {
        botResponse += "You can reach Sahar directly at sahar.kharrat.dev@gmail.com or via LinkedIn!";
      } else {
        botResponse += "Based on vector search results: Sahar Kharrat is a versatile Full-Stack & GenAI Engineer ready to bring enterprise-grade value to your tech team.";
      }

      setRagChatHistory(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsRagThinking(false);
    }, 750);
  };

  // Terminal Handler
  const handleTermCommand = (cmd: string) => {
    const input = cmd || termInput;
    if (!input.trim()) return;

    let output = "";
    const cleanCmd = input.trim().toLowerCase();

    switch (cleanCmd) {
      case 'help':
        output = "Available commands: 'skills', 'experience', 'projects', 'contact', 'clear', 'about'";
        break;
      case 'skills':
        output = "Frontend: Angular, React, TS | Backend: .NET 8, Spring Boot, FastAPI | AI: LlamaIndex, RAG";
        break;
      case 'experience':
        output = "1. TSI (Software Engineer Intern - ERP .NET/Angular)\n2. SoftSys (AI Intern - StériBot RAG)";
        break;
      case 'projects':
        output = "Projects: HR Management ERP, StériBot RAG, B2B Supplier Portal, Patient Care App";
        break;
      case 'about':
        output = "Sahar Kharrat | Software Engineer Graduate from ISIMS Sfax | Full-Stack & GenAI Builder";
        break;
      case 'contact':
        output = "Email: sahar.kharrat.dev@gmail.com | LinkedIn: linkedin.com/in/saharkharrat";
        break;
      case 'clear':
        setTermLogs([]);
        setTermInput('');
        return;
      default:
        output = `Command not recognized: '${input}'. Type 'help' for options.`;
    }

    setTermLogs(prev => [...prev, `> ${input}`, output]);
    setTermInput('');
  };

  // Filtered lists
  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === 'All') return PORTFOLIO_DATA.projects;
    return PORTFOLIO_DATA.projects.filter(p => p.category === activeProjectFilter);
  }, [activeProjectFilter]);

  const filteredSkills = useMemo(() => {
    if (activeSkillCategory === 'All') return PORTFOLIO_DATA.skills;
    return PORTFOLIO_DATA.skills.filter(s => s.category === activeSkillCategory);
  }, [activeSkillCategory]);

  const skillCategories = ['All', 'Frontend', 'Backend', 'AI & GenAI', 'Databases', 'Architecture', 'DevOps & Tools'];
  const projectCategories = ['All', 'Full-Stack', 'AI & GenAI', 'Mobile', 'Analytics'];

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-slate-950/80 border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white font-mono text-sm shadow-md shadow-violet-500/20">
              SK
            </span>
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Sahar Kharrat
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-medium">
            {[
              { id: 'hero', label: tx('Home') },
              { id: 'about', label: tx('About') },
              { id: 'ai-spotlight', label: tx('AI Architecture') },
              { id: 'skills', label: tx('Skills') },
              { id: 'experience', label: tx('Experience') },
              { id: 'projects', label: tx('Projects') },
              { id: 'contact', label: tx('Contact') },
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'bg-slate-800/80 text-cyan-400 font-semibold shadow-inner'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-1 p-1 rounded-lg border border-slate-800 bg-slate-900">
              <button onClick={() => setLanguage('en')} className={`px-2 py-1 rounded text-[10px] font-semibold ${language === 'en' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
              <button onClick={() => setLanguage('fr')} className={`px-2 py-1 rounded text-[10px] font-semibold ${language === 'fr' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}>FR</button>
            </div>
            <button
              onClick={() => setShowResumeModal(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-md shadow-violet-500/20 transition-all hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{tx('Resume')}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b px-4 pt-2 pb-4 space-y-1 bg-slate-950 border-slate-800">
            {[
              { id: 'hero', label: tx('Home') },
              { id: 'about', label: tx('About') },
              { id: 'ai-spotlight', label: tx('AI Architecture') },
              { id: 'skills', label: tx('Skills') },
              { id: 'experience', label: tx('Experience') },
              { id: 'projects', label: tx('Projects') },
              { id: 'contact', label: tx('Contact') },
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setIsMobileMenuOpen(false); setShowResumeModal(true); }}
              className="w-full mt-2 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-violet-600 text-white font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>{tx('View Resume')}</span>
            </button>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden">
          {/* Ambient Background Blur Elements */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Grid lines background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-30" />

          <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md text-violet-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Junior Software Engineer / Full-Stack Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">Sahar Kharrat</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Software Engineer &amp; Full-Stack Developer
              </p>
              <p className="text-sm sm:text-base text-slate-400/90 max-w-2xl mx-auto font-light leading-relaxed">
                Specialized in building high-performance enterprise web applications with <span className="text-violet-400 font-medium">.NET 8</span> &amp; <span className="text-cyan-400 font-medium">Angular / React</span>, alongside intelligent <span className="text-indigo-400 font-medium">GenAI / RAG systems</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/25 transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-700 font-semibold text-sm transition-all hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3 rounded-xl border border-violet-500/30 bg-violet-950/30 text-violet-300 hover:bg-violet-900/40 font-semibold text-sm transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Micro Stats */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center space-x-4">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  aria-label="{tx('GitHub Profile')}"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:text-violet-400 hover:border-violet-500/40 transition-colors"
                  aria-label="{tx('LinkedIn Profile')}"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:block h-4 w-px bg-slate-800" />

              <div className="flex items-center gap-4 text-slate-400 font-mono text-xs">
                <span className="flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-violet-400" /> Software Engineering Graduate
                </span>
                <span className="flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-cyan-400" /> GenAI / RAG Specialist
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">About Me</h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Software Engineering Mindset Meets AI Innovation
              </p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Combining rigorous computer science fundamentals with practical experience in modern web frameworks and enterprise platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Bio & Core Focus */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 sm:p-8 rounded-2xl border bg-slate-950/80 border-slate-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    <span>Professional Background</span>
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                    <p>
                      I am a recently graduated Software Engineer from <strong className="text-slate-100 font-semibold">ISIMS (Institut Supérieur d'Informatique et de Multimédia de Sfax)</strong>, Université de Sfax. My passion lies at the intersection of robust backend engineering, reactive frontends, and practical Generative AI applications.
                    </p>
                    <p>
                      During my engineering study and internships, I developed enterprise HR ERP modules using <strong className="text-violet-400 font-semibold">.NET 8, Clean Architecture, CQRS, and Angular</strong>, as well as AI-powered voice &amp; text document retrieval systems using <strong className="text-cyan-400 font-semibold">LlamaIndex, RAG, and FastAPI</strong>.
                    </p>
                    <p>
                      I thrive in agile environments where writing maintainable code, implementing domain-driven design, and optimizing user experiences are prioritized.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <div className="text-2xl font-extrabold text-violet-400">.NET 8</div>
                      <div className="text-xs text-slate-400">Clean Architecture</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-cyan-400">Angular</div>
                      <div className="text-xs text-slate-400">&amp; React Frameworks</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-indigo-400">RAG</div>
                      <div className="text-xs text-slate-400">LlamaIndex &amp; LLMs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-emerald-400">SQL</div>
                      <div className="text-xs text-slate-400">&amp; Redis Caching</div>
                    </div>
                  </div>
                </div>

                {/* Engineering Philosophy Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border bg-slate-950/60 border-slate-800">
                    <Layers className="w-6 h-6 text-violet-400 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Clean Architecture &amp; Scalability</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Adhering to SOLID principles, CQRS patterns, and loose coupling for enterprise maintainability.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border bg-slate-950/60 border-slate-800">
                    <Brain className="w-6 h-6 text-cyan-400 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Practical AI Integration</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Transforming raw documentation into intelligent queryable RAG context for business applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Education & Core Interests */}
              <div className="lg:col-span-5 space-y-6">
                {/* Education Card */}
                <div className="p-6 rounded-2xl border bg-slate-950/80 border-slate-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Education</h3>
                      <p className="text-xs text-slate-400">{PORTFOLIO_DATA.personal.education.period}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-200">
                      {tx(PORTFOLIO_DATA.personal.education.degree)}
                    </h4>
                    <p className="text-xs text-violet-400 font-medium">
                      {PORTFOLIO_DATA.personal.education.institution}
                    </p>
                    <p className="text-xs text-slate-400">
                      {PORTFOLIO_DATA.personal.education.university}
                    </p>
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {tx(PORTFOLIO_DATA.personal.education.status)}
                    </span>
                  </div>
                </div>

                {/* Core Focus Tags */}
                <div className="p-6 rounded-2xl border bg-slate-950/80 border-slate-800">
                  <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Primary Areas of Interest</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full-Stack Web Dev",
                      "Enterprise ERP Systems",
                      "Generative AI & RAG",
                      "Clean Architecture",
                      "RESTful APIs",
                      "Business Intelligence",
                      "Microservices",
                      "Workflow Automation"
                    ].map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium border bg-slate-900 border-slate-800 text-slate-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Spotlight Section */}
        <section id="ai-spotlight" className="py-20 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <Brain className="w-3.5 h-3.5" />
                <span>Generative AI &amp; Vector Intelligence</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                StériBot RAG Architecture &amp; AI Interactive Sandbox
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Explore how Sahar builds Retrieval-Augmented Generation (RAG) systems with LlamaIndex, Vector Databases, and FastAPI.
              </p>
            </div>

            {/* Architecture Node Flow Representation */}
            <div className="p-6 rounded-2xl border bg-slate-900/60 border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
                System Workflow: Enterprise Document Knowledge Retrieval
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {[
                  { step: "01", title: "Document Ingestion", desc: "Medical ERP manuals, PDF docs, and sterilization guidelines", icon: FileText, color: "text-violet-400" },
                  { step: "02", title: "Vector Indexing", desc: "LlamaIndex & VectorStoreIndex embedding generation", icon: Database, color: "text-cyan-400" },
                  { step: "03", title: "Context Retrieval", desc: "FastAPI semantic query search & similarity matching", icon: Search, color: "text-indigo-400" },
                  { step: "04", title: "Synthesized Output", desc: "Voice/Text output via Google Speech AI & LLM synthesis", icon: Bot, color: "text-emerald-400" },
                ].map((node, i) => (
                  <div key={i} className="p-5 rounded-xl border bg-slate-950 border-slate-800 relative transition-all hover:border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-slate-400">{node.step}</span>
                      <node.icon className={`w-5 h-5 ${node.color}`} />
                    </div>
                    <h4 className="font-bold text-sm mb-1">{node.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Chatbot Demo Component */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex-1 flex flex-col rounded-2xl border overflow-hidden bg-slate-950 border-slate-800">
                  {/* Chatbot Header */}
                  <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-slate-200">StériBot RAG Assistant Demo</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          LlamaIndex Vector Store Online
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      FastAPI + RAG
                    </span>
                  </div>

                  {/* Chat History */}
                  <div className="p-4 flex-1 min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 font-sans text-xs">
                    {ragChatHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] p-3 rounded-xl ${
                            msg.sender === 'user'
                              ? 'bg-violet-600 text-white rounded-br-none'
                              : 'bg-slate-900 border border-slate-800 text-slate-300 rounded-bl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isRagThinking && (
                      <div className="flex justify-start">
                        <div className="p-3 rounded-xl text-slate-400 flex items-center gap-2 text-xs bg-slate-900">
                          <Sparkles className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                          <span>Searching vector store...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sample Query Prompts */}
                  <div className="p-2 bg-slate-900/50 border-t border-slate-800 flex flex-wrap gap-1.5">
                    {[
                      "What are Sahar's core skills?",
                      "Tell me about the TSI ERP project",
                      "How can I contact Sahar?"
                    ].map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setRagQuery(prompt); }}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>

                  {/* Query Input */}
                  <form onSubmit={handleRagSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
                    <input
                      type="text"
                      value={ragQuery}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRagQuery(e.target.value)}
                      placeholder="Ask StériBot about Sahar's engineering experience..."
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                    <button
                      type="submit"
                      disabled={isRagThinking}
                      className="p-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Terminal Simulator */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex-1 flex flex-col rounded-2xl border font-mono text-xs overflow-hidden bg-slate-950 border-slate-800 text-slate-200">
                  <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-[11px] text-slate-400 ml-2">sahar-kharrat-cli</span>
                    </div>
                    <Terminal className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="p-4 flex-1 min-h-[200px] space-y-2 overflow-y-auto text-slate-300">
                    {termLogs.map((log, i) => (
                      <div key={i} className="whitespace-pre-wrap">{log}</div>
                    ))}
                  </div>

                  {/* Terminal Quick Command Buttons */}
                  <div className="p-2 bg-slate-900/60 border-t border-slate-800 flex flex-wrap gap-1">
                    {['help', 'skills', 'experience', 'projects', 'contact', 'clear'].map((cmd: string) => (
                      <button
                        key={cmd}
                        onClick={() => handleTermCommand(cmd)}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); handleTermCommand(termInput); }} className="p-3 border-t border-slate-800 flex items-center gap-2">
                    <span className="text-violet-400 font-bold">&gt;</span>
                    <input
                      type="text"
                      value={termInput}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTermInput(e.target.value)}
                      placeholder="Type command ('skills', 'projects'...)"
                      className="flex-1 bg-transparent border-none text-xs text-slate-100 placeholder-slate-600 focus:outline-none"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Technical Competencies</h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Engineered Skill Matrix
              </p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Categorized overview of languages, web frameworks, database engines, AI technologies, and architecture standards.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeSkillCategory === cat
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills Badge Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border bg-slate-950 border-slate-800 hover:border-slate-700 transition-all duration-200 hover:scale-[1.02] flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="font-semibold text-sm text-slate-200">{skill.name}</div>
                    <div className="text-[11px] text-slate-400">{skill.category}</div>
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      skill.level === 'Advanced' || skill.level === 'Expert'
                        ? 'bg-violet-500/10 text-violet-400 border-violet-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Professional Journey</h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Engineering &amp; AI Internships
              </p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Real-world project delivery in ERP platforms, Generative AI models, and full-stack software development.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative border-l-2 border-violet-500/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-violet-500 group-hover:scale-125 transition-transform flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl border bg-slate-950/80 border-slate-800 hover:border-slate-700 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">{tx(exp.role)}</h3>
                        <p className="text-xs font-semibold text-violet-400">{exp.company}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                          {exp.period}
                        </span>
                        <p className="text-[11px] text-slate-400 mt-0.5">{tx(exp.type)} • {tx(exp.location)}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">{tx(exp.summary)}</p>

                    <ul className="space-y-2 mb-4 text-xs text-slate-400">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Portfolio Work</h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Engineering Projects
              </p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Explore key applications built across .NET 8, Angular, React, FastAPI, Flutter, and Generative AI pipelines.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeProjectFilter === cat
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col rounded-2xl border bg-slate-950 border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Card Visual Header Placeholder */}
                  <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/40 p-5 flex flex-col justify-between relative border-b border-slate-800/80">
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        {project.highlightBadge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">{tx(project.category)}</span>
                    </div>

                    <div className="z-10 space-y-1">
                      <h3 className="text-lg font-bold text-slate-100">{tx(project.title)}</h3>
                      <p className="text-xs text-slate-400 line-clamp-1">{tx(project.tagline)}</p>
                    </div>

                    {/* Background Subtle Gradient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-500/10 pointer-events-none" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {tx(project.description)}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t: string, i: number) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                        >
                          <span>{tx('View Details')}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">{tx('Credentials')}</h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {tx('Certifications & Accolades')}
              </p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Verified industry certifications in Generative AI and Agile Scrum frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border bg-slate-950 border-slate-800 transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {tx(cert.badge)}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-100 mb-1">{tx(cert.title)}</h3>
                  <p className="text-xs text-violet-400 font-medium mb-3">{tx(cert.issuer)} • {cert.date}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                    {cert.skills.map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">{tx('Get In Touch')}</h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {tx("Let's Discuss Opportunities")}
              </p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                Currently open for Junior Software Engineer, Full-Stack Developer, or AI/GenAI roles. Send me a message or connect directly!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Contact Information & Channels */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl border bg-slate-950 border-slate-800 space-y-6">
                  <h3 className="font-bold text-base text-slate-100">{tx('Contact Details')}</h3>

                  <div className="space-y-4 text-xs">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-violet-500/40 transition-colors"
                    >
                      <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-400">{tx('Email Address')}</div>
                        <div className="font-medium text-slate-200">{PORTFOLIO_DATA.personal.email}</div>
                      </div>
                    </a>

                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-400">{tx('LinkedIn Profile')}</div>
                        <div className="font-medium text-slate-200">linkedin.com/in/saharkharrat</div>
                      </div>
                    </a>

                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-colors"
                    >
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-400">{tx('GitHub Profile')}</div>
                        <div className="font-medium text-slate-200">github.com/saharkharrat</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border bg-slate-950 border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{tx('Recruiter Friendly Guarantee')}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Available for immediate full-time hire, technical interviews, and engineering discussions.
                  </p>
                </div>
              </div>

              {/* Functional Contact Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    alert("Thank you for reaching out! Sahar will get back to you shortly.");
                  }}
                  className="p-6 sm:p-8 rounded-2xl border bg-slate-950 border-slate-800 space-y-4"
                >
                  <h3 className="font-bold text-base text-slate-100 mb-2">{tx('Send Message')}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-400">{tx('Your Name')}</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2 rounded-xl text-xs border bg-slate-900 border-slate-800 text-slate-200 focus:outline-none focus:border-violet-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-400">{tx('Email Address')}</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2 rounded-xl text-xs border bg-slate-900 border-slate-800 text-slate-200 focus:outline-none focus:border-violet-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-400">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Software Engineer Opportunity / Project Inquiry"
                      className="w-full px-3.5 py-2 rounded-xl text-xs border bg-slate-900 border-slate-800 text-slate-200 focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-400">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Sahar, we reviewed your portfolio and would love to discuss an open software developer role..."
                      className="w-full px-3.5 py-2 rounded-xl text-xs border bg-slate-900 border-slate-800 text-slate-200 focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-xs shadow-md shadow-violet-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{tx('Send Inquiry')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-slate-950 border-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Sahar Kharrat. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#hero" className="hover:text-violet-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Scroll to top floating button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-600/30 hover:bg-violet-500 transition-all z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="max-w-xl w-full rounded-2xl border p-6 space-y-4 max-h-[90vh] overflow-y-auto bg-slate-950 border-slate-800 text-slate-100">
            <div className="flex items-center justify-between border-b pb-3 border-slate-800">
              <div>
                <h3 className="text-lg font-bold">{selectedProject.title}</h3>
                <p className="text-xs text-violet-400">{selectedProject.category}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.description}</p>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-200">Key Features:</h4>
              <ul className="space-y-1 text-xs text-slate-400">
                {selectedProject.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-200">Technologies Used:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t: string, i: number) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700"
              >
                Close
              </button>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-medium bg-violet-600 text-white hover:bg-violet-500 flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>{tx('GitHub Repo')}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="max-w-2xl w-full rounded-2xl border p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto bg-slate-950 border-slate-800 text-slate-100">
            <div className="flex items-center justify-between border-b pb-4 border-slate-800">
              <div>
                <h3 className="text-xl font-bold">{tx('Resume Preview')}</h3>
                <p className="text-xs text-slate-400">Sahar Kharrat — Software Engineer</p>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300 font-sans border p-4 rounded-xl border-slate-800 bg-slate-900/40">
              <div className="border-b pb-3 border-slate-800">
                <h2 className="text-base font-bold text-slate-100">SAHAR KHARRAT</h2>
                <p className="text-violet-400 font-medium">Software Engineer | Full-Stack Developer | AI &amp; GenAI Enthusiast</p>
                <p className="text-[11px] text-slate-400 mt-1">sahar.kharrat.dev@gmail.com | Sfax, Tunisia | ISIMS Graduate</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[10px] text-violet-400 mb-1">Education</h4>
                <p className="font-semibold text-slate-200">National Engineering Diploma in Computer Science</p>
                <p className="text-slate-400">ISIMS – Institut Supérieur d'Informatique et de Multimédia de Sfax (2021 – 2024)</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[10px] text-violet-400 mb-1">{tx('Key Experience')}</h4>
                <p className="font-semibold text-slate-200">TSI — End-of-Studies Software Engineer Intern</p>
                <p className="text-slate-400">Developed HR ERP Module with .NET 8, CQRS, Clean Architecture &amp; Angular.</p>
                <p className="font-semibold text-slate-200 mt-2">SoftSys Internationale — AI Developer Intern</p>
                <p className="text-slate-400">Created StériBot Voice/Text RAG Assistant with Python, LlamaIndex, and FastAPI.</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[10px] text-violet-400 mb-1">{tx('Core Tech Stack')}</h4>
                <p className="text-slate-300">.NET 8, Angular, React, Spring Boot, Python, LlamaIndex, RAG, SQL Server, Redis, Docker, Clean Architecture</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-slate-400">Ready for instant export or PDF save</span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Close
                </button>
                  <a
                    href="/CV-Sahar-Kharrat.pdf"
                    download="CV-Sahar-Kharrat.pdf"
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{tx('Download PDF')}</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

export default function DeveloperPage() {
  const skills = [
    "Python", "Java", "JavaFX", "C", "C++", "SQL", "Postgres SQL", 
    "Networking", "Basic Cybersecurity", "Git", "GitHub", "Machine Learning", 
    "Basic RL", "Vercel", "Supabase", "Firebase", "Database Administration", 
    "Docker Basics"
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white pb-20">
      <div className="container mx-auto px-4 pt-12 md:pt-24 max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center text-white/60 hover:text-red-500 transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Profile Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
              <Image 
                src="/asset/profile.jpeg" 
                alt="Hemapriyan R K" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              HEMAPRIYAN R K
            </h1>
            <p className="text-xl md:text-2xl font-medium text-red-500 mb-2">
              Student at Vellore Institute of Technology
            </p>
            <p className="text-lg text-white/70 mb-8">
              Computer Science and Engineering (Data Science)
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="https://www.linkedin.com/in/hemapriyan-rk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/hemapriyan-rk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
              >
                <Github size={16} />
                GitHub
              </a>
              <a 
                href="mailto:hemapriyankuppusamy07@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
              >
                <Mail size={16} />
                Email
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-wider text-white/90 border-b border-white/10 pb-4">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-zinc-900 border border-white/5 rounded-md text-sm text-white/80 hover:text-red-400 hover:border-red-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

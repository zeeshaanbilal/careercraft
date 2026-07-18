"use client";

import React, { useState, useEffect } from "react";
import { Download, Plus, Trash2, LayoutTemplate } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export default function ResumeBuilder() {
  const [template, setTemplate] = useState<"classic" | "modern" | "executive" | "creative" | "dark">("classic");

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const t = params.get("template");
    if (t === "classic" || t === "modern" || t === "executive" || t === "creative" || t === "dark") {
      setTemplate(t as any);
    }
  }, []);

  const [personalInfo, setPersonalInfo] = useState({
    name: "Alex Carter",
    email: "alex.carter@example.com",
    phone: "(555) 123-4567",
    linkedin: "linkedin.com/in/alexcarter",
    location: "San Francisco, CA"
  });

  const [summary, setSummary] = useState(
    "Results-driven professional with over 5 years of experience in leading cross-functional teams and delivering high-impact projects. Adept at leveraging modern technologies to solve complex problems and drive business growth."
  );

  const [experience, setExperience] = useState<Experience[]>([
    {
      id: "1",
      title: "Senior Product Manager",
      company: "Tech Innovations Inc.",
      dates: "Jan 2021 - Present",
      description: "Led the development of a flagship SaaS product, resulting in a 40% increase in user retention. Managed a team of 12 engineers and designers through agile sprints."
    },
    {
      id: "2",
      title: "Software Engineer",
      company: "Creative Solutions LLC",
      dates: "Mar 2018 - Dec 2020",
      description: "Developed and maintained highly scalable web applications using React and Node.js. Improved database query efficiency by 25%."
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      degree: "B.S. Computer Science",
      institution: "University of Technology",
      year: "2018"
    }
  ]);

  const [skills, setSkills] = useState("JavaScript, TypeScript, React, Next.js, Node.js, Agile Methodology, Product Strategy");

  const handlePrint = () => {
    window.print();
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      { id: Date.now().toString(), title: "", company: "", dates: "", description: "" }
    ]);
  };

  const handleUpdateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperience(experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const handleRemoveExperience = (id: string) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { id: Date.now().toString(), degree: "", institution: "", year: "" }
    ]);
  };

  const handleUpdateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));
  };

  const handleRemoveEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  // --- RENDERING TEMPLATES --- //

  const renderClassicTemplate = () => (
    <div className="flex flex-col h-full">
      <header className="border-b-2 border-slate-800 pb-8 mb-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-slate-900 tracking-tight uppercase mb-3">
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] text-slate-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>
      <div className="flex-1 text-slate-800">
        {summary && (
          <div className="mb-8">
            <h2 className="text-[15px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Professional Summary</h2>
            <p className="text-[14px] leading-relaxed text-slate-700">{summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-[15px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-5">Experience</h2>
            <div className="space-y-6">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[16px] font-bold text-slate-900">{exp.title}</h3>
                    <span className="text-[13px] text-slate-500 font-medium whitespace-nowrap ml-4">{exp.dates}</span>
                  </div>
                  <div className="text-[15px] text-slate-700 font-medium italic mb-2">{exp.company}</div>
                  <p className="text-[14px] text-slate-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-[15px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-5">Education</h2>
            <div className="space-y-5">
              {education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[16px] font-bold text-slate-900">{edu.degree}</h3>
                    <span className="text-[13px] text-slate-500 font-medium whitespace-nowrap ml-4">{edu.year}</span>
                  </div>
                  <div className="text-[15px] text-slate-700">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {skills && (
          <div>
            <h2 className="text-[15px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Skills</h2>
            <p className="text-[14px] leading-relaxed text-slate-700">{skills}</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderModernTemplate = () => (
    <div className="flex min-h-[297mm] w-full">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-slate-900 text-slate-100 p-8 flex flex-col min-h-full">
        <h1 className="text-4xl font-display font-bold text-white tracking-tight leading-tight mb-8">
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="space-y-5 text-[13px] text-slate-300 mb-12">
          {personalInfo.email && <div className="break-all">{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
          {personalInfo.linkedin && <div className="break-all">{personalInfo.linkedin}</div>}
        </div>
        {skills && (
          <div>
            <h2 className="text-[16px] font-bold text-white uppercase tracking-widest mb-5">Skills</h2>
            <ul className="list-disc pl-5 space-y-3 text-[14px] text-slate-300">
              {skills.split(',').map((skill, i) => (
                <li key={i}>{skill.trim()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Right Content */}
      <div className="w-2/3 p-12 bg-white flex flex-col min-h-full">
        {summary && (
          <div className="mb-10">
            <h2 className="text-[18px] font-bold text-slate-900 uppercase tracking-wider mb-5 border-b-2 border-primary w-16 pb-2">Profile</h2>
            <p className="text-[14px] leading-relaxed text-slate-700">{summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div className="mb-10">
            <h2 className="text-[18px] font-bold text-slate-900 uppercase tracking-wider mb-6 border-b-2 border-primary w-16 pb-2">Experience</h2>
            <div className="space-y-8">
              {experience.map(exp => (
                <div key={exp.id}>
                  <h3 className="text-[16px] font-bold text-slate-900">{exp.title}</h3>
                  <div className="flex justify-between items-baseline mb-3">
                    <div className="text-[14px] text-primary font-semibold">{exp.company}</div>
                    <span className="text-[12px] text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded">{exp.dates}</span>
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {education.length > 0 && (
          <div>
            <h2 className="text-[18px] font-bold text-slate-900 uppercase tracking-wider mb-6 border-b-2 border-primary w-16 pb-2">Education</h2>
            <div className="space-y-6">
              {education.map(edu => (
                <div key={edu.id}>
                  <h3 className="text-[16px] font-bold text-slate-900">{edu.degree}</h3>
                  <div className="flex justify-between items-baseline mt-2">
                    <div className="text-[14px] text-slate-600">{edu.institution}</div>
                    <span className="text-[12px] text-slate-500 font-medium">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderExecutiveTemplate = () => (
    <div className="flex flex-col h-full border-t-[16px] border-slate-900 pt-8">
      <header className="mb-10">
        <h1 className="text-5xl font-serif font-bold text-slate-900 tracking-tighter mb-4">
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-bold uppercase tracking-wider text-slate-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span>|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.linkedin && <span>|</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>
      <div className="flex-1 text-slate-800">
        {summary && (
          <div className="mb-8 border-l-4 border-slate-300 pl-5">
            <p className="text-[15px] leading-relaxed text-slate-700 italic">{summary}</p>
          </div>
        )}
        <div className="grid grid-cols-3 gap-10 mt-12">
          <div className="col-span-2">
            {experience.length > 0 && (
              <div className="mb-10">
                <h2 className="text-[16px] font-bold text-slate-900 uppercase tracking-widest border-b-2 border-slate-900 pb-3 mb-8">Experience</h2>
                <div className="space-y-8">
                  {experience.map(exp => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-end mb-1">
                        <h3 className="text-[16px] font-bold text-slate-900">{exp.company}</h3>
                        <span className="text-[13px] text-slate-500 font-medium whitespace-nowrap">{exp.dates}</span>
                      </div>
                      <div className="text-[15px] text-slate-600 font-semibold mb-3">{exp.title}</div>
                      <p className="text-[14px] text-slate-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1">
            {education.length > 0 && (
              <div className="mb-10">
                <h2 className="text-[16px] font-bold text-slate-900 uppercase tracking-widest border-b-2 border-slate-900 pb-3 mb-8">Education</h2>
                <div className="space-y-6">
                  {education.map(edu => (
                    <div key={edu.id}>
                      <h3 className="text-[14px] font-bold text-slate-900 leading-tight">{edu.degree}</h3>
                      <div className="text-[13px] text-slate-600 mt-1.5">{edu.institution}</div>
                      <div className="text-[12px] text-slate-500 mt-1">{edu.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {skills && (
              <div>
                <h2 className="text-[16px] font-bold text-slate-900 uppercase tracking-widest border-b-2 border-slate-900 pb-3 mb-8">Skills</h2>
                <div className="flex flex-wrap gap-2.5">
                  {skills.split(',').map((skill, i) => (
                    <span key={i} className="text-[12px] font-bold tracking-wider uppercase bg-slate-100 text-slate-700 px-3 py-1.5 rounded">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="flex flex-col h-full bg-white relative">
      <header className="bg-accent-purple text-white p-10 pb-12 mb-8">
        <h1 className="text-4xl font-display font-bold tracking-tight mb-3">
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-white/90">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span>|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.linkedin && <span>|</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>
      
      {/* Decorative avatar circle */}
      <div className="absolute top-8 right-10 w-20 h-20 bg-white/20 rounded-full border-4 border-white/40 flex items-center justify-center backdrop-blur-sm">
        <span className="text-2xl font-bold text-white shadow-sm">{personalInfo.name ? personalInfo.name.charAt(0).toUpperCase() : "A"}</span>
      </div>

      <div className="flex-1 px-10 text-slate-800">
        {summary && (
          <div className="mb-8">
            <h2 className="text-[16px] font-bold text-accent-purple uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-accent-purple inline-block"></span> Profile
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-700">{summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div className="mb-10">
            <h2 className="text-[16px] font-bold text-accent-purple uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-accent-purple inline-block"></span> Experience
            </h2>
            <div className="space-y-8 pl-8 border-l-2 border-slate-100">
              {experience.map(exp => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-accent-purple"></div>
                  <h3 className="text-[16px] font-bold text-slate-900 leading-tight">{exp.title}</h3>
                  <div className="flex justify-between items-center mb-3 mt-1">
                    <div className="text-[14px] text-slate-600 font-semibold">{exp.company}</div>
                    <span className="text-[12px] text-accent-purple font-bold bg-accent-purple/10 px-2 py-1 rounded-full">{exp.dates}</span>
                  </div>
                  <p className="text-[14px] text-slate-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-8">
          {education.length > 0 && (
            <div>
              <h2 className="text-[16px] font-bold text-accent-purple uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-accent-purple inline-block"></span> Education
              </h2>
              <div className="space-y-6">
                {education.map(edu => (
                  <div key={edu.id}>
                    <h3 className="text-[15px] font-bold text-slate-900">{edu.degree}</h3>
                    <div className="text-[14px] text-slate-600 mt-1">{edu.institution}</div>
                    <div className="text-[12px] text-slate-500 mt-1">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {skills && (
            <div>
              <h2 className="text-[16px] font-bold text-accent-purple uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-accent-purple inline-block"></span> Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.split(',').map((skill, i) => (
                  <span key={i} className="text-[12px] font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderDarkTemplate = () => (
    <div className="flex flex-col h-full bg-[#121212] text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-600 to-orange-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600 to-purple-500 rounded-full blur-[80px] opacity-10 pointer-events-none"></div>
      
      <header className="p-10 pb-8 border-b border-slate-800/60 relative z-10">
        <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-4">
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>
      
      <div className="flex-1 p-10 relative z-10">
        {summary && (
          <div className="mb-10">
            <h2 className="text-[14px] font-bold text-white uppercase tracking-widest mb-4">Profile</h2>
            <p className="text-[14px] leading-relaxed text-slate-400">{summary}</p>
          </div>
        )}
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            {experience.length > 0 && (
              <div className="mb-10">
                <h2 className="text-[14px] font-bold text-white uppercase tracking-widest mb-6">Experience</h2>
                <div className="space-y-8">
                  {experience.map(exp => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-[16px] font-bold text-white">{exp.title}</h3>
                        <span className="text-[12px] text-slate-500 font-medium whitespace-nowrap">{exp.dates}</span>
                      </div>
                      <div className="text-[14px] text-pink-400 font-medium mb-3">{exp.company}</div>
                      <p className="text-[14px] text-slate-400 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1">
            {education.length > 0 && (
              <div className="mb-10">
                <h2 className="text-[14px] font-bold text-white uppercase tracking-widest mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map(edu => (
                    <div key={edu.id}>
                      <h3 className="text-[14px] font-bold text-white leading-tight">{edu.degree}</h3>
                      <div className="text-[13px] text-slate-400 mt-1.5">{edu.institution}</div>
                      <div className="text-[12px] text-slate-500 mt-1">{edu.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {skills && (
              <div>
                <h2 className="text-[14px] font-bold text-white uppercase tracking-widest mb-6">Skills</h2>
                <div className="flex flex-col gap-2">
                  {skills.split(',').map((skill, i) => (
                    <span key={i} className="text-[13px] font-medium text-slate-300">
                      • {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background-color: white !important; }
          #no-print, header, nav, footer { display: none !important; }
          .print-layout { display: block !important; height: auto !important; overflow: visible !important; }
          #resume-preview {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 20mm !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          @page { size: A4; margin: 0; }
        }
      `}} />

      <div className="h-screen flex flex-col md:flex-row bg-slate-50 overflow-hidden print-layout">
        
        {/* Left Column: Form Controls (Hidden on Print) */}
        <div id="no-print" className="w-full md:w-[400px] lg:w-[450px] bg-white border-r border-slate-200 h-full overflow-y-auto custom-scrollbar flex flex-col z-10 shrink-0">
          <div className="p-6 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-slate-800">Resume Builder</h1>
                <p className="text-xs text-slate-500">Real-time editing & PDF export</p>
              </div>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                <Download size={16} />
                Export
              </button>
            </div>
            
            {/* Template Selector */}
            <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200 grid grid-cols-5 gap-1 items-center mt-2">
              <button 
                onClick={() => setTemplate("classic")} 
                className={`text-[11px] font-bold py-2 rounded-md transition-all ${template === "classic" ? "bg-white text-primary shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700"}`}
              >
                Classic
              </button>
              <button 
                onClick={() => setTemplate("creative")} 
                className={`text-[11px] font-bold py-2 rounded-md transition-all ${template === "creative" ? "bg-white text-primary shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700"}`}
              >
                Creative
              </button>
              <button 
                onClick={() => setTemplate("modern")} 
                className={`text-[11px] font-bold py-2 rounded-md transition-all ${template === "modern" ? "bg-white text-primary shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700"}`}
              >
                Modern
              </button>
              <button 
                onClick={() => setTemplate("executive")} 
                className={`text-[11px] font-bold py-2 rounded-md transition-all ${template === "executive" ? "bg-white text-primary shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700"}`}
              >
                Executive
              </button>
              <button 
                onClick={() => setTemplate("dark")} 
                className={`text-[11px] font-bold py-2 rounded-md transition-all ${template === "dark" ? "bg-slate-900 text-white shadow-sm border border-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                Dark
              </button>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Personal Info */}
            <section>
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Personal Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name</label>
                  <input type="text" value={personalInfo.name} onChange={e => setPersonalInfo({...personalInfo, name: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
                    <input type="email" value={personalInfo.email} onChange={e => setPersonalInfo({...personalInfo, email: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Phone</label>
                    <input type="text" value={personalInfo.phone} onChange={e => setPersonalInfo({...personalInfo, phone: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Location</label>
                    <input type="text" value={personalInfo.location} onChange={e => setPersonalInfo({...personalInfo, location: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">LinkedIn / Link</label>
                    <input type="text" value={personalInfo.linkedin} onChange={e => setPersonalInfo({...personalInfo, linkedin: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
              </div>
            </section>

            {/* Summary */}
            <section>
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Professional Summary</h2>
              <textarea 
                value={summary} 
                onChange={e => setSummary(e.target.value)} 
                rows={4}
                className="w-full p-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none resize-none" 
              />
            </section>

            {/* Experience */}
            <section>
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Experience</h2>
                <button onClick={handleAddExperience} className="text-primary hover:text-primary/80 flex items-center gap-1 text-xs font-semibold">
                  <Plus size={14} /> Add
                </button>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative p-4 border border-slate-200 rounded-lg bg-slate-50/50 group">
                    <button onClick={() => handleRemoveExperience(exp.id)} className="absolute -top-2 -right-2 bg-white border border-slate-200 text-red-500 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50">
                      <Trash2 size={12} />
                    </button>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Job Title</label>
                        <input type="text" value={exp.title} onChange={e => handleUpdateExperience(exp.id, 'title', e.target.value)} className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Company</label>
                          <input type="text" value={exp.company} onChange={e => handleUpdateExperience(exp.id, 'company', e.target.value)} className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Dates</label>
                          <input type="text" placeholder="e.g. 2020 - Present" value={exp.dates} onChange={e => handleUpdateExperience(exp.id, 'dates', e.target.value)} className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Description</label>
                        <textarea value={exp.description} onChange={e => handleUpdateExperience(exp.id, 'description', e.target.value)} rows={3} className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none resize-none" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Education</h2>
                <button onClick={handleAddEducation} className="text-primary hover:text-primary/80 flex items-center gap-1 text-xs font-semibold">
                  <Plus size={14} /> Add
                </button>
              </div>
              
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="relative p-4 border border-slate-200 rounded-lg bg-slate-50/50 group">
                    <button onClick={() => handleRemoveEducation(edu.id)} className="absolute -top-2 -right-2 bg-white border border-slate-200 text-red-500 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50">
                      <Trash2 size={12} />
                    </button>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Degree / Certificate</label>
                        <input type="text" value={edu.degree} onChange={e => handleUpdateEducation(edu.id, 'degree', e.target.value)} className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Institution</label>
                          <input type="text" value={edu.institution} onChange={e => handleUpdateEducation(edu.id, 'institution', e.target.value)} className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">Year</label>
                          <input type="text" value={edu.year} onChange={e => handleUpdateEducation(edu.id, 'year', e.target.value)} className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Skills</h2>
              <textarea 
                value={skills} 
                onChange={e => setSkills(e.target.value)} 
                rows={3}
                placeholder="Comma separated skills (e.g. JavaScript, React, Node.js)"
                className="w-full p-2.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none resize-none" 
              />
            </section>

          </div>
        </div>

        {/* Right Column: Live A4 Preview */}
        <div className="flex-1 bg-slate-200/50 overflow-y-auto h-full flex justify-center p-4 sm:p-8 print-layout">
          
          <div 
            id="resume-preview" 
            className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] flex flex-col mx-auto overflow-hidden relative"
            style={{ padding: template === 'modern' ? '0' : '20mm' }}
          >
            {template === "classic" && renderClassicTemplate()}
            {template === "modern" && renderModernTemplate()}
            {template === "executive" && renderExecutiveTemplate()}
            {template === "creative" && renderCreativeTemplate()}
            {template === "dark" && renderDarkTemplate()}
          </div>

        </div>
      </div>
    </>
  );
}

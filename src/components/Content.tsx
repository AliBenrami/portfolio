import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Content() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js and Tailwind CSS featuring Apple's design principles.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/AliBenrami",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      tech: ["Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/AliBenrami",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/AliBenrami",
      demo: "#",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Agile"] },
  ];

  return (
    <div id="content" className="relative z-10 min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* About Section */}
        <section className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F]">
              About Me
            </h2>
            <p className="text-lg text-[#48484A] max-w-3xl mx-auto">
              Passionate full-stack developer with expertise in building modern web applications. 
              I focus on creating elegant solutions that combine beautiful design with powerful functionality.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F]">
              Featured Projects
            </h2>
            <p className="text-lg text-[#48484A]">
              A selection of my recent work and open-source contributions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-white border-[#E5E5E7] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#1D1D1F]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[#48484A] leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#F5F5F7] text-[#48484A] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="appleOutline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="apple"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F]">
              Skills & Technologies
            </h2>
            <p className="text-lg text-[#48484A]">
              Technologies I work with regularly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div 
                key={skillGroup.category}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${skills.indexOf(skillGroup) * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-[#1D1D1F]">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#0071E3] text-white rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-8 pt-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F]">
              Let's Connect
            </h2>
            <p className="text-lg text-[#48484A] max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                variant="apple"
                size="lg"
                onClick={() => window.open('mailto:' + 'ali@example.com', '_blank')}
              >
                Send Email
              </Button>
              <Button
                variant="appleOutline"
                size="lg"
                onClick={() => window.open('https://github.com/AliBenrami', '_blank')}
              >
                View GitHub
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
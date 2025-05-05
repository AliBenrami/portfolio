import Image from "next/image";
import Nav from "./component/nav";
import Footer from "./component/footer";
import ProjectCard from "./component/projectCard";

interface ProjectCardInterface {
  id: string;
  projectName: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

interface Contact {
  GitHub: string;
  LinkedIn: string;
  Email: string;
}

async function getProjects(): Promise<ProjectCardInterface[]> {
  const res = await fetch("/api/projects", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export default async function Home() {
  const projects = await getProjects();
  const contacts: Contact = {
    GitHub: "https://github.com/AliBenrami",
    LinkedIn: "https://www.linkedin.com/in/ali-benrami-232b05248/",
    Email: "abenrami06@gmail.com",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Nav />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16" id="about">
          <Image
            className="rounded-full mx-auto mb-6"
            src={"/profile.jpg"} // Add your photo to public folder
            alt="Profile picture"
            width={150}
            height={150}
            priority
          />
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Ali Benrmai
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </p>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I&apos;m a passionate developer with experience in building web
            applications. I specialize in React, Next.js, and Node.js.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-16" id="projects">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                projectName={project.projectName}
                description={project.description}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Contact</h2>
          <div className="flex gap-6 justify-center">
            <a
              href={contacts.GitHub}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={contacts.LinkedIn}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={contacts.Email}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Email
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

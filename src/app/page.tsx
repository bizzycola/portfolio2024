"use client"
import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import RecentPosts from "@/components/RecentPosts";

const projects = [
  {
    title: "lchant.dev",
    description: "My personal portfolio website built with React and Next.js",
    image: "/images/projects/lchantdev.png",
    link: "/projects/lchantdev",
    tags: ["React", "Next.js", "Tailwind"],
    imageClass: "h-48 object-cover"
  },
  {
    title: "Deployr",
    description: "Fullstack web application to publish projects from GitHub to Docker",
    image: "/images/projects/deployr.jpg",
    link: "/projects/deployr",
    tags: ["Docker", "C#", "ASP.Net Core", "Vue"],
    imageClass: "h-48 object-cover"
  },
  {
    title: "QR Code Generator",
    description: "Static QR code generator hosted in docker",
    image: "/images/projects/qr.png",
    link: "/projects/qrcode",
    tags: ["Docker", "JavaScript", "HTML/CSS"],
    imageClass: "w-32 object-contain"
  },
  {
    title: "Host file editor",
    description: "Simple Windows host file editor",
    image: "/images/projects/hostseditor.png",
    link: "/projects/hostseditor",
    tags: ["C#", "WPF", "Windows"],
    imageClass: "h-48 object-cover"
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <PageHeader />

      <section id="about" className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-indigo-600 font-medium mb-2">ABOUT ME</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Who I Am</h2>
            <div className="w-20 h-1 bg-indigo-600 mb-8 self-start"></div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I&apos;m a {new Date().getFullYear() - 1995}-year old fullstack web (and software) developer living in Brisbane, Australia with a passion for writing code and building applications. I have experience primarily with C# & ASP.Net Core, NodeJS / TS, PHP & Laravel, and Go. I also have front-end experience with Vue3, React and Typescript.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">C# / ASP.NET Core</span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">Node.js</span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">Laravel</span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">React</span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">Vue</span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">Go</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-indigo-600 font-medium mb-2">MY EXPERTISE</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-indigo-600 mb-2"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Backend Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  C# & ASP.Net Core
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  NodeJS / TypeScript
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  PHP & Laravel
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Go
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Vue 3 & TypeScript
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  React & TypeScript
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  HTML & CSS
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-indigo-600 font-medium mb-2">MY WORK</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Recent Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 mb-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a href={project.link} key={project.title} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <img className={`${project.imageClass} transform group-hover:scale-110 transition-transform duration-500`} src={project.image} alt={project.title} />
                    </div>
                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <RecentPosts />

      <PageFooter />
    </main>
  );
}
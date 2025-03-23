import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <PageHeader />
      
      {/* About Me Section */}
      <section id="about" className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-indigo-600 font-medium mb-2">ABOUT ME</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Who I Am</h2>
            <div className="w-20 h-1 bg-indigo-600 mb-8 self-start"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm a 29-year old backend web developer and musician from NSW, Australia with a passion for writing code and building applications. I have experience primarily with C# & ASP.Net Core, NodeJS / TS, PHP & Laravel, and Go. I also have front-end experience with Vue3, React (which this portfolio is built in!) and Typescript.
            </p>
            {/* <p className="text-lg text-gray-600 leading-relaxed mb-8">
              
            </p> */}
            
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
      
      {/* Skills Section */}
      <section id="skills" className="w-full py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-indigo-600 font-medium mb-2">MY EXPERTISE</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-indigo-600 mb-2"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
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
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
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
      
      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-indigo-600 font-medium mb-2">MY WORK</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Recent Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 mb-2"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* lchant.dev */}
            <a href="/projects/lchantdev" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" src="/images/projects/lchantdev.png" alt="lchant.dev" />
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">lchant.dev</h3>
                  <p className="text-gray-600 mb-4">My personal portfolio website built with React and Next.js</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">React</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Next.js</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Tailwind</span>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Deployr */}
            <a href="/projects/deployr" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" src="/images/projects/deployr.jpg" alt="Deployr" />
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Deployr</h3>
                  <p className="text-gray-600 mb-4">Fullstack docker deployment tool for web applications</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Docker</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Go</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Vue</span>
                  </div>
                </div>
              </div>
            </a>
            
            {/* QR Generator */}
            <a href="/projects/qrcode" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <img className="h-32 object-contain transform group-hover:scale-110 transition-transform duration-500" src="/images/projects/qr.png" alt="QR Code Generator" />
                  </div>
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">QR Code Generator</h3>
                  <p className="text-gray-600 mb-4">Docker static QR code generator for quick access</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Docker</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">JavaScript</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">HTML/CSS</span>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Hosts Editor */}
            <a href="/projects/hostseditor" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" src="/images/projects/hostseditor.png" alt="Hosts Editor" />
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Host file editor</h3>
                  <p className="text-gray-600 mb-4">Simple Windows host file editor for developer workflows</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">C#</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">WPF</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Windows</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <PageFooter />
    </main>
  );
}
import Image from "next/image";
import blogPosts from "@/data/blogPosts";

export default function PageHeader() {
    return (
        <div className="w-full">
            <nav className="flex items-center justify-between w-full bg-gradient-to-r from-indigo-600 to-indigo-500 p-5 text-white">
                <div className="font-semibold text-xl">LC</div>
                <div className="flex space-x-6">
                    <a href="/#about" className="hover:text-indigo-200 transition-colors">About</a>
                    <a href="/#skills" className="hover:text-indigo-200 transition-colors">Skills</a>
                    <a href="/#projects" className="hover:text-indigo-200 transition-colors">Projects</a>
                    {blogPosts?.length > 0 && <a href="/blog" className="hover:text-indigo-200 transition-colors">Blog</a>}
                    <a href="#contact" className="hover:text-indigo-200 transition-colors">Contact</a>
                </div>
            </nav>
            <section className="flex items-center justify-center w-full py-16 text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-md">
                <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl">
                    <a href="/" className="transition-transform hover:scale-105 duration-300">
                        <Image
                            src="/images/profile.jpg"
                            alt="Lachlan Chant"
                            width={220}
                            height={220}
                            className="rounded-full border-4 border-white shadow-lg mb-8 md:mb-0 md:mr-12"
                        />
                    </a>
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-5xl md:text-6xl font-bold mb-3">Lachlan Chant</h1>
                        <h2 className="text-xl md:text-2xl mb-6 font-light">Web Developer</h2>
                        <p className="text-indigo-100 max-w-xl text-center md:text-left mb-8">
                            Fullstack developer with expertise in React, Vue, PHP, C# & ASP.Net Core, Node.js, Go, and more. 
                        </p>
                        <div className="flex space-x-4">
                            <a href="#contact" className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-100 transition-colors shadow-md">
                                Get in Touch
                            </a>
                            <a href="/#projects" className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white hover:text-indigo-600 transition-colors">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
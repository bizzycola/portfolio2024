import Image from "next/image";

export default function PageHeader() {
    return (
        <div className="w-full">
            <nav className="flex items-center justify-center w-full bg-indigo-500  p-5 text-white">
                {/*<div className="ml-auto">test</div>*/}
            </nav>
            <section className="flex items-center justify-center w-full p-5 text-white bg-indigo-500 shadow-sm">
                <div className="flex flex-col items-center">
                    
                    <a href="/"><Image
                        src="/images/profile.jpg"
                        alt="Lachlan Chant"
                        width={188}
                        height={188}
                        className="rounded-full mb-5"
                    /></a>
                    <a href="/"><h1 className="text-5xl mb-2">Lachlan Chant</h1></a>
                    <a href="/"><h2 className="text-xl mb-8">Web Developer</h2></a>
                </div>
            </section>
        </div>
    )
}
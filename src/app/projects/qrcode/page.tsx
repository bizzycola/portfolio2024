import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white font-sans">
            <PageHeader />
            <section className="text-left mt-10 lg:p-0 p-5" style={{ "maxWidth": "960px" }}>
                <div className="mb-10">
                    <div className="flex flex-row items-center justify-center">
                        <img src="/images/projects/qr.png" className="rounded-md shadow-md mb-8" />
                    </div>
                    

                    {/* == About Project == */}
                    <h2 className="text-4xl mb-2 text-gray-700">QR Code Generator</h2>
                    <hr className="border-b border-gray-100 mt-5 mb-5" />
                    <p className="mb-8 text-gray-600">
                        A simple self-hostable (docker) HTML/CSS/JS QR Code Generator. Built for someone on Reddit who was looking for an easy hostable solution without the need for a backend or more complex setup. Allows you to generate URL QR codes and Wifi connection QR codes, and download them as PNGs and SVGs with the ability to choose the downloaded image resolution.
                        <br/><br/>
                        The source code is available on my <a href="https://github.com/bizzycola/qrcode-generator" className="text-indigo-500 hover:text-indigo-600 hover:underline decoration-wavy">GitHub</a>. I host a version you can use <a href="https://bizzy-qrcode.netlify.app/" className="text-indigo-500 hover:text-indigo-600 hover:underline decoration-wavy">here</a>.
                    </p>
                </div>

                <div className="mb-10">
                    {/* == Skills == */}
                    <h2 className="text-4xl mb-2 text-gray-700">Skills Used</h2>
                    <hr className="border-b border-gray-100 mt-5 mb-5" />
                    <div className="flex flex-row items-center flex-wrap gap-2">
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">HTML</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">CSS</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">TypeScript</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">React</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">NestJS</div>
                    </div>
                </div>
            </section>
            <PageFooter />
        </main>
    )
}
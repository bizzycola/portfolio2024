import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <PageHeader />
      <section className="text-left mt-10 lg:p-0 p-5" style={{ "maxWidth": "960px" }}>
        <div className="mb-10">
          {/* == About Me == */}
          <h2 className="text-4xl mb-2 text-gray-700">About Me</h2>
          <hr className="border-b border-gray-100 mt-5 mb-5" />
          <p className="mb-8 text-gray-600">
            I&apos;m a 29-year old backend web developer and musician from NSW, Australia with a passion for writing
            code and building applications. I have experience primarily with
            C# & ASP.Net Core, NodeJS / TS, PHP & Laravel, and Go.
            I also have front-end experience with Vue3, React (which this portfolio is built in!) and Typescript.
          </p>
        </div>

        {/* == Skills == */}
        <div className="mt-20 text-gray-900">
          <h2 className="text-4xl mb-2 text-gray-700">Skills</h2>
          <hr className="border-b border-gray-100 mt-5 mb-5" />
          <div className="flex flex-col justify-center gap-3">
            <div className="p-5 border-1 border-gray-50 rounded-md shadow-md flex flex-col justify-center bg-white">
              <span className="text-2xl  text-gray-800">Backend</span>
              <span>
                <ul className="list-disc list-inside pl-2">
                  <li>C# & ASP.Net Core</li>
                  <li>NodeJS / TS</li>
                  <li>PHP & Laravel</li>
                  <li>Go</li>
                </ul>
              </span>
            </div>
            <div className="p-5 border-1 border-gray-50 rounded-md shadow-md flex flex-col justify-center bg-white">
              <span className="text-2xl text-gray-800">Frontend</span>
              <span>
                <ul className="list-disc list-inside pl-2">
                  <li>Vue 3 & TypeScript</li>
                  <li>React & TypeScript</li>
                  <li>HTML & CSS</li>
                  <li>TailWind CSS</li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        {/* == Projects == */}
        <div className="mt-20 text-gray-900 mb-40">
          <h2 className="text-4xl mb-2 text-gray-700">Projects</h2>
          <hr className="border-b border-gray-100 mt-5 mb-5" />


          <div className="flex flex-row flex-wrap justify-center lg:justify-between gap-4">
            {/* == lchant.dev == */}
            <a href="/projects/lchantdev" className="p-5 bg-white shadow-md rounded-md  block hover:shadow-lg" style={{ "width": "280px" }}>
              <h3 className="text-2xl text-gray-800">lchant.dev</h3>
              <p className="text-gray-600">My personal portfolio website</p>
              <img className="mt-2 rounded-md max-w-60 shadow-md" src="/images/projects/lchantdev.png" />
            </a>

            {/* == deployr == */}
            <a href="/projects/deployr" className="p-5 bg-white shadow-md rounded-md  block hover:shadow-lg" style={{ "width": "280px" }}>
              <h3 className="text-2xl text-gray-800">Deployr</h3>
              <p className="text-gray-600">Fullstack docker deployment tool</p>
              <img className="mt-2 rounded-md max-w-60 shadow-md" src="/images/projects/deployr.jpg" />
            </a>

            {/* == QR Generator == */}
            <a href="/projects/qrcode" className="p-5 bg-white shadow-md rounded-md flex flex-col block hover:shadow-lg" style={{ "width": "280px" }}>
              <h3 className="text-2xl text-gray-800">QR Code Generator</h3>
              <p className="text-gray-600">Docker static QR code generator</p>
              <img className="mt-2 rounded-md max-w-40 shadow-md self-center margin-auto" src="/images/projects/qr.png" />
            </a>

            {/* == Hosts Editor == */}
            <a href="/projects/hostseditor" className="p-5 bg-white shadow-md rounded-md  block hover:shadow-lg" style={{ "width": "280px" }}>
              <h3 className="text-2xl text-gray-800">Host file editor</h3>
              <p className="text-gray-600">Simple Windows host file editor</p>
              <img className="mt-2 rounded-md max-w-60 shadow-md" src="/images/projects/hostseditor.png" />
            </a>
          </div>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}

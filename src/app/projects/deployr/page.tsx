import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white font-sans">
            <PageHeader />
            <section className="text-left mt-10 lg:p-0 p-5" style={{ "maxWidth": "960px" }}>
                <div className="mb-10">
                    <div className="flex flex-row items-center justify-center">
                        <img src="/images/projects/deployr.jpg" className="rounded-md shadow-md mb-8" />
                    </div>
                    

                    {/* == About Project == */}
                    <h2 className="text-4xl mb-2 text-gray-700">Deployr</h2>
                    <hr className="border-b border-gray-100 mt-5 mb-5" />
                    <p className="mb-8 text-gray-600">
                        Deployr is a fullstack web application that connects to Github, automatically builds repositories and deploys them into managed docker containers.
                        It is designed for small use-cases, only running on a single server as opposed to a clustered approach which is more than I needed for my small web applications.
                        <br/><br/>
                        It is served by both REST and GraphQL (including subscriptions). It includes a custom built reverse proxy that serves containers on subdomains with an automatically provisioned LetsEncrypt certifiate (Built on YARP, Microsoft&apos;s ASP reverse proxy framework).
                        <br/><br/>
                        It allows access to real-time container output via a custom authenticated websocket proxy that connects into the container via Docker&apos;s API. It also includes the ability to easily setup networks and docker volumes. With a simple configuration file, you can setup an deploy multiple projects out of a single monorepository.
                    </p>
                </div>

                <div className="mb-10">
                    {/* == Skills == */}
                    <h2 className="text-4xl mb-2 text-gray-700">Skills Used</h2>
                    <hr className="border-b border-gray-100 mt-5 mb-5" />
                    <div className="flex flex-row items-center flex-wrap gap-2">
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">C#</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">ASP.Net Core</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">TypeScript</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">Vue3</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">REST</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">GraphQL</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">HotChocolate</div>
                        <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">YARP</div>
                    </div>
                </div>
            </section>
            <PageFooter />
        </main>
    )
}
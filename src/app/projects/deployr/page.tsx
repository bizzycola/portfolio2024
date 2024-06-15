import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
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
                        <div className="py-1 px-4 rounded-md bg-gray-200">C#</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">ASP.Net Core</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">TypeScript</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">Vue3</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">REST</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">GraphQL</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">HotChocolate</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">YARP</div>
                    </div>
                </div>
            </section>
            <PageFooter />
        </main>
    )
}
import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
            <PageHeader />
            <section className="text-left mt-10 lg:p-0 p-5" style={{ "maxWidth": "960px" }}>
                <div className="mb-10">
                    <div className="flex flex-row items-center justify-center">
                        <img src="/images/projects/hostseditor.png" className="rounded-md shadow-md mb-8" />
                    </div>
                    

                    {/* == About Project == */}
                    <h2 className="text-4xl mb-2 text-gray-700">Host File Editor</h2>
                    <hr className="border-b border-gray-100 mt-5 mb-5" />
                    <p className="mb-8 text-gray-600">
                        A simple Windows only hosts file editor built on C#/.Net Core 6 & WPF. Allows for easily editing the Windows hosts file to add custom entries and easily turn entries on and off on the fly for debugging your web applications.
                        <br/><br/>
                        Useful on its own, but in my own use it is superseded by the hosts editor built into Microsoft Powertoys.
                        <br/>
                        The source code is available on my <a href="https://github.com/bizzycola/HostsEditor" className="text-indigo-500 hover:text-indigo-600 hover:underline decoration-wavy">GitHub</a>.
                    </p>
                </div>

                <div className="mb-10">
                    {/* == Skills == */}
                    <h2 className="text-4xl mb-2 text-gray-700">Skills Used</h2>
                    <hr className="border-b border-gray-100 mt-5 mb-5" />
                    <div className="flex flex-row items-center flex-wrap gap-2">
                        <div className="py-1 px-4 rounded-md bg-gray-200">C#</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">WPF</div>
                        <div className="py-1 px-4 rounded-md bg-gray-200">.Net Core</div>
                    </div>
                </div>
            </section>
            <PageFooter />
        </main>
    )
}

export default function ModelPage() {

    return (
        <section className="h-screen bg-black p-8 md:p-20 relative">
            <div className="text-white text-center flex justify-center absolute inset-0 flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-semibold uppercase mb-8 md:mb-12 text-yellow-400">MIAya</h1>
                <p className="text-lg md:text-xl mb-12 md:mb-16">We are developing a wearable BCI for human-computer connection.</p>
                <div className="text-center">
                    <h2 className="text-6xl md:text-8xl font-semibold mb-6 md:mb-10 text-green-600">A¹ Neuro</h2>
                    <p className="text-lg md:text-xl">We aim to seamlessly integrate our devices with the human mind to amplify the quality of daily experiences.</p>
                </div>
            </div>
        </section>
    )
}
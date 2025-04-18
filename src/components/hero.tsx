
import Image from "next/image"

const Hero = () => {
    return (
        <section id="home" className="bg-gray-900 h-[60vh] sm:h-[80vh] md:h-screen flex flex-col relative">
            {/* Image Section */}
            <div className="relative w-full flex-grow mt-14 md:mt-16">
                <Image
                    src="/Tapeta.jpg"
                    alt="Truck on the road"
                    fill
                    className="w-full object-cover sm:object-center"
                />
            </div>

            {/* Text Section */}
            <div
                className="w-full bg-gray-900 text-center p-5 pt-0 sm:pt-5 xl:hidden xl:top-1/3 xl:left-1/4 xl:transform xl:-translate-y-1/2 xl:-translate-x-2/5 xl:text-left xl:max-w-[30%] xl:rounded-2xl"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                    A1 Express
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 font-medium mt-4">
                    Bezpieczny i terminowy transport dostosowany do Twoich potrzeb
                </h2>
            </div>
        </section>
    )
}

export default Hero
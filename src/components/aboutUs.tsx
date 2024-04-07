import Image from "next/image"
export default function AboutUs() {
    const aboutImage = '/about.webp'
    return (
        <>
            <section className="container mx-auto py-8 lg:py-20">
                {/* HEADING */}
                <h2 className="text-[64px] font-semibold text-primary font-raleway text-center mb-[5px] ">About Us</h2>
                <div className="flex justify-center">
                    <div className="linear-bg h-2 w-[165px] rounded-full "></div>
                </div>

                {/* CONTENT */}
                <div className=" bg-[#e2f2ff] mt-14 rounded-2xl lg:py-8 p-5 lg:px-12 group md:flex md:flex-col-reverse lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
                    
                    <div className="p-[10px] rounded-[10px] bg-white group-hover:p-0 md:mx-10 delay-100 max-md:mb-14 lg:w-1/3 ">
                        <div className="relative aspect-square w-full rounded-lg">
                            <Image fill={true} className="rounded-[10px]" objectFit="cover" src={aboutImage} alt="lens corp" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 ">
                        <h3 className=" max-md:my-4 md:mb-8  text-4xl font-medium md:text-[44px] font-poppins text-primary  max-md:text-center">Welcome to LENS</h3>
                        <p className="font-poppins mt-1 mb-4 max-md:text-center text-[#393939e6] rgba(57, 57, 57, .9)      ">We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
                        <div className="flex max-md:justify-center">
                            <button className="border border-primary rounded-[10px] mt-4 mb-20 text-primary py-[0.6rem] px-8 text-lg font-poppins">Learn More</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
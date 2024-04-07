export default function Services() {
    return (
        <>
            <section className="container mx-auto py-8 md:py-0 md:pb-16">
                <h2 className="text-center text-primary text-xl font-semibold tracking-[1.9px] uppercase font-raleway">Services</h2>
                <div className="flex justify-center">
                    <div className="linear-bg h-1 w-[75px] rounded-full "></div>
                </div>
                <div className="text-4xl mt-9 mb-8 font-poppins text-primary text-center font-medium md:text-[58px] md:mt-[58px]  md:mb-20 ">
                    We provide Artificial Intelligence Services
                </div>

                <div className="grid items-center justify-center gap-5 grid-cols-1 lg:grid-cols-2">
                    {/* 1st box */}
                    <div className="py-4 rounded-[10px] group  bg-white hover:border hover:border-[#01c99b] top-0 left-0 ">
                        <div className="flex items-center gap-0">
                            <div className="text-[88px] font-semibold leading-[123px] text-[#70707033] font-poppins  ">0<span className="group-hover:text-[#01c99b]">1</span></div>
                            <h4 className="text-[32px] text-[#01c99b] font-semibold font-poppins relative right-5 group-hover:right-0 transition-all  ">Biometrics</h4>
                        </div>
                        <div className="mt-6 mx-9 ">
                            <p className="text-lg text-[#8a8a8a] font-bold leading-8 text-center font-poppins ">
                            Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.
                            </p>
                        </div>

                    </div>
                    {/* 2nd box */}

                    <div className="py-4 rounded-[10px] group  bg-white hover:border hover:border-[#3fbdf1] top-0 left-0 ">
                        <div className="flex items-center gap-0">
                            <div className="text-[88px] font-semibold leading-[123px] text-[#70707033] font-poppins  ">0<span className="group-hover:text-[#3fbdf1]">2</span></div>
                            <h4 className="text-[32px] text-[#3fbdf1] font-semibold font-poppins relative right-5 group-hover:right-0 transition-all  ">Image Analysis</h4>
                        </div>
                        <div className="mt-6 mx-9 ">
                            <p className="text-lg text-[#8a8a8a] font-bold leading-8 text-center font-poppins ">
                            Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.
                            </p>
                        </div>

                    </div>

                    {/* 3rd box */}


                    <div className="py-4 rounded-[10px] group  bg-white hover:border hover:border-[#ff605f] top-0 left-0 ">
                        <div className="flex items-center gap-0">
                            <div className="text-[88px] font-semibold leading-[123px] text-[#70707033] font-poppins  ">0<span className="group-hover:text-[#ff605f]">3</span></div>
                            <h4 className="text-[32px] text-[#ff605f] font-semibold font-poppins relative right-5 group-hover:right-0 transition-all  ">Cross-Media Translation</h4>
                        </div>
                        <div className="mt-6 mx-9 ">
                            <p className="text-lg text-[#8a8a8a] font-bold leading-8 text-center font-poppins ">
                            Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.
                            </p>
                        </div>

                    </div>

                    {/* 4th box */}


                    <div className="py-4 rounded-[10px] group  bg-white hover:border hover:border-[#ff9f31] top-0 left-0 ">
                        <div className="flex items-center gap-0">
                            <div className="text-[88px] font-semibold leading-[123px] text-[#70707033] font-poppins  ">0<span className="group-hover:text-[#ff9f31]">4</span></div>
                            <h4 className="text-[32px] text-[#ff9f31] font-semibold font-poppins relative right-5 group-hover:right-0 transition-all  ">3D Modelling and Design.</h4>
                        </div>
                        <div className="mt-6 mx-9 ">
                            <p className="text-lg text-[#8a8a8a] font-bold leading-8 text-center font-poppins ">
                            We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
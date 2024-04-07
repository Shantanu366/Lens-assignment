import Image from "next/image"
export default function Contact() {
    return (
        <>
            <section className="bg-[#fcfbf7]">
                <div className="container mx-auto py-4 xl:flex-row justify-between xl:gap-20 items-center flex flex-col  ">
                    <div>

                        <h2 className="text-[56px] font-raleway leading-normal mt-12 mb-4 text-primary font-semibold">Get in touch with us</h2>
                        <p className="pt-4 pb-8 tracking-[0.5px] font-poppins  ">Send your enquiry now!</p>
                        <div className=" rounded-3xl bg-[#ededed] flex items-center justify-between">
                            <input type="email" className="ml-2 border-none placeholder:font-poppins placeholder:text-sm text-sm outline-none bg-[#ededed]  rounded-3xl w-full p-2" placeholder="Enter email address" />
                            <button className="font-poppins bg-[#272e5c] text-white text-sm p-2 rounded-3xl  whitespace-nowrap">Request Demo</button>
                        </div>
                    </div>
                
                    <div className="relative aspect-[360/269] w-full">
                        
                        <Image src={'/locations.webp'} fill={true} alt="LEns corp"/>

                    </div>
                </div>
            </section>
        </>
    )
}
import Image from "next/image"
export default function Clients(){
    return(
        <>
        <section className=" py-8 lg:pb-20 overflow-hidden">
                <h2 className="text-center font-raleway text-[32px] font-semibold mb-12 ">We Work With Amazing Clients</h2>
                <div className="flex items-center gap-8 md:gap-16 client-animation overflow-hidden ">
                    <div className="relative aspect-[3/2] w-[192px]">
                        <Image fill={true} objectFit="contain" src={'/client1.png'} alt="LENS corp" />
                    </div>
                    <div className="relative aspect-[3/2] w-[192px]">
                        <Image fill={true} objectFit="contain" src={'/client2.png'} alt="LENS corp" />
                    </div>
                    <div className="relative aspect-[3/2] w-[192px]">
                        <Image fill={true} objectFit="contain" src={'/client3.png'} alt="LENS corp" />
                    </div>
                    <div className="relative aspect-[3/2] w-[192px]">
                        <Image fill={true} objectFit="contain" src={'/client4.png'} alt="LENS corp" />
                    </div>
                </div>
        </section>
        </>
    )
}
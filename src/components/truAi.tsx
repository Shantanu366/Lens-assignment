import Image from "next/image"
export default function TruAi() {
    return (
        <>
            <section className="my-12 polygon p-10 bg-secondary">
                <div className="container ">
                    <div className="flex items-center justify-start">
                        <div className="flex flex-col xl:flex-row xl:justify-between items-center  md:w-2/3 justify-start">

                            <div className="relative aspect-square w-[330px] max-lg:hidden lg:mt-24">
                                <Image fill={true} objectFit="contain" src={'/vectorAi.webp'} alt="lens corp" />
                            </div>
                            <div className=" xl:mt-16 ">
                                <h2 className="relative  text-4xl mt-9  max-lg:mt-24 font-poppins text-center font-medium md:text-[58px]  text-white  mb-7 ">Meet
                                    <span className="tru-animations">
                                        &nbsp;
                                        Tru-AI
                                        <div className="absolute aspect-[25/3] -bottom-8    right-0     w-[200px]"><Image fill={true} src={'/underline-tru.svg'} alt="LENS corp"></Image></div>
                                    </span>
                                </h2>
                                <div className="text-[26px] font-poppins font-medium  text-center text-white mb-4  ">Design. Create. Deploy.</div>
                                <div className="flex gap-2 justify-center items-center">
                                    <div className="flex items-end max-md:hidden">
                                        <div className="bg-white w-9 h-[1px]"></div>
                                    </div >
                                    <h4 className="tru-animations text-xl inline mb-4 font-semibold font-poppins max-md:text-center" >the Future of AI | Power to EDIT</h4>
                                </div>
                                <p className="text-white text-sm  mb-4 font-poppins  text-center">Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website</p>
                                <div className="flex justify-center  ">
                                    <button className="border group border-white rounded-[10px] mt-4 mb-20 text-white hover:bg-white flex items-center gap-3 hover:text-primary hover:border-transparent py-[0.6rem] px-8 text-lg font-poppins">Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="group-hover:block hidden transition-all"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill="black"
                                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="w-1/3 absolute right-0 max-md:hidden ">
                            <video autoPlay={false} loop={false} className="rounded-tl-full rounded-bl-full"><source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4" type="video/mp4" /></video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
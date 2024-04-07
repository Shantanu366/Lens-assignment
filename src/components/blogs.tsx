export default function Blogs() {
    return (
        <>
            <section className=" bg-[#fcfbf7]">
                <div className="container mx-auto py-8 md:py-0 md:pb-16">

                    <h2 className="text-center text-primary text-xl font-semibold tracking-[1.9px] uppercase font-raleway">OUR BLOGS</h2>
                    <div className="flex justify-center">
                        <div className="linear-bg h-1 w-[75px] rounded-full "></div>
                    </div>
                    <div className="text-4xl my-1 py-2 font-poppins text-primary text-center font-medium md:text-[58px]   leading-normal  ">
                        Inhouse Mindescape
                    </div>


                    {/* cards starts herer */}
                    <div className="flex flex-col items-center gap-10 md:flex-row flex-wrap">

                        <div className="px-6 py-5 pb-16 rounded-[20px] group overflow-y-hidden bg-white flex-1">
                            <div className="text-[#f86360] text-xl font-poppins font-medium mb-6 group-hover:hidden transition-all ">New!</div>
                            <h3 className="text-[28px] font-medium  leading-9 text-primary font-raleway mb-6">How AI is Transforming Video Surveillance</h3>
                            <div className="p-5 bg-[#fff6cd] rounded-2xl mb-16 ">
                                <p className="text-[#828282] font-poppins">AI is revolutionizing security, offering real-time threat detection, proactive prevention, and more! Read our latest blog to explore how AI is transforming video surveillance and how VIEW, a next-gen video management software, can help you upgrade your security....</p>
                            </div>
                            <button className="text-[#ff5d5b] text-[17px] hidden group-hover:inline-flex font-poppins transition-all items-center gap-2">
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--ci"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="px-6 py-5 pb-16 rounded-[20px] group overflow-y-hidden bg-white flex-1">
                            <div className="text-[#656565] text-xl font-poppins font-medium mb-6 group-hover:hidden transition-all ">March 19, 2024</div>
                            <h3 className="text-[28px] font-medium  leading-9 text-primary font-raleway mb-6">Unleashing the Untapped Potential of AI for Organizational Excellence</h3>
                            <div className="p-5 bg-[#e2f2ff] rounded-2xl mb-16 ">
                                <p className="text-[#828282] font-poppins">Artificial intelligence (AI) is rapidly transforming the business landscape. From automating repetitive tasks and analyzing vast datasets to personalizing customer experiences and predicting future trends, AI is becoming an indispensable tool for companies seeking a competitive edge........</p>
                            </div>
                            <button className="text-[#ff5d5b] text-[17px] hidden group-hover:inline-flex font-poppins transition-all items-center gap-2">
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--ci"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="px-6 py-5 pb-16 rounded-[20px] group overflow-y-hidden bg-white">
                            <div className="text-[#656565] text-xl font-poppins font-medium mb-6 group-hover:hidden transition-all ">March 15, 2024</div>
                            <h3 className="text-[28px] font-medium  leading-9 text-primary font-raleway mb-6">The Duality of AI in Cybersecurity</h3>
                            <div className="p-5 bg-[#ffeceb] rounded-2xl mb-16 ">
                                <p className="text-[#828282] font-poppins">Artificial intelligence (AI) is rapidly transforming the business landscape. From automating repetitive tasks and analyzing vast datasets to personalizing customer experiences and predicting future trends, AI is becoming an indispensable tool for companies seeking a competitive edge........</p>
                            </div>
                            <button className="text-[#ff5d5b] text-[17px] hidden group-hover:inline-flex font-poppins transition-all items-center gap-2">
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--ci"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center mb-12 lg:mb-20 mt-8">

                    <button className="border bg-transparent rounded-[10px] py-2.5 px-5">Explore More</button>
                    </div>
                </div>

            </section>
        </>
    )
}
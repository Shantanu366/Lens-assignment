export default function Numbers() {
    return (
        <>
            <section className="bg-[#272e5c]">
                <div className="container mx-auto  py-8">
                    <h2 className="text-white text-center text-[32px] mb-10 font-poppins">By the numbers</h2>
                    <div className="flex items-center justify-between lg:justify-around">

                        <div className="flex flex-col  items-center">
                            <div className="text-[40px] text-white font-poppins font-semibold ">15 <span className="text-[#0091ff]">+</span></div>
                            <p className="text-white font-poppins text-center ">Solutions for Global crises</p>
                        </div>
                        <div className="flex flex-col  items-center">
                            <div className="text-[40px] text-white font-poppins font-semibold ">10 <span className="text-[#0091ff]">+</span></div>
                            <p className="text-white font-poppins text-center ">University Collaborations</p>
                        </div>
                        <div className="flex flex-col  items-center">
                            <div className="text-[40px] text-white font-poppins font-semibold ">25 <span className="text-[#0091ff]">+</span></div>
                            <p className="text-white font-poppins text-center ">Employees Worldwide</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
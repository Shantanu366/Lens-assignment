import Employee from "@/components/EmployeeComponent/employee";
import Faq from "@/components/FAQ";
import AboutUs from "@/components/aboutUs";
import Blogs from "@/components/blogs";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Numbers from "@/components/numbers";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import TopBanner from "@/components/topBanner";
import TruAi from "@/components/truAi";
import Vision from "@/components/vision";
export default function Home() {
  return (
    <>
    <Header/>
      {/* <header className="container mx-auto relative">
        <nav className="py-1 flex items-center justify-between">
          <div className="relative aspect-[20/17] w-20 mt-1 ">
            <Image fill={true} objectFit="cover" src={'/logo.webp'} alt="lens corporation" />
          </div>
          <div onClick={handleHamburger} className="md:hidden flex flex-col gap-1.5">
            <div className="w-[30px] h-1 rounded bg-primary"></div>
            <div className="w-[30px] h-1 rounded bg-primary"></div>
            <div className="w-[30px] h-1 rounded bg-primary"></div>
          </div>
          {hamburger &&
            <div className=" absolute top-[80px] py-6 px-4  right-0 w-[85%] text-lg bg-primary  font-poppins flex flex-col gap-[30px] text-white">
              <div><Link href={'/'}>MakeMyWeb</Link></div>
              <div><Link href={'/'} className="bg-transparent home-nav-bg font-medium ">Home</Link></div>
              <div><Link href={'/'}>Company</Link></div>
              <div><Link href={'/'}>Blogs</Link></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="switch iconify iconify--ic"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ color: 'black' }}
              >
                <path
                  fill="white"
                  d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"
                ></path>
              </svg>
            </div>
          }
          <div className="flex items-center gap-[30px] font-poppins py-6 px-4 max-md:hidden">
            <div><Link href={'/'}>MakeMyWeb</Link></div>
            <div><Link href={'/'} className="bg-transparent home-nav-bg font-medium ">Home</Link></div>
            <div><Link href={'/'}>Company</Link></div>
            <div><Link href={'/'}>Blogs</Link></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="switch iconify iconify--ic"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ color: 'black' }}
            >
              <path
                fill="black"
                d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"
              ></path>
            </svg>
          </div>

        </nav>
      </header> */}
      <TopBanner/>
      <AboutUs/>
      <Services/>
      <TruAi/>
      <Solutions/>
      <Vision/>
      <Blogs/>
      <Clients/>
      <Numbers/>
      <Faq/>
      <Contact/>
      <Footer/>
      <Employee/>
    </>
  );
}

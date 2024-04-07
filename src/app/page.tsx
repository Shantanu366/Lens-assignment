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
      <Header />
      <TopBanner />
      <AboutUs />
      <Services />
      <TruAi />
      <Solutions />
      <Vision />
      <Blogs />
      <Clients />
      <Numbers />
      <Faq />
      <Contact />
      <Footer />
      <Employee />
    </>
  );
}

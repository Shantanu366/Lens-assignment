'use client'
import { useState } from "react";

export default function Faq() {
    return (
        <>

            <section className=" bg-[#fcfbf7]">
                <div className="container mx-auto py-8 mb-16 ">

                    <h2 className="text-center text-primary text-xl font-semibold tracking-[1.9px] uppercase font-raleway">get to know us</h2>
                    <div className="flex justify-center">
                        <div className="linear-bg h-1 w-[75px] rounded-full "></div>
                    </div>
                    <div className="text-4xl my-1 py-2 font-poppins text-primary text-center font-medium md:text-[58px]   leading-normal  ">
                        Frequently Asked Questions
                    </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <Accordion question="Do I need to sign a contract?" answer="We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract."/>
                    <Accordion question="What sevices do we offer?" answer="We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you."/>
                    <Accordion question="How do we ensure quality of deliverables?" answer="We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks."/>
                    <Accordion question="How do you ensure user privacy?" answer="We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy."/>
                    <Accordion question="How do I begin collaboration?" answer="Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs."/>
                    <Accordion question="How can I pay for the services?" answer="We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime."/>
                  </div>
                </div>

            </section>
        </>
    )
}

interface AccordionProps {
    question: string;
    answer: string;
  }
  
  const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div onClick={toggleAccordion} className="accordion">
      
        <div   className="flex items-center  justify-between px-4 py-3 rounded-[10px] border border-primary">
                        <div className="font-poppins " >
                            {question}
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="Accordian1_icon__wzitS iconify iconify--octicon"
                            width="1em"
                            height="1em"
                            viewBox="0 0 12 12"
                        >
                            <path
                                fill="currentColor"
                                d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1c.3-.3.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0c.3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3"
                            ></path>
                        </svg>
                    </div>
                        {isOpen && (
          <div className="accordion-content mt-4" >
            <p className="text-[#00000099] text-sm font-poppins ">{answer}</p>
          </div>
        )}
      </div>
    );
  };
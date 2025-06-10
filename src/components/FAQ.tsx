"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl text-center">Frequently Asked Questions</h2>
        <Accordion
          type="single"
          collapsible
          className="container p-5 m-auto py-10 max-w-[55rem] w-10/12"
        >
          <AccordionItem value="item-1" className="faq-item !p-0">
            <AccordionTrigger className="cursor-pointer  ">
              <div className="question text-[1rem] font-normal">
                How do I sleep in class?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="answer ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, send me to tie repudiandae voluptatibus nostrum in
                commodi voluptate sit labore officiis facere.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="faq-item  !p-0">
            <AccordionTrigger className="cursor-pointer  ">
              <div className="question text-[1rem] font-normal">
                How do I sleep in class?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="answer ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, send me to tie repudiandae voluptatibus nostrum in
                commodi voluptate sit labore officiis facere.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="faq-item  !p-0">
            <AccordionTrigger className="cursor-pointer  ">
              <div className="question text-[1rem] font-normal">
                How do I sleep in class?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="answer ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, send me to tie repudiandae voluptatibus nostrum in
                commodi voluptate sit labore officiis facere.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="faq-item  !p-0">
            <AccordionTrigger className="cursor-pointer  ">
              <div className="question text-[1rem] font-normal">
                How do I sleep in class?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="answer ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, send me to tie repudiandae voluptatibus nostrum in
                commodi voluptate sit labore officiis facere.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="faq-item faq-item-last !p-0">
            <AccordionTrigger className="cursor-pointer  ">
              <div className="question text-[1rem] font-normal">
                How do I sleep in class?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="answer ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, send me to tie repudiandae voluptatibus nostrum in
                commodi voluptate sit labore officiis facere.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;

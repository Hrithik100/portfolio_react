import React, { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Form submitted Successfully");
        },
        (error) => {
          // console.log(error.text);
          toast.error("Something went wrong");
        }
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-[#081e21] font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114612.72232136026!2d91.63284241113972!3d26.14303166701789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1680681366493!5m2!1sen!2sin"
              className="border-0 w-full  h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  name="message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-[#193256] text-white hover:bg-[#081e21] text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

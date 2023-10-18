"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    message: string;
  }>({ fullName: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //emailjs integration

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_USER_ID as string
      )
      .then(
        () => {
          toast.success("Your message sent!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setFormData({
            fullName: "",
            email: "",
            message: "",
          });
        },
        () => {
          toast.error("Failed, please try again later!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact wrapper section-padding">
      <SectionTitle title="contact us" />
      <div className="grid grid-cols lg:grid-cols-[45%_auto] gap-10 mt-20">
        <div className="w-full h-[88%] mt-14">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692713402/w_1000_hywuln.avif"
            alt="contact_image"
            width={500}
            height={500}
            priority
            className="w-full h-full rounded-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form flex flex-col text-lg gap-10 py-10  mx-auto mt-5"
          >
            <div className="form-control flex flex-col gap-2">
              <input
                data-aos="fade-left"
                data-aos-duration="1000"
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className="fullname border border-light/40 focus:border-light/60 bg-transparent py-6 px-10 rounded-xl outline-none duration-300"
              />
            </div>
            <div className="form-control flex flex-col gap-2">
              <input
                data-aos="fade-left"
                data-aos-duration="1000"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className=" email border border-light/40 focus:border-light/60 bg-transparent  py-6 px-10 rounded-xl outline-none duration-300"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <textarea
                data-aos="fade-left"
                data-aos-duration="1000"
                placeholder="Message"
                name="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="message border border-light/40 focus:border-light/60  bg-transparent rounded-xl outline-none py-12 px-16 resize-none duration-300"
              />
            </div>
            <div
              className="submit  rounded-xl   py-5 px-8 text-center overflow-hidden border border-light/40 bg-accant1/60 font-medium hover:bg-accant1/80  duration-300"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <button
                role="link"
                type="submit"
                className="text-light/80 uppercase"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

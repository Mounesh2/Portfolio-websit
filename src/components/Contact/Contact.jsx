import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const textRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out" }
    );

  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgjwjok", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setMessageVisible(true);
        setFormVisible(false);
        form.reset(); // Clear form fields
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send the message. Please check your connection.");
    }
  };
  return (
    <>
      <section ref={contactRef}
        id="contact"
        class="w-full mt-16 px-4"
      >
        {" "}
        <div ref={textRef} class="max-w-5xl mx-auto">
          {" "}
          <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">
            Let's talk
          </h2>{" "}
          <h3 class="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
            Contact
          </h3>{" "}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            <div class="text-[var(--white-icon)]">
              {" "}
              <p class="mb-4">
                Have a question or a project in mind? Feel free to reach out.
              </p>{" "}
              <div class="flex items-center gap-2">
                {" "}
                <span>Location:</span>{" "}
                <span class="text-[var(--white)]">Gajendragad,gadag,India</span>{" "}
              </div>
              <div class="flex items-center gap-2 mt-2">
             <span>Phone:</span>
                   <span class="text-[var(--white)]">+91 8884549804</span>
              </div>

              <div className="social-links flex gap-5 mt-5 text-lg">
                <a
                  href="https://www.linkedin.com/in/mounesh-s-pattar-1b3221299"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/Mounesh2"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.instagram.com/mouneshsp8/profilecard/?igsh=cGpwZGd0dXBrOTkz"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="mailto:mouneshspattar0@gmail.com"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <iframe
                className="mt-6 w-full h-60 rounded-lg "
                src="https://maps.app.goo.gl/vJqQjFX2AwvnT4K29"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div>
              {formVisible && (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xkgjwjok"
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  {" "}
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    className="px-4 py-2 text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A7282]"
                  />{" "}
                  <input
                    type="Email"
                    name="reply_to"
                    required
                    placeholder="mouneshpattar0@gmail.com"
                    className="px-4 py-2 text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A7282]"
                  />{" "}
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    rows="6"
                    className="px-4 py-2 text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A7282] resize-none"
                  ></textarea>{" "}
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[var(--white-icon-tr)] text-[var(--white)] rounded-lg opacity-60 transition-opacity border border-[var(--white-icon-tr)] hover:opacity-100 hover:bg-[var(--white-icon-tr)] cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              )}
              {messageVisible && (
                <div className="mt-4 text-lg">
                  ✅ Thank you for your message!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

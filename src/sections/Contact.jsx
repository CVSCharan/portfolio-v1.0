import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n2w8a5c",
        "template_t4a4rtm",
        form.current,
        "u8bVfJlgy9QJKeMhz"
      )
      .then(
        (result) => {
          alert("Message Sent");
          console.log(result);
          form.current.result();
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <section id="Contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-title">Contact Me!</div>
          <div className="contact-desc">
            Feel free to reach out to me for any questions or opportunities!
          </div>
          <form ref={form} className="contact-form" onSubmit={handelSubmit}>
            <div className="contact-sub-title">Email 🚀</div>
            <input
              className="contact-input"
              placeholder="Your Email"
              name="from_email"
            />
            <input
              className="contact-input"
              placeholder="Your Name"
              name="from_name"
            />
            <input
              className="contact-input"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="contact-input-msg"
              placeholder="Message"
              name="message"
              rows={4}
            />
            <input className="contact-btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

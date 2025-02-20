import { useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  });

  // Snackbar State
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" or "error"
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    // Ensure environment variables are defined, otherwise throw an error
    const service_id = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const template_id = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

    if (!service_id || !template_id || !public_key) {
      console.error("Missing EmailJS environment variables.");
      setSnackbar({
        open: true,
        message: "Configuration error. Please try again later.",
        severity: "error",
      });
      return;
    }

    await emailjs
      .send(
        service_id, // Service ID
        template_id, // Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        },
        public_key // Public Key
      )
      .then(
        (result) => {
          setSnackbar({
            open: true,
            message: "Email sent successfully!",
            severity: "success",
          });
          setFormData({
            from_email: "",
            from_name: "",
            subject: "",
            message: "",
          });
          console.log(result);
        },
        (error) => {
          console.error(error);
          setSnackbar({
            open: true,
            message: "Failed to send email. Please try again.",
            severity: "error",
          });
          setFormData({
            from_email: "",
            from_name: "",
            subject: "",
            message: "",
          });
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
          <form className="contact-form" onSubmit={handelSubmit}>
            <div className="contact-sub-title">Email 🚀</div>
            <input
              className="contact-input"
              placeholder="Your Email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
            <input
              className="contact-input"
              placeholder="Your Name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <input
              className="contact-input"
              placeholder="Subject"
              name="subject"
              onChange={handleChange}
              value={formData.subject}
              required
            />
            <textarea
              className="contact-input-msg"
              placeholder="Message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input className="contact-btn" type="submit" value="Send" />
          </form>
        </div>
        {/* Snackbar should be positioned below the form */}
        <div className="snackbar-container">
          <Snackbar
            open={snackbar.open}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </section>
  );
};

export default Contact;

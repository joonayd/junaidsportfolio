import React from "react";
import emailjs from "emailjs-com";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_y0jjd8h", e.target, "user_g4x1ajS70LxTVMaJBxLR8").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div>
      <section className="contact-page" id="contact-page">
        <section className="contact-glass1">
          <div className="dashboard2">
            <div className="dash">
              <h4>
                Email
                <CopyToClipboard text="junaiddcodes@gmail.com">
                  <FiCopy
                    className="copy-icon"
                    onClick={() => {
                      setIsCopied(true);

                      // alert("Email Copied");
                    }}
                  />
                </CopyToClipboard>
              </h4>
              <p>junaiddcodes@gmail.com</p>
            </div>
            <div className="dash">
              <h4>Contact No.</h4>
              <p>+923104541569</p>
              <p>+923234984704</p>
            </div>
            <div className="dash">
              <h4>LinkedIn</h4>
              <p>
                {" "}
                <a href="https://www.linkedin.com/in/junaid-asif-b6297a174/" target="_blank">
                  https://www.linkedin.com/in/junaid-asif-b6297a174/
                </a>
              </p>
            </div>
            <div className="dash">
              <h4>Github</h4>
              <p>
                {" "}
                <a href="https://github.com/joonayd" target="_blank">
                  https://github.com/joonayd
                </a>
              </p>
            </div>
          </div>
          <form className="email" onSubmit={sendMail}>
            <div className="label">
              <h4>Name</h4>
              <input type="text" placeholder="name" name="name" />
            </div>
            <div className="label">
              <h4>Email Address</h4>
              <input type="text" placeholder="email" name="email" />
            </div>
            <div className="label">
              <h4>Subject</h4>
              <input type="text" placeholder="subject" name="subject" />
            </div>
            <div className="label-msg">
              <h4>Message</h4>
              <textarea placeholder="message" name="message" wordwrap="off"></textarea>
            </div>

            <button className="btn-send" type="submit">
              <h2>Send</h2>
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Contact;

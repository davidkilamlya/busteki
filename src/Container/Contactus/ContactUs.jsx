import Title from "../../Components/Title/Title";
import Loader from "../../Components/Loader/Loader";
import "./ContactUs.scss";
import { images } from "../../Constants";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const ticketData = {
      name,
      email,
      phone,
      description,
    };
    
let axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_SHARED_SECRET_KEY}`,
  },
});
    try {
      setIsLoading(true);
      await axiosInstance
        .post(process.env.REACT_APP_END_POINT_CONTACT, ticketData)
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setName("");
          setEmail("");
          setDescription("");
          setPhone("");
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(`Oops! failed to send your message, ` + error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="contactUs" id={`Contact us`}>
      {isLoading && <Loader />}

      <div className="contactus-form-title">
        <div className="contact-image-description">
          <div className="contact-image">
            <img src={images.contactus} alt="contactus" className="svg-image" />
          </div>
          <div className="contact-description">
            <h2 className="pContact-description">We are live 24/7 Hrs</h2>
          </div>
        </div>
        <div className="contact-form-title">
          <div className="contact-title">
            <Title title={"contact us"} visible />
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              required
              name="name"
              value={name}
              onChange={(e) => handleNameChange(e)}
              id="userName"
              className="userName input"
              placeholder="your name/company name"
            />
            <label htmlFor="phone">Your phone no:</label>

            <input
              type="text"
              name="phone"
              onChange={(e) => handlePhoneChange(e)}
              value={phone}
              required
              id="userEmail"
              className="userEmail input"
              placeholder="Your Phone number"
            />
            <label htmlFor="email">Your email:</label>

            <input
              type="email"
              name="userEmail"
              onChange={(e) => handleEmailChange(e)}
              value={email}
              required
              id="userEmail"
              className="userEmail input"
              placeholder="company email/Your Email"
            />
            <label htmlFor="message">Your meassage:</label>

            <textarea
              name="message"
              required
              id="message"
              onChange={(e) => handleDescriptionChange(e)}
              className="message input"
              value={description}
              placeholder="message"
            ></textarea>
            <div className="contact-btn">
              <button type="submit" className="contact-submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

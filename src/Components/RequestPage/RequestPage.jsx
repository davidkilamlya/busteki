import "./RequestPage.scss";

import { useEffect, useState } from "react";
import styled from "styled-components";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
import Loader from "../Loader/Loader";
import axios from "axios";

const Parent = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3vh 0;
`;

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 500px;
`;
const Err = styled.span`
  color: red;
  font-size: 15px;
  font-weight: bold;
`;
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: darken($color: #6c63ff, $amount: 5%);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($color: #6c63ff, $amount: 10%);
  }
`;

function RequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-development",
    location: "",
    message: "",
  });

  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //regex to validate data
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^[0-9]{10}$/;
  const nameRegex = /^[a-zA-Z ]+$/;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleChangePhone = (e) => {
    setFormData({ ...formData, phone: e.target.value });
    if (phoneRegex.test(e.target.value)) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  };
  const handleChangeEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });

    if (emailRegex.test(e.target.value)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };
  const handleChangeName = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
    if (nameRegex.test(e.target.value)) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  };
  const handleChangeDescription = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };
  const handleChangeService = (e) => {
    setFormData({
      ...formData,
      service: e.target.value,
    });
  };

  const handleChangeLocation = (e) => {
    setFormData({
      ...formData,
      location: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    let axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SHARED_SECRET_KEY}`,
      },
    });

    try {
      setIsLoading(true);
      await axiosInstance
        .post(process.env.REACT_APP_END_POINT_SERVICE, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          location: formData.location,
          description: formData.message,
        })
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

          setIsLoading(false);
        });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "web-development",
        location: "",
        message: "",
      });
    } catch (error) {
      toast.error(`Oops! failed to send service, ` + error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Helmet>
        <title>Request a Service - Busteki</title>
        <meta
          name="description"
          content="Fill out the request form to inquire about Busteki's services. Get in touch with our team for web development, mobile apps, network administration, and more."
        />
        <meta
          name="keywords"
          content="Busteki, request form, technology services, web development, mobile apps, network administration, inquiries"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Request a Service - Busteki" />
        <meta
          property="og:description"
          content="Fill out the request form to inquire about Busteki's services. Get in touch with our team for web development, mobile apps, network administration, and more."
        />
        <meta property="og:image" content="/your-image.jpg" />
        <meta property="og:url" content="https://www.busteki.co.tz/request" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ReusableHeader pageTitle={"Busteki Request Form"} />
      <Parent className="request-container">
        <Container>
          <Title>Service Request</Title>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Your Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChangeName(e)}
              required
            />
            {isValidName ? <></> : <Err>Please enter a valid name</Err>}
            <Label htmlFor="phone">Your Phone No:</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChangePhone(e)}
              required
            />
            {isValidPhone ? (
              <></>
            ) : (
              <Err>Please enter a valid phone number start with 0</Err>
            )}

            <Label htmlFor="email">Your Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChangeEmail(e)}
              required
            />
            {isValidEmail ? <></> : <Err>Please enter a valid email</Err>}

            <Label htmlFor="email">Your location:</Label>
            <Input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={(e) => handleChangeLocation(e)}
              required
            />
            <Label htmlFor="service">Select Service:</Label>
            <Select
              id="service"
              name="service"
              value={formData.service}
              onChange={(e) => handleChangeService(e)}
            >
              <option value="web-development">Web Development</option>
              <option value="mobile-apps">Mobile App Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Social-media">Social Media Management</option>
              <option value="Ict-training">ICT Training</option>
              <option value="Student-ict-training">
                Students ICT Training
              </option>
              <option value="troubleshooting">Troubleshooting</option>
              <option value="network-administration">
                Network Administration
              </option>
              <option value="cloud-computing">Cloud Computing</option>
            </Select>

            <Label htmlFor="message">Your Message:</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChangeDescription(e)}
              required
            />

            <Button type="submit">Submit Request</Button>
          </Form>
        </Container>
      </Parent>
      <Footer />
    </>
  );
}

export default RequestPage;

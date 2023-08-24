import "./RequestPage.scss";

import { useState } from "react";
import styled from "styled-components";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Parent = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3vh 0;
`;

const Container = styled.div`
  background-color: #ffffff;
  padding: 60px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <>
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
              onChange={handleChange}
              required
            />
            <Label htmlFor="phone">Your Phone No:</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <Label htmlFor="email">Your Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Label htmlFor="service">Select Service:</Label>
            <Select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
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
              onChange={handleChange}
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

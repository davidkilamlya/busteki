import "./Plan.scss";

import styled from "styled-components";
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";

// Styled components for the Plans section
const Parent = styled.div`
  display: flex;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PlansSection = styled.section`
  display: flex;
  justify-content: space-around;
  
  padding: 40px;
  gap: 10px;
  background-color: #f8f8f8;
  flex-wrap: wrap;
  
`;

const PlanCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 300px;
  transition: all 0.5s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;

const PlanTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
const PlanPrice = styled.p`
  font-size: 24px;
  color: #007bff;
  margin-bottom: 20px;
`;
const PlanDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
`;

const PlanFeature = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ChoosePlanButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Plan() {
  const navigate=useNavigate()
  const handleClickPlan=(id)=>{
    console.log("redirecting...")
navigate(`/request?service=${id}`)
  }
  return (
    <Parent>
      <Title title={"Busteki/Plans"} id={"packages"} visible />
      <PlansSection>
        <PlanCard>
          <PlanTitle>Basic Plan</PlanTitle>
          <PlanPrice>Tsh 9,000 - 49,200/month</PlanPrice>
          <PlanDescription>
            Perfect for individuals and small businesses.
          </PlanDescription>
          <PlanFeatures>
            <PlanFeature>Website Development</PlanFeature>
            <PlanFeature>Personal Blog and Portfolio Development</PlanFeature>

            <PlanFeature>Technical Support</PlanFeature>
          </PlanFeatures>
          <ChoosePlanButton onClick={()=>handleClickPlan(1)}>
            Choose Plan
          </ChoosePlanButton>
        </PlanCard>

        <PlanCard>
          <PlanTitle>Pro Plan</PlanTitle>
          <PlanPrice>Tsh 28,600 - 78,700/month</PlanPrice>
          <PlanDescription>
            Great for growing businesses and institutions with more needs.
          </PlanDescription>
          <PlanFeatures>
            <PlanFeature>Website & App Development</PlanFeature>
            <PlanFeature>Social Media Management</PlanFeature>
            <PlanFeature>ICT Training</PlanFeature>
            <PlanFeature>24/7 Technical Support</PlanFeature>
          </PlanFeatures>
          <ChoosePlanButton onClick={()=>handleClickPlan(2)}>
            Choose Plan
          </ChoosePlanButton>
        </PlanCard>

        <PlanCard>
          <PlanTitle>Enterprise Plan</PlanTitle>
          <PlanPrice>Tsh 36,200 - 78,700/month</PlanPrice>
          <PlanDescription>
            Custom solutions for large enterprises.
          </PlanDescription>
          <PlanFeatures>
            <PlanFeature>Social Media Management and Marketing</PlanFeature>
            <PlanFeature>Web App and Application Development</PlanFeature>
            <PlanFeature>Search Engine Optimization</PlanFeature>
            <PlanFeature>Enterprise ICT Training</PlanFeature>
          </PlanFeatures>
          <ChoosePlanButton onClick={()=>handleClickPlan(3)}>
            Choose Plan
          </ChoosePlanButton>
        </PlanCard>
        <PlanCard>
          <PlanTitle>Academic Special Plan</PlanTitle>
          <PlanPrice>Contact Us</PlanPrice>
          <PlanDescription>
            Special for academic Institutions. Schools and colleges
          </PlanDescription>
          <PlanFeatures>
            <PlanFeature>Social Media Management and Marketing</PlanFeature>
            <PlanFeature>Computer Course and ICT Training</PlanFeature>
            <PlanFeature>Website and Application Development</PlanFeature>

            <PlanFeature>Students innovation training</PlanFeature>
            <PlanFeature>Search Engine Optimization</PlanFeature>
            <PlanFeature>Students Mentorship</PlanFeature>
            <PlanFeature>Computer Application</PlanFeature>
          </PlanFeatures>
          <ChoosePlanButton onClick={()=>handleClickPlan(4)}>
            Choose Plan
          </ChoosePlanButton>
        </PlanCard>
      </PlansSection>
    </Parent>
  );
}

export default Plan;

import React from "react";
import {
  HomeContainer,
  HomeContainerWrapper,
  HeadingStyle,
  DescriptionStyle,
} from "./HomeStyles";
import patientVideo from "../../assets/patient.mp4";

export function Home() {
  const videoStyle = {
    width: "100%",
    maxWidth: "960px",
    height: "auto",
    borderRadius: "4px",
    pointerEvents: "none",
  };

  return (
    <HomeContainer>
      <HeadingStyle>Empowering Patients Through Knowledge</HeadingStyle>
      <DescriptionStyle>
        Welcome to your personal health journal. Here, you can track your
        medical history, manage your health records, and gain insights into your
        wellness journey. Our platform ensures your data is secure and
        accessible whenever you need it.
      </DescriptionStyle>
      <HomeContainerWrapper>
        <video style={videoStyle} autoPlay loop muted>
          <source src={patientVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </HomeContainerWrapper>
    </HomeContainer>
  );
}
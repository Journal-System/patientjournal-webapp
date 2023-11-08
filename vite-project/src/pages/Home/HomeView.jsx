import React from "react";
import {
  HomeContainer,
  HomeContainerWrapper,
  HeadingStyle,
  DescriptionStyle,
} from "./HomeStyles";
import patientVideo from "../../assets/patient.mp4";

export function Home() {
  // Inline style to disable interaction
  const videoStyle = {
    width: "100%",
    maxWidth: "960px",
    height: "auto",
    borderRadius: "4px",
    pointerEvents: "none", // This prevents the user from interacting with the video
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
        <video
          style={videoStyle}
          autoPlay // This will play the video as soon as it's loaded
          loop // This will loop the video indefinitely
          muted // This will mute the video; necessary for autoplay in most browsers
          playsInline // This can provide a better experience on mobile devices
        >
          <source src={patientVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </HomeContainerWrapper>
    </HomeContainer>
  );
}

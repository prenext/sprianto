import { WelcomeContainer } from "../components/styled/containers/WelcomeContainer.styled";
import { WelcomeBG } from "../components/styled/images/WelcomeBG.styled";
import {
  WelcomeText,
  Paragraph,
  Marked,
} from "../components/styled/text/Texts";
import {
  LeftButton,
  PrimaryButton,
  RightButton,
  SecondaryButton,
} from "../components/styled/buttons/Buttons";
import { Carousel, SpacedColumn, SpacedRow } from "../components/styled/containers/Containers";
import { CarouselImage } from "../components/styled/images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Home() {
  const imageUrls = [
    "https://picsum.photos/1080/1080/?random=house", // Random image with a "house" seed
    "https://picsum.photos/1080/1080/?random=nature", // Random image with a "nature" seed
    "https://picsum.photos/1080/1080/?random?=abstract", // Random image with an "abstract" seed
    "https://picsum.photos/1080/1080/?random?=people", // Random image with a "people" seed
    "https://picsum.photos/1080/1080/?random?=technology", // Random image with a "technology" seed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <WelcomeBG />
      <WelcomeContainer>
        <SpacedColumn>
          <WelcomeText>
            Sprianto IQ <Marked>Biodigester</Marked> solutions
          </WelcomeText>
          <Paragraph>
            Champions a cleaner future by revolutionizing waste management. Our
            advanced biodigester technology
            <Marked> transforms organic waste</Marked>into biogas and organic
            fertilizer, reducing environmental impact and offering economic
            benefits. .
          </Paragraph>
          <SpacedRow>
            <PrimaryButton>Call Us</PrimaryButton>
            <SecondaryButton>Email</SecondaryButton>
          </SpacedRow>
        </SpacedColumn>

        <Carousel>
          <LeftButton onClick={prevSlide}>
            <FontAwesomeIcon icon={"angle-left"} />
          </LeftButton>
          <CarouselImage src={imageUrls[currentIndex]} alt="Carousel Image" />
          <RightButton onClick={nextSlide}>
            <FontAwesomeIcon icon={"angle-right"} />
          </RightButton>
        </Carousel>
      </WelcomeContainer>
    </>
  );
}

export default Home;

import { WelcomeContainer } from "../components/styled/containers/WelcomeContainer.styled";
import { WelcomeBG } from "../components/styled/images/WelcomeBG.styled";
import { WelcomeText, Paragraph, Marked } from "../components/styled/text/Texts";
import { PrimaryButton, SecondaryButton } from "../components/styled/buttons/Buttons";

function Home() {
  return (
    <>
      <WelcomeBG />
      <WelcomeContainer>
        <WelcomeText>
          Sprianto IQ <Marked>Biodigester</Marked> solutions
        </WelcomeText>
        <Paragraph>
          Creating a clean future together, for everyone. By
          <Marked> managing waste</Marked> in a modern way.
        </Paragraph>
        <PrimaryButton>Call Us</PrimaryButton>
        <SecondaryButton>Email</SecondaryButton>
      </WelcomeContainer>
    </>
  );
}

export default Home;

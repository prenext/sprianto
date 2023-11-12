import { WelcomeContainer } from "../components/styled/containers/WelcomeContainer.styled";
import { WelcomeBG } from "../components/styled/images/WelcomeBG.styled";
import { WelcomeText } from "../components/styled/text/WelcomeText.styled";

function Home() {
  return (
    <>
      <WelcomeBG />
      <WelcomeContainer>
        <WelcomeText>
          Sprianto IQ
        </WelcomeText>
      </WelcomeContainer>
    </>
  );
}

export default Home;

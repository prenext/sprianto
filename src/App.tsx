import { GlobalStyle } from "./components/styled/global/Global"
import Header from './components/Header'
import Footer from "./components/Footer"
import Page from "./components/Page"

function App() {

  

  return (
    <GlobalStyle>
      <Header />
      <Page />
      <Footer />
    </GlobalStyle>
  );
}

export default App

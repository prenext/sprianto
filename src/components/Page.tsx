import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageContainer } from "./styled/containers/PageContainer.styled";
import { About, Contact, Customer, Home, Service } from "../pages/Pages";

function Page() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  );
}

export default Page;

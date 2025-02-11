import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import About from './components/About/About';
import Service from './components/Service/Service';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import VisionMission from './components/VisionMission/VisionMission';
import Advantages from './components/Advantages/Advantages';
import { LanguageProvider } from './context/LanguageContext';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  margin-top: 64px;
`;

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <StyledLayout>
        <Navbar />
        <StyledContent>
          <Hero />
          <Features />
          <About />
          <VisionMission />
          <Advantages />
          <Service />
          <Product />
          <Contact />
        </StyledContent>
        <Footer />
      </StyledLayout>
    </LanguageProvider>
  );
};

export default App;
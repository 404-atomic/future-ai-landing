import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import VisionMission from './components/VisionMission/VisionMission';
import Advantages from './components/Advantages/Advantages';
import BlogPreview from './components/BlogPreview/BlogPreview';
import BlogPage from './pages/Blog';
import { LanguageProvider } from './context/LanguageContext';
import { GlobalStyle } from './styles/globalStyles';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  margin-top: 64px;
`;

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <About />
    <VisionMission />
    <Advantages />
    <Service />
    <BlogPreview />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Router>
        <StyledLayout>
          <Navbar />
          <StyledContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPage />} />
            </Routes>
          </StyledContent>
          <Footer />
        </StyledLayout>
      </Router>
    </LanguageProvider>
  );
};

export default App;
import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { CarouselRef } from 'antd/lib/carousel';

const BlogPreviewSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(255,102,0,0.05) 0%, rgba(226,179,62,0.1) 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${theme.colors.text};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.text}99;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CarouselWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;
  
  .ant-carousel .slick-dots-bottom {
    bottom: -30px;
  }
  
  .ant-carousel .slick-dots li button {
    background: ${theme.colors.primary}50;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
  
  .ant-carousel .slick-dots li.slick-active button {
    background: ${theme.colors.primary};
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const PrevButton = styled(NavButton)`
  left: -20px;
  
  @media (max-width: 768px) {
    left: 10px;
  }
`;

const NextButton = styled(NavButton)`
  right: -20px;
  
  @media (max-width: 768px) {
    right: 10px;
  }
`;

const SlideItem = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.01);
  }
  
  @media (max-width: 768px) {
    height: 320px;
  }
`;

const SlideImage = styled.div<{ imageUrl: string }>`
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

const SlideTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SlideExcerpt = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SlideInfo = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
  opacity: 0.7;
`;

const ReadMoreButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.secondary};
  }
`;

const ViewAllButton = styled(Button)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  border: none;
  height: 48px;
  padding: 0 32px;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px ${theme.colors.primary}40;
  }
`;

// Blog post data
const posts = [
  {
    id: 1,
    title: 'How AI is Transforming Industries in Singapore',
    excerpt: 'Discover how AI technologies are revolutionizing multiple sectors across Singapore, from finance to healthcare.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'April 15, 2023',
    author: 'David Chen'
  },
  {
    id: 2,
    title: 'The Future of Machine Learning in Enterprise Solutions',
    excerpt: 'Explore how machine learning algorithms are being integrated into enterprise-level applications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'March 28, 2023',
    author: 'Sarah Wong'
  },
  {
    id: 3,
    title: 'Building Smarter Cities with IoT and AI',
    excerpt: 'Learn how the combination of IoT devices and AI analytics is creating more efficient urban environments.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'March 12, 2023',
    author: 'Michael Tan'
  }
];

const BlogPreview: React.FC = () => {
  const { language } = useLanguage();
  const carouselRef = useRef<CarouselRef>(null);
  const navigate = useNavigate();
  
  const content = {
    en: {
      title: 'Latest Blog Posts',
      subtitle: 'Stay updated with our latest insights and trends in AI technology',
      viewAll: 'View All Posts',
      readTime: 'min read',
      readMore: 'Read More'
    },
    zh: {
      title: '最新博客文章',
      subtitle: '及时了解我们关于人工智能技术的最新见解和趋势',
      viewAll: '查看所有文章',
      readTime: '分钟阅读',
      readMore: '阅读更多'
    }
  };
  
  const handleSlideClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };
  
  return (
    <BlogPreviewSection id="blog">
      <Container>
        <SectionHeader>
          <Title>{content[language].title}</Title>
          <Subtitle>{content[language].subtitle}</Subtitle>
        </SectionHeader>
        
        <CarouselWrapper>
          <PrevButton onClick={() => carouselRef.current?.prev()}>
            <LeftOutlined />
          </PrevButton>
          <NextButton onClick={() => carouselRef.current?.next()}>
            <RightOutlined />
          </NextButton>
          
          <Carousel autoplay effect="fade" ref={carouselRef}>
            {posts.map(post => (
              <div key={post.id}>
                <SlideItem onClick={() => handleSlideClick(post.id)}>
                  <SlideImage imageUrl={post.image} />
                  <SlideContent>
                    <SlideTitle>{post.title}</SlideTitle>
                    <SlideExcerpt>{post.excerpt}</SlideExcerpt>
                    <SlideInfo>
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>5 {content[language].readTime}</span>
                    </SlideInfo>
                    <ReadMoreButton>
                      {content[language].readMore}
                      <RightOutlined />
                    </ReadMoreButton>
                  </SlideContent>
                </SlideItem>
              </div>
            ))}
          </Carousel>
        </CarouselWrapper>
        
        <Link to="/blog">
          <ViewAllButton type="primary" size="large">
            {content[language].viewAll}
            <RightOutlined />
          </ViewAllButton>
        </Link>
      </Container>
    </BlogPreviewSection>
  );
};

export default BlogPreview; 
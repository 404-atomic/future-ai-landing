import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { client, urlFor } from '../../sanity/client';
import { CalendarOutlined, UserOutlined, RightOutlined } from '@ant-design/icons';

// Styled components
const BlogPreviewSection = styled.section`
  padding: 100px 20px;
  background: ${theme.colors.background};
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.text}99;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const BlogImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${theme.colors.text};
  line-height: 1.4;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
  color: ${theme.colors.text}77;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const BlogExcerpt = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.text}99;
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
`;

const ReadMoreLink = styled(Link)`
  color: ${theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const ViewAllButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ViewAllButton = styled(Button)`
  background: ${theme.colors.primary};
  border-color: ${theme.colors.primary};
  padding: 0 30px;
  height: 44px;
  font-size: 1rem;
  
  &:hover {
    background: ${theme.colors.secondary};
    border-color: ${theme.colors.secondary};
  }
`;

// Fetch the latest 3 blog posts from Sanity
const POSTS_QUERY = `*[_type == "post"] | order(date desc)[0...3]{
  _id,
  title,
  excerpt,
  image,
  date,
  author,
  tags
}`;

// Interface for Sanity post
interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  image?: any;
  date: string;
  author: string;
  tags?: string;
}

const BlogPreview: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch<Post[]>(POSTS_QUERY);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to load blog posts. Please check your Sanity configuration.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  const content = {
    en: {
      heading: 'Latest Blog Posts',
      subheading: 'Stay updated with the latest insights, news, and trends in AI and technology.',
      viewAll: 'View All Posts',
      readMore: 'Read More',
      loading: 'Loading blog posts...',
      noPosts: 'No blog posts found.',
      error: "Failed to load blog preview. Please check your Sanity configuration."
    },
    zh: {
      heading: '最新博客文章',
      subheading: '了解人工智能和技术的最新见解、新闻和趋势。',
      viewAll: '查看所有文章',
      readMore: '阅读更多',
      loading: '加载博客文章...',
      noPosts: '未找到博客文章。',
      error: "加载博客预览失败。请检查您的Sanity配置。"
    }
  };
  
  if (loading) {
    return (
      <BlogPreviewSection>
        <Container>
          <SectionHeader>
            <Title>{content[language].heading}</Title>
            <Subtitle>{content[language].loading}</Subtitle>
          </SectionHeader>
        </Container>
      </BlogPreviewSection>
    );
  }
  
  if (error) {
    return (
      <BlogPreviewSection>
        <Container>
          <SectionHeader>
            <Title>{content[language].heading}</Title>
            <Subtitle style={{ color: '#f5222d' }}>{error}</Subtitle>
          </SectionHeader>
        </Container>
      </BlogPreviewSection>
    );
  }
  
  if (posts.length === 0) {
    return (
      <BlogPreviewSection>
        <Container>
          <SectionHeader>
            <Title>{content[language].heading}</Title>
            <Subtitle>{content[language].noPosts}</Subtitle>
          </SectionHeader>
        </Container>
      </BlogPreviewSection>
    );
  }
  
  return (
    <BlogPreviewSection>
      <Container>
        <SectionHeader>
          <Title>{content[language].heading}</Title>
          <Subtitle>{content[language].subheading}</Subtitle>
        </SectionHeader>
        
        <BlogGrid>
          {posts.map((post) => (
            <BlogCard 
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BlogImage 
                imageUrl={post.image ? urlFor(post.image).width(400).height(200).url() : 'https://via.placeholder.com/400x200'}
              />
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <MetaInfo>
                  <MetaItem>
                    <CalendarOutlined /> {new Date(post.date).toLocaleDateString()}
                  </MetaItem>
                  <MetaItem>
                    <UserOutlined /> {post.author}
                  </MetaItem>
                </MetaInfo>
                {post.excerpt && <BlogExcerpt>{post.excerpt}</BlogExcerpt>}
                <ReadMoreLink to={`/blog/${post._id}`}>
                  {content[language].readMore} <RightOutlined />
                </ReadMoreLink>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
        
        <ViewAllButtonContainer>
          <ViewAllButton 
            type="primary" 
            onClick={() => navigate('/blog')}
          >
            {content[language].viewAll}
          </ViewAllButton>
        </ViewAllButtonContainer>
      </Container>
    </BlogPreviewSection>
  );
};

export default BlogPreview; 
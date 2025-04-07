import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { client, urlFor } from '../../sanity/client';
import { CalendarOutlined, UserOutlined, TagOutlined } from '@ant-design/icons';

// Styled components
const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  
  @media (max-width: 768px) {
    padding: 100px 20px 60px;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text}99;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  
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
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const BlogImage = styled.div<{ imageUrl: string }>`
  height: 220px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 25px;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${theme.colors.text};
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text}99;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 0.85rem;
  color: ${theme.colors.text}77;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 0;
  color: ${theme.colors.primary};
  font-weight: 500;
  position: relative;
  text-decoration: none;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Featured = styled.div`
  position: relative;
  margin-bottom: 60px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const FeaturedContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const FeaturedImage = styled.div<{ imageUrl: string }>`
  height: 500px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const FeaturedTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FeaturedExcerpt = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  opacity: 0.9;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeaturedButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: ${theme.colors.primary};
  color: white;
  font-weight: 500;
  border-radius: 30px;
  text-decoration: none;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${theme.colors.secondary};
  }
`;

const FeaturedMeta = styled(MetaContainer)`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

// Interface for Sanity post
interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  image?: any;
  date: string;
  author: string;
  tags?: string;
  featured?: boolean;
}

const BlogPage: React.FC = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // GROQ query to fetch all posts
        const query = `*[_type == "post"] | order(date desc) {
          _id,
          title,
          excerpt,
          image,
          date,
          author,
          tags,
          featured
        }`;
        
        const fetchedPosts = await client.fetch<Post[]>(query);
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
  
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);
  
  const content = {
    en: {
      heading: 'Our Blog',
      subheading: 'Stay updated with the latest insights, news, and trends in AI and technology innovation.',
      readMore: 'Read More',
      featuredButton: 'Read Featured Article',
      loading: 'Loading posts...',
      error: "Failed to load blog posts. Please check your Sanity configuration."
    },
    zh: {
      heading: '我们的博客',
      subheading: '及时了解人工智能和技术创新方面的最新见解、新闻和趋势。',
      readMore: '阅读更多',
      featuredButton: '阅读精选文章',
      loading: '加载文章...',
      error: "加载博客文章失败。请检查您的Sanity配置。"
    }
  };
  
  if (loading) {
    return (
      <BlogContainer>
        <PageHeader>
          <Heading>{content[language].heading}</Heading>
          <Subheading>{content[language].loading}</Subheading>
        </PageHeader>
      </BlogContainer>
    );
  }
  
  if (error) {
    return (
      <BlogContainer>
        <PageHeader>
          <Heading>{content[language].heading}</Heading>
          <Subheading style={{ color: '#f5222d' }}>{error}</Subheading>
        </PageHeader>
      </BlogContainer>
    );
  }
  
  return (
    <BlogContainer>
      <PageHeader>
        <Heading>{content[language].heading}</Heading>
        <Subheading>{content[language].subheading}</Subheading>
      </PageHeader>
      
      {featuredPost && (
        <Featured>
          <FeaturedImage 
            imageUrl={featuredPost.image ? urlFor(featuredPost.image).width(1200).height(500).url() : 'https://via.placeholder.com/1200x500'} 
          />
          <FeaturedContent>
            <FeaturedMeta>
              <MetaItem>
                <CalendarOutlined /> {new Date(featuredPost.date).toLocaleDateString()}
              </MetaItem>
              <MetaItem>
                <UserOutlined /> {featuredPost.author}
              </MetaItem>
              {featuredPost.tags && (
                <MetaItem>
                  <TagOutlined /> {featuredPost.tags}
                </MetaItem>
              )}
            </FeaturedMeta>
            <FeaturedTitle>{featuredPost.title}</FeaturedTitle>
            {featuredPost.excerpt && <FeaturedExcerpt>{featuredPost.excerpt}</FeaturedExcerpt>}
            <FeaturedButton href={`/blog/${featuredPost._id}`}>
              {content[language].featuredButton}
            </FeaturedButton>
          </FeaturedContent>
        </Featured>
      )}
      
      <BlogGrid>
        {regularPosts.map(post => (
          <BlogCard 
            key={post._id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BlogImage 
              imageUrl={post.image ? urlFor(post.image).width(400).height(220).url() : 'https://via.placeholder.com/400x220'} 
            />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <MetaContainer>
                <MetaItem>
                  <CalendarOutlined /> {new Date(post.date).toLocaleDateString()}
                </MetaItem>
                <MetaItem>
                  <UserOutlined /> {post.author}
                </MetaItem>
                {post.tags && (
                  <MetaItem>
                    <TagOutlined /> {post.tags}
                  </MetaItem>
                )}
              </MetaContainer>
              {post.excerpt && <BlogExcerpt>{post.excerpt}</BlogExcerpt>}
              <ReadMoreButton href={`/blog/${post._id}`}>
                {content[language].readMore}
              </ReadMoreButton>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogPage; 
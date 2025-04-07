import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { client, urlFor } from '../../sanity/client';
import { CalendarOutlined, UserOutlined, TagOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { PortableText } from '@portabletext/react';

// Styled components
const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  
  @media (max-width: 768px) {
    padding: 100px 20px 60px;
  }
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${theme.colors.primary};
  margin-bottom: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 0.95rem;
  color: ${theme.colors.text}99;
  margin-bottom: 30px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${theme.colors.text};
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: underline;
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
`;

const LoadingMessage = styled.div`
  font-size: 1.2rem;
  color: ${theme.colors.text}99;
  text-align: center;
  margin-top: 50px;
`;

const ErrorMessage = styled.div`
  font-size: 1.2rem;
  color: #e53e3e;
  text-align: center;
  margin-top: 50px;
`;

interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  image?: any;
  date: string;
  author: string;
  tags?: string;
  body?: any;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!id) {
          setError('Post ID is missing');
          setLoading(false);
          return;
        }
        
        // GROQ query to fetch a single post by ID
        const query = `*[_type == "post" && _id == $id][0]{
          _id,
          title,
          excerpt,
          image,
          date,
          author,
          tags,
          body
        }`;
        
        const fetchedPost = await client.fetch<Post>(query, { id });
        
        if (!fetchedPost) {
          setError('Post not found');
        } else {
          setPost(fetchedPost);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [id]);
  
  const content = {
    en: {
      back: 'Back to Blog',
      loading: 'Loading post...',
      error: 'Error loading post',
      notFound: 'Post not found'
    },
    zh: {
      back: '返回博客',
      loading: '加载文章...',
      error: '加载文章失败',
      notFound: '未找到文章'
    }
  };
  
  if (loading) {
    return (
      <BlogPostContainer>
        <LoadingMessage>{content[language].loading}</LoadingMessage>
      </BlogPostContainer>
    );
  }
  
  if (error || !post) {
    return (
      <BlogPostContainer>
        <BackLink to="/blog">
          <ArrowLeftOutlined /> {content[language].back}
        </BackLink>
        <ErrorMessage>
          {error || content[language].notFound}
        </ErrorMessage>
      </BlogPostContainer>
    );
  }
  
  return (
    <BlogPostContainer>
      <BackLink to="/blog">
        <ArrowLeftOutlined /> {content[language].back}
      </BackLink>
      
      {post.image && (
        <FeaturedImage 
          src={urlFor(post.image).width(800).url()} 
          alt={post.title} 
        />
      )}
      
      <Title>{post.title}</Title>
      
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
      
      <Content>
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          post.excerpt
        )}
      </Content>
    </BlogPostContainer>
  );
};

export default BlogPost; 
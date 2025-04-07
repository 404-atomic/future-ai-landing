import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
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

// Blog post data
const posts = [
  {
    id: 1,
    title: 'How AI is Transforming Industries in Singapore',
    excerpt: 'Discover how AI technologies are revolutionizing multiple sectors across Singapore, from finance to healthcare.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'April 15, 2023',
    author: 'David Chen',
    tags: 'AI, Industry',
    featured: true
  },
  {
    id: 2,
    title: 'The Future of Machine Learning in Enterprise Solutions',
    excerpt: 'Explore how machine learning algorithms are being integrated into enterprise-level applications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'March 28, 2023',
    author: 'Sarah Wong',
    tags: 'Machine Learning, Enterprise'
  },
  {
    id: 3,
    title: 'Building Smarter Cities with IoT and AI',
    excerpt: 'Learn how the combination of IoT devices and AI analytics is creating more efficient urban environments.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'March 12, 2023',
    author: 'Michael Tan',
    tags: 'Smart Cities, IoT'
  },
  {
    id: 4,
    title: 'Ethical Considerations in AI Development',
    excerpt: 'Addressing the important ethical questions that arise as AI becomes more prevalent in society.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'February 25, 2023',
    author: 'Lisa Johnson',
    tags: 'Ethics, AI'
  },
  {
    id: 5,
    title: 'The Role of Data Science in Modern Business Strategy',
    excerpt: 'How data-driven decision making is becoming central to successful business strategies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'February 10, 2023',
    author: 'Robert Zhang',
    tags: 'Data Science, Business'
  },
  {
    id: 6,
    title: 'Natural Language Processing: Advances and Applications',
    excerpt: 'Recent breakthroughs in NLP and how they are being applied in various domains.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'January 30, 2023',
    author: 'Emily Lim',
    tags: 'NLP, AI Applications'
  }
];

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  tags: string;
  featured?: boolean;
}

const BlogPage: React.FC = () => {
  const { language } = useLanguage();
  const featuredPost = posts.find(post => post.featured) as Post;
  const regularPosts = posts.filter(post => !post.featured);
  
  const content = {
    en: {
      heading: 'Our Blog',
      subheading: 'Stay updated with the latest insights, news, and trends in AI and technology innovation.',
      readMore: 'Read More',
      featuredButton: 'Read Featured Article'
    },
    zh: {
      heading: '我们的博客',
      subheading: '及时了解人工智能和技术创新方面的最新见解、新闻和趋势。',
      readMore: '阅读更多',
      featuredButton: '阅读精选文章'
    }
  };
  
  return (
    <BlogContainer>
      <PageHeader>
        <Heading>{content[language].heading}</Heading>
        <Subheading>{content[language].subheading}</Subheading>
      </PageHeader>
      
      {featuredPost && (
        <Featured>
          <FeaturedImage imageUrl={featuredPost.image} />
          <FeaturedContent>
            <FeaturedMeta>
              <MetaItem>
                <CalendarOutlined /> {featuredPost.date}
              </MetaItem>
              <MetaItem>
                <UserOutlined /> {featuredPost.author}
              </MetaItem>
              <MetaItem>
                <TagOutlined /> {featuredPost.tags}
              </MetaItem>
            </FeaturedMeta>
            <FeaturedTitle>{featuredPost.title}</FeaturedTitle>
            <FeaturedExcerpt>{featuredPost.excerpt}</FeaturedExcerpt>
            <FeaturedButton href={`/blog/${featuredPost.id}`}>
              {content[language].featuredButton}
            </FeaturedButton>
          </FeaturedContent>
        </Featured>
      )}
      
      <BlogGrid>
        {regularPosts.map(post => (
          <BlogCard 
            key={post.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BlogImage imageUrl={post.image} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <MetaContainer>
                <MetaItem>
                  <CalendarOutlined /> {post.date}
                </MetaItem>
                <MetaItem>
                  <UserOutlined /> {post.author}
                </MetaItem>
                <MetaItem>
                  <TagOutlined /> {post.tags}
                </MetaItem>
              </MetaContainer>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMoreButton href={`/blog/${post.id}`}>
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
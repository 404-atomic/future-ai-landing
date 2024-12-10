import React from 'react';
import { Form, Input, Button, message } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  CustomerServiceOutlined,
  NotificationOutlined,
  TeamOutlined,
  SendOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';

const { TextArea } = Input;

const ContactSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #fff6f0 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${theme.colors.primary};
  font-size: 2.8rem;
  margin-bottom: 60px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${theme.colors.primary};
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactBlock = styled(motion.div)`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .anticon {
    font-size: 1.25rem;
    color: ${theme.colors.primary};
    margin-right: 16px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  
  .content {
    h4 {
      color: #333;
      font-size: 1.1rem;
      margin-bottom: 4px;
      line-height: 1.2;
    }
    
    p {
      color: #666;
      font-size: 1rem;
      margin: 0;
      line-height: 1.5;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      
      &:hover {
        color: ${theme.colors.secondary};
      }
    }
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    color: #333;
    font-size: 1rem;
  }

  .ant-input,
  .ant-input-textarea {
    border-radius: 6px;
    border-color: #ddd;
    padding: 8px 12px;
    
    &:hover,
    &:focus {
      border-color: ${theme.colors.primary};
      box-shadow: none;
    }
  }

  .ant-form-item {
    margin-bottom: 24px;
  }

  .submit-btn {
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
    border: none;
    height: 48px;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }


  }
`;

export const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    message.success('Thank you for your message. We will get back to you soon!');
    form.resetFields();
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactGrid>
          <ContactBlock
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            <ContactItem>
              <MailOutlined />
              <div className="content">
                <h4>Business Inquiries</h4>
                <p><a href="mailto:business@futureaihub.sg">business@futureaihub.sg</a></p>
              </div>
            </ContactItem>
            <ContactItem>
              <PhoneOutlined />
              <div className="content">
                <h4>Phone</h4>
                <p><a href="tel:+6512345678">+65 1234 5678</a></p>
              </div>
            </ContactItem>
            <ContactItem>
              <EnvironmentOutlined />
              <div className="content">
                <h4>Address</h4>
                <p>Singapore Central Business District</p>
              </div>
            </ContactItem>
            <ContactItem>
              <GlobalOutlined />
              <div className="content">
                <h4>Company Website</h4>
                <p><a href="https://futureaihub.sg" target="_blank" rel="noopener noreferrer">futureaihub.sg</a></p>
              </div>
            </ContactItem>
            <ContactItem>
              <CustomerServiceOutlined />
              <div className="content">
                <h4>User Support</h4>
                <p><a href="mailto:support@careermateai.xyz">support@careermateai.xyz</a></p>
              </div>
            </ContactItem>
            <ContactItem>
              <NotificationOutlined />
              <div className="content">
                <h4>Media Inquiries</h4>
                <p><a href="mailto:media@futureaihub.sg">media@futureaihub.sg</a></p>
              </div>
            </ContactItem>
            <ContactItem>
              <TeamOutlined />
              <div className="content">
                <h4>Join Us</h4>
                <p><a href="mailto:careers@futureaihub.sg">careers@futureaihub.sg</a></p>
              </div>
            </ContactItem>
          </ContactBlock>

          <ContactBlock
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Send Us a Message</h3>
            <StyledForm
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="Your email" />
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input placeholder="Message subject" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  placeholder="Your message"
                  rows={4}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="submit-btn">
                  <SendOutlined style={{ marginRight: 8 }} />
                  Send Message
                </Button>
              </Form.Item>
            </StyledForm>
          </ContactBlock>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;

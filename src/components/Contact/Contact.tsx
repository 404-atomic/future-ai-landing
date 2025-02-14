import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { SendOutlined, MessageOutlined, MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { contactContent } from './content';

const { TextArea } = Input;

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #fff6f0 0%, #fff 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const InfoSection = styled.div`
  text-align: left;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  h2 {
    font-size: 2.5rem;
    margin: 20px 0;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.text};
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .anticon {
    font-size: 28px;
    color: white;
  }
`;

const FormSection = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  .ant-form-item {
    margin-bottom: 24px;
  }

  .ant-input {
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #eef1f6;
    transition: all 0.3s ease;
    font-size: 1rem;

    &:hover, &:focus {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 2px ${theme.colors.primary}20;
    }
  }

  .ant-input-textarea {
    .ant-input {
      min-height: 120px;
    }
  }

  .ant-form-item-label {
    padding-bottom: 8px;
    
    label {
      font-size: 1rem;
      color: ${theme.colors.text};
      font-weight: 500;
    }
  }

  button {
    width: 100%;
    height: auto;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 10px;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border: none;
    box-shadow: 0 4px 15px ${theme.colors.primary}40;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px ${theme.colors.primary}60;
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${theme.colors.primary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${theme.colors.primary}60;
    color: white;
  }

  &:active {
    transform: translateY(0);
  }

  .anticon {
    font-size: 1.2em;
  }
`;

export const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const { language } = useLanguage();
  const content = contactContent[language];

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    message.success(content.form.success);
    form.resetFields();
  };

  return (
    <ContactSection id="contact">
      <Container>
        <InfoSection>
          <IconContainer>
            <MessageOutlined />
          </IconContainer>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <EmailButton 
            href="mailto:contact@futureai.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MailOutlined />
            {content.emailButton}
          </EmailButton>
        </InfoSection>

        <FormSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="name"
              label={content.form.name.label}
              rules={[{ required: true, message: content.form.name.error }]}
            >
              <Input placeholder={content.form.name.placeholder} />
            </Form.Item>

            <Form.Item
              name="email"
              label={content.form.email.label}
              rules={[
                { required: true, message: content.form.email.error },
                { type: 'email', message: content.form.email.invalidError }
              ]}
            >
              <Input placeholder={content.form.email.placeholder} />
            </Form.Item>

            <Form.Item
              name="message"
              label={content.form.message.label}
              rules={[{ required: true, message: content.form.message.error }]}
            >
              <TextArea rows={4} placeholder={content.form.message.placeholder} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {content.form.submit}
                <SendOutlined />
              </Button>
            </Form.Item>
          </Form>
        </FormSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;

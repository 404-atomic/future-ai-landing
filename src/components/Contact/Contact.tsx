import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { SendOutlined, MessageOutlined, WhatsAppOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { contactContent } from './content';

const { TextArea } = Input;

const ContactSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #fff 0%, #fff6f0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const InfoSection = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${theme.colors.text};
    opacity: 0.8;
    margin-bottom: 30px;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 40px;
  svg {
    font-size: 48px;
    color: ${theme.colors.primary};
  }
`;

const FormSection = styled(motion.div)`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
`;

const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    color: ${theme.colors.text};
    font-size: 1rem;
    opacity: 0.8;
  }

  .ant-input,
  .ant-input-textarea {
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    font-size: 1rem;
    
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
    background: ${theme.colors.primary};
    border: none;
    height: 48px;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      background: ${theme.colors.secondary};
      transform: translateY(-2px);
    }

    .anticon {
      font-size: 1.2rem;
    }
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: ${theme.colors.primary};
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid ${theme.colors.primary};

  &:hover {
    transform: translateY(-2px);
    background: ${theme.colors.primary};
    color: white;
  }

  .anticon {
    font-size: 1.2rem;
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
          <WhatsAppButton 
            href="https://wa.me/6512345678" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined />
            {content.whatsappButton}
          </WhatsAppButton>
        </InfoSection>

        <FormSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StyledForm
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
              <Button type="primary" htmlType="submit" className="submit-btn">
                {content.form.submit}
                <SendOutlined />
              </Button>
            </Form.Item>
          </StyledForm>
        </FormSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;

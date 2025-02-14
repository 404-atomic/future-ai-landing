export const contactContent = {
  en: {
    title: 'Get in Touch',
    description: 'Have questions about our services? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    whatsappButton: 'WhatsApp us now',
    emailButton: 'Send us an email',
    form: {
      name: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        error: 'Please enter your name'
      },
      email: {
        label: 'Email Address',
        placeholder: 'Enter your email address',
        error: 'Please enter your email',
        invalidError: 'Please enter a valid email'
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us about your project or question...',
        error: 'Please enter your message'
      },
      submit: 'Send Message',
      success: 'Message sent successfully! We\'ll get back to you soon.'
    }
  },
  zh: {
    title: '联系我们',
    description: '对我们的服务有疑问？我们很乐意倾听您的想法。发送消息给我们，我们会尽快回复。',
    whatsappButton: '立即通过WhatsApp联系',
    emailButton: '发送邮件',
    form: {
      name: {
        label: '姓名',
        placeholder: '请输入您的姓名',
        error: '请输入姓名'
      },
      email: {
        label: '邮箱地址',
        placeholder: '请输入您的邮箱地址',
        error: '请输入邮箱',
        invalidError: '请输入有效的邮箱地址'
      },
      message: {
        label: '留言内容',
        placeholder: '请告诉我们您的项目或问题...',
        error: '请输入留言内容'
      },
      submit: '发送消息',
      success: '消息发送成功！我们会尽快回复您。'
    }
  }
} as const;

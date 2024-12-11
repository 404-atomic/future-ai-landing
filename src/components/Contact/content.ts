export const contactContent = {
  en: {
    title: 'Live chat support',
    description: 'Have questions or need a hand? We\'re here to help. Reach our friendly (real human), creator-obsessed support team via live chat or email.',
    whatsappButton: 'WhatsApp us now',
    form: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
        error: 'Please enter your name'
      },
      email: {
        label: 'Email',
        placeholder: 'Your email address',
        error: 'Please enter your email',
        invalidError: 'Please enter a valid email'
      },
      message: {
        label: 'Message',
        placeholder: 'How can we help you?',
        error: 'Please enter your message'
      },
      submit: 'Send message',
      success: 'Thank you for your message. We will get back to you soon!'
    }
  },
  zh: {
    title: '在线客服支持',
    description: '有问题需要帮助？我们随时为您服务。通过在线聊天或电子邮件联系我们友善的（真人）、专注于创作者的支持团队。',
    whatsappButton: '立即通过WhatsApp联系',
    form: {
      name: {
        label: '姓名',
        placeholder: '请输入您的姓名',
        error: '请输入姓名'
      },
      email: {
        label: '电子邮箱',
        placeholder: '请输入您的电子邮箱',
        error: '请输入电子邮箱',
        invalidError: '请输入有效的电子邮箱'
      },
      message: {
        label: '留言',
        placeholder: '我们能为您做些什么？',
        error: '请输入留言内容'
      },
      submit: '发送消息',
      success: '感谢您的留言，我们会尽快回复！'
    }
  }
} as const;

export const aboutContent = {
  en: {
    title: 'About Us',
    subtitle: 'Empowering businesses with innovative AI solutions',
    description: 'We help organizations leverage artificial intelligence to transform their operations and drive sustainable growth.',
    paragraphs: [
      'Headquartered in Singapore, a global leader in fintech innovation, FutureAI Hub stands at the forefront of AI advancement and enterprise intelligence solutions.\nOur flagship initiative, "Transforming Careers Through AI," represents our commitment to revolutionizing professional development in Singapore through cutting-edge AI technology.\nBeyond career development, we specialize in comprehensive enterprise AI solutions, offering expert technical consultation, customized solution architecture, and end-to-end implementation support for business transformation.\nAs an energetic startup powered by innovation and expertise, we are committed to driving Singapore\'s AI revolution through practical, results-driven solutions.',
    ],
    imageAlt: 'FutureAI Hub Team'
  },
  zh: {
    title: '关于我们',
    subtitle: '以创新AI解决方案赋能企业',
    description: '我们帮助企业利用人工智能技术转型升级，实现可持续发展。',
    paragraphs: [
      'FutureAI Hub诞生于全球金融科技中心新加坡，是一家充满活力的专注于AI创新应用与企业智能化服务的创新型创业企业。\n我们同时以"用AI重塑职业发展"为核心目标，致力于通过AI技术为新加坡职场人士提供智能化的职业发展服务。\n我们还将专注于企业AI解决方案，为企业通过AI转型进行技术咨询、方案设计以及实施支持，创造行业创新应用示范。\n作为一支年轻且富有激情的创业团队，我们希望立足新加坡，通过务实的服务以及创新的解决方案，成为推动新加坡本土AI创新的重要力量。',
    ],
    imageAlt: 'FutureAI Hub 团队'
  }
} as const;

export type AboutContent = typeof aboutContent;

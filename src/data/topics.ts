export type Topic = {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  figure: string;
  accent: 'teal' | 'violet' | 'gold' | 'accent';
};

export const topics: Topic[] = [
  {
    slug: 'consent-boundaries',
    title: '同意与边界',
    summary: '把同意当成持续沟通，而不是一次性开关。',
    readTime: '7 分钟',
    figure: '/images/consent-loop.svg',
    accent: 'teal',
  },
  {
    slug: 'contraception',
    title: '避孕与选择',
    summary: '四类常见方法的作用、限制和决策问题清单。',
    readTime: '10 分钟',
    figure: '/images/contraception-map.svg',
    accent: 'violet',
  },
  {
    slug: 'sti-prevention',
    title: '性传播感染与检测',
    summary: '无症状不等于无风险，检测与复诊安排说明。',
    readTime: '9 分钟',
    figure: '/images/sti-prevention.svg',
    accent: 'gold',
  },
  {
    slug: 'body-literacy',
    title: '身体与生理基础',
    summary: '正常差异、疼痛信号和需要就医的时机。',
    readTime: '10 分钟',
    figure: '/images/body-map.svg',
    accent: 'accent',
  },
  {
    slug: 'menstrual-health',
    title: '月经与周期',
    summary: '周期不是钟表，记录方式和就医信号怎么判断。',
    readTime: '8 分钟',
    figure: '/images/cycle-map.svg',
    accent: 'teal',
  },
  {
    slug: 'puberty',
    title: '青春期与成长',
    summary: '没有统一时间表的身体与情绪变化。',
    readTime: '8 分钟',
    figure: '/images/puberty-map.svg',
    accent: 'violet',
  },
  {
    slug: 'emergency-contraception',
    title: '紧急避孕',
    summary: '无保护性行为后的时间线、误区和随访。',
    readTime: '7 分钟',
    figure: '/images/emergency-contraception.svg',
    accent: 'gold',
  },
  {
    slug: 'sexual-orientation',
    title: '性取向与自我认同',
    summary: '标签是工具，隐私、披露和支持更重要。',
    readTime: '7 分钟',
    figure: '/images/orientation-map.svg',
    accent: 'accent',
  },
  {
    slug: 'digital-safety',
    title: '线上互动与隐私安全',
    summary: '影像、聊天记录和被威胁时的求助路径。',
    readTime: '7 分钟',
    figure: '/images/digital-safety.svg',
    accent: 'teal',
  },
];

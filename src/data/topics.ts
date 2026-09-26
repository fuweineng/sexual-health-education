export type Topic = {
  slug: string;
  href: string;
  title: string;
  enTitle: string;
  summary: string;
  readTime: string;
  figure?: string;
  accent: 'teal' | 'violet' | 'gold' | 'accent';
};

export const topics: Topic[] = [
  {
    slug: 'human-reproductive-system',
    href: '/main/human-reproductive-system/',
    title: '人类生殖系统',
    enTitle: 'Human Reproductive System',
    summary: '从结构、功能和发育开始的系统入门。',
    readTime: '10 分钟',
    figure: '/images/real/body-repro-system.avif',
    accent: 'accent',
  },
  {
    slug: 'puberty-and-adolescence',
    href: '/main/puberty-and-adolescence/',
    title: '青春期与成长',
    enTitle: 'Puberty and Adolescence',
    summary: '没有统一时间表的身体与情绪变化。',
    readTime: '8 分钟',
    figure: '/images/real/puberty-students.avif',
    accent: 'violet',
  },
  {
    slug: 'menstrual-cycle',
    href: '/main/menstrual-cycle/',
    title: '月经周期',
    enTitle: 'Menstrual Cycle',
    summary: '周期不是钟表，记录方式和就医信号怎么判断。',
    readTime: '8 分钟',
    figure: '/images/real/cycle-hormone-zh.avif',
    accent: 'teal',
  },
  {
    slug: 'sexual-activity',
    href: '/main/sexual-activity/',
    title: '性行为与同意',
    enTitle: 'Sexual Activity and Consent',
    summary: '把同意当成持续沟通，而不是一次性开关。',
    readTime: '7 分钟',
    figure: '/images/real/consent-talk.avif',
    accent: 'teal',
  },
  {
    slug: 'sexual-physiology',
    href: '/main/sexual-physiology/',
    title: '性生理',
    enTitle: 'Sexual Physiology',
    summary: '身体如何反应，以及个体差异有多大。',
    readTime: '8 分钟',
    figure: '/images/real/physiology-cover.avif',
    accent: 'gold',
  },
  {
    slug: 'sexual-orientation',
    href: '/main/sexual-orientation/',
    title: '性取向与自我认同',
    enTitle: 'Sexual Orientation',
    summary: '标签是工具，隐私、披露和支持更重要。',
    readTime: '7 分钟',
    figure: '/images/real/orientation-flag.avif',
    accent: 'accent',
  },
  {
    slug: 'contraception',
    href: '/main/contraception/',
    title: '避孕与选择',
    enTitle: 'Contraception',
    summary: '常见方法的作用、限制和决策问题清单。',
    readTime: '10 分钟',
    figure: '/images/real/contraception-pills.avif',
    accent: 'violet',
  },
  {
    slug: 'std',
    href: '/main/std/',
    title: '性传播疾病',
    enTitle: 'Sexually Transmitted Diseases',
    summary: '无症状不等于无风险，检测与复诊安排说明。',
    readTime: '9 分钟',
    figure: '/images/real/sti-hiv-kit.avif',
    accent: 'gold',
  },
  {
    slug: 'sex-and-information',
    href: '/main/sex-and-information/',
    title: '性与信息',
    enTitle: 'Sex and Information',
    summary: '如何判断一条性健康说法是否可靠。',
    readTime: '8 分钟',
    figure: '/images/real/info-books.avif',
    accent: 'teal',
  },
  {
    slug: 'other-media',
    href: '/main/other-media/',
    title: '其他媒体',
    enTitle: 'Other Media',
    summary: '可靠资料的获取渠道与素材使用规范。',
    readTime: '6 分钟',
    figure: '/images/real/resources-paper.avif',
    accent: 'accent',
  },
];

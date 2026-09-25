export type Topic = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  readTime: string;
  accent: string;
};

export const topics: Topic[] = [
  {
    slug: 'consent-boundaries',
    title: '同意与边界',
    summary: '把“好吗”变成持续、明确而可以随时收回的沟通。',
    description: '了解同意、边界和撤回同意的基本原则。',
    readTime: '6 分钟',
    accent: 'coral',
  },
  {
    slug: 'contraception',
    title: '避孕与知情选择',
    summary: '从需求、有效性到副作用，建立自己的决策框架。',
    description: '介绍常见避孕方式的基本原理、选择思路与就医提示。',
    readTime: '8 分钟',
    accent: 'teal',
  },
  {
    slug: 'sti-prevention',
    title: '性传播感染与检测',
    summary: '感染、症状、检测窗口与预防，风险信息一次讲清。',
    description: '了解常见性传播感染的预防、检测和就医注意事项。',
    readTime: '7 分钟',
    accent: 'violet',
  },
  {
    slug: 'body-literacy',
    title: '身体与生理基础',
    summary: '身体不是考试题，先从了解正常差异开始。',
    description: '介绍青春期、月经周期和身体感受的基本科普知识。',
    readTime: '9 分钟',
    accent: 'gold',
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

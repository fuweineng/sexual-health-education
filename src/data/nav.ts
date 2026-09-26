export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const mainLinks: NavLink[] = [
  { label: '人类生殖系统', href: '/main/human-reproductive-system/' },
  { label: '青春期', href: '/main/puberty-and-adolescence/' },
  { label: '月经周期', href: '/main/menstrual-cycle/' },
  { label: '性行为', href: '/main/sexual-activity/' },
  { label: '亲密关系', href: '/main/relationships/' },
  { label: '性暴力与求助', href: '/main/sexual-violence-and-help/' },
  { label: '性生理', href: '/main/sexual-physiology/' },
  { label: '性取向', href: '/main/sexual-orientation/' },
  { label: '社会性别与认同', href: '/main/gender-and-identity/' },
  { label: '避孕', href: '/main/contraception/' },
  { label: '怀孕与生育', href: '/main/pregnancy-and-fertility/' },
  {
    label: '性传播疾病',
    href: '/main/std/',
    children: [
      { label: '艾滋病', href: '/main/std/aids/' },
      { label: '梅毒', href: '/main/std/syphilis/' },
      { label: '淋病', href: '/main/std/gonorrhea/' },
      { label: '生殖器疣', href: '/main/std/genital-wart/' },
    ],
  },
  { label: '性健康服务', href: '/main/sexual-health-services/' },
  { label: '性与信息', href: '/main/sex-and-information/' },
  { label: '其他媒体', href: '/main/other-media/' },
];

export const siteLinks: NavLink[] = [
  { label: '版权许可', href: '/general/copyright/' },
];

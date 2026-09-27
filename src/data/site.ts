export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  note?: string;
  placeholder?: boolean;
}

export const site = {
  name: 'Zedong Li',
  nameZh: '李泽东',
  role: 'Lecturer',
  institution: 'College of Artificial Intelligence, Taiyuan University of Technology',
  laboratory: 'Shanxi Key Laboratory of Industrial Internet Security',
  location: 'Taiyuan, Shanxi, China',
  email: 'lizedong@tyut.edu.cn',
  description:
    'Academic homepage of Zedong Li, Lecturer at Taiyuan University of Technology.',
  tagline:
    'Exploring secure and intelligent systems at the intersection of cyberspace and the physical world.',
  about:
    'I am a lecturer at the College of Artificial Intelligence, Taiyuan University of Technology. My work focuses on trustworthy technologies for connected industrial and intelligent systems. This paragraph is ready to be replaced with a full professional biography.',
  researchInterests: ['Research Area 1', 'Research Area 2', 'Research Area 3'],
  social: {
    scholar: '[URL]',
    github: '[URL]',
    orcid: '[URL]',
  },
  cvPath: '',
  canonicalUrl: 'https://lzd-lab.github.io/lzd-homepage/',
  education: [
    {
      period: '[Year–Year]',
      title: '[Degree and Field — Placeholder]',
      organization: '[University — Placeholder]',
      placeholder: true,
    },
  ] satisfies TimelineItem[],
  employment: [
    {
      period: '[Year–Present]',
      title: 'Lecturer',
      organization: 'Taiyuan University of Technology',
      note: 'Add appointment details here.',
      placeholder: true,
    },
  ] satisfies TimelineItem[],
};

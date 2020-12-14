import { ChromeNavGroupProps } from '../nav/nav';

export const DocsNavLinksFirst: ChromeNavGroupProps[] = [
  {
    title: 'Organization',
    links: [
      {
        label: 'Charter',
        url: 'documentation',
        isActive: true,
        color: 'primary',
      },
      {
        label: 'Roles',
      },
      {
        label: 'Weekly emails',
      },
      {
        label: 'Common tools and flows',
      },
      {
        label: 'Events and recordings',
      },
    ],
  },
  {
    title: 'Hiring',
    links: [
      {
        label: 'How we interview',
      },
      {
        label: 'Screening',
      },
      {
        label: 'Skills interview',
      },
    ],
  },
  {
    title: 'Planning',
    links: [
      {
        label: 'How Elastic manages releases',
      },
      {
        label: 'How to request designs for a large project',
      },
    ],
  },
];

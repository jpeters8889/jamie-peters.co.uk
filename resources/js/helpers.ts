import { MenuItem } from '@/types/Core';

export const getTitle = (title: string | undefined): string => {
  const appName = 'Jamie Peters - Laravel Developer';

  return title && title !== '' && title !== appName
    ? `${title} - ${appName}`
    : appName;
};

export const menuItems = (): MenuItem[] => [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Work & Projects',
    href: '/work',
  },
  {
    label: 'Speaking',
    href: '/speaking',
  },
  {
    label: 'Uses',
    href: '/uses',
  },
];

export interface TeachingItem {
  type: 'Teaching' | 'Talk' | 'Award';
  date: string;
  title: string;
  detail: string;
  url?: string;
  placeholder?: boolean;
}

// Placeholder records only. Replace with verified teaching, talks, and awards.
export const teaching: TeachingItem[] = [
  {
    type: 'Teaching',
    date: '[Term, Year]',
    title: '[Course Title — Placeholder]',
    detail: '[Role and institution — Placeholder]',
    placeholder: true,
  },
  {
    type: 'Talk',
    date: '[Month, Year]',
    title: '[Talk Title — Placeholder]',
    detail: '[Venue — Placeholder]',
    placeholder: true,
  },
  {
    type: 'Award',
    date: '[Year]',
    title: '[Award Name — Placeholder]',
    detail: '[Awarding organization — Placeholder]',
    placeholder: true,
  },
];

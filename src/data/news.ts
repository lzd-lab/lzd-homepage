export interface NewsItem {
  date: string;
  text: string;
  url?: string;
  placeholder?: boolean;
}

// Placeholder records only. Keep this array in reverse chronological order.
export const news: NewsItem[] = [
  { date: '2026-01', text: '[Placeholder] Add your latest research update here.', placeholder: true },
  { date: '2025-09', text: '[Placeholder] Add a publication, talk, or service update here.', placeholder: true },
  { date: '2025-03', text: '[Placeholder] Add an award or project milestone here.', placeholder: true },
];

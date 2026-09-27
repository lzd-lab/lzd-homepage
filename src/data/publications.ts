export interface PublicationLink {
  label: 'PDF' | 'DOI' | 'arXiv' | 'Code' | 'Scholar';
  url: string;
}

export interface Publication {
  id: string;
  year: number;
  authors: string[];
  title: string;
  venue: string;
  links: PublicationLink[];
  bibtex: string;
  placeholder?: boolean;
}

// Placeholder records only. Replace them with verified publications.
export const publications: Publication[] = [
  {
    id: 'placeholder-2026',
    year: 2026,
    authors: ['Zedong Li', '[Co-author Name]'],
    title: '[Placeholder] Replace with a publication title',
    venue: '[Journal or Conference — Placeholder]',
    links: [],
    bibtex: `@article{li2026placeholder,
  title   = {Replace with a publication title},
  author  = {Li, Zedong and Co-author, Name},
  journal = {Journal or Conference},
  year    = {2026}
}`,
    placeholder: true,
  },
  {
    id: 'placeholder-2025',
    year: 2025,
    authors: ['[First Author]', 'Zedong Li', '[Co-author Name]'],
    title: '[Placeholder] Add another publication here',
    venue: '[Journal or Conference — Placeholder]',
    links: [],
    bibtex: `@inproceedings{li2025placeholder,
  title     = {Add another publication here},
  author    = {First, Author and Li, Zedong and Co-author, Name},
  booktitle = {Conference Name},
  year      = {2025}
}`,
    placeholder: true,
  },
];

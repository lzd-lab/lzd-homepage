export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  placeholder?: boolean;
}

// Placeholder records only. Replace with verified projects.
export const projects: Project[] = [
  {
    title: '[Placeholder] Research Project',
    description: 'Describe the research question, your contribution, and the project outcome here.',
    tags: ['Industrial Security', 'TypeScript'],
    links: [],
    placeholder: true,
  },
  {
    title: '[Placeholder] Open-source Project',
    description: 'Add a concise description of an open-source tool or research prototype.',
    tags: ['Embodied AI', 'Open Source'],
    links: [],
    placeholder: true,
  },
];

import holdingsLogo from '@assets/holdings/logo.png?url';
import healthcareLogo from '@assets/healthcare/healthcare-logo.png?url';

export const defaultMeta = {
  title: 'Hlengwe Holdings Pty Ltd',
  description:
    'Hlengwe Holdings - Business consultancy, contract management, urban mega city development, and strategic services.',
  favicon: holdingsLogo,
};

// Route prefix → meta. Longest prefix wins so /healthcare/* beats /.
export const routeMeta = [
  {
    prefix: '/healthcare',
    title: 'Hlengwe Healthcare Solutions',
    description:
      'Hlengwe Healthcare Solutions - Specialist medical training, healthcare systems strengthening, infrastructure development, and digital health transformation.',
    favicon: healthcareLogo,
  },
];

export function metaForPath(pathname) {
  // Ignore trailing slash differences
  const clean = pathname.replace(/\/+$/, '') || '/';

  let match = null;
  for (const entry of routeMeta) {
    if (clean === entry.prefix || clean.startsWith(entry.prefix + '/')) {
      if (!match || entry.prefix.length > match.prefix.length) {
        match = entry;
      }
    }
  }

  return match || defaultMeta;
}
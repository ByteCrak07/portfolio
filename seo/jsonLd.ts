import { WebPage, Person, WithContext } from 'schema-dts';

const description = `Hey I'm Abil Savio, a Full Stack Web & Blockchain Developer from Kerala, India. Browse my portfolio, explore projects, read through the blog posts and tutorials.`;
const url = 'https://abilsavio.dev';

export const jsonLdWebPage: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': url,
  description,
  lastReviewed: new Date().toISOString(),
  reviewedBy: {
    '@type': 'Person',
    name: 'Abil Savio',
  },
};

export const jsonLdPerson: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  url: url,
  sameAs: [
    'https://www.instagram.com/abilsavio',
    'https://www.linkedin.com/in/abil-savio',
    'https://twitter.com/AbilSavio',
  ],
};

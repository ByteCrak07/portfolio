import { WebPage, Person, WithContext } from 'schema-dts';

const description = `Hey I'm Abil Savio, a Full Stack Web & Blockchain Developer from Kerala. I specialize in crafting seamless digital experiences. Through my portfolio, you can explore my projects, as well as my blog's informative posts and tutorials, and my accomplishments.`;
const url = 'https://abilsavio.me';

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

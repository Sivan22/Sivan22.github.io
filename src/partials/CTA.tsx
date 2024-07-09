import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          הרשמה <GradientText>לניוזלטר</GradientText>
        </>
      }
      description=""
    />
  </Section>
);

export { CTA };

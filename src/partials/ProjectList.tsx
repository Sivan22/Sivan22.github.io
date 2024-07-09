import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>פרוייקטים</GradientText> אחרונים
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="  אוצריא"
        description="מאגר תורני רחב עם ממשק מודרני ומהיר, לשימוש במחשב אישי או במכשיר הנייד, ללימוד תורה בקלות ובנוחות בכל מקום."
        link="https://sivan22.github.io/otzaria-download/"
        img={{
          src: '/assets/images/white_sketch.svg',
          alt: 'Project otzaria',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Dart</Tags>
            <Tags color={ColorTags.LIME}>Flutter</Tags>
            <Tags color={ColorTags.SKY}>Tora study</Tags>
          </>
        }
      />
      <Project
        name="חיפוש הילכתי חכם"
        description="חיפוש בספר ההלכה ילקוט יוסף מאת הרב יצחק יוסף לפי משמעות המשפט כולו ולא לפי מילה, מבוסס על בינה מלאכותית ומסד נתונים וקטורי."
        link="https://huggingface.co/spaces/sivan22/Halacha-semantic-search"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>AI</Tags>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
            <Tags color={ColorTags.YELLOW}>transformers</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

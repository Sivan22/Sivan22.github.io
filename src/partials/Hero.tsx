import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          היי, אני <GradientText>סיון</GradientText> 👋
        </>
      }
      description={
        <>
          אברך בכולל לרבנות ודיינות, בוגר ישיבות חרדיות מהשורה הראשונה. <br />
          אני משתדל לרתום את הידע הטכנולוגי שלי בכדי להועיל ולשפר את לימוד
          התורה.
          <br /> הפרוייקט עליו אני עובד כרגע הוא{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://sivan22.github.io/otzaria-download/"
          >
            אוצריא
          </a>{' '}
          : מאגר תורני בעל ממשק מודרני קליל, לשימוש במחשב האישי או במכשיר הנייד
          <br /> בנוסף, אני עוסק במו"פ אודות יישומים אפשריים של למידת מכונה
          ומודלי שפה בעולם הספרות התורני.
        </>
      }
      avatar={
        <img
          className="h-64 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={' '}
    />
  </Section>
);

export { Hero };

import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/profilePic.png'
          alt='An image showing Audrius'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello My Name Is Audrius</h1>
      <p>
        I blog about Full Stack Developemnt - especially frontend frameworks like
        Angular, React, Next.
      </p>
    </section>
  );
}

export default Hero;

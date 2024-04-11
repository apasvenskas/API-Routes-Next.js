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
        I blog about Full Stack Development - especially about frameworks such as React.js, Node.js, and Next.js. 
        I also like to dive deeper in to AWS cloud and Data Structures. 
      </p>
    </section>
  );
}

export default Hero;

import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/site/01.jpg'}
          alt='An image showing Nejad'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Nejad</h1>
      <p>
        I am learning about web development - especially JS & NextJS. This blog
        is for share what I have learned with you and to learn new knowledg from
        you.
      </p>
    </section>
  );
}

export default Hero;

import { Fragment } from "react";
// import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    // <Fragment>
    <>
      <div>
        <title>Audrius Blog</title>
        <label htmlFor="email">Your Email Adress</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="feedback">Your Feedback</label>
        <textarea type="text" id="feedback" rows='5'></textarea>
      </div>
    </>
    // <meta
    //   name='description'
    //   content='I post about programming and web development.'
    // />
    // </Fragment>
  );
}

export default HomePage;

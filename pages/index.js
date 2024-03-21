import { Fragment } from 'react';
// import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
        <title>Audrius Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
    </Fragment>
  );
}

export default HomePage;

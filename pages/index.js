import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { Fragment, useRef, useState } from "react";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }, 
    // revalidate: 3600
  }
}

export default HomePage;

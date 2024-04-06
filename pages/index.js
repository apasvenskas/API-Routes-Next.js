import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { Fragment, useRef, useState } from "react";

const DUMMY_POSTS = [
  {
    title: "Dummy Post",
    image: "getting-started-nextjs.png",
    excerpt: "Testing the post functionality",
    date: "2024-04-06",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Dummy Post2",
    image: "nextjs-file-based-routing.png",
    excerpt: "Testing the post functionality",
    date: "2024-04-06",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Dummy Post",
    image: "mastering-js-thumb.png",
    excerpt: "Testing the post functionality",
    date: "2024-04-06",
    slug: "mastering-javascript",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

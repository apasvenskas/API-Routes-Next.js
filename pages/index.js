import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import Head from "next/head";
import { Fragment} from "react";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
      <title>Welcome to Audrius blog.</title>
      <meta name="description" content="I post about programing and web development" />
      </Head>
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

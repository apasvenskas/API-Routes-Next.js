import AllPosts from "../../components/posts/all-posts";

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

function AllPostPage(){
    return <AllPosts posts={DUMMY_POSTS}/>
}

export default AllPostPage; 
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // image renderers (could be done with css additional feature)
  const customRenderers = {
   
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

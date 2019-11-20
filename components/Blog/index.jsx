// import React, { Component } from "react";
// import Link from "next/link";

// // Components
// import BlogCard from "../../components/BlogCard";

// // Resources
// import { Container } from "@material-ui/core";

// const BLOG_POSTS_PATH = "../../content/blogPosts";

// const importBlogPosts = async () => {
//   const markdownFiles = require
//     .context("../../content/blogPosts", false, /\.md$/)
//     .keys()
//     .map(relativePath => relativePath.substring(2));
//   return Promise.all(
//     markdownFiles.map(async path => {
//       const markdown = await import(`../../content/blogPosts/${path}`);
//       return { ...markdown, slug: path.substring(0, path.length - 3) };
//     })
//   );
// };

// export default class Blog extends Component {
//   static async getInitialProps() {
//     const postsList = await importBlogPosts();
//     return { postsList };
//   }
//   // console.log(postsList);
//   render() {
//     const { postsList } = this.props;
//     return (
//       <Container maxWidth="md">
//         {postsList.map(post => (
//           <Link href={`blog/post/${post.slug}`} key={post.slug}>
//             <a>
//               <BlogCard
//                 title={post.attributes.title}
//                 image={post.attributes.image}
//                 summary={post.attributes.content}
//               />
//             </a>
//           </Link>
//         ))}
//       </Container>
//     );
//   }
// }

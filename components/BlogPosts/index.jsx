// Components
import BlogCard from "../../components/BlogCard";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

const BLOG_POSTS_PATH = "../../";

const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../../content/blogPosts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class BlogPosts extends React.Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }
  render() {
    const { postsList } = this.props;

    return (
      <div className={styles.BlogPosts}>
        {postsList.map(post => {
          return (
            <Grid item xs={12} sm={6} md={4} key={post.slug}>
              <Link href={`blog/post/${post.slug}`}>
                <a>
                  <BlogCard
                    title={post.attributes.title}
                    image={post.attributes.image}
                    summary={post.attributes.summary}
                  />
                </a>
              </Link>
            </Grid>
          );
        })}
      </div>
    );
  }
}

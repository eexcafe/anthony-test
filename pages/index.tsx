import type { GetStaticProps, NextPage } from "next";
type Post = {
  slug: string;
  content: string;
  created: number;
};

type Props = {
  posts: Array<Post>;
  mostViews: any;
};

const Home: NextPage<Props> = ({ posts, mostViews }) => {
  return <div>Welcome</div>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // MDX text - can be from a local file, database, anywhere
  const posts: Array<Post> = [];
  const mostViews: any = [];
  return { props: { posts, mostViews } };
};

export default Home;

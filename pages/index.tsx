import Featured from "@/components/interface/index/Featured";
import Subscribe from "@/components/interface/index/Subscribe";
import Welcome from "@/components/interface/index/Welcome";
import Layout from "@/components/layout/Layout";
import { Frontmatter } from "@/lib/types";
import { Dirent } from "fs";
import type { GetStaticProps, NextPage } from "next";
import { read } from "to-vfile";
import { matter, VFile } from "vfile-matter";
import fs from "fs";

type Post = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
  created: number;
};

type Props = {
  posts: Array<Post>;
  mostViews: any;
};

const Home: NextPage<Props> = ({ posts, mostViews }) => {
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // MDX text - can be from a local file, database, anywhere
  const posts: Array<Post> = [];
  const mostViews: any = [];
  return { props: { posts, mostViews } };
};

export default Home;

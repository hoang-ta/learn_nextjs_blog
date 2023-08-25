import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  // console.log(postData);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log("paths: ", JSON.stringify(paths));
  // return {
  //   paths,
  //   fallback: false,
  // };
  return {
    paths: [
      // {
      //   params: {
      //     // Statically Generates /posts/a/b/c
      //     ID: ["a", "b", "c"],
      //   },
      // },
      ...paths,
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("params: ", params);
  const postData = await getPostData(params.ID[params.ID.length - 1]);
  return {
    props: {
      postData,
    },
  };
}

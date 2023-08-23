import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log(window.FB);
          }}
        />
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
          <Image src={"/image/image1.png"} width={500} height={200} />
        </h2>
      </Layout>
    </>
  );
}

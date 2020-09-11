import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | razrinn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p style={{ textAlign: "center", color: "white" }}>No post yet</p>
      <Link href="/blog/asd">
        <a>Go to ASD page</a>
      </Link>
    </div>
  );
}

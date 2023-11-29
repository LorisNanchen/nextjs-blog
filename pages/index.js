import Head from 'next/head';
import Layout, { siteStyle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteStyle}</title>
      </Head>
      <section className="text-xl">
        <p className=''>Hello World, my name is Loris!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" className='text-blue-600 underline'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="text-xl pt">
        <h2 className="text-2xl my-4">Blog</h2>
        <ul className="list-none m-0 p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
            <Link href={`/posts/${id}`} className='text-blue-600'>{title}</Link>
            <br />
            <small className="text-neutral-500">
              <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

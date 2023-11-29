import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/profile.jpg'

const name = 'Loris';
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className="max-w-xl px-12 mx-auto mt-12 mb-6">
            <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="flex flex-col items-center">
            {home ? (
                <>
                <Image
                    priority
                    src={profile}
                    className="rounded-full"
                    height={144}
                    width={144}
                    alt=""
                />
                <h1 className="text-4xl m-4 font-extrabold">{name}</h1>
                </>
            ) : (
                <>
                <Link href="/">
                    <Image
                    priority
                    src={profile}
                    className="rounded-full"
                    height={108}
                    width={108}
                    alt=""
                    />
                </Link>
                <h2 className="text-4xl m-4 font-extrabold">
                    <Link href="/">
                    {name}
                    </Link>
                </h2>
                </>
            )}
            </header>
            <main className=''>{children}</main>
            {!home && (
            <div className="mt-8">
                <Link href="/" className='text-blue-600'>← Back to home</Link>
            </div>
            )}
        </div>
    );
}
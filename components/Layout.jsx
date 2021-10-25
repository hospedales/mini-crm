import Head from 'next/head'
import Link from 'next/link'
import Search from './Search'

export const siteTitle = 'Alpha Solutions mini-CRM'

export default function Layout({ children, home }) {
    return (
        <div className="bg-gray-100 w-screen min-h-screen">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="mini CRM for Alpha Solutions by Michael Hospedales"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 400 427"><g id="fc9254da-ab3e-479f-9af0-a617af5dfa15" data-name="Layer 2"><g id="f16fa11b-8bd6-4276-b278-fd74ea03fe7b" data-name="Layer 1"><rect y="86" width="94" height="94" fill="#fff" /><rect x="27" y="196" width="190" height="190" fill="#fff" /><rect x="108" y="6" width="182" height="182" fill="#fff" /><rect x="248" y="220" width="62" height="207" fill="#fff" /><circle cx="352" cy="172" r="48" fill="#fff" /><circle cx="49.5" cy="36.5" r="36.5" fill="#fff" /></g></g></svg>
                        <span className="font-semibold text-xl tracking-tight">Michael's React Mini CRM</span>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="/" className="block text-lg font-semibold hover:underline mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Home
                            </a>
                            <a href="/users" className="block text-lg font-semibold hover:underline mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Users
                            </a>
                        </div>
                        <div className="block lg:flex-grow relative">
                            <Search></Search>
                        </div>
                        <div>
                            <a href="/users/add" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-green-300 mt-4 lg:mt-0">Add User</a>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="w-screen">{children}</main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
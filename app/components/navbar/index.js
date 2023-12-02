import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Navbar() {
    return (
        <Fragment>
            <nav className="bg-white fixed top-0 w-full z-50 border-b-2 border-gray-350">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <Link href='/'>
                            <div className="h-8 w-44 relative">
                                <Image src="/logo_TOOF.svg" fill alt="Your Company" />
                            </div>
                        </Link>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <div className="relative ml-3">
                                <div>
                                    <Link className='' href='/sign-up'>
                                        <button type="button" className="relative flex rounded-full text-white px-5 py-2 bg-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            Signup
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>

    )
}

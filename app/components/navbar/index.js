import Image from 'next/image'
import { Fragment } from 'react'

export default function Navbar() {
    return (
        <Fragment>
            <nav className="bg-white fixed top-0 w-full z-50 border-b-2 border-gray-400">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="h-8 w-44 relative">
                            <Image src="/logo_TOOF.svg" fill alt="Your Company" />
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <div className='h-8 w-8 rounded-full relative'>
                                            <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" fill/>

                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>

    )
}

import * as React from "react"

const Layout = ({ children }) => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
            <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-center h-16">
                        <div className="flex space-x-10 text-gray-900">
                            <a href="#">About</a>
                            <a href="#">Dashboard</a>
                            <a href="#">Projects</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
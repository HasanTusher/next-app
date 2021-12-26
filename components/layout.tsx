import React, {ReactNode} from "react";
import {AppProps} from "next/app";
import {Button} from "./Button";
import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.css'

type Props = {
    children: ReactNode;
    title?: string;
};

function Layout({children, title="yay"}: Props){

    return <>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Yay</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tour</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Data</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>

        {children}

        <div className="row">
            <div className="col-12 position-fixed bottom-50 w-100 text-center">
                <ul className="list-group list-group-horizontal mt-2 text-center ml-auto">
                    <li className="list-group-item"><Link href="/">
                        <a>Home</a>
                    </Link></li>
                    <li className="list-group-item"><Link href="/login">
                        <a>Login</a>
                    </Link></li>
                    <li className="list-group-item"> <Link href="/blog">
                        <a>Blog</a>
                    </Link></li>
                    <li className="list-group-item"> <Link href="/about">
                        <a>About</a>
                    </Link></li>
                </ul>

            </div>
        </div>
    </div>
    </>
}
export default Layout;
import React, {ReactNode} from "react";
import {AppProps} from "next/app";
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
            {/*<div className="col-12 mr-0">*/}
            {/*    <nav className="navbar navbar-light bg-light pull-right">*/}
            {/*        <form className="form-inline">*/}
            {/*            <div className="form-group">*/}
            {/*                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
            {/*                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
            {/*            </div>*/}

            {/*        </form>*/}
            {/*    </nav>*/}
            {/*</div>*/}
        </div>

        {children}
    </div>
    </>
}
export default Layout;
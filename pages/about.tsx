import {Component} from "react";
import {Button} from "../components/Button";
import {ThemeContext, useThemeContext} from "../utils/ThemeContext";
import Link from 'next/link'


const yay = ()=>{
    console.log('yay')

}

function nay() {
    console.log('nay')
}

function About() {

    const {theme, setTheme} = useThemeContext();
    return <div className="yay">
        <div className="row">
            <div className="col-12 text-center">
                <p className="fw-bold">Look it up yourself!!</p>
            </div>

            <div className="col-12 text-center">
                <p className="fw-bold">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum!!</p>
            </div>

            <div className="col-12 fw-bold text-danger text-center"> Context theme: {theme}</div>

            <div className="col-12 position-fixed bottom-50 w-100 text-center">
                <Button props={()=>setTheme("ayya")}/>

                <ul className="list-group list-group-horizontal mt-2 text-center ml-auto">
                    <li className="list-group-item"><Link href="/">
                        <a>Home</a>
                    </Link></li>
                    <li className="list-group-item"><Link href="/login">
                        <a>Login</a>
                    </Link></li>
                    <li className="list-group-item"> <Link href="/blog/hello-world">
                        <a>Blog hello world</a>
                    </Link></li>
                </ul>

            </div>


        </div>

    </div>
}

export default About
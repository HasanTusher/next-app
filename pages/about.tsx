import {Component} from "react";
import {Button} from "../components/Button";


const yay = ()=>{
    console.log('yaya')
}

function nay() {
    console.log('nay')
}

function About() {
    return <div className="yay">
        <p>Look it up yourself!!</p>
         <Button props={{yay: nay}}/>
    </div>
}

export default About
import {Component} from "react";
import {Button} from "../components/Button";
import {ThemeContext, useThemeContext} from "../utils/ThemeContext";


const yay = ()=>{
    console.log('yay')

}

function nay() {
    console.log('nay')
}

function About() {

    const {theme, setTheme} = useThemeContext();
    return <div className="yay">
        <p>Look it up yourself!!</p>
        <p>{theme}</p>
         <Button props={()=>setTheme("ayya")}/>
    </div>
}

export default About
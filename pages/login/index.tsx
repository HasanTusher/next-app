import {useEffect, useState} from "react";
import jwt from "jsonwebtoken";
import {useThemeContext} from "../../utils/ThemeContext";

export default function Index(){
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[message, setMessage] = useState<string>('You are not logged in');
    const{theme, setTheme} = useThemeContext();
    useEffect(()=>{
        console.log('i will be called only onece');
    }, [])

    useEffect(()=>{
        console.log('message was changed');
    }, [message])


    async function submit() {
        const res = await fetch('api/login', {
            method: 'POST',
            body: JSON.stringify({username, password})
        }).then((value) => value.json());
        const token = res.token;
        if (token){
            const decoded = jwt.decode(token) as {[key: string]: string};
            setMessage(`Hi ${decoded.username}, you are an ${decoded.admin ? 'admin' : 'not an admin'}` );
        }
    }


    return (
        <>
            <div className="container">

            <h1 className="text-center">{message}</h1>
            <h1 className="text-center">{theme}</h1>
                <div>
                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="usr">Name:</label>
                            <input type="text" className="form-control" name="username" id="userid" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="usr">Password:</label>
                            <input type="password" className="form-control" name="userid" id="passwordid" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>

                        <button type="button" className="form-control btn btn-outline-success mt-2"  id="submitid" onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>

        </>

    )
}
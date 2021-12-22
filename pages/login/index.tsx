import {useEffect, useState} from "react";
import jwt from "jsonwebtoken";


export default function Index(){
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[message, setMessage] = useState<string>('You are not logged in');
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
            <h1>{message}</h1>
            <div>
                <form >
                    <input type="text" name="username" id="userid" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <br/>
                    <input type="password" name="userid" id="passwordid" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <br/>
                    <button type="button"  id="submitid" onClick={submit}>Submit</button>
                </form>
            </div>
        </>

    )
}
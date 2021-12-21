import {useState} from "react";


export default function Index(){
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[message, setMessage] = useState<string>('You are not logged in');

    function submit() {
        console.log(userName)
        console.log(password);
        setMessage('yay')

    }

    return (
        <>
            { message == 'yay' ? <h1>you are logged in</h1> : <h1>you are not logged in</h1>}
            <div>
                <form >
                    <input type="text" name="username" id="userid" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <br/>
                    <input type="password" name="userid" id="passwordid" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <br/>
                    <button type="button"  id="submitid" onClick={submit}>Submit</button>
                </form>
            </div>
        </>

    )
}
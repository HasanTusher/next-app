import {NextApiRequest, NextApiResponse} from "next";
import jwt from 'jsonwebtoken';


const KEY = 'yayToken';
export default function Login(req: NextApiRequest, res: NextApiResponse){
    console.log(req.body);
    if(!req.body)
    {
        res.statusCode = 400;
        res.end();
        return res;
    }
    const {username, password} = JSON.parse(req.body);
    return res.json({
        token: jwt.sign({
            username,
            admin: username=='admin' && password =='admin',
        }, KEY)
    });
}
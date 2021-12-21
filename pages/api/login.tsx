import {NextApiRequest, NextApiResponse} from "next";


export default function Login(req: NextApiRequest, res: NextApiResponse){
    console.log(req.body);
    return res.json("ayya");
}
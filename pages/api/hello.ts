import {NextApiRequest, NextApiResponse} from "next";

type name = string

export default function handler(req: NextApiRequest, res: NextApiResponse):void {
    return res.status(200).json({name: "Kennedy"});
}
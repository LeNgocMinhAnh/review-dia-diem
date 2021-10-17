import dbConnect from "../../../backend/db";
import {verifyIdToken} from "../../../backend/firebaseAdmin";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {
            const user = await verifyIdToken(req);
            return res.json(user);
        }
        catch (error){
            return res.status(401).json({ message: error.message });
        }
    }
    return res.status(500).json({ code: 404, message: 'Can not ' + req.method + ' /me' });
}
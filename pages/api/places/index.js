import dbConnect from '../../../backend/db';
import PlaceModel from "../../../backend/models/Place";
import {verifyIdToken} from "../../../backend/firebaseAdmin";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        // Kiểm xa xem có đang tìm địa điểm hay không
        // VD: http://localhost:3000/api/places?search=Đại học lạc hồng
        // search = Đại học lạc hồng
        const search = req.query.search;

        // Điều kiện tìm kiếm trong database
        const filter = {};
        // Nếu có search thì thêm điều kiện search tìm kiếm không có thì thôi
        if (search) {
            filter.name = {$regex: search, $options: 'i'};
        }
        try {
            // Tìm địa điểm phù hợp với điều kiện
            const places = await PlaceModel.find(filter).limit(10).lean();
            return res.status(200).json(places);
        } catch (error) {
            return res.status(500).json({code: 500, message: 'Internal Server Error'})
        }
    }

    // Phương thức POST, tạo địa điểm
    if (req.method === 'POST'){
        try {
            // Kiểm tra user
            const user = await verifyIdToken(req);
            // Tạo địa điểm
            const place = new PlaceModel({
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                type: req.body.type,
                location: req.body.location,
                createdBy: user.uid,
                createdAt: new Date()
            })
            // Lưu địa điểm vào database
            await place.save();
            return res.json(place);
        } catch (e) {
            return res.status(500).json({ code: 500, message: 'Internal Server Error' })
        }
    }
    return res.status(500).json({ code: 404, message: 'Can not ' + req.method + ' /places' });
}
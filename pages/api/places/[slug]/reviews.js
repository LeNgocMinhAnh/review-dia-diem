import dbConnect from '../../../../backend/db';
import PlaceModel from "../../../../backend/models/Place";
import {verifyIdToken} from "../../../../backend/firebaseAdmin";
import ReviewModel from "../../../../backend/models/Review";

export default async function handler(req, res) {
    await dbConnect();
    const slug = req.query.slug;
    // Đăng review
    if (req.method === 'POST'){
        try {
            // Kiểm tra user
            const user = await verifyIdToken(req);
            // Kiểm tra địa điểm muốn review có tồn tại không
            const place = await PlaceModel.findOne({ slug });
            if (!place){
                // Lỗi không tìm thấy địa điểm
                return res.status(404).json({ code: 404, message: 'Could not find place with slug ' + slug })
            }
            // Tạo review
            const review = new ReviewModel({
                placeId: slug,
                title: req.body.title,
                content: req.body.content,
                incognito: req.body.incognito,
                createdBy: user.uid,
                createdAt: new Date()
            })
            // Lưu review
            await review.save();
            return res.json(review);
        } catch (e) {
            return res.status(500).json({ code: 500, message: 'Internal Server Error' })
        }
    }

    return res.status(500).json({ code: 404, message: 'Can not ' + req.method + ' /places/' + slug });

}
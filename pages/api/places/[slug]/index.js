import dbConnect from '../../../../backend/db';
import ReviewModel from "../../../../backend/models/Review";
import PlaceModel from "../../../../backend/models/Place";

export default async function handler(req, res) {
    await dbConnect();
    const slug = req.query.slug;
    // Phương thức GET - lấy địa điểm theo slug
    if (req.method === 'GET'){
        try {
            // Tìm địa điểm bằng slug
            // VD: http://localhost:3000/api/places/truong-dai-hoc-lac-hong
            const place = await PlaceModel.findOne({ slug }).lean();
            // Nếu không tìm thấy địa điểm thì trả về lỗi 404
            if (!place){
                return res.status(404).json({ code: 404, message: 'Could not find place with slug ' + slug })
            }
            // Lấy những review có placeId là id của địa điểm
            const reviews = await ReviewModel.find({ placeId: place._id }).lean();            
            place.reviews = reviews;
            return res.json({
                ...place,
                reviews
            });
        } catch (e) {
            return res.status(500).json({ code: 500, message: 'Internal Server Error' })
        }
    }

    return res.status(500).json({ code: 404, message: 'Can not ' + req.method + ' /places/' + slug });

}
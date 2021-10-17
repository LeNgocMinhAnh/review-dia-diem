import dbConnect from '../../../backend/db';
import ReviewModel from "../../../backend/models/Review";

export default async function handler(req, res) {
    await dbConnect();
    // Phương thức GET - lấy danh sách reviews
    if (req.method === 'GET'){
        try {
            // lookup 
            // unwind phép nhân
            // a1 a2 b1 b2
            // [review] x [user1]
            // [review - user1]
            // Lấy danh sách reviews
            const reviews = await ReviewModel.aggregate([
                {
                    $match: {},
                },
                // Reference đến địa điểm bằng placeId của review
                {
                    $lookup: {
                        from: 'places',
                        localField: 'placeId',
                        foreignField: '_id',
                        as: 'place',
                    },
                },
                // Reference đến địa user createdBy của review
                {
                    $lookup: {
                        from: 'users',
                        localField: 'createdBy',
                        foreignField: 'uid',
                        as: 'author',
                    },
                },
                // Deconstructs địa điểm, $lookup trả về mảng: [địa điểm] nên ta tiến hành nhân địa điểm với review
                {
                    $unwind: '$place',
                },
                // Deconstructs địa điểm, $lookup trả về mảng: [người dùng] nên ta tiến hành nhân người dùng với review
                {
                    $unwind: '$author',
                },
                // Sắp xếp theo thời gian tạo gần nhất
                {
                    $sort: {
                        createdAt: -1,
                    },
                },
                // Bỏ placeId, createdBy, author.places đi không cần thiết
                {
                    $project: {
                        placeId: 0,
                        createdBy: 0,
                        'author.places': 0,
                    },
                },
                {
                    $limit: 20,
                },
            ]);
            return res.status(200).json(reviews);
        } catch (error) {
            return res.status(500).json({ code: 500, message: 'Internal Server Error' })
        }
    }
    return res.status(500).json({ code: 404, message: 'Can not ' + req.method + ' /reviews' });
}
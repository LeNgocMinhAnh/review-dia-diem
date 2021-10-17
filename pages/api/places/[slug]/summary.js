import dbConnect from '../../../../backend/db';
import PlaceModel from "../../../../backend/models/Place";

export default async function handler(req, res) {
    await dbConnect();
    const slug = req.query.slug;
    // Phương thức GET - lấy địa điểm theo slug
    if (req.method === 'GET'){
        try {
            // Tìm địa điểm bằng slug
            // VD: http://localhost:3000/api/places/truong-dai-hoc-lac-hong
            const docs = await PlaceModel.aggregate([
                {
                    $match: {
                        slug
                    },
                },
                // Lấy danh sách reviews của địa điểm về
                {
                    $lookup: {
                        from: 'reviews',
                        let: { placeId: '$_id' },
                        pipeline: [
                            {
                                $match: {
                                    $and: [
                                        { $expr: { $eq: ['$placeId', '$$placeId'] } },
                                        { $expr: { $eq: ['$isDeleted', false] } },
                                    ],
                                },
                            },
                        ],
                        as: 'reviews',
                    },
                },
                // Thêm trường tổng sổ reviews để tính trung bình cộng
                {
                    $addFields: {
                        totalReviews: { $size: '$reviews' },
                    },
                },
                // Nhân reviews với địa điểm
                { $unwind: '$reviews' },
                // Nhóm review lại theo số sao để tính trung bình cộng
                {
                    $group: {
                        _id: {
                            star: '$reviews.star',
                            totalReviews: '$totalReviews',
                        },
                        count: {
                            $sum: 1,
                        },
                    },
                },
                // Tính trung bằng cộng
                {
                    $project: {
                        percent: { $multiply: [{ $divide: ['$count', '$_id.totalReviews'] }, 100] },
                        count: 1,
                        star: '$_id.star',
                        _id: 0,
                    },
                },
                // Nhóm tất cả lại
                {
                    $group: {
                        _id: null,
                        data: { $push: '$$ROOT' },
                    },
                },
                // Thêm số lượng review để tính tỷ lệ
                {
                    $addFields: {
                        totalReviews: { $sum: '$data.count' },
                        count: {
                            $arrayToObject: {
                                $map: {
                                    input: '$data',
                                    as: 'out',
                                    in: {
                                        k: {
                                            $toString: '$$out.star',
                                        },
                                        v: '$$out.count',
                                    },
                                },
                            },
                        },
                        // Tính tỉ lệ tất cả các loại review từ 1-5
                        percent: {
                            $arrayToObject: {
                                $map: {
                                    input: '$data',
                                    as: 'out',
                                    in: {
                                        k: {
                                            $toString: '$$out.star',
                                        },
                                        v: '$$out.percent',
                                    },
                                },
                            },
                        },
                    },
                },
                // Bỏ _id: null đi, data đi không cần nữa
                {
                    $project: {
                        _id: 0,
                        data: 0,
                    },
                },
                // Merge data tại, vì có thể không có reviews 1 sao hoặc 2 sao hoặc ... nên ta cần merge lại trước khi trả về
                // Ví dụ: merge  với { 1: 0, 2:0, 3:0, 4:0, 5:0 } với { 4: 5, 5: 10 } => { 1: 0, 2:0, 3:0, 4: 5, 5: 10 }
                {
                    $replaceRoot: {
                        newRoot: {
                            count: { $mergeObjects: [{ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, '$$ROOT.count'] },
                            percent: { $mergeObjects: [{ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, '$$ROOT.percent'] },
                            totalReviews: '$$ROOT.totalReviews',
                        },
                    },
                },
            ]);
            return res.json(docs[0]);
        } catch (e) {
            return res.status(500).json({ code: 500, message: 'Internal Server Error' })
        }
    }
    // Phương thức POST - tạo reviews

    return res.status(500).json({ code: 404, message: 'Can not ' + req.method + ' /places/' + slug });

}
import * as firebaseAdmin from 'firebase-admin';
import UserModel from './models/User';

// get this JSON from the Firebase board
// you can also store the values in environment variables
import serviceAccount from './sv-net-firebase-adminsdk.json';
import dbConnect from "./db";

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            privateKey: serviceAccount.private_key,
            clientEmail: serviceAccount.client_email,
            projectId: serviceAccount.project_id,
        }),
    });
}

const verifyIdToken = async (req) => {
    let token = req.headers.authorization;
    if (!token){
        throw new Error('Token not found');
    }
    // Nếu token là `Bearer token...`
    if (token.includes(' ')){
        // Token sẽ là 'token...'
        token = token.split(' ')[1];
    }
    const decodedIdToken = await firebaseAdmin.auth().verifyIdToken(token);
    await dbConnect();
    const dbUser = await UserModel.findOne({ uid: decodedIdToken.uid })
    if (!dbUser){
        const newUser = new UserModel({
            fullName: decodedIdToken.name,
            displayName: decodedIdToken.name,
            email: decodedIdToken.email,
            phoneNumber: decodedIdToken.phone_number,
            displayImage: decodedIdToken.picture,
            uid: decodedIdToken.uid,
        })
        await newUser.save();
        return newUser();
    }
    return dbUser;
}

export { firebaseAdmin, verifyIdToken };
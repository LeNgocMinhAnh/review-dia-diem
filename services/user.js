import firebase from './firebase';

export function getCurrentUser(){
    return firebase.auth().currentUser;
}

export function loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
}

export function loginWithFacebook(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
}

export function loginWithEmail(email, password){
    return firebase.auth().signInWithEmailAndPassword(email,password).catch((error) => {
        switch (error.code){
            case 'auth/user-disable':
                error.message = 'Tài khoản của bạn đã bị khoá';
                break;
            case 'auth/invalid-email':
                error.message = 'Email không hợp lệ';
                break;
            case 'auth/user-not-found':
                error.message = 'Tài khoản không tồn tại';
                break;
            case 'auth/wrong-password':
                error.message = 'Mật khẩu không chính xác';
                break;
            default:
                error.message = 'Có lỗi xảy ra. Vui lòng thử lại';  
        }
        return Promise.reject(error);
    });
}

export function getRedirectResult(){
    return firebase.auth().getRedirectResult();
}

export function sighOut(){
    return firebase.auth().signOut();
}
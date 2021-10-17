export default function AdminIndex({ user }){
    if (!user){
        return null;
    }
    return <h1>Admin Page</h1>
}
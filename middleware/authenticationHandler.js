import jwt from "jsonwebtoken"
import * as UserModels from "../models/UserModels.js"

const checkToken = async (req, res, next) =>{
    const {autorization} = req.headers;
    if(!token){
        res.status(401).json({
            success:false,
            message: [
                {result : "You do not have permission to access the app."}
            ]
        })
    }

    const token = authorizatiion.split (' ')[1]
    try{
        const {id} = jwt.verify(token, process.env.SECRET);
        const {user} = await UserModels.getUser(id);
        req.user = user[0].id;
        next();
    }catch(err){
        res.status(401).json({
            success: false,
            message: [
                {result : "request is unauthorized"}
            ]
        })
    }
}

    export default checkToken
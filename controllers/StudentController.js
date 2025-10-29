import * as StudentModels from "../models/StudentModels.js";

export const gettblstudent = async (req, res) => {
try{
    const student = await StudentModels.gettblstudent();
    res.status(200).json(student);
}catch(e){
    console.log(e);
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}

}
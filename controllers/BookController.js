import * as BookModels from "../models/BookModels.js";

export const getBooks = async (req, res) => {
try{
    const book = await BookModels.getBooks();
    res.status(200).json(books);
}catch(e){
    console.log(e);
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}

}
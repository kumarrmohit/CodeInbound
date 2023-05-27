const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    product:String,
    description:String
})

const NoteModel=mongoose.model("codeinbound",noteSchema)

module.exports={
    NoteModel
}
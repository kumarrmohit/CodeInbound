const express = require("express")
const { NoteModel } = require("../model/post.model")
const noteRouter = express.Router()

 noteRouter.get('/', async (req, res) => {
    try {
      const data = await NoteModel.find();
      res.json({ data });
    } catch (err) {
      res.json({ message: 'Failed to retrieve data', error: err.message });
    }
  });
 
noteRouter.post("/", async (req, res) => {
    const payload = req.body
    const note = new NoteModel(payload)
    await note.save()
    res.send({ "msg": "Node Created" })
}) 

noteRouter.patch("/:id", async (req, res) => {
    const ID = req.params.id
    //res.send(ID)
    const payload = req.body
    try {
        await NoteModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send({ "msg": "data has been updated" })
    } catch(err) {
        res.send({ "msg": "cannot modify", "error": err.message })
    }
})

noteRouter.delete('/:id', async (req, res) => {
    try {
      const quiz = await NoteModel.findByIdAndDelete(req.params.id);
      if (quiz) {
        res.json({ message: 'data deleted successfully' });
      } else {
        res.json({ message: 'data not found' });
      }
    } catch (err) {
      res.json({ message: 'Failed to delete data', error: err.message });
    }
  });


module.exports={
    noteRouter
}
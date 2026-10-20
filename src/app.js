import express from 'express';
import todoModel from '../models/todo.model.js';
const app=express();
app.use(express.json());
app.post('/addtodo', async (req, res)=>{
    console.log(req.body);
    try{
        await todoModel.create(req.body);
        console.log("Data inserted successfully 🎉");
        res.status(200).json({
            message: "Data inserted successfully 🎉"
        })
    }catch(e){
        console.log(e);
        res.json({message: e});
    }
});

app.get('/alltodo', async(req, res)=>{
    const result = await todoModel.find();
    console.log(result);
    res.status(200).json(result);
})

app.delete('/delete/:id', async(req, res)=>{
    const result = await todoModel.findOneAndDelete({_id: req.params.id});
    console.log(result);
    res.send("deleted");
})

app.patch('/update/:id', async (req, res)=>{
    let id=req.params.id;
    let {deadline} = req.body;
    let result = await todoModel.findOneAndUpdate({_id: id}, {deadline: deadline});
    console.log(result);
    res.send("updated");
})
export default app;
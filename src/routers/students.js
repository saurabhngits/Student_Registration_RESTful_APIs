const express = require("express");
const router = new express.Router();

require('../db/conn');
const Student = require("../models/students");

// // create a new student using promise
// router.post("/students", (req, res) => {
//     const user = new Student(req.body);
    
//     user.save()
//     .then(() => {
//         res.status(201).send(user);
//     })
//     .catch((err) => {
//         res.status(400).send(err);
//     })
// })

// create a new student using async/await
router.post("/students", async (req, res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// fetch all students presend in the collection using async/await
router.get("/students", async (req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// fetch the student by it's id 
router.get("/students/:id", async (req, res) => {
    try{
        const _id =req.params.id;
        const studentData = await Student.findById({_id}); // using object destructuring

        if(!studentData){
            res.status(404).send();
        }
        else{
            res.send(studentData);
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

// update the student by it's id 
router.patch("/students/:id", async (req, res) => {
    try{
        const _id =req.params.id;
        const updateData = await Student.findByIdAndUpdate(
            _id, 
            req.body, 
            {
                useFindAndModify: false,
                new: true
            }
        ); 
        
        res.send(updateData);
    }
    catch(err){
        res.status(500).send(err);
    }
})

// delete the student by it's id 
router.delete("/students/:id", async (req, res) => {
    try{
        const _id =req.params.id;
        const deleteData = await Student.findByIdAndDelete(_id); 
        
        if(!_id){
            res.status(404).send();
        }
        else{
            res.send(deleteData);
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;
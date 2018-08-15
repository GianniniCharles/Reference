const express = require('express');
const router  = express.Router();
const Task    = require('../models/task');


router.get('/tasks', (req, res, next) => {
    Task.find()
    .then((allTheTasks)=>{
        res.json(allTheTasks);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.post('/tasks/create', (req, res, next)=>{
    Task.create({
        title: req.body.title,
        description: req.body.description,
        doneyet: req.body.doneyet
    })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err);
    })
})


/// task details route here 




/// edit task route here



// delete task route





module.exports = router;

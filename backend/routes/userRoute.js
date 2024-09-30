const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// send data to database / create
router.post('/', async(req, res) => {
    try {
        let {name, email, age} = req.body;
        let userAdded = await User.create({
            name: name,
            email: email,
            age: age
        })
      
        res.status(201).send(userAdded)
        
    } catch (error) {
        res.status(400).json({error:error.message});
        console.log(error);
    }
})

// get all user data from database / read
router.get('/', async(req, res) => {
    try {
        let showAll = await User.find();
        res.status(201).send(showAll);
    } catch (error) {
        res.status(500).json({error:error.message});
        console.log(error);
    }
})

// get single user data from database / read
router.get('/:id', async(req, res) => {
    try {
        let {id} = req.params;
        let singleUser = await User.findById({ _id: id });
        res.status(201).send(singleUser);
    } catch (error) {
        res.status(500).json({error:error.message});
        console.log(error);
    }
})

// delete user data from database / Delete
router.delete('/:id', async(req, res) => {
    try {
        let {id} = req.params;
        let singleUser = await User.findByIdAndDelete({ _id: id });
        res.status(201).send(singleUser);
    } catch (error) {
        res.status(500).json({error:error.message});
        console.log(error);
    }
})

// Update user data in database / Update
router.patch('/:id', async(req, res) => {
    try {
        let {id} = req.params;
        let {name, email, age} = req.body;
        let UpdateUser = await User.findByIdAndUpdate(id, req.body, {new: true});   // 'new: true' means updated data should be return.
        res.status(201).send(UpdateUser);
    } catch (error) {
        res.status(500).json({error:error.message});
        console.log(error);
    }
})

module.exports = router;
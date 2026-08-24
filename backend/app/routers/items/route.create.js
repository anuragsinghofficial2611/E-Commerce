const express = require('express');
const router = express.Router();
const item = require('../../models/itemModel.js');

router.post('/create', async (req, res) => {
    try {
        const {name,price,description} = req.body;
        if (!name || !description || price === undefined) return res.status(400).json({ message: "Every field is required" });
        const product = await item.create({name,price,description});
        res.status(201).json(
            {
                message:"Product created successfully",
                product
            }
        );
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message: "server side error occured"});
    }
})

module.exports = router;
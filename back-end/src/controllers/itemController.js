const Item = require("../model/ItemModel")

const getAllItems = async (req, res) => {
    try {
        const result = await Item.find().sort({createdAt: -1});
    res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch items", error: err.message });
    }
}

const getSearchedItems = async (req, res) => {
    const {q} = req.query;
    console.log(q);
    try {
        let items = [];
        if(q){
            items = await Item.find({name: {$regex: q, $options: 'i'}})
        } else {
            items = await Item.find(); 
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message: "No items found!"})
    }
}

const getSingleItem = async(req, res) => {
    const {id} = req.params;
    try {
        const item = await Item.findById(id);
        if(!item) {
            return res.status(404).json({message: 'item not found'});
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({message: 'no items found'})
    }
}

module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem
}
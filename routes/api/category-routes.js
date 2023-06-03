const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
try{ const category = await Category.findAll()
res.status(200).json(category)
}catch{
  res.status(500).json(err);
}

 
});

router.get('/:id',async (req, res) => {
 // find one category by its `id` value
 try{
  const category = await Category.findByPk()
  res.status(200).json(category)
 } catch{
  res.status(500).json(err);
 }

});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const category = await Category.create()
    res.status(200).json(category)
  }catch{
    res.status(500).json(err);
  }
 


});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(category)
    
  } catch {
    res.status(500).json(err);
  }


});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(category)
  } catch {
    res.status(500).json(err);
  }

});

// create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(category)
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }



});

// update a category by its `id` value

router.put('/:id', (req, res) => {
  try {
    Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});
// delete a category by its `id` value

router.delete('/:id', async (req, res) => {
  try {
 const category  = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(category)
    if (!Category) {
      res.status(404).json({ error: 'Category not found' });
      return;
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)

  }

});

module.exports = router;

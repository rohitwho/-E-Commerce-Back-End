const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags

router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(tagsData)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal server error' });
  }
});

  // find a single tag by its `id`

router.get('/:id', async (req, res) => {

  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]

    })
    res.status(200).json(tagsData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }


});

// create a new tag

router.post('/', async (req, res) => {

  try {
    const tagsData = await Tag.create({
     tag_name: req.body.tag_name
   
    }
  
    )
    
    res.status(200).json(tagsData)
  } catch (err) {
    console.log(err)

  }


});
// update a tag's name by its `id` value

router.put('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.update({
      tag_name: req.body.tag_name

    },
    {
      where:{
        id:req.params.id
    
   }

  })
    res.status(200).json("Updated Sucessfully")
  } catch (err) {
    console.log(err)
  }


});

  // delete on tag by its `id` value

router.delete('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json("Deleted Sucessfully")
  } catch (err) {
    console.log(err)
  }

});

module.exports = router;

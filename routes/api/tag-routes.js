const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: Product
  })
  res.json(tags)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tags = await Tag.findOne({
    where: {
      id: req.params.id
    },
    include: Product
  })
  res.json(tags)
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body)
  res.json(newTag)
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updateData = await Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  res.json(updateData)
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const deleteData = await Tag.destroy({
    where: {
      id: req.params.id
    },
  })
  res.json(deleteData)
});

module.exports = router;

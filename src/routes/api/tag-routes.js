const { Router } = require("express");
const async = require("seed/lib/seed/base/async");

const { Tag, Product, ProductTag } = require("../../models");
const { describe } = require("../../models/Product");

// The `/api/tags` endpoint

const router = Router();

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const getTags = await Tag.findAll({
      attributes: ["id", "tah_name"],
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });

    if (!getTags) {
      res.status(404).json({ message: "No Tag has been found" });
      return;
    }
    res.status(200).json(getTags);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getTagRouter" });
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const getTag = await Tag.findByPk(req.params.body, {
      attributes: ["id", "tag_name"],
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });

    if (!getTag) {
      res.status(404).json({ message: "No 'Tag by Id' found" });
      return;
    }
    res.status(200).json(getTag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getTagRouterById" });
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);

    res.status(200).json(newTag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:postTagRouter" });
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateTag) {
      res.status(404).json({ message: "No 'update tag by Id' found" });
      return;
    }
    res.status(200).json(updateTag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:putTagRouter" });
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.body,
      },
    });

    if (!deleteTag) {
      res.status(404).json({ message: "No 'delete Tag by Id' found" });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:deleteTagRouter" });
  }
});

module.exports = router;

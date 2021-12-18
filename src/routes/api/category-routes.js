const { Router } = require("express");

const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

const router = Router();

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const getCategories = await Category.findAll({
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    });

    if (!getCategories) {
      res.status(404).json({ message: "No Categories found" });
      return;
    }
    res.status(200).json(getCategories);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getCategoriesRouter" });
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const getCategory = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });

    if (!getCategory) {
      res.status(404).json({ message: "No get category Id found" });
      return;
    }

    res.status(200).json(getCategory);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getCategory" });
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:newCategory" });
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateCategory) {
      res.status(404).json({ message: "No update category Id found" });
      return;
    }

    res.status(200).json(updateCategory);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:updateCategory" });
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteCategory) {
      res.status(404).json({ message: "No delete category Id found" });
      return;
    }
    res.status(200).json(deleteCategory);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:deleteCategory" });
  }
});

module.exports = router;

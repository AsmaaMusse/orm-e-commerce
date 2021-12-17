const { Router } = require("express");

const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

const router = Router();

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getCategoryRouter" });
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getCategoryRouterById" });
  }
});

router.post("/", (req, res) => {
  // create a new category
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:postCategoryRouter" });
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:putCategoryRouter" });
  }
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:deleteCategoryRouter" });
  }
});

module.exports = router;

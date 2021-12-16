const { Router } = require("express");

const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

const router = Router();

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getTagRouter" });
  }
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:getTagRouterById" });
  }
});

router.post("/", (req, res) => {
  // create a new tag
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:postTagRouter" });
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:putTagRouter" });
  }
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
    res.status(200).json();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error!:deleteTagRouter" });
  }
});

module.exports = router;

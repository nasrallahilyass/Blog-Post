const prisma = require('../prisma');

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get a single category
exports.getCategory = async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: req.params.id },
    });
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Create a category
exports.createCategory = async (req, res) => {
  const { title, image } = req.body;
  try {
    const category = await prisma.category.create({
      data: { title, image },
    });
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Update a category
exports.updateCategory = async (req, res) => {
  const { title, image } = req.body;
  try {
    const category = await prisma.category.update({
      where: { id: req.params.id },
      data: { title, image },
    });
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    await prisma.category.delete({
      where: { id: req.params.id },
    });
    res.json({ msg: "Category removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

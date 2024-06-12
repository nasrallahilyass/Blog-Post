const prisma = require('../utils/connect');

// Create a new category
exports.createCategory = async (req, res) => {
  const { title, image } = req.body;
  try {
    const category = await prisma.category.create({
      data: { title, image },
    });
    res.status(201).json(category);
  } catch (error) {
    console.error("Error during category creation:", error);
    res.status(500).send('Server Error');
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: req.params.id },
    });
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

// Update category
exports.updateCategory = async (req, res) => {
  const { title, image } = req.body;
  try {
    const category = await prisma.category.update({
      where: { id: req.params.id },
      data: { title, image },
    });
    res.json({ msg: "Category Updated", category });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    await prisma.category.delete({
      where: { id: req.params.id },
    });
    res.json({ msg: "Category Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

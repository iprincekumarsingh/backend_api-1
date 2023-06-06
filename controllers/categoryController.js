const Category = require("../models/categories");
exports.createCategory = async (req, res) => {
  const { name, description, cover_img, slug } = req.body;

  try {
    const category = await Category.create({
      name,
      description,
      cover_img,
      slug,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      category,
      message: "Category created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.getCategory = async (req, res) => {
  const { slug } = req.params;

  try {
  } catch (err) {}
};
exports.updateCategory = async (req, res) => {};

// delete category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    Category.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({
              message: `Cannot delete with id ${id}. Maybe id is wrong`,
            });
        } else {
          res.send({
            message: "Category was deleted successfully",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Category with id=" + id,
        });
      });
  } catch (err) {
    return res.status(500).send({
      message: "Could not delete Category with id=" + id,
    });
  }
};
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).json({
      success: true,
      categories,
      message: "All categories fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// demo category data function
exports.demoCategory = async (req, res) => {
  //   create demo json data

  const categories = [
    {
      name: "Music",
      description:
        "Music is the art of arranging sounds in time to produce a composition through the elements of melody, harmony, rhythm, and timbre.",
      cover_img:
        "hhttps://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
      slug: "music",
    },
    {
      name: "Sports",
      description:
        "Sport includes all forms of competitive physical activity or games which, through casual or organized participation, at least in part aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.",
      slug: "sports",
      cover_img:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/upskill-collection-202211140440.png",
    },
    {
      name: "Technology",
      description:
        "Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.",
      slug: "technology",
      cover_img:
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
    },
  ];

  try {
    await Category.deleteMany({});
    await Category.insertMany(categories);
    res.status(201).json({
      success: true,
      message: "Categories created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

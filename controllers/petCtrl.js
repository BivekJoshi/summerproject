const userModel = require("../models/userModels");

const postPetController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    console.log(user,"asnxanslxasx");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

module.exports = { postPetController };

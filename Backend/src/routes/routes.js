const express = require("express");
const {
  login,
  register,
  logout,
  verify,
} = require("../controllers/controller");
const { authrequired } = require("../middlewares/authrequired");
const { Validationschema } = require("../middlewares/validateschema");
const { Loginschema, Registerschema } = require("../schemas/Auth.schema");

const router = express.Router();

router.post("/login", Validationschema(Loginschema), login);

router.post("/register", Validationschema(Registerschema), register);

router.post("/logout", logout);

router.get("/verify", verify);

module.exports = {
  router,
};

const Validationschema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    if (err) return res.status(500).json({ error: "Invalid inputs"});
  }
};

module.exports = {
  Validationschema,
};

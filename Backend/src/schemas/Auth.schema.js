const { z } = require("zod");

const Registerschema = z.object({
  username: z.string({
    required_error: "string is required",
  }),
  email: z
    .string({
      required_error: "must be a string",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "string is required",
    })
    .min(8, {
      required_error: "min 8 caracters",
    }),
});

const Loginschema = z.object({
  email: z
    .string({
      required_error: "must be a string",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "string is required",
    })
    .min(8, {
      required_error: "min 8 caracters",
    }),
});

module.exports = {
  Loginschema,
  Registerschema,
};

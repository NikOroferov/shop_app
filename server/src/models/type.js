const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiTypeSchema = Joi.object({
  name: Joi.string().required(),
});

const typeSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Type = model("type", typeSchema);

module.exports = { Type, joiTypeSchema };

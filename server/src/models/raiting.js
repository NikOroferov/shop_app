const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiRaitingSchma = Joi.object({
  raiting: Joi.string().default(0).required(),
});

const raitingSchema = Schema(
  {
    raiting: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

const Raiting = model("raiting", raitingSchema);

module.exports = { Raiting, joiRaitingSchma };

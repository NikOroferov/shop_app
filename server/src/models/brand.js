const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiBrandSchema = Joi.object({
  name: Joi.string().required(),
});

const brandSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const typeBrandShema = Schema({});

const Brand = model("brand", brandSchema);
const TypeBrand = model("type_brand", typeBrandShema);

module.exports = { Brand, joiBrandSchema, TypeBrand };

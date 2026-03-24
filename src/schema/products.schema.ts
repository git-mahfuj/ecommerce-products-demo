import mongoose from "mongoose";

const productsScema = mongoose.Schema.create(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    discountedPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);
const Product =
  mongoose.models.Product || mongoose.model("Product", productsScema);

export default Product;

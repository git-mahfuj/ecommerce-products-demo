import mongoose from "mongoose";

const productsScema = mongoose.Schema.create({
  name : {
    type: String,
    required : true
  },
  slug : {
    type : String,
    default : name
  },
  price : {
    type : Number,
  },
  discountedPrice : {
    type : Number
  }
} , {
    timestamps : true
})


export const Products = mongoose.models.Products || mongoose.model("Products" , productsScema)
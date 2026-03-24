const mongoose =require ("mongoose")

const menuproductSchema = new mongoose.Schema (
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true
    },

    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"]
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Menu", menuproductSchema)


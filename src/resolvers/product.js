import { Product } from "../models"



export default {
  Mutation: {
    createProduct: async (_, { product }) => {
      const found = await Product.create(product)
      return await Product.findById(found.id)
    },

    deleteProduct: async (_, { productId }) => {
      const found = await Product.findById(productId)
      return await found.destroy()
    },

    updateProduct: async (_, { product }) => {
      const found = await Product.findById(product.id)
      await found.update(product)
      return await Product.findById(found.id)
    },
  },

  Query: {
    product: (_, { id }) => Product.findById(id),
    products: (_, conditions) => Product.findAll({ where: conditions }),
  }
}

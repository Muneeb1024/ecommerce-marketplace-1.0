import { type SchemaTypeDefinition } from 'sanity'
import { products } from './product'
import { orders } from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,orders],
}

import { defineType } from "sanity"

export const products = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            }
        },
        {
            name: "description",
            type: "text",
            title: "Description",
            validation: (rule) => rule.required(),
        },
        {
            name: "productImage",
            type: "image",
            title: "Product Image",
            validation: (rule) => rule.required(),
        },
        {
            name: "price",
            type: "number",
            title: "Price",
            validation: (rule) => rule.required(),
        },
        {
            name: "inventory",
            type: "number",
            title: "Inventory",
            validation: (rule) => rule.required(),
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name: "dicountPercentage",
            type: "number",
            title: "Discount Percentage",
        },
        {
            name: "isNew",
            type: "boolean",
            title: "New Badge",
        }
    ]
})



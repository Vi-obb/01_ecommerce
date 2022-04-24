// schema for products

export default {
    name: "product",
    title: "Product",
    type: "document",

// fields to be displayed for each product

    fields: [

        // product image
        {
            name: "image",
            title: "Image",
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            }
        },

        // product name
        {
            name: "name",
            title: "Name",
            type: "string"
        },

        // product slug-generated from name
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 90
            }
        },

        // product price
        {
            name: "price",
            title: "Price",
            type: "number"
        },

        // product description
        {
            name: "details",
            title: "Details",
            type: "string"
        }
    ]
}
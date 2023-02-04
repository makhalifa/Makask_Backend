const { faker } = require('@faker-js/faker')
const fs = require('fs')
const { ObjectId } = require('mongodb')

const products = []
const product = {
    // _id: ObjectId(faker.database.mongodbObjectId()),
    seller: ObjectId(faker.database.mongodbObjectId()),
    reviews: [
        ObjectId(faker.database.mongodbObjectId()),
        ObjectId(faker.database.mongodbObjectId()),
        ObjectId(faker.database.mongodbObjectId()),
    ],

    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    pricing: {
        price: faker.commerce.price(),
        discount: faker.datatype.number(90),
        discountedPrice: faker.commerce.price(),
    },
    category: faker.commerce.department(),
    subcategory: faker.commerce.productAdjective(),
    brand: faker.company.name(),
    shipping: {
        free: faker.datatype.boolean(),
        cost: faker.commerce.price(),
        days: faker.datatype.number(10),
    },
    sizes: [
        {
            size: 'S',
            stock: faker.datatype.number(),
        },
    ],
    stock: faker.datatype.number(),
    colors: [faker.color.human(), faker.color.human(), faker.color.human()],

    thumbnail: faker.image.imageUrl(),
    images: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],

    tags: [
        faker.commerce.productMaterial(),
        faker.commerce.productMaterial(),
        faker.commerce.productMaterial(),
    ],
    rating: faker.datatype.number(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
}

for (let i = 0; i < 100; i++) {
    products.push(product)
}

fs.writeFileSync(__dirname+'/products.json', JSON.stringify(products))

const { faker } = require('@faker-js/faker')
const fs = require('fs')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')

const pepper = process.env.BCRYPT_PASSWORD
const saltRounds = process.env.SALT_ROUNDS

dotenv.config()

console.log('faker')

const customers = []
for (let i = 0; i < 50; i++) {
    const customer = {}
    customer._id = faker.internet.email()
    // customer.NID = faker.datatype.uuid();
    customer.purchases = [faker.database.mongodbObjectId()]
    // customer.orders = [{
    //     "orderID": faker.datatype.uuid(),
    //     "orderDate": faker.date.past(),
    //     "orderStatus": faker.datatype.boolean(),
    //     "orderItems": [{
    //         "itemID": faker.datatype.uuid(),
    //         "itemName": faker.commerce.productName(),
    //         "itemPrice": faker.commerce.price(),
    //         "itemQuantity": faker.datatype.number()
    //     }]
    // }]
    customer.orders = [faker.database.mongodbObjectId()]
    // customer.reviews = [{
    //     "reviewID": faker.datatype.uuid(),
    //     "reviewDate": faker.date.past(),
    //     "reviewRating": faker.datatype.number(),
    //     "reviewText": faker.lorem.paragraph()
    // }]
    customer.reviews = [
        faker.database.mongodbObjectId(),
        faker.database.mongodbObjectId(),
        faker.database.mongodbObjectId(),
    ]

    customer.history = [
        faker.database.mongodbObjectId(),
        faker.database.mongodbObjectId(),
        faker.database.mongodbObjectId(),
    ]

    customer.recommendations = [
        faker.database.mongodbObjectId(),
        faker.database.mongodbObjectId(),
        faker.database.mongodbObjectId(),
    ]
    customer.password = bcrypt.hashSync(
        faker.internet.password() + pepper, 
        parseInt(saltRounds)
    );

    customer.firstname = faker.name.firstName()
    customer.lastname = faker.name.lastName()
    customer.profilepicture = faker.image.avatar()
    customer.phone = [faker.phone.number('+201#########')]
    customer.address = [
        {
            city: faker.address.city(),
            country: faker.address.country(),
            addressLine: faker.address.streetAddress(),
        },
    ]
    customer.gender = faker.datatype.number({ min: 0, max: 1 })
    customer.dateofbirth = faker.date.past()
    
    customer.emailVerified = faker.datatype.boolean()

    customer.sizes = {
        height: faker.datatype.number(),
        weight: faker.datatype.number(),
        waist: faker.datatype.number(),
        chest: faker.datatype.number(),
        hips: faker.datatype.number(),
    }

    customer.paymentMethod = {
        creditCard: {
            cardNumber: faker.finance.creditCardNumber(),
            cardHolder: faker.name.fullName(),
            expirationDate: faker.date.future(),
            cvv: faker.finance.creditCardCVV(),
        },
        paypal: {
            accountNumber: faker.finance.account(),
            accountHolder: faker.name.fullName(),
        },
    }

    customer.createdAt = faker.date.past()
    customer.updatedAt = faker.date.past()

    customers.push(customer)
}
const json = JSON.stringify(customers)
// location of the file
const path = __dirname + '/customers.json'

fs.writeFile(path, json, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
})

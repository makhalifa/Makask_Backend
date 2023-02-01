# Makask Backend

=================

-   [Makask](#makask)
    -   [Description](#description)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [Endpoints](#endpoints)
            -   [Products](#products)
            -   [Customers](#customers)
            -   [Orders](#orders)
            -   [Sellers](#sellers)
        -   [Models](#models)
            -   [Cutsomer](#cutsomer)
            -   [Orders](#order)
            -   [Products](#product)
            -   [Sellers](#sellers)
            -   [Categories](#categories)
            -   [Subcategories](#subcategories)
            -   [Reviews](#reviews)
            -   [Payments](#payments)
            -   [Shipping](#shipping)
            -   [Sizes](#sizes)
            -   [Colors](#colors)
            -   [Brands](#brands)
        -   [Collections](#Collections)
            -   [Wishlist](#wishlist)
            -   [Messages](#messages)
            -   [Notifications](#notifications)
            -   [Admins](#admins)
            -   [coupons](#coupons)
            -   [promotions](#promotions)
            -   [discounts](#discounts)
            -   [shipping](#shipping)
            -   [payments](#payments)
            -   [reviews](#reviews)
            -   [sizes](#sizes)
            -   [colors](#colors)
            -   [brands](#brands)
            -   [categories](#categories)
            -   [subcategories](#subcategories)
            -   [products](#products)

## Description

This is the backend of the Makask project. It is a REST API that allows you to create, read, update and delete tasks. It also allows you to create, read, update and delete users. It is built with Node.js, Express and MongoDB.
<!-- link of deployment -->
backend at: [repo](https://github.com/makhalifa/Makask_Backend)

deployed at: [https://makask.onrender.com/](https://makask.onrender.com/)


## Installation

1. Clone the repository
2. Install the dependencies

```bash
npm install
```

3. Create a .env file in the root directory and add the following environment variables

```bash
PORT
MONGODB_URI
MONGO_ATLAS
```

4. Run the server

```bash
npm start
```

## Usage

### Endpoints

<!-- Checklist for endpoints -->
-  [ ] Products
    -  [x] Get all products
    -  [x] Get a product by id
    -  [x] Create a product
    -  [x] Update a product by id
    -  [x] Delete a product by id
    -  [x] Get all products filtered by category, subcategory, brand, price, size, color
    -  [x] Get all products filtered by name
    -  [ ] Get all reviews of a product by id
    -  [ ] Create a review of a product by id
    -  [ ] Update a review of a product by id
    -  [ ] Delete a review of a product by id
-  [ ] Customers
-  [ ] Orders
-  [ ] Sellers

#### Products

| Method | Endpoint                  | Description                                                                   |
| ------ | ------------------------- | ----------------------------------------------------------------------------- |
| GET    | /products                 | Get all products                                                              |
| GET    | /products/:id             | Get a product by id                                                           |
| POST   | /products                 | Create a product                                                              |
| PUT    | /products/:id             | Update a product by id                                                        |
| DELETE | /products/:id             | Delete a product by id                                                        |
| GET    | /products/search          | Get all products filtered by name                                             |
| GET    | /products/filter          | Get all products filtered by category, subcategory, brand, price, size, color |
| GET    | /products/:id/reviews     | Get all reviews of a product by id                                            |
| POST   | /products/:id/reviews     | Create a review of a product by id                                            |
| PUT    | /products/:id/reviews/:id | Update a review of a product by id                                            |
| DELETE | /products/:id/reviews/:id | Delete a review of a product by id                                            |

#### Customers

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| GET    | /customers     | Get all customers       |
| GET    | /customers/:id | Get a customer by id    |
| POST   | /customers     | Create a customer       |
| PUT    | /customers/:id | Update a customer by id |
| DELETE | /customers/:id | Delete a customer by id |

#### Orders

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | /orders     | Get all orders        |
| GET    | /orders/:id | Get an order by id    |
| POST   | /orders     | Create an order       |
| PUT    | /orders/:id | Update an order by id |
| DELETE | /orders/:id | Delete an order by id |

#### Sellers

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| GET    | /sellers     | Get all sellers       |
| GET    | /sellers/:id | Get a seller by id    |
| POST   | /sellers     | Create a seller       |
| PUT    | /sellers/:id | Update a seller by id |
| DELETE | /sellers/:id | Delete a seller by id |

### Models

-   [Customers](#cutsomer)
-   [Orders](#order)
-   [Products](#product)
-   [Sellers](#sellers)
-   [Categories](#categories)
-   [Subcategories](#subcategories)
-   [Reviews](#reviews)
-   [Payments](#payments)
-   [Shipping](#shipping)
-   [Sizes](#sizes)
-   [Colors](#colors)
-   [Brands](#brands)
-

#### Cutsomer

```javascript
{
  id: ObjectId,
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  gender: String,
  purchases: [ObjectId]
  dateofbirth: Date
  sizes: {
    height: Number,
    weight: Number,
    chest: Number,
    waist: Number,
    hips: Number,
    neck: Number,
    inseam: Number,
    sleeve: Number
  }
  creditcard: {
    number: Number,
    name: String,
    expiration: Date,
    cvv: Number
  }
}
```

#### Orders

```javascript
{
  id: ObjectId,
  customer: ObjectId,
  products: [{
    id: ObjectId,
    name: String,
    price: Number,
    quantity: Number
  }],
  payment: {
        method: String,
        status: String
  },
  status: enum('confirmed', 'shipped', 'delivered', 'cancelled'),
  confirmedAt: Date,
  shippedAt: Date,
  deliveredAt: Date,
  cancelledAt: Date,
  createdAt: Date,
  total: Number,
}
```

#### Product

```javascript
{
  id: ObjectId,
  seller: ObjectId,
  name: String,
  price: Number,
  category: String,
  subcategory: String,
  description: String,

  available_quantity: Number,
  available_sizes: [String],
  available_colors: [String],

  brand: String,
  reviews: [ObjectId],

  image: String,
  prova_image: ,
  createdAt: Date,
  updatedAt: Date
}
```

#### Sellers

```javascript
  id: ObjectId,
  business_name: String,
  contact_name: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  products: [ObjectId],
  createdAt: Date,
  updatedAt: Date,
  creditcard: {
    number: Number,
    name: String,
    expiration: Date,
    cvv: Number
  },
  bankaccount: {
    number: Number,
    name: String,
    expiration: Date,
    cvv: Number
  }
```

#### Categories

```javascript
{
  id: ObjectId,
  name: String,
  subcategories: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

#### Subcategories

```javascript
{
  id: ObjectId,
  name: String,
  category: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

#### Reviews

```javascript
{
  id: ObjectId,
  product: ObjectId,
  customer: ObjectId,
  rating: Number,
  comment: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### Payments

```javascript
{
  id: ObjectId,
  order: ObjectId,
  method: String,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### Shipping

```javascript
{
  id: ObjectId,
  order: ObjectId,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### Sizes

```javascript
  id: ObjectId,
  name: String,
  createdAt: Date,
  updatedAt: Date
```

#### Colors

```javascript
  id: ObjectId,
  name: String,
  createdAt: Date,
  updatedAt: Date
```

#### Brands

```javascript
  id: ObjectId,
  name: String,
  createdAt: Date,
  updatedAt: Date
```

### Collections

-   [Cart](#cart)
-   [Wishlist](#wishlist)
-   [Messages](#messages)
-   [Notifications](#notifications)
-   [Admins](#admins)
-   [coupons](#coupons)
-   [promotions](#promotions)
-   [discounts](#discounts)
-   [shipping](#shipping)
-   [payments](#payments)
-   [reviews](#reviews)
-   [sizes](#sizes)
-   [colors](#colors)
-   [brands](#brands)
-   [categories](#categories)
-   [subcategories](#subcategories)
-   [products](#products)

#### Cart

```javascript
  id: ObjectId,
  customer: ObjectId,
  products: [{
    id: ObjectId,
    name: String,
    price: Number,
    quantity: Number
  }],
  createdAt: Date,
  updatedAt: Date
```

#### Wishlist

```javascript
  id: ObjectId,
  customer: ObjectId,
  products: [{
    id: ObjectId,
    name: String,
    price: Number,
    quantity: Number
  }],
  createdAt: Date,
  updatedAt: Date
```

#### Messages

```javascript
  id: ObjectId,
  customer: ObjectId,
  seller: ObjectId,
  message: String,
  createdAt: Date,
  updatedAt: Date
```

#### Notifications

```javascript
  id: ObjectId,
  customer: ObjectId,
  seller: ObjectId,
  message: String,
  createdAt: Date,
  updatedAt: Date
```

#### Admins

```javascript
  id: ObjectId,
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date
```

#### Coupons

```javascript
  id: ObjectId,
  code: String,
  discount: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Discounts

```javascript
  id: ObjectId,
  name: String,
  discount: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Promotions

```javascript
  id: ObjectId,
  name: String,
  discount: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Shipping

```javascript
  id: ObjectId,
  name: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Taxes

```javascript
  id: ObjectId,
  name: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Currencies

```javascript
  id: ObjectId,
  name: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Countries

```javascript
  id: ObjectId,
  name: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date
```

#### States

```javascript
  id: ObjectId,
  name: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Cities

```javascript
  id: ObjectId,
  name: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Zipcodes

```javascript
  id: ObjectId,
  name: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date
```

#### Settings

```javascript
  id: ObjectId,
  name: String,
  value: String,
  createdAt: Date,
  updatedAt: Date
```

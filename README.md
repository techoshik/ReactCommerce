# ReactCommerce

## authentication

- signup with email
- login
- forgot password

## dashboard

- product list
- cart icon
- search
- account icon (show dropdown on click; show logout button and other options)

## wishlist

- add product
- remove product

## search

- by name
- by voice (optional)
- filters (by gender)

## product category

- list
- add

## products

- product list (buttons: cart, wishlist)
- details with zoom in on hover
- details page (buttons: wishlist, cart)
- add products

## reviews

- products
- website experience

## cart

- add/remove products

## orders

- create (payment type)
- track order
- status
- return & refund

## footer

- show logged in user details
- links (orders, wishlist, cart, support/help)

## support

- help center

## Offers

- create new offers for given time when create/update product

## users

- profile
- delete account
- reset password

## Folder structure

- pages: for routing
- components: parts of pages
- models: handle data objects
- services: handle data transactions
- utils: contains utility functions
- configs: contains project configurations
- constants: fixed values

## DATA FLOW
CLIENT/UI  <--API REQUEST--> SERVER(PROCESSING) <--DATABASE-->

## CRUD Operations

C - create
R - read
U - update
D - delete

<!-- DATABASE TYPES -->
1. SQL(Postgres) - STRUCTURED QUERY LANGUAGE
2. NoSQL (MongoDB) - ID is required, EVERYTHING ELSE IS OPTIONAL
{"name": "John Doe", "age": 22}
{"name": "John Doe", "age": 22, "email": "<abc@def.com>"}

3. KEY-VALUE DATABASES (redis)

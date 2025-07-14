#  Project Structure: Angular 19 E-Commerce App

This document outlines the folder and file organization for the e-commerce frontend app built using Angular 19 with standalone components and Angular Material.

---

##  Folder Overview

ecommerce-app/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── top-bar/ → Shared navigation bar with cart icon & home button
│ │ │ │ ├── top-bar.component.ts
│ │ │ │ ├── top-bar.component.html
│ │ │ │ ├── top-bar.component.scss
│ │ │ ├── product-list/ → Product listing with filters, pagination
│ │ │ │ ├── product-list.component.ts
│ │ │ │ ├── product-list.component.html
│ │ │ │ ├── product-list.component.scss
│ │ │ ├── product-details/ → Single product view with Add to Cart
│ │ │ │ ├── product-details.component.ts
│ │ │ │ ├── product-details.component.html
│ │ │ │ ├── product-details.component.scss
│ │ │ ├── cart/ → Shopping cart with item list, total, remove
│ │ │ │ ├── cart.component.ts
│ │ │ │ ├── cart.component.html
│ │ │ │ ├── cart.component.scss
│ │ ├── services/
│ │ │ ├── product.service.ts → Product API communication (FakeStore API)
│ │ │ ├── cart.service.ts → Cart management with item count observable
│ │ ├── models/
│ │ │ ├── product.model.ts → Product interface
│ │ ├── pipes/
│ │ │ ├── filter.pipe.ts → Optional: custom search filter pipe (if used)
│ │ ├── app-routing.module.ts → Route configuration for list, detail, cart
│ │ ├── app.component.ts → Bootstrap shell component
│ │ ├── app.config.ts → Optional: standalone route definitions
│ │ └── app.module.ts → Optional if not using fully standalone setup
├── angular.json
├── package.json
├── README.md
├── Project-structure.md
├── Copilot Chat Export.md
└── ...

yaml
Copy
Edit

---

##  Feature-Based Overview

###  Product Listing
- File: `product-list.component.ts`
- Functionality:
  - Search box
  - Category filter (sidebar)
  - Pagination
  - Click to view details

###  Product Details
- File: `product-details.component.ts`
- Functionality:
  - Image, title, price
  - Description
  - "Add to Cart" button

###  Cart
- File: `cart.component.ts`
- Functionality:
  - List of cart items
  - Remove item
  - Total price
  - Checkout button (stub)

###  Top Bar
- File: `top-bar.component.ts`
- Functionality:
  - Sticky header
  - Home button
  - Cart icon with live item count badge

---

##  Routing

#### Defined in: `app.routes.ts`

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
];

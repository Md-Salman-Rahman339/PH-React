# GadgetHeaven ✨

## Overview

Welcome to **GadgetHeaven**, your go-to destination for the latest and greatest gadgets! This is an e-commerce platform built with React, Context API, and LocalStorage for managing shopping cart and wishlist data. The site offers a clean and user-friendly experience to explore gadgets, manage your cart, wishlist, and make smooth purchases.

## Features

### Home Page

- **Banner Section:** A visually attractive banner with a call-to-action button that redirects users to the Dashboard page.
- **Categories Sidebar:** Sidebar with categories such as computers, phones, smart watches, chargers, and power banks. Each category displays relevant products when clicked.
- **Gadget Cards:** The homepage features gadgets in a card grid layout, each showing an image, product name, price, and a "Details" button leading to the product details page.
- **Product Filtering:** Filter products based on categories, and sort by price.

### Navbar

- **Menu Items:** Includes a logo, brand name, dashboard, and stats.
- **Active Route Indicator:** Highlights the active route in the navbar to ensure a smooth navigation experience.

### Details Page

- **Product Information:** Shows detailed information about the product, including an image, price, description, and specifications.
- **Add to Cart and Wishlist Buttons:** Add products to your cart or wishlist using intuitive buttons.
  - **Cart Button (🛒):** Adds the item to the cart.
  - **Wishlist Button (♥):** Adds the item to the wishlist, and is disabled once the item is added.
- **Disable Duplicate Wishlist Additions:** Prevents the user from adding the same item to the wishlist more than once.

### Dashboard Page

- **Tabs:** The dashboard has two tabs—**Cart** and **Wishlist**—for viewing and managing items.
- **Cart Tab:**
  - Displays cart items with product name, image, and price.
  - Shows total price of all items in the cart.
  - Includes a "Sort by Price" button that sorts cart items by price in descending order.
- **Wishlist Tab:** Displays items added to the wishlist with product name, image, and price.

### Footer Section

- **Footer Information:** Contains meaningful footer content, including important links and details as shown in the Figma design.

## Technologies Used

- **React.js:** Main frontend framework for building the user interface.
- **Context API:** Used to manage the state of the shopping cart and wishlist.
- **LocalStorage:** Optional for data persistence across sessions.
- **React Rating:** Used for displaying product ratings using stars.
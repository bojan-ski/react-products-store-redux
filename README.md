# 🛒 SHOP easy  
👉 Live Demo: [react-products-store-redux.vercel.app](https://react-products-store-redux.vercel.app)

The **SHOP easy** app is a modern and user-friendly products store where you can quickly find, compare, and purchase all your needs.  
It provides a seamless shopping experience with product search, filtering, cart management, checkout, and user profile features — all wrapped in a clean and responsive design.

---

## ✨ Features

### 👤 Authentication
- 🔐 Sign up, Sign in, and Forgot password functionality

### 🛍️ Shopping Features
- 🔎 Search for products
- 🗂️ Filter products by category
- ⚖️ Compare products
- ⭐ Bookmark favorite products
- 🛒 Add products to cart
- 🔄 Manage cart:
  - Increase / decrease quantity
  - Remove items
- 💳 Checkout:
  - Set shipping details
  - Use **store credits** for payment

### 👤 Profile Page
- ✏️ Set / update shipping details  
- 📦 View **order history**

### 📩 Contact
- Send an email or message directly to the app owner

---

## 🛠️ Technology Stack

- **Framework**: [React 18+](https://react.dev/)  
- **Database with Storage & Auth**: [Firebase & Firestore 11](https://firebase.google.com/)  
- **Routing**: [React Router 6+](https://reactrouter.com/)  
- **State Management**: [Redux 9+](https://redux.js.org/)  
- **UI Framework**: [Bootstrap 5+](https://getbootstrap.com/)  
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)  
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)  
- **Carousel/Slider**: [React Swiper](https://swiperjs.com/react)  
- **HTTP Client**: [Axios](https://axios-http.com/)  
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Products Data**: [DummyJSON](https://dummyjson.com/products/) 

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/bojan-ski/react-products-store-redux
cd shop-easy
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Firebase & Firestore
[Firebase & Firestore 11](https://firebase.google.com/)

### 4. Create an account and setup Email JS
[EmailJS](https://www.emailjs.com/)

### 5. Read DummyJSON docs
[DummyJSON](https://dummyjson.com/)

### 6. Environment Setup - .env
```env
# Products data
VITE_DUMMYJSON_PRODUCTS_API_URL=https://dummyjson.com/products/

# Email JS
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_API_KEY=
VITE_EMAILJS_URL=

# Firebase & Firestore
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### 7. Run the Development Server
```bash
npm run dev
```

---

## 👨‍💻 Author
Developed with ❤️ by BPdevelopment (bojan-ski)
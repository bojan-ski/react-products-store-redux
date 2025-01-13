import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import SelectedProduct from "./pages/SelectedProduct"
import SignUp from "./pages/SignUp"
import TermsAndConditions from "./pages/TermsAndConditions"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import CompareProducts from "./pages/CompareProducts"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile"
import OrderHistory from "./pages/OrderHistory"
import SelectedOrder from "./pages/SelectedOrder"
import BookmarkedProducts from "./pages/BookmarkedProducts"
import ContactUs from "./pages/ContactUs"
import ErrorPage from "./pages/ErrorPage"

// PRIVATE ROUTE
import AuthPrivateRoute from "./private/AuthPrivateRoute"
import ProfilePrivateRoute from "./private/ProfilePrivateRoute"

// LOADERS
import { loader as promoLoader } from "./pages/Dashboard"
import { loader as userBookmarkedProductsAndCategoriesLoader } from "./pages/Products"
import { loader as selectedProductLoader } from "./pages/SelectedProduct"
import { loader as userShippingDetailsLoader } from "./pages/Profile"
import { loader as selectedOrderLoader } from "./pages/SelectedOrder"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: promoLoader
      },
      {
        path: '/:id',
        element: <SelectedProduct />,
        loader: selectedProductLoader
      },
      {
        path: '/products',
        element: <Products />,
        loader: userBookmarkedProductsAndCategoriesLoader
      },
      {
        path: '/products/:id',
        element: <SelectedProduct />,
        loader: selectedProductLoader
      },
      {
        path: '/sign-up',
        element: <AuthPrivateRoute><SignUp /></AuthPrivateRoute>,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/login',
        element: <AuthPrivateRoute><Login /></AuthPrivateRoute>,
      },
      {
        path: '/forgot-password',
        element: <AuthPrivateRoute><ForgotPassword /></AuthPrivateRoute>,
      },
      {
        path: '/compare',
        element: <CompareProducts />,
      },
      {
        path: '/compare/:id',
        element: <SelectedProduct />,
        loader: selectedProductLoader
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <ProfilePrivateRoute><Checkout /></ProfilePrivateRoute>,
        loader: userShippingDetailsLoader
      },
      {
        path: '/profile',
        children: [
          {
            index: true,
            element: <Profile />,
            loader: userShippingDetailsLoader
          },
          {
            path: 'order-history',
            element: <ProfilePrivateRoute><OrderHistory /></ProfilePrivateRoute>,
          },
          {
            path: 'order-history/:id',
            element: <ProfilePrivateRoute><SelectedOrder/></ProfilePrivateRoute>,
            loader: selectedOrderLoader
          },
          {
            path: 'bookmarked-products',
            element: <ProfilePrivateRoute><BookmarkedProducts /></ProfilePrivateRoute>,
            loader: userBookmarkedProductsAndCategoriesLoader
          },
          {
            path: 'bookmarked-products/:id',
            element: <ProfilePrivateRoute><SelectedProduct /></ProfilePrivateRoute>,
            loader: selectedProductLoader
          },
        ]
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
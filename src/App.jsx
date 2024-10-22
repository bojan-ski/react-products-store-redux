import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
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
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import ErrorPage from "./pages/ErrorPage"

// PRIVATE ROUTE
import PrivateRoute from "./private/PrivateRoute"

// LOADERS
import { loader as listOfProductsLoader } from "./pages/Dashboard"
import { loader as selectedProductLoader } from "./pages/SelectedProduct"
import { loader as userShippingDetailsLoader } from "./pages/Profile"
import { loader as userOrderHistoryLoader } from "./pages/OrderHistory"
import { loader as selectedOrderLoader } from "./pages/SelectedOrder"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: listOfProductsLoader
      },
      {
        path: '/:id',
        element: <SelectedProduct />,
        loader: selectedProductLoader
      },
      {
        path: '/sign-up',
        element: <SignUp />,
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
        element: <Login />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
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
        element: <PrivateRoute><Checkout /></PrivateRoute>,
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
            element: <PrivateRoute><OrderHistory /></PrivateRoute>,
            loader: userOrderHistoryLoader
          },
          {
            path: 'order-history/:id',
            element: <PrivateRoute><SelectedOrder/></PrivateRoute>,
            loader: selectedOrderLoader
          },
          {
            path: 'bookmarked-products',
            element: <PrivateRoute><BookmarkedProducts /></PrivateRoute>,
            loader: listOfProductsLoader
          },
          {
            path: 'bookmarked-products/:id',
            element: <PrivateRoute><SelectedProduct /></PrivateRoute>,
            loader: selectedProductLoader
          },
        ]
      },
      {
        path: '/about',
        element: <About />,
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
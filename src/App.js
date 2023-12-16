import "./App.css";
import Header from "./components/header/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./pages/Browse";
import { Provider } from "react-redux";
import store from "./redux/store";
import Error from "./pages/Error";
import Auth from "./pages/Auth";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/register",
      element: <Auth />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Header />
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App;

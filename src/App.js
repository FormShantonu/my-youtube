import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      }
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        {/**
         * Head
         * Body
         *  sidebar
         *    MenuItem
         *  mainContainer
         *    ButtonsList
         *    video container
         *      VideoCard
         *       VideoCard
         *       VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;

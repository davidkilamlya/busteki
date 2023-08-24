import Home from "./Container/Home/Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import NotFound from "./Components/NotFound/NotFound";
import AboutUsPage from "./Components/Aboutus/AboutUsPage";
import RequestPage from "./Components/RequestPage/RequestPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<AboutUsPage />} />

        {/* <Route path="request" index element={<RequestPage />} /> */}
        <Route path="request" element={<RequestPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

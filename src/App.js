import Home from "./Container/Home/Home";
import ContactSupport from "./Components/Contactsupport/ContactSupport";
import Aboutus from "./Components/Aboutus/Aboutus";
import Aboutuss from "./";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ServiceProjects from "./Components/serviceProjects/ServiceProjects";
import ServicesProjectMain from "./Components/serviceProjects/ServicesProjectMain";
import Slider from "./Components/Slider/Slider";
import { images } from "./Constants";
import NotFound from "./Components/NotFound/NotFound";
import BannerSlider from "./Components/Slider/BannerSlider";
import webdev from "./Assets/appdevelopment.jpg";

const image = [webdev, webdev, webdev];

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<Home />} />
        <Route path="contactus" element={<ContactSupport />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="services" element={<ServicesProjectMain />} />
        <Route path="works" element={<ServiceProjects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

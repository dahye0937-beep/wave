import "./styles/reset.css";
import "./styles/font.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Wave from "./pages/Wave";
import About from "./pages/About";
import Summary from "./pages/Summary";
import Info from "./pages/Info";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Wave />} />
          <Route path="info" element={<Info />}/>
          <Route path="about" element={<About />}>
            <Route index element={<Summary title="사업개요" />} />
            <Route path="consumer" element={<Summary title="컨슈머커머스" />} />
            <Route path="seller" element={<Summary title="셀러커머스" />} />
            <Route
              path="crossborder"
              element={<Summary title="크로스보더커머스" />}
            />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default App;

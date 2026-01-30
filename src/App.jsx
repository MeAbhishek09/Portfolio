// import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Personal from "./pages/Personal";
import NotFoundPage from "./components/home/NotFoundPage";

// export default function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/personal" element={<Personal />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </HashRouter>
//   );
// }



import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

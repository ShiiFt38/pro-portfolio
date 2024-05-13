import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home.js"
import Archive from "./pages/Archive.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Archive' element={<Archive/>}></Route>
      <Route path='/Resume' element={<Resume/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
    </Routes>
  );
}

export default App;

import "./App.css";
import { Header, Loading } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, About, Record, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <Loading />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/record" element={<Record />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// 페이지 올리는 방법 npm run deploy

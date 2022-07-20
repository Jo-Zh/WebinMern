import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { login_status } from "./context/user_context";
import { dummyData } from "./utils/Dummydata";

const Base = lazy(() => import("./routes/Base"));
const Home = lazy(() => import("./routes/Home"));
const Category = lazy(() => import("./routes/Category"));

const App = () => {
  const [data, setData] = useState(dummyData);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />}></Route>
            <Route path="/category" element={<Category data={data} />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

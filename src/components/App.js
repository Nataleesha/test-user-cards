import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Tweets from "pages/Tweets/Tweets";
import Home from "pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

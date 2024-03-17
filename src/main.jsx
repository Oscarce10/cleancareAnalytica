import React from "react";
import ReactDOM from "react-dom/client";
import MainForm from "./MainForm.jsx";
import Results from "./Results.jsx";
import "./index.scss";
import "../hint.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<MainForm />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    </HashRouter>
);

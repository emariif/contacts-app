import React from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./pages/CounterApp";
import MyForm from "./pages/MyForm";

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);
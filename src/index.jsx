import React from "react";
import ReactDOMClient from "react-dom/client";
import { CompanyChaabiCo } from "./screens/CompanyChaabiCo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CompanyChaabiCo />);

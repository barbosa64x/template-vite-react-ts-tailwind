import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Old App.tsx */}
    <h1 className="font-black text-2xl text-red-500">Main - Page</h1>
  </StrictMode>
);

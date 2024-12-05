/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from "react-dom/client";
import Providers from "@/Providers";
import { RouterProvider } from "react-router-dom";
import router from "@/router";

import "@/App.global.scss";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

ReactDOM.createRoot(root).render(
	<Providers>
		<RouterProvider router={router} />
	</Providers>
);

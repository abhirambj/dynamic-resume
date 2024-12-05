import React, { Suspense } from "react";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import NavigationBar from "@/navigation/NavigationBar";
import LoadingSpinner from "./components/LoadingSpinner";

const Landing = React.lazy(() => import("@/pages/Landing"));
const Resume = React.lazy(() => import("@/pages/Resume"));
const Projects = React.lazy(() => import("@/components/projects/Projects"));

export const architecture: RouteObject[] = [
	{
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<NavigationBar>
					<Outlet />
				</NavigationBar>
			</Suspense>
		),
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "resume",
				element: <Resume />,
			},
			{
				path: "projects",
				element: <Projects />,
			},
		],
	},
];

const router = createBrowserRouter(architecture);

export default router;

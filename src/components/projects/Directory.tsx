import { useState } from "react";
import {
	Input,
	Select,
	Option,
	Stack,
	IconButton,
	Typography,
	Avatar,
} from "@mui/joy";
import { IoIosClose, IoIosSearch, IoIosShuffle } from "react-icons/io";

const projects = [
	{
		title: "Expense Tracker",
		description:
			"A financial management tool using FastAPI, React, Zustand, and MongoDB, deployed on AWS with CI/CD pipelines.",
		platform: "github",
		createdAt: "2024-10-01T00:00:00Z",
		updatedAt: "2024-11-15T00:00:00Z",
	},
	{
		title: "TogaCommerce",
		description:
			"An e-commerce platform developed using Spring Boot and React, optimized for high traffic with Docker and load balancing.",
		platform: "github",
		createdAt: "2024-07-15T00:00:00Z",
		updatedAt: "2024-09-30T00:00:00Z",
	},
	{
		title: "Progressive Web App (PWA)",
		description:
			"Implemented PWA features for a real-time application, increasing user engagement by 20%.",
		platform: "github",
		createdAt: "2021-09-01T00:00:00Z",
		updatedAt: "2021-10-15T00:00:00Z",
	},
];

// Platform details for display
const platformDetails: {
	[key: string]: { label: string; icon: () => JSX.Element };
} = {
	github: {
		label: "GitHub",
		icon: () => <IoIosSearch />,
	},
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
	return (
		<Stack
			direction="row"
			padding={2}
			gap={2}
			sx={{
				cursor: "pointer",
				borderRadius: "1rem",
				backgroundColor: (theme) => theme.palette.background.body,
				border: "1px solid transparent",
				transition: "all ease .2s",
				"&:hover": {
					transform: "scale(1.02)",
					boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
				},
			}}
		>
			<Avatar>
				{platformDetails[
					project.platform as keyof typeof platformDetails
				].icon()}
			</Avatar>
			<Stack gap={0.5}>
				<Typography level="h3">{project.title}</Typography>
				<Typography level="body2">{project.description}</Typography>
			</Stack>
		</Stack>
	);
}

export default function Directory() {
	const [search, setSearch] = useState("");
	const [platform, setPlatform] = useState<string | null>(null);

	// Filtered projects based on search and platform
	const filteredProjects = projects.filter(
		(project) =>
			(platform === null || project.platform === platform) &&
			(search === "" ||
				project.title.toLowerCase().includes(search.toLowerCase()) ||
				project.description
					.toLowerCase()
					.includes(search.toLowerCase()))
	);

	return (
		<Stack padding={2} width="100%">
			<Stack direction="row" gap={2}>
				<Input
					placeholder="Search projects"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					startDecorator={<IoIosSearch />}
					endDecorator={
						search && (
							<IconButton onClick={() => setSearch("")}>
								<IoIosClose />
							</IconButton>
						)
					}
				/>
				<Select
					value={platform}
					onChange={(_, value) => setPlatform(value || null)}
					placeholder="Filter by platform"
				>
					{Object.entries(platformDetails).map(([key, detail]) => (
						<Option key={key} value={key}>
							{detail.label}
						</Option>
					))}
				</Select>
			</Stack>
			<Stack paddingY={2}>
				{filteredProjects.length === 0 ? (
					<Typography>
						No projects found. Try a different search.
					</Typography>
				) : (
					filteredProjects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))
				)}
			</Stack>
		</Stack>
	);
}

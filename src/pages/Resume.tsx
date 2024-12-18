/* eslint-disable react/react-in-jsx-scope */
import {
	Avatar,
	Box,
	Button,
	Divider,
	Stack,
	Textarea,
	Typography,
} from "@mui/joy";
import { useMemo, useState } from "react";
import { RiBriefcaseLine } from "react-icons/ri";
import { TbSchool } from "react-icons/tb";
import details from "@/assets/Details";
import { Education, Experience } from "@/components/Details";
import { marked } from "marked";
import Download from "@/components/resume/Download";
import { useMobileMode } from "@/components/Responsive";

export default function Resume() {
	const mobile = useMobileMode();

	const [descriptionEditable, setDescriptionEditable] = useState(false);
	const [descriptionContent, setDescriptionContent] = useState(
		"Skilled **full-stack developer** with expertise in diverse programming languages and frameworks. Proven ability to deliver impactful projects on GitHub, fostering a **collaborative environment**. Adept at tackling **complex challenges** and thriving in team settings. Seeking to leverage skills in a dynamic role."
	);
	const parsedDescriptionContent = useMemo(
		() =>
			(marked.parse(descriptionContent) as string)
				.replace(/<p>/g, "")
				.replace(/<\/p>/g, ""),
		[descriptionContent]
	);

	return (
		<>
			<Download />
			<Stack
				alignItems="center"
				sx={{
					width: "100vw",
					paddingTop: "var(--nav-safe-area-inset-top)",
					paddingBottom: "var(--nav-safe-area-inset-bottom)",
					paddingLeft: "var(--nav-safe-area-inset-left)",
				}}
			>
				<Box component="div" maxWidth="65em">
					<Stack
						paddingX={mobile ? 3 : 12}
						paddingY={mobile ? 5 : 6}
						gap={3}
						width="100%"
						height="100%"
					>
						<Stack component="header" gap={0}>
							<Typography level="h2" fontWeight="xl">
								{`${details.name.first} ${details.name.last}`}
							</Typography>
							<Typography
								level="h6"
								fontWeight="lg"
								textColor="text.secondary"
								marginBottom={0.5}
							>
								Software Developer
							</Typography>
							{descriptionEditable ? (
								<Stack gap={1.5}>
									<Textarea
										value={descriptionContent}
										onChange={(event) => {
											setDescriptionContent(
												event.target.value
											);
										}}
										sx={{
											padding: ".2rem .5rem",
											margin: "-.2rem -.5rem",
											marginTop: ".2rem",
											fontSize: "var(--joy-fontSize-sm)",
										}}
									/>
									<Stack direction="row" justifyContent="end">
										<Button
											size="sm"
											onClick={() => {
												setDescriptionEditable(false);
											}}
										>
											Save changes
										</Button>
									</Stack>
								</Stack>
							) : (
								<Typography
									component="div"
									role="textbox"
									onClick={() => {
										setDescriptionEditable(true);
									}}
									level="body2"
									sx={{
										position: "relative",
										borderRadius: ".5rem",
										padding: ".2rem .5rem",
										margin: "-.2rem -.5rem",
										marginTop: ".2rem",
										outline: "1px solid transparent",
										transition: "all ease .2s",
										cursor: "pointer",
										"&:hover": {
											outlineColor:
												"var(--joy-palette-divider)",
										},
									}}
								>
									<div
										dangerouslySetInnerHTML={{
											__html: parsedDescriptionContent,
										}}
									/>
								</Typography>
							)}
						</Stack>
						<Box
							component="section"
							sx={{
								gap: 3,
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Stack
								direction="row"
								flexWrap="wrap"
								columnGap={2}
								rowGap={1}
							>
								{[
									{ key: "address", label: "Address" },
									{ key: "email", label: "Email" },
									{ key: "phone", label: "Phone" },
									{ key: "website", label: "Website" },
								].map(({ key, label }) => {
									const value =
										details.contact[
											key as keyof typeof details.contact
										];
									const isUrl = value.startsWith("http");
									return (
										<Stack key={key}>
											<Typography
												level="body2"
												fontWeight="bold"
												textTransform="capitalize"
											>
												{label}
											</Typography>
											{isUrl ? (
												<Typography
													component="a"
													level="body2"
													href={value}
													target="_blank"
													sx={{
														wordBreak: "break-word",
														textDecoration: "none",
														"&:hover": {
															textDecoration:
																"underline",
														},
													}}
												>
													{value}
												</Typography>
											) : (
												<Typography
													level="body2"
													sx={{
														wordBreak: "break-word",
													}}
												>
													{value}
												</Typography>
											)}
										</Stack>
									);
								})}
							</Stack>
							<Stack gap={1}>
								<Typography
									level="h6"
									fontWeight="lg"
									startDecorator={
										<Avatar size="sm" alt="Work experience">
											<RiBriefcaseLine />
										</Avatar>
									}
								>
									Work experience
								</Typography>
								<Divider />
								<Experience truncate />
							</Stack>

							<Stack gap={1}>
								<Typography
									level="h6"
									fontWeight="lg"
									startDecorator={
										<Avatar size="sm" alt="Education">
											<TbSchool />
										</Avatar>
									}
								>
									Education
								</Typography>
								<Divider />
								<Stack gap={1}>
									<Education wrap />
								</Stack>
							</Stack>
							<Divider />
						</Box>
					</Stack>
				</Box>
			</Stack>
		</>
	);
}

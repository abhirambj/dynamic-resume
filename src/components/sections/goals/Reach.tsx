import { FiAtSign, FiUser } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { animated, useSpringValue } from "@react-spring/web";
import {
	Alert,
	Box,
	Button,
	Input,
	Stack,
	Textarea,
	Typography,
} from "@mui/joy";
import { MdErrorOutline, MdSend } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { BsSendCheck } from "react-icons/bs";
import Confetti from "react-confetti";
import { useMobileMode } from "@/components/Responsive";

export default function Reach({ step }: { step: number }) {
	const mobile = useMobileMode();

	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState<string>();

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const submit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
		if (!apiKey) {
			setError(
				"API key is missing. Please check your environment variables."
			);
			setLoading(false);
			return;
		}

		setLoading(true);
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				access_key: apiKey,
				email,
				name,
				message,
			}),
		});

		const result = await response.json();
		if (result.success) {
			setSubmitted(true);
		} else {
			setError(
				result.message || "Failed to send message. Please try again."
			);
		}
		setLoading(false);
	};

	const opacity = useSpringValue(0);
	const top = useSpringValue("80%");
	const scale = useSpringValue(1);

	const submissionTextOpacity = useSpringValue(0);
	const submissionTextScale = useSpringValue(1);

	useEffect(() => {
		if (!submitted) {
			opacity.start(step >= 4 || mobile ? 1 : 0);
			top.start(step >= 4 || mobile ? "67%" : "80%");
		}
	}, [step]);

	useEffect(() => {
		if (submitted) {
			opacity.start(0.2);
			scale.start(0.9);
			submissionTextOpacity.start(1);
			submissionTextScale.start(1);
		} else {
			opacity.start(1);
			scale.start(1);
			submissionTextOpacity.start(0);
			submissionTextScale.start(0.9);
		}
	}, [submitted, submissionTextOpacity, submissionTextScale]);

	return (
		<>
			{submitted && (
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
					numberOfPieces={1000}
					recycle={false}
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 999999,
						pointerEvents: "none",
					}}
				/>
			)}
			<Box
				id="connect"
				component={animated.form}
				onSubmit={submit}
				sx={{
					position: "absolute",
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: mobile ? "center" : "flex-start",
					paddingX: mobile ? "0" : "5%",
					alignItems: "center",
					width: mobile ? "calc(100% + 2rem)" : "100%",
					marginX: mobile ? "-1rem" : "auto",
					maxHeight: "27rem",
					pointerEvents: submitted ? "none" : "auto",
				}}
				style={{
					opacity,
					top,
					transform: scale.to((s) => `scale(${s})`),
				}}
			>
				<Stack
					sx={{
						width: "min(30rem, 90%)",
						display: "flex",
						flexDirection: "column",
						gap: 1,
					}}
				>
					<input
						type="hidden"
						name="access_key"
						value="4e4e6aee-a458-4774-a6e3-a6df6c19abe5"
					/>
					<Typography level="h1">
						{"Let's "}
						<Typography color="danger">connect.</Typography>
					</Typography>
					<Stack gap={1}>
						<Input
							variant="plain"
							placeholder="Your email address"
							type="email"
							name="email"
							startDecorator={<FiAtSign />}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
						<Input
							variant="plain"
							placeholder="Your name"
							type="text"
							name="name"
							startDecorator={<FiUser />}
							onChange={(event) => setName(event.target.value)}
							required
						/>
						<Textarea
							variant="plain"
							placeholder="What's on your mind?"
							name="message"
							required
							onChange={(event) => setMessage(event.target.value)}
							minRows={4}
						/>
						{error && (
							<Alert
								color="warning"
								startDecorator={
									<MdErrorOutline size="1.1rem" />
								}
								sx={{ gap: 0.5 }}
							>
								{error ||
									"Something went wrong. Please try again."}
							</Alert>
						)}
						<Stack direction="row" justifyContent="end" gap={1}>
							<Button
								component="a"
								color="danger"
								variant="soft"
								href="https://youtu.be/bpOSxM0rNPM?si=j4LeYGjAeZmfWga4"
								target="_blank"
								startDecorator={<FaFire />}
							>
								Surprise me
							</Button>
							<Button
								type="submit"
								variant="soft"
								loading={loading}
								startDecorator={<MdSend />}
							>
								Submit
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Box>
			<Stack
				direction={mobile ? "column" : "row"}
				gap={mobile ? 2 : 4}
				flexWrap="wrap"
				alignItems="center"
				justifyContent="center"
				component={animated.div}
				sx={{
					position: "absolute",
					bottom: "12rem",
					left: "50%",
					width: "95%",
					pointerEvents: submitted ? undefined : "none",
				}}
				style={{
					opacity: submissionTextOpacity,
					transform: submissionTextScale.to(
						(s) => `scale(${s}) translateX(-50%)`
					),
				}}
			>
				<BsSendCheck
					size="4rem"
					style={{ color: "var(--joy-palette-neutral-softColor)" }}
				/>
				<Stack direction="column">
					<Typography
						level="h2"
						textAlign={mobile ? "center" : "left"}
					>
						{mobile ? "Thank you!" : "Thanks for reaching out!"}
					</Typography>
					<Typography
						level="h6"
						textColor="text.secondary"
						textAlign={mobile ? "center" : "left"}
					>
						Your message has been sent successfully.
					</Typography>
				</Stack>
			</Stack>
		</>
	);
}

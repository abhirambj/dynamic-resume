import { IconType } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

export type Platform = "github" | "linkedin";

export const platformDetails: Record<
	Platform,
	{
		label: string;
		icon: IconType;
		sublabel: string;
	}
> = {
	github: {
		label: "GitHub",
		icon: FiGithub,
		sublabel: "Code repository",
	},
	linkedin: {
		label: "LinkedIn",
		icon: SiLinkedin,
		sublabel: "Professional network",
	},
};

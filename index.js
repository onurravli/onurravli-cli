#!/usr/bin/env node

import chalk from "chalk";
import got from "got";
import img from "terminal-image";
import wrap from "word-wrap";

const WRAP_WIDTH = 200;

const config = {
	title: "Hi, I am $Onur Ravli$!",
	description:
		"A full-stack developer passionate about building modern and scalable applications, from Türkiye.",
	experience: {
		title: "Experience",
		description: "My professional journey so far.",
		items: [
			{
				company: "Insider One",
				position: "Software Developer",
				location: "Istanbul, Türkiye",
				startDate: "July 2025",
				endDate: "Present",
				notes: [],
				technologies: [
					"JavaScript",
					"TypeScript",
					"React.js",
					"Node.js",
					"PostgreSQL",
					"Tailwind CSS",
				],
			},
			{
				company: "Jotform",
				position: "Summer Intern",
				location: "Ankara, Türkiye",
				startDate: "August 2023",
				endDate: "September 2023",
				notes: [
					"Development of a revision history system for their product, Jotform Approvals, with my team, Jr. Source, as an internship project using Node.js, React.js, SCSS, PHP, and MySQL.",
				],
				technologies: [
					"JavaScript",
					"TypeScript",
					"React.js",
					"Node.js",
					"PostgreSQL",
					"Tailwind CSS",
					"SCSS",
					"PHP",
					"MySQL",
				],
			},
			{
				company: "Üstünova Engineering",
				position: "Summer Intern",
				location: "Ankara, Türkiye",
				startDate: "July 2023",
				endDate: "August 2023",
				notes: [
					"Frontend development of a dashboard and a control panel for an EV charging station software, Electr-INN, using Next.js, Node.js, and Django.",
				],
				technologies: [
					"JavaScript",
					"TypeScript",
					"React.js",
					"Node.js",
					"Tailwind CSS",
					"Next.js",
					"Django",
				],
			},
		],
	},
	skills: {
		title: "Skills",
		description: "Tools and technologies I use",
		items: [
			{
				title: "Programming Languages",
				items: ["JavaScript", "Go", "TypeScript", "Python", "Java"],
			},
			{
				title: "Backend Tools",
				items: [
					"Node.js",
					"Express.js",
					"Nest.js",
					"Django",
					"Spring Boot",
					"Flask",
				],
			},
			{
				title: "Frontend Tools",
				items: [
					"React.js",
					"React Native",
					"Next.js",
					"TailwindCSS",
					"Electron",
					"SCSS",
				],
			},
			{
				title: "Databases",
				items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
			},
			{
				title: "DevOps",
				items: [
					"Github Actions",
					"Docker",
					"Docker Compose",
					"AWS EC2",
					"AWS Lambda",
					"AWS S3",
					"Bash",
				],
			},
			{
				title: "Other Tools",
				items: [
					"Git",
					"GraphQL",
					"Jest",
					"Postman",
					"Swagger",
					"Jira",
					"Slack",
					"Notion",
				],
			},
			{
				title: "Design",
				items: ["Figma", "Photoshop", "Illustrator", "XD"],
			},
			{
				title: "Languages",
				items: ["English", "Turkish"],
			},
		],
	},
	contact: {
		title: "Contact",
		description: "Let's connect and discuss our next project.",
		items: [
			{
				title: "Email",
				items: ["mailto:onur@onurravli.com"],
			},
			{
				title: "GitHub",
				items: ["github.com/onurravli"],
			},
			{
				title: "LinkedIn",
				items: ["linkedin.com/in/onurravli"],
			},
			{
				title: "BlueSky",
				items: ["bsky.app/profile/onurravli.com"],
			},
			{
				title: "X",
				items: ["x.com/onurravli"],
			},
			{
				title: "Instagram",
				items: ["instagram.com/onurravli"],
			},
		],
	},
};

/**
 *
 * @param {String} text Text to be wrapped
 * @param {wrap.IOptions} options Options for wrapping
 * @returns
 */
const wrapText = (text, options) => {
	return wrap(text, { width: WRAP_WIDTH * 2, ...options });
};

/**
 * Prints a newline
 */
const newline = () => {
	console.log();
};

/**
 *
 * @param {String} text
 * @returns Bold text with highlighted sections between $ symbols
 */
const title = (text) => {
	const parts = text.split("$");
	const processedText = parts
		.map((part, index) => {
			return index % 2 === 0 ? chalk.bold(part) : chalk.bold.bgRed.white(part);
		})
		.join("");

	return console.log(processedText);
};

const sectionTitle = (title, description) => {
	return console.log(chalk.bold(title), chalk.white(description));
};

/**
 *
 * @param {Array} array
 */
const printSection = (array) => {
	if (array.length === 0) {
		return;
	}
	array.forEach((section) => {
		let items = "";
		section.items.forEach((item, i) => {
			if (i === section.items.length - 1) {
				items += `${item}`;
			} else {
				items += `${item}, `;
			}
		});
		console.log(
			wrapText(`${chalk.bold(`• ${section.title}`)} ${items}`, {
				width: WRAP_WIDTH,
			}),
		);
	});
};

/**
 * Prints the experience section
 * @param {Array} array Experience items array
 */
const printExperience = (array) => {
	array.forEach((item) => {
		console.log(
			wrapText(
				`${chalk.bold(`• ${item.position} at ${item.company}`)} — ${item.location} (${item.startDate} - ${item.endDate})`,
				{ width: WRAP_WIDTH },
			),
		);
	});
	newline();
};

const main = async () => {
	got("https://www.onurravli.com/Onur_Ravli.jpeg", {
		responseType: "buffer",
	})
		.then((image) => {
			return img.buffer(image.body, { width: "20%", height: "20%" });
		})
		.then((image) => {
			newline();
			console.log(image);
			newline();
			title(config.title);
			newline();
			console.log(wrapText(config.description, { width: WRAP_WIDTH }));
			newline();
			sectionTitle(config.experience.title, config.experience.description);
			newline();
			printExperience(config.experience.items);
			sectionTitle(config.skills.title, config.skills.description);
			newline();
			printSection(config.skills.items);
			newline();
			sectionTitle(config.contact.title, config.contact.description);
			newline();
			printSection(config.contact.items);
			newline();
		});
};

main();

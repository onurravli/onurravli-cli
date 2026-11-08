#!/usr/bin/env node

import chalk from "chalk";
import terminalImage from "terminal-image";
import * as data from "./data.js";

const args = new Set(process.argv.slice(2));

// Set `hidden: true` on an item in data.js to leave it out; `--all` shows everything.
const visible = (items) => (args.has("--all") ? items : items.filter((item) => !item.hidden));

const { profile, skills, education, links } = data;
const experience = visible(data.experience);
const projects = visible(data.projects);
const posts = visible(data.posts);
const shown = (name) => args.has("--all") || data.sections[name] !== false;

if (args.has("-h") || args.has("--help")) {
  console.log(`
  ${chalk.bold("npx onurravli")} ${chalk.dim("[options]")}

  ${chalk.dim("--all")}        Include hidden sections and items
  ${chalk.dim("--no-image")}   Skip the avatar
  ${chalk.dim("--json")}       Print the raw data as JSON
  ${chalk.dim("-h, --help")}   Show this help
`);
  process.exit(0);
}

if (args.has("--json")) {
  console.log(JSON.stringify(data, null, 2));
  process.exit(0);
}

const WIDTH = Math.max(40, Math.min(process.stdout.columns || 80, 100) - 4);
const accent = chalk.hex("#ef4444");
const PAD = "  ";

/** Wraps plain text to the terminal width, indenting every line. */
const wrap = (text, indent = PAD, firstIndent = indent) => {
  const lines = [];
  let line = "";
  let prefix = firstIndent;
  for (const word of text.split(/\s+/)) {
    if (line && prefix.length + line.length + 1 + word.length > WIDTH) {
      lines.push(prefix + line);
      line = word;
      prefix = indent;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(prefix + line);
  return lines.join("\n");
};

/** Strips scheme and trailing slash for display. */
const pretty = (url) => url.replace(/^(https?:\/\/(www\.)?|mailto:)/, "").replace(/\/$/, "");

const section = (title) => {
  const label = ` ${title.toUpperCase()} `;
  console.log(
    `\n${PAD}${chalk.bold.bgHex("#ef4444").white(label)} ${chalk.dim("─".repeat(WIDTH - label.length - 4))}\n`,
  );
};

const avatar = async () => {
  if (args.has("--no-image")) return null;
  try {
    const res = await fetch(profile.avatar, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    const buffer = Buffer.from(await res.arrayBuffer());
    // Native inline images (iTerm, Kitty, WezTerm) are sharp but get swallowed by tmux;
    // there, fall back to colored half-block characters.
    if (process.env.TMUX) return `${await terminalImage.buffer(buffer, { width: 24, preferNativeRender: false })}\n`;
    return await terminalImage.buffer(buffer, { width: "20%", height: "20%" });
  } catch {
    return null;
  }
};

const printHeader = (image) => {
  console.log(image ? `\n${image.replace(/^/gm, PAD)}` : "");
  console.log(`${PAD}${chalk.bold("Hi, I'm")} ${accent.bold(profile.name)}`);
  console.log(`${PAD}${chalk.dim(`${profile.role} · ${profile.location}`)}`);
  console.log();
  console.log(wrap(profile.tagline));
  const [current] = data.experience;
  console.log();
  console.log(`${PAD}${accent("●")} Currently ${chalk.bold(current.position)} at ${chalk.bold(current.company)}`);
};

const printExperience = () => {
  if (!experience.length) return;
  section("Experience");
  experience.forEach((job, i) => {
    if (i) console.log();
    console.log(`${PAD}${chalk.bold(job.position)} ${chalk.dim("·")} ${accent.bold(job.company)}`);
    console.log(`${PAD}${chalk.dim(`${job.start} – ${job.end} · ${job.location}`)}`);
    for (const h of job.highlights) console.log(wrap(h, `${PAD}  `, `${PAD}${chalk.dim("›")} `));
    console.log(chalk.dim(wrap(job.tech.join(" · "), `${PAD}  `)));
  });
};

const printProjects = () => {
  if (!projects.length) return;
  section("Projects");
  const nameWidth = Math.max(...projects.map((p) => p.name.length)) + 2;
  for (const p of projects) {
    const indent = PAD + " ".repeat(nameWidth);
    const [first, ...rest] = wrap(p.description, indent).slice(indent.length).split("\n");
    console.log(`${PAD}${chalk.bold(p.name.padEnd(nameWidth))}${first}`);
    if (rest.length) console.log(rest.join("\n"));
    console.log(`${indent}${chalk.cyan(pretty(p.url))} ${chalk.dim(p.languages.join(", "))}`);
  }
};

const printSkills = () => {
  section("Skills");
  const labelWidth = Math.max(...skills.map((s) => s.title.length)) + 2;
  for (const s of skills) {
    const indent = PAD + " ".repeat(labelWidth);
    const [first, ...rest] = wrap(s.items.join(", "), indent).slice(indent.length).split("\n");
    console.log(`${PAD}${chalk.bold(s.title.padEnd(labelWidth))}${first}`);
    if (rest.length) console.log(rest.join("\n"));
  }
};

const printEducation = () => {
  section("Education");
  for (const e of education) {
    console.log(`${PAD}${chalk.bold(e.degree)} ${chalk.dim("·")} ${e.school}`);
    console.log(`${PAD}${chalk.dim(`${e.start} – ${e.end} · ${e.location}`)}`);
  }
};

const printPosts = () => {
  if (!posts.length) return;
  section("Writing");
  for (const p of posts) {
    console.log(`${PAD}${chalk.bold(p.title)} ${chalk.dim(`· ${p.date}`)}`);
    console.log(`${PAD}${chalk.cyan(pretty(p.url))}`);
  }
};

const printContact = () => {
  section("Contact");
  const labelWidth = Math.max(...links.map((l) => l.title.length)) + 2;
  for (const l of links) console.log(`${PAD}${chalk.bold(l.title.padEnd(labelWidth))}${chalk.cyan(pretty(l.url))}`);
  console.log();
  console.log(`${PAD}${chalk.dim("Full CV:")} ${chalk.cyan(pretty(profile.cv))}`);
  console.log(`\n${PAD}${chalk.dim.italic(profile.motto)}\n`);
};

printHeader(await avatar());
if (shown("experience")) printExperience();
if (shown("projects")) printProjects();
if (shown("skills")) printSkills();
if (shown("education")) printEducation();
if (shown("writing")) printPosts();
if (shown("contact")) printContact();

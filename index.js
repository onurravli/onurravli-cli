#!/usr/bin/env node

"use strict";

import chalk from "chalk";
import wrap from "word-wrap";

const config = {
  title: `Onur Ravli ― Full-Stack Developer 🚀`,
  description: `I am experienced in full-stack development with proficiency in TypeScript, Python, and Java. I have worked with various backend and frontend tools, including Node.js, Express.js, Spring Boot, Django, React.js, React Native and Next.js. Now, I am currently seeking opportunities to further develop my skills and contribute to innovative projects within the tech industry.`,
  contact: {
    title: `Contact ☎️`,
    content: [
      {
        title: `Email`,
        items: ["onur@onurravli.com"],
      },
      {
        title: `LinkedIn`,
        items: ["linkedin.com/in/onurravli"],
      },
      {
        title: `GitHub`,
        items: ["github.com/onurravli"],
      },
    ],
  },
  abilitiesAndTechStack: {
    title: `Abilities and Tech Stack 💻`,
    content: [
      {
        title: `Programming Languages`,
        items: [`TypeScript`, `Python`, `Java`],
      },
      {
        title: `Backend Frameworks & Runtimes`,
        items: [`Node.js`, `Express.js`, `Nest.js`, `Django`, `Spring Boot`],
      },
      {
        title: `Frontend Frameworks & Runtimes`,
        items: [`React.js`, `React Native`, `Next.js`, `Tailwind CSS`, `SCSS`, `SASS`],
      },
      {
        title: `Databases`,
        items: [`MongoDB`, `PostgreSQL`, `MySQL`, `Redis`],
      },
      {
        title: `Other`,
        items: [
          `Git`,
          `RestAPI`,
          `GraphQL`,
          `Docker`,
          `Docker Compose`,
          `Amazon EC2`,
          `Amazon Lambda`,
          `Joi`,
          `Axios`,
          `Jest`,
          `Postman`,
          `Swagger`,
        ],
      },
    ],
  },
  education: {
    title: `Education 🎓`,
    content: [
      {
        title: `Bachelor of Engineering`,
        items: [`Konya Techical University`, `2022-2025 (Expected)`],
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
  return wrap(text, { width: 200, ...options });
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
 * @returns Bold text
 */
const title = (text) => {
  return console.log(chalk.bold(text));
};

/**
 *
 * @param {Array} array
 */
const printSection = (array) => {
  array.forEach((section) => {
    let items = "";
    section.items.forEach((item, i) => {
      if (i === section.items.length - 1) {
        items += `${item}`;
      } else {
        items += `${item}, `;
      }
    });
    console.log(wrapText(`${chalk.bold(`• ${section.title}:`)} ${items}`));
  });
};

const main = () => {
  newline();
  title(config.title);
  newline();
  console.log(wrapText(config.description, { width: 80 }));
  newline();
  title(config.abilitiesAndTechStack.title);
  newline();
  printSection(config.abilitiesAndTechStack.content);
  newline();
  title(config.education.title);
  newline();
  printSection(config.education.content);
  newline();
  title(config.contact.title);
  newline();
  printSection(config.contact.content);
  newline();
};

main();

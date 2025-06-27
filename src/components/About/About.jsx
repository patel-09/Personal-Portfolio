import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/cartoon.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Little Bit About Me!
              </h3><br></br>
              <p>
I’m a passionate developer with a strong focus on crafting intuitive, user-friendly interfaces and translating ideas into functional, visually appealing designs. I specialize in frontend development using tools like Figma, React.js, and JavaScript, with a keen eye for design and detail.
              </p>
              <br></br>
              <p>
Beyond the frontend, I have solid hands-on experience in backend development using Java, Python, and JDBC, including building RESTful APIs, setting up CI/CD pipelines, and working with MySQL and MongoDB databases. I've also contributed to projects involving role-based authentication, data visualizations, and full-stack web apps like Dal Book and Transect Visualization.
              </p>
              <br></br>
              <p>
              Having worked in Agile/Scrum teams, followed SDLC and TDD practices, and collaborated through platforms like GitLab, Jira, and Confluence, I’m confident in handling both collaborative and individual development tasks.
              </p>
              <br></br>
              <p>I’m currently seeking co-op or internship opportunities where I can apply and expand my skills  while contributing meaningfully to real-world projects.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

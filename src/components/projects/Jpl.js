import React from 'react';

const Jpl = () => (
  <section className="page">
    <div className="page__text-wrapper">

      <h1 className="page__title">
        NASA Jet Propulsion Laboratory
      </h1>

      <p className="page__text">
        For Summer 2020 I interned remotely at the NASA Jet Propulsion Laboratory as a 
        Software Engineer Intern in the Life Storage of Mission Data group (LSMD). LSMD
        consists of a Web UI, a primary backend server, and miscellaneous supporting
        cloud services. My project for the summer was UI deployment and containerization.
      </p>

      <p className="page__text">
        Over the duration of the summer, I wrote several hundred unit tests for a React 
        app with Jest, containerized and automated builds for the React app using
        Docker, Compose, and Jenkins. This build pipeline automated tests, static 
        analysis, and container builds. I also helped port a legacy Java Vert.x backend
        to Express.js and automated containerized builds for that as well. Additionally,
        Swagger docs were integrated with the backend server to increase readability
        of our API.
      </p>

    </div>
  </section>
);

export default Jpl;

import React from 'react';

const Veazee = () => (
    <section className="page">
        <div className="page__text-wrapper">
            <h1 className="page__title">
                Veazee.com
            </h1>
            <div className="page__web-cap__container">
                <div className="page__web-cap web-cap--veazee" />
            </div>
            <p className="page__text">
                <a href="https://veazee.com" target="_blank" rel="noopener noreferrer" className="link">view this site</a>
            </p>
            <p className="page__text">
                This website is an ongoing personal project to develop a better way of storing job
                experience and building resumes (for more info I recommend visiting the site). Currently, the deployed site is just a landing
                page and a contact form, with the primary app still under development.
            </p>
            <p className="page__text">
                The site itself is plain HTML / CSS, with an AWS serverless backend. To set up the
                email system, I used Lambda functions to read/write to the database, Lambda functions
                with triggers to send emails using SES, and API Gateway to allow the static site to
                access everything. For the app prototype, I am using React 16.9.
            </p>
        </div>
    </section>
);

export default Veazee;

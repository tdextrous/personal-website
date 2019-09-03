import React from 'react';

const Msec = () =>  (
    <section className="page">
        <div className="page__text-wrapper">
            <h1 className="page__title">
                Mountain States Electrical Contractors
            </h1>
            <div className="page__web-cap__container">
                <div className="page__web-cap web-cap--msec" />
            </div>
            <p className="page__text">
                <a href="https://mountainstateselectrical.com" target="_blank" rel="noopener noreferrer" className="link">view this site</a>
            </p>
            <p className="page__text">
                The work I did at Mountain States Electrical was my first true foray into web development and software development at large.
                Over the course of my year-long internship at Mountain States, I was asked to have a go at redesigning their website. I knew next to nothing
                about designing websites, but I took it on anyways, and thus my journey into web development had begun.
            </p>

            <p className="page__text">
                This site went through many iterations, but I finally settled on a Django stack using Bootstrap and jQuery
                on the frontend. A custom payment portal was developed using the Square API for Python, as all existing
                customer transactions were carried out using Square.
            </p>
        </div>
    </section>
);

export default Msec;

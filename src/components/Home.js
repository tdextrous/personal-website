import React from 'react';
import '../../scss/Page.scss';

const Home = () => (
    <section className="page">
        <div className="page__text-wrapper--center">
            <h1 className="page__title">
                Thomas Dexter
            </h1>
            <ul className="page__list">
                <li className="page__list-item">freshman electrical engineering student @ texas a&amp;m university</li>
                <li className="page__list-item">amateur web developer</li>
                <li className="page__list-item">currently seeking internship for summer 2020</li>
            </ul>
            <p className="page__text">
                <a href="#" className="link">github</a>&nbsp;
                //
                &nbsp;<a href="#" className="link">codepen</a>&nbsp;
                //
                &nbsp;<a href="#" className="link">linkedin</a>
            </p>
            <p className="page__text">
                contact: t (dot) dextrous (at) gmail
            </p>
        </div>
    </section>
);

export default Home;

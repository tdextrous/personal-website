import React from 'react';
import '../../scss/Page.scss';

const Home = () => (
    <section className="page">
        <div className="page__text-wrapper--center">
            <h1 className="page__title">
                Thomas Dexter
            </h1>
            <ul className="page__list">
                <li className="page__list-item">
                  senior electrical engineering &amp; math student @ texas a&amp;m university
                </li>

                <li className="page__list-item">web developer</li>
            </ul>
            <p className="page__text">
                <a href="https://github.com/tdextrous" target="_blank" rel="noopener noreferrer" className="link">github</a>&nbsp;

                &nbsp;<a href="https://www.linkedin.com/in/thomas-dexter-7b1a8a18a" target="_blank" rel="noopener noreferrer" className="link">linkedin</a>
            </p>
            <p className="page__text">
                contact: t (dot) dextrous (at) gmail
            </p>
        </div>
    </section>
);

export default Home;

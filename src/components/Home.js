import React from 'react';
import '../../scss/Home.scss';

const Home = () => (
    <section className="home">
        <div className="home__text-wrapper">
            <h1 className="home__title">
                Thomas Dexter
            </h1>
            <ul className="home__list">
                <li className="home__list-item">student @ <a href="#" className="link">texas a&amp;m university</a></li>
                <li className="home__list-item">aspiring web developer</li>
                <li className="home__list-item">currently seeking internship for summer 2020</li>
            </ul>
        </div>
    </section>
);

export default Home;

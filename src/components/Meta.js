import React from 'react';

const Meta = () => {
    return (
        <section className="page">
            <div className="page__text-wrapper">
                <h1 className="page__title">
                    About this Site
                </h1>
                <p className="page__text">
                    This site is a react app built using React 16.9 and React Router, with Sass for convenient styling. All of the code is publicly available
                    at <a className="link" href="https://github.com/tdextrous/personal-website" target="_blank" rel="noopener noreferrer">this repository</a> on github.
                </p>

                <p className="page__text">
                    The design &amp; layout for this site was heavily inspired by the Atom One Dark theme for the Atom text editor. Atom is my IDE of choice and
                    I have always stuck with One Dark, so I thought it would be fitting to pay homage to it in my own personal website.
                </p>

                <p className="page__text">
                    The file extensions in the navigation menu (.tjd) are just my initials.
                </p>
            </div>
        </section>
    );
};

export default Meta;

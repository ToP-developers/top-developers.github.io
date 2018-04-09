import React from 'react';

// Верхний баннер
const Header = () => {
    return (
        <div className="header">
                <div className="header__title">
                    <i className="fa fa-star"/>
                    <div className="header__title_text">ToP</div>
                    <i className="fa fa-star"/>
                </div>
                <div className="header__title-sub">developers</div>
                <a className="header__title_readme" href="https://github.com/ToP-developers/top-developers.github.io#top-developersgithubio">README</a>

            <div className="header__top"></div>

            <div className="header__description" data-text="сайт-визитка">сайт-визитка</div>
        </div>
    );
};

export default Header;

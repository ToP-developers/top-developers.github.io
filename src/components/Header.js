import React from 'react';

const Header = () => {
    return (
        <div className="header">
                <div className="header__title">
                    <i className="fa fa-star"/>
                    <div className="header__title_text">ToP</div>
                    <i className="fa fa-star"/>
            </div>
            <div className="header__title-sub">developers</div>

            <div className="header__top"></div>

            <div className="header__description" data-text="сайт-визитка">сайт-визитка</div>
        </div>
    );
};

export default Header;

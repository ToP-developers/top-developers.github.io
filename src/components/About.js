import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        };

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        return (
            <section id="about" className="about">
                <div className="about__title">Мы предоставляем самый качественный JS <p className="about__title-add"> и
                    бэкенд</p></div>
                <div className="about__title-sub">А еще крутые:</div>
                <div className="about__list">
                    <div className={this.state.isHovered ? "about__list_item animated tada" : "about__list_item"}
                         onMouseEnter={this.handleHover}
                         onMouseLeave={this.handleHover}>Анимации
                    </div>
                    <div className="about__list_item">Документация</div>
                    <div className="about__list_item">Навыки в использовании любых фреймворков</div>
                    <div className="about__list_item">CSS</div>
                    <div className="about__list_item">веб гуру короч</div>
                </div>
            </section>
        );
    }
}
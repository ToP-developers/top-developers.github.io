import * as React from "react";
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';

export default class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            member: 0
        };

        this.team = [
            {
                name: "Cвойкина Надя",
                photo: "../static/img/meadow.jpg",
                motto: "Разочаровываем разработчиков с 2007",
                title: "Кэп",
                description: "Тут и говорить нечего. Сам все знаешь."
            },
            {
                name: "Пряхин Вова",
                photo: "../static/img/meadow.jpg",
                motto: "Когда загориться - тогда и сделаем",
                title: "Фронтенд джедай",
                description: "Загадощное"
            },
            {
                name: "Москалев Илья",
                photo: "../static/img/meadow.jpg",
                motto: "Сыграем в карусель?",
                title: "Бэкендер от бога",
                description: "Не обманитесь его видом. Он настоящее чудовище. Не веришь?"
            },
            {
                name: "Антон Кобзев",
                photo: "../static/img/meadow.jpg",
                motto: "Кто это?",
                title: "Талисман",
                description: "Видели ли вы его когда-нибудь? Навряд ли. Никто не видел. И не слышал. У него задача такая: держатся за занавесами, помогать, не прилагая усилий. Настоящий талисман. "
            }
        ];

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        return (
            <div className="team">
                <div className="team__title">
                    <div className="team__title_text">Кто мы?</div>
                </div>

                    <Slider className="slider-wrapper">
                        {this.team.map((member, index) => <div key={index}>
                            <div className="team__members">
                            <div className="team__members_left">
                                <div className="team__members_left_photo">
                                    <img src={member.photo}/>
                                </div>
                                <div className="team__members_left_motto">{member.motto}</div>
                            </div>
                            <div className="team__members_right">
                                <div className="team__members_right_top">{member.name}</div>
                                <div className="team__members_right_description">{member.title}</div>
                                <div className="team__members_right_content">{member.description}</div>
                            </div>
                            </div>
                        </div>)}
                    </Slider>
            </div>
        );
    }
}



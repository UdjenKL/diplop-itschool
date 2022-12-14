import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import ContentHeader from "../../components/Container/ContentHeader";
import ContentWrapper from "../../components/Container";
import {Fragment} from "react";
import './styles.scss'
import {Slider} from "../Slider/Slider";


const About = () => {
    return (

        <Wrapper>
            <Header/>
            <ContentWrapper>
                <Fragment>
                    <ContentHeader>
                        <h1>О нас</h1>
                        <p>
                            Наша компания создает стильные вкусные букеты с 2015 года. Выбирая такой подарок , вы делаете правильный выбор в пользу оригинальности , красоты и эксклюзивности. Индивидуальный подход сделает ваш подарок желанным даже для самых привередливых. Мы всегда используем только самые качественные продукты , учитывая ваши предпочтения в составе букета.
                        </p>





<Slider/>
                    </ContentHeader>
                </Fragment>
            </ContentWrapper>
        </Wrapper>
    );
}

export default About

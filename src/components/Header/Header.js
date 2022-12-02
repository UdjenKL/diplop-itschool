import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './styles.scss'
import Cart from "../Cart";
import Context from "../../context";

const Header = () => {
    const {goodsWithMarkers, handleCart, handleOrder} = useContext(Context);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const [priceSumm, setPriceSumm] = useState(0);


    useEffect(() => {
        const items = goodsWithMarkers.filter(item => item.amount >0)
        setPriceSumm(items.reduce((summ, item) => summ + parseFloat(item.price*item.amount), 0))
    }, [goodsWithMarkers])

    const handleCartIconClick = () => {
        if (!cartIsOpen) {
            document.body.style.paddingRight = computeSrollWidth() + 'px';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        }
        setCartIsOpen(!cartIsOpen);
    }

    const computeSrollWidth = () => {
        window.scrollTo(1, 1);
        // if we have vertical scrollbar
        if (window.pageYOffset == 0) {
            return 0;
        }
        window.scrollTo(0, 0);

        let div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    return (
        <div className="header">

            {cartIsOpen &&
            <Cart onClose={handleCartIconClick}
                  items={goodsWithMarkers.filter(item => item.amount >0)}
                  onDelete={handleCart}
                  handleOrder={handleOrder}
                  handleCart={handleCart}
                  priceSumm={priceSumm}/>}

            <Link to='/'>
                <div className="header_left">

                    <img width={400} height={120} src='/img/logo.jpg' alt=""/>


                </div>
            </Link>

            <ul className="header_right">
                <li>
                    <Link to={'/about'}>
                        <img src="/img/about.png" alt="about"/>
                    </Link>
                    <h4>Вкусные букеты</h4>
                        <p>+375295023044</p>
                </li>
                <li className='backet' onClick={handleCartIconClick}>
                    <img width={18} height={18} src='/img/backet.svg' alt=""/>
                    <span>{priceSumm} бел.р</span></li>
                <li className='heart'>
                    <Link to={'/favourites'}>
                        <img width={18} height={18} src='/img/heart.svg' alt=""/>
                    </Link>
                </li>
                <li className='user'>
                    <Link to={'/orders'}>
                        <img width={18} height={18} src='/img/user.svg' alt=""/>
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default Header;

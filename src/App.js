function App() {
    return (
        <div className="wrapper">
            <div className="right-side-impose">
                <div className="right-side">
                    <h2 className="cart-title">Корзина</h2>
                    <div className="items">
                        <div className="cartItem">
                            <img width={70} height={70} src="/img/presents/1.jpeg" alt="cart"/>
                            <div className="cartItem-info">
                                <p>Букет 1</p>
                                <b>1000</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                        </div>
                        <div className="cartItem">
                            <img width={70} height={70} src="/img/presents/1.jpeg" alt="cart"/>
                            <div className="cartItem-info">
                                <p>Букет 1</p>
                                <b>1000</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                        </div>
                    </div>
                    <ul className="total">
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>1000</b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </div>
            <header>
                <div className="header-left-block">
                    <img width={120} height={150} src="/img/logoMain.jpg"/>
                    <div className="header-information">
                        <h3>PresentOnline</h3>
                        <p className="header-logo-text">Магазин букетов</p>
                    </div>
                </div>
                <ul className="header-right-block">
                    <li>
                        <img width={20} height={20} src="/img/cart.svg"/>
                        <span>1000</span>
                    </li>
                    <li>
                        <img width={20} height={20} src="/img/cart.svg"/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <div className="content-header">
                    <h1 className="content-title">Все Букеты</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="presents">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/heart.svg" alt="heart"/>
                        </div>
                        <img width={133} height={112} src="/img/presents/1.jpeg" alt=""/>
                        <p>Букет 1</p>
                        <div className="card-info">
                            <div className="card-info-price">
                                <span>Цена:</span>
                                <b>10000</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/cart.svg" alt=""/>
                        <p>Букет 1</p>
                        <div className="card-info">
                            <div className="card-info-price">
                                <span>Цена:</span>
                                <b>10000</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/cart.svg" alt=""/>
                        <p>Букет 1</p>
                        <div className="card-info">
                            <div className="card-info-price">
                                <span>Цена:</span>
                                <b>10000</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/cart.svg" alt=""/>
                        <p>Букет 1</p>
                        <div className="card-info">
                            <div className="card-info-price">
                                <span>Цена:</span>
                                <b>10000</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/cart.svg" alt=""/>
                        <p>Букет 1</p>
                        <div className="card-info">
                            <div className="card-info-price">
                                <span>Цена:</span>
                                <b>10000</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;

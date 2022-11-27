function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="header-left-block">
                    <img width={120} height={150} src="/img/logoMain.jpg"/>
                    <div className="header-information">
                        <h3>PresentOnline</h3>
                        <p>Магазин букетов</p>
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
                <h1 className="content-title">Все Букеты</h1>
                <div className="presents">
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

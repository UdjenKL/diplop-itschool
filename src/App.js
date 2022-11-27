function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="header-left-block">
                    <img width={150} height={200} src="/img/logoMain.jpg"/>
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
                <h1>Все Букеты</h1>
                +++++++++++++++++++++
            </div>
        </div>
    );
}

export default App;

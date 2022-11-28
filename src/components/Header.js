function Header () {
    return (
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
    );
}

export default Header

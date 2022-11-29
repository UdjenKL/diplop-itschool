function RightSide (props) {
    return (
        <div className="right-side-impose">
        <div className="right-side">
                    <h2 className="cart-title">Корзина <img width={30} height={30} onClick={props.onClose} src="/img/xmark-solid.svg" alt="close"/>
                    </h2>
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
    );
}

export default RightSide

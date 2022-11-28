function Card({image}) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart.svg" alt="heart"/>
            </div>
            <img width={363} height={363} src={image} alt=""/>
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
    );
}

export default Card

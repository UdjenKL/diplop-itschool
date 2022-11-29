import React from "react";

function Card({onFavorite,image,title,price,onPlus}) {
    const [isPlus,setIsPlus] = React.useState(false);

    const onClickPlus = (obj) => {
        onPlus({title,image,price});
        setIsPlus(!isPlus)
        console.log(obj);
    }
    return (
        <div className="card">
            <div className="favorite" onClick={onFavorite}>
                <img src="/img/heart.svg" alt="heart"/>
            </div>
            <img width={363} height={363} src={image} alt=""/>
            <p>{title}</p>
            <div className="card-info">
                <div className="card-info-price">
                    <span>{price} Цена:</span>
                    <b>10000</b>
                </div>
                    <img width={62} height={62} onClick={onClickPlus} src={isPlus ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"/>
            </div>
        </div>
    );
}

export default Card

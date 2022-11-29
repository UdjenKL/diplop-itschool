import React from "react";

function Card(props) {
    const [isPlus,setIsPlus] = React.useState(false);

    const onClickPlus = () => {
        setIsPlus(!isPlus)
        // console.log('enter!')
    }
    return (
        <div className="card">
            <div className="favorite" onClick={props.onFavorite}>
                <img src="/img/heart.svg" alt="heart"/>
            </div>
            <img width={363} height={363} src={props.image} alt=""/>
            <p>{props.title}</p>
            <div className="card-info">
                <div className="card-info-price">
                    <span>{props.price} Цена:</span>
                    <b>10000</b>
                </div>
                    <img width={62} height={62} onClick={onClickPlus} src={isPlus ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"/>
            </div>
        </div>
    );
}

export default Card

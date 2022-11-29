import Index from './components/Card'
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import Card from "./components/Card";
import React from "react";


function App() {
    const [cartItems,setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://6341bc1320f1f9d79978ecb3.mockapi.io/items').then((response) => {
        return response.json();
    }).then(json => {
        setItems(json);
        console.log(json);
    });
    } , []);

const onAddToCart = (obj) => {
    setCartItems([...cartItems,obj])

};

console.log(cartItems);

    return (
        <div className="wrapper">
            {cartOpened ? <RightSide items={cartItems} onClose={() => setCartOpened(false)}/> : null}
            <Header onClick={() => setCartOpened(true)}/>
            <div className="content">
                <div className="content-header">
                    <h1 className="content-title">All Presents</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="presents">
                    {
                        items.map((item) => (
                            <Card
                                key = {item.image}
                                title={item.name}
                                price={item.price}
                                image={item.image}
                                onFavorite={() => console.log('add in favorite')}
                                onPlus={(obj) => onAddToCart(obj)}
                            />

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;

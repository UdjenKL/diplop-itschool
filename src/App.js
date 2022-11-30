import axios from 'axios';
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import Card from "./components/Card";
import React from "react";


function App() {
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        //     fetch('https://6341bc1320f1f9d79978ecb3.mockapi.io/items').then((response) => {
        //     return response.json();
        // }).then(json => {
        //     setItems(json);
        //     console.log(json);
        // });


        axios.get('https://6341bc1320f1f9d79978ecb3.mockapi.io/items').then((res) => {
            setItems(res.data);
        });
        axios.get('https://6341bc1320f1f9d79978ecb3.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://6341bc1320f1f9d79978ecb3.mockapi.io/cart', obj);
        setCartItems([...cartItems, obj])
    };
    const onRemoveItem = (id) => {
        axios.delete(`https://6341bc1320f1f9d79978ecb3.mockapi.io/cart/${id}`);
        setCartItems((prev)=> prev.filter((item) => item.id !== id));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    console.log(cartItems);

    return (
        <div className="wrapper">
            {cartOpened ? <RightSide items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null }
            <Header onClick={() => setCartOpened(true)}/>
            <div className="content">
                <div className="content-header">
                    <h1 className="content-title">{searchValue ? `Поиск: "${searchValue}"` : 'Все букеты'}</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="search"/>
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="presents">
                    {items
                        .filter((item) => item.name.includes(searchValue))
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.name}
                                price={item.price}
                                image={item.image}
                                onFavorite={() => console.log('add in favorite')}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}

                </div>
            </div>
        </div>
    );
}

export default App;

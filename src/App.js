import Card from './components/Card'
import Header from "./components/Header";
import RightSide from "./components/RightSide";

const arr = [
    {name: 'букет 1', price: 1000, image: '/img/presents/1.jpeg'},
    {name: 'букет 2', price: 1000, image: '/img/presents/2.jpg'},
    {name: 'букет 3', price: 1000, image: '/img/presents/3.jpg'},
    {name: 'букет 4', price: 1000, image: '/img/presents/4.jpg'},
    {name: 'букет 5', price: 1000, image: '/img/presents/5.jpg'},
    {name: 'букет 6', price: 1000, image: '/img/presents/6.jpg'},
    {name: 'букет 7', price: 1000, image: '/img/presents/7.jpg'},
    {name: 'букет 8', price: 1000, image: '/img/presents/8.jpg'},
    {name: 'букет 9', price: 1000, image: '/img/presents/9.jpg'},
    {name: 'букет 10', price: 1000, image: '/img/presents/10.jpeg'},
    {name: 'букет 9', price: 1000, image: '/img/presents/11.jpeg'},
    {name: 'букет 10', price: 1000, image: '/img/presents/12.jpeg'},
];

function
App() {
    return (
        <div className="wrapper">
            <RightSide/>
            <Header/>
            <div className="content">
                <div className="content-header">
                    <h1 className="content-title">Все Букеты</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="presents">
                    {
                        arr.map((item) => (
                            <Card title={item.name} price={item.price} image={item.image}/>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;

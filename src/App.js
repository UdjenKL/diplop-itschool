import Card from './components/Card'
import Header from "./components/Header";
import RightSide from "./components/RightSide";

const arr = [
    {name: 'букет 1'},
    {name: 'букет 2'},
    {name: 'букет 3'},
    {name: 'букет 4'},
    {name: 'букет 5'},
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
                    <Card/>
                    <Card/>
                    {/*{*/}
                    {/*    arr.map((obj)=> (*/}
                    {/*         <Card/>*/}
                    {/*        */}
                    {/*    ))*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    );
}

export default App;

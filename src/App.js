import React, { useEffect, useReducer, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main/Main";
import './App.scss'
import Orders from "./pages/Orders";
import Context from "./context";
import useLocalStorage from "./customHooks/useLocalStorage";
import {getItems} from './services'
import {reducer, initialState, selectors} from './store.js'
import About from "./pages/About";

const App = () => {

    const [goodsWithMarkers, setGoodsWithMarkers] = useState([]);
    const [searchParms, setSearchParms] = useState('')
    const [storedMarkers, setStoredMarkers] = useLocalStorage('storedMarkers')


    const [data, dispatch] = useReducer(reducer, initialState)

    useEffect(async () => {
        const goods = await getItems(12);
        dispatch({type: "initGoods", payload: goods})
        if (storedMarkers) dispatch({type: "loadMarkers", payload: storedMarkers})
        else dispatch({type: "initMarkers", payload: goods})

    }, [])

    function checkPosition() {
        const height = document.documentElement.scrollHeight
        const screenHeight = window.innerHeight
        const scrolled = window.scrollY

        if (height - screenHeight == scrolled) {
            console.log("Load some more items")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", checkPosition);
    }, [])


    useEffect(() => {
        const goodsWithMarkers = selectors.goodsWithMarkers(data)
        if (goodsWithMarkers) {
            setGoodsWithMarkers(goodsWithMarkers)
        }
    }, [data])


    useEffect(() => {
        if (data.markers.length != 0) setStoredMarkers(data.markers);
    }, [data.markers])


    const handleOrder = () => {
        const orderNumber = Math.floor(Math.random() * 10000)
        dispatch({type: "moveItemsToHistory"})
        return orderNumber;
    }

    return (

        <Context.Provider value={{
            searchParms,
            goodsWithMarkers,
            setSearchParms,
            dispatch,
            handleOrder
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/favourites' element={<Favourites/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/' element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </Context.Provider>

    );
};

export default App;

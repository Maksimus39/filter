import React, {useState} from 'react';
import './App.css';
import {NevComponent} from "./NevComponent";

export type filterType = 'All'| 'ruble'| 'dollar'
function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},

    ])
    const [filter, setFilter] = useState<filterType>('All')
    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar');
    }
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');
    }

    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }
    return (
        <NevComponent money={currentMoney}
                      onClickFilterHandler={onClickFilterHandler}
        />
    )
}

export default App;

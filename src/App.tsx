import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type filterType = 'All'| 'ruble'| 'dollar'
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
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '30px'}}>
                <button onClick={() => onClickFilterHandler('All')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </div>

    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import NewComponent from "./NewComponent";


export type MoneyType = 'All' | 'dollars' | 'rubles'

function App() {
    const [money, setMoney] = useState([
        {banknote: "dollars", nominal: 100, number: "a123456789"},
        {banknote: "dollars", nominal: 50, number: "b123456789"},
        {banknote: "rubles", nominal: 100, number: "c123456789"},
        {banknote: "dollars", nominal: 100, number: "d123456789"},
        {banknote: "dollars", nominal: 50, number: "e123456789"},
        {banknote: "rubles", nominal: 100, number: "f123456789"},
        {banknote: "dollars", nominal: 50, number: "j123456789"},
        {banknote: "rubles", nominal: 50, number: "h123456789"}
    ])
    const [filter, setFilter] = useState<MoneyType>('All')

    let filteredMoney = money

    if (filter === 'dollars') {
        filteredMoney = money.filter((bank) => bank.banknote === 'dollars')
    }
    if (filter === 'rubles') {
        filteredMoney = money.filter((bank) => bank.banknote === 'rubles')
    }

    const onclickFilterHandler = (button: MoneyType) => {
        setFilter(button)
    }

    return (
        <NewComponent filteredMoney={filteredMoney}
                      onclickFilterHandler={onclickFilterHandler}

        />
        // <>
        //     <ul>
        //         {filteredMoney.map((objFromMoneyArr, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span>{objFromMoneyArr.banknote}</span>
        //                     <span>{objFromMoneyArr.nominal}</span>
        //                     <span>{objFromMoneyArr.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: '35px'}}>
        //         <button onClick={() => onclickFilterHandler('All')}>All</button>
        //         <button onClick={() => onclickFilterHandler('dollars')}>dollars</button>
        //         <button onClick={() => onclickFilterHandler('rubles')}>rubles</button>
        //     </div>
        // </>
    );
}

export default App;

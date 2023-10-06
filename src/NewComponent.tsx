import React from 'react';
import {MoneyType} from "./App";


type Banknote = {
    banknote: string
    nominal: number
    number: string
}


type NewComponentPropType = {
    filteredMoney: Banknote[]
    onclickFilterHandler: (button: MoneyType) => void
}

const NewComponent = (props: NewComponentPropType) => {
    return (
        <>
            <ul>
                {props.filteredMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onclickFilterHandler('All')}>All</button>
                <button onClick={() => props.onclickFilterHandler('dollars')}>dollars</button>
                <button onClick={() => props.onclickFilterHandler('rubles')}>rubles</button>
            </div>
        </>
    );
};

export default NewComponent;
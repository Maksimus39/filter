import React from 'react';
import {filterType} from './App'

type MoneyType={
    banknote: string
    nominal: number
    number: string
}
type PropsType={
    money: MoneyType[]
    onClickFilterHandler: (nameButton: filterType)=>void
}

export const NevComponent = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
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
                <button onClick={() => props.onClickFilterHandler('All')}>all</button>
                <button onClick={() =>props. onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    );
};


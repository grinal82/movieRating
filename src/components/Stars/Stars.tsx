import React from 'react'
import Star from './Star'

type myProps = {
    count: number
}

function Stars({count}: myProps) {
    // выполняем проверку "на число" и величину от 1 до 5
    if(typeof count !== 'number' || count < 1 || count > 5) {
        return null; /* Ничего не рендерим */
    }
    // Создаем массив из `count` элементов, заполняем их null
    // Например нам прилетело count=3, будкт создан массив из 3-х элементов
    const starArray = new Array(count).fill(null);
    // console.log(starArray) /* проверяем что искомый массив создан */
    
    return (
        <ul className="card-body-stars u-clearfix" style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
        {/* при переборе массива нам нужен только индекс для передачи в качестве 'key' */}
        {starArray.map((_, index) => (
            <li key={index} style={{ listStyleType: "none" }}>
            <Star />
            </li>
        ))}
        </ul>
    )
}

export default Stars
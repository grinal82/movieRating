# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Описание компонента

Для отображения рейтинга создайте компонент `Stars`, который принимает следующие атрибуты:

- `count` — рейтинг фильма, _число_, по умолчанию `0`.

Если рейтинг меньше `1` или больше `5`, или вообще не число, то компонент не должен иметь какого-либо представления в
DOM.

Звёзды рейтинга должны быть представлены тегом `<ul>` с классом `card-body-stars`. Для отображения символа звезды внутри
тега `<li>` используйте компонент `Star`.

## Пример использования

```jsx
// Внутри App
return (
    <Stars count={1}/>
);
```

Компонент должен дать следующий код:

```html

<ul class="card-body-stars u-clearfix">
    <li>
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
    </li>
</ul>
```

## Реализация

Необходимо реализовать компонент `Stars`. Не забудьте, что отдельная звезда должна быть представлена компонентом `Star`.

Важно: вам нужно реализовать только отображение звёздочек, карточку фильма не нужно.
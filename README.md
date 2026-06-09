# Express.js Project
# Library API Server

REST API для управления библиотекой: пользователи, книги, выдача книг читателям.

## Возможности

- **Пользователи** — создание, просмотр, обновление, удаление
- **Книги** — создание, просмотр, обновление, удаление
- **Выдача книг** — поле `borrowedBy` связывает книгу с пользователем
- Валидация данных, обработка ошибок (400, 404, 500), CORS, логирование запросов

## Стек

| Категория | Технологии |
|-----------|-------------|
| Сервер | Node.js, Express.js |
| База данных | MongoDB, Mongoose |
| Разработка | Nodemon, dotenv |
| Язык | JavaScript (ES6+) |

## Установка и запуск

```bash
git clone https://github.com/Kalininaaw16012002/Express.js.git
npm install
Создайте .env:

env
PORT=3005
Запуск:

bash
npm run dev      # режим разработки (nodemon)
npm start        # продакшн
Сервер: http://127.0.0.1:3005

API Эндпоинты
Пользователи (/api/users)
Метод	Эндпоинт	Описание
GET	/api/users	Все пользователи
GET	/api/users/:id	Пользователь по ID
POST	/api/users	Создать пользователя
PUT	/api/users/:id	Обновить пользователя
DELETE	/api/users/:id	Удалить пользователя
Формат пользователя:

json
{
  "name": "Иван",
  "surname": "Иванов",
  "username": "ivan123"
}
Книги (/api/books)
Метод	Эндпоинт	Описание
GET	/api/books	Все книги (с данными о читателе)
GET	/api/books/:id	Книга по ID
POST	/api/books	Создать книгу
PUT	/api/books/:id	Обновить книгу
DELETE	/api/books/:id	Удалить книгу
Формат книги:

json
{
  "title": "JavaScript: The Good Parts",
  "author": "Douglas Crockford",
  "year": 2008,
  "borrowedBy": "65a3b2c1d4e5f67890abcd12"  // ID пользователя (опционально)
}
Валидация
Поле	Условия
name, surname	строка, 2-20 символов
username	строка, 5-20 символов, уникальный
title, author	строка, 2-20 символов
year	число, от 1000 до текущий год+10
Ошибки
json
// 404
{ "error": "Книга не найдена" }

// 400 (валидация)
{ "error": "Ошибка валидации", "messages": [...] }

// 500
{ "error": "Внутренняя ошибка сервера", "message": "..." }

Разработчик
Калинина А.В. — учебный проект

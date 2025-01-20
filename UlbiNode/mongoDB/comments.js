/**
     to work with mongoDB  install the node package:
    npm i mongoose
 */

 /*
    In summary:
    MongoDB is the open-source database software 
    that can be self-hosted.

    MongoDB Atlas
    is a fully managed cloud version of MongoDB that abstracts away 
    the operational tasks associated with database management, 
    making it easier to use and scale.
    If you're looking for a hassle-free, cloud-based solution,
    MongoDB Atlas is a great option. If you need complete 
    control over your database environment and prefer managing 
    it yourself, then self-hosting MongoDB could be more suitable.
 
 */


//https://www.mongodb.com/cloud/atlas/register
//user bama..., pass: as usu
// inside: user: areggie  pass: as of DB

/*
https://mongoosejs.com/docs/


Mongoose
Это оболочка над MongoDB чтобы не писать напрямую
запросы к базе данных
И пользоваться удобным синтаксисом для взаимодействия

Тип БД может быть ORM или ODM
*/

/*
ORM или ODM типы базы данных в MongoDB что значат?

ORM (Object-Relational Mapping) и 
ODM (Object-Document Mapping) — это технологии, используемые 
для работы с базами данных 
на уровне объектов в приложении. Однако они применяются 
к разным типам баз данных.

ORM (Object-Relational Mapping): 
Используется для работы с реляционными базами данных, 
такими как MySQL, PostgreSQL, SQL Server и другими. 
ORM преобразует данные между объектно-ориентированным 
представлением в программе и реляционным представлением 
в базе данных. В ORM объекты программы отображаются на 
таблицы в базе данных, а их атрибуты — на столбцы в таблицах.

ODM (Object-Document Mapping): Используется для работы 
с документными базами данных, такими как MongoDB. В отличие 
от реляционных баз данных, MongoDB хранит данные в виде документов
 (например, в формате JSON), а не в таблицах. ODM предоставляет 
 возможность работать с этими данными как с объектами в программе,
  скрывая сложности работы с документами и коллекциями в базе данных.

MongoDB и ODM: MongoDB — это документная база данных, 
и для работы с ней часто используется ODM. Примером ODM для MongoDB
 является библиотека Mongoose (для Node.js), которая позволяет 
 работать с документами в MongoDB как с объектами JavaScript.

Основные различия:

ORM работает с реляционными базами данных 
(связь между таблицами и строками).
ODM работает с документными базами данных 
(связь между коллекциями и документами).

*/

/*
Как подключить MongoDB к NodeJS

https://www.youtube.com/watch?v=LNvmI8a9jwY
from 16:17


Все остальные видео в отделной папке MongoDB  дают
команды для mongoSh. Шелл версия. 

Мне важно как выполнять эти команды в Node.js
Об этом как раз и рассказывает Ulbi
*/
//file to work with Mongo DB  

//this line is to keep all the commands:
//https://mongoosejs.com/docs/

//здесь будет схема того как пользователь будет хронится
//в базе данных
//1:53:28
const mongoose = require('mongoose');


//создаем схему, то есть шаблон объекта -документа с полями
const userSchema = new mongoose.Schema({
    name: String, //name типа стринг
    password: String // пароль типа стринг
  });

/*
    A model is a class with which we construct documents. 
    In this case, 
    each document will be a kitten with properties 
    and behaviors as declared in our schema
*/

//model - это создание класса с шаблоном: свойствами
//потом можно создать экземпляр класса

//экспортируем модель (класс)
module.exports = mongoose.model('User', userSchema)
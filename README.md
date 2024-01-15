# Генератор случайных данных 
Это простая библиотека для генерации случайных данных, таких как имена, адреса, даты и числа. 

## Установка 
Вы можете установить библиотеку с помощью npm:
## npm install random-data-generator

## Использование:
javascript
const randomDataGenerator = require('random-data-generator');
const randomName = randomDataGenerator.generateRandomName();
const randomAddress = randomDataGenerator.generateRandomAddress();
const randomDate = randomDataGenerator.generateRandomDate();
const randomNumber = randomDataGenerator.generateRandomNumber(1, 100);

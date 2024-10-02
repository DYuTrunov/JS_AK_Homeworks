const pr = (n) => console.log(n);
const line = () => console.log(" \n======================CONTINUE======================\n ");

/* 1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator */

  function mergeArrays(...arrFunc) { // раз спред - всегда спред)
    const numArray = []; // в новый массив будем скаладывать наши входящие массивы
    for (const arr1 of arrFunc) numArray.push(...arr1); //перебираем входящий массив с массивами и пушим спредом в наш созданный. решил попробывать соркащенное написание))
    return numArray;
  }
  pr(mergeArrays([1, 2], [3, 4], [5, 6]));
  pr(mergeArrays([1, 2], [3, 4], [5, 6],[7, 8], [9, 10], [11, 12]));
  line();

/* 2. Devide by _
  - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
  - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
  - Пример: I am super engineer => i_Am_Super_Engineer */

  function devideBy(a = "") { // сразу переменную в текст
    let textEdit = a.replaceAll(" ", "_").toLowerCase(); // меняем старое на новое и всё в низ - условие с первым словом в кармане)
    for (i = 0; i < textEdit.length; i++)
       if (textEdit[i - 1] === "_") textEdit[i].toUpperCase(); // опять сокращаю) по "_" хитрим и меняем символы вверх.
    return textEdit;
  }
  pr(devideBy("ПривеТ! Я коТлеТка с МЯСом)")); // текст диктовал сын))
  pr(devideBy("I am super engineer"));
  line();

// /* 3. Фибаначчи
//   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
//   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является 
//   суммой двух предыдущих
//   - Например fibanacci(8) //21 */

function fibanacci(n) {
  const fibArr = [0, 1]; // массив куда складываем ряд Фибоначчи. 
  if (i == 0 || i == 1)  fibArr[i] = i;
  let nFibRet = 0; 
  for (i = 2; i <= n; i++) fibArr[i] = fibArr[i - 2] + fibArr[i - 1]; // Перебираем ряд Фибоначи и заносим в массив.
  nFibRet = +(fibArr.slice(-1)); // Вырезаем последнее значение в массиве и кладем в переменную). 
  return nFibRet;
}
pr(fibanacci(1));
pr(fibanacci(8));
pr(fibanacci(10));
line();

/* 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом */

function palindromCheck(p) {
  const palinLow = p.toLowerCase()
  return palinLow.split('').reverse().join('') === palinLow ? pr('палиндромом') : pr('обычное слово'); // разделяем, меняем порядок символов на обратный и склеиваем в слово обратно
  }
palindromCheck("ПаЛиИлАП");
palindromCheck("РабоТА");
palindromCheck("ПаЛиИлАД");
palindromCheck("BacaB");
line();

/* 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
    и возвращает слово с наибольшим количеством букв. 
    Если таких слов несколько - возвращает их все. */

function bigWords(bg = "") {
  const arrayWords = bg.split(" "); // Все слова пихаем в массив
  const arrayMaxL = arrayWords.map((elem) => elem.length);
  const arrayMaxW = Math.max(...arrayMaxL);
  const result = arrayWords.filter((elem) => elem.length == arrayMaxW)
  return result
}
pr(bigWords("Я люблю людей до обеда и после"));
pr(bigWords("It's only after we've lost everything that we're free to do anything"));
line();

// /* Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1 */

  function recursSum(n){
    if(n<=9){
      return n
    } else {
      return recursSum(n%10 + recursSum(Math.floor(n/10)))
    }
  }
pr(recursSum(19))
pr(recursSum(119))




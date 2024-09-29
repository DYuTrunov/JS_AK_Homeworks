// /*1. Цикл for..of в массиве
//   - Создайте массив [1,2,3,4,5,6,7,8,9,10]
//   - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
//     если элемент четный - возведет его в квадрат
//     если элемент нечетный - возведет его в 3ю степень */
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numArrayNew =[]
for (const array of numArray) {
    array % 2 === 0 ? numArrayNew.push(array ** 2) : numArrayNew.push(array** 3);
}
console.log(numArrayNew)
console.log(" \n======================CONTINUE======================\n ");

// /*2. Методы массивов
//   - Создайте массив [1,2,3,4,5]
//   - Добавьте в конец массива число 6 соответствующим методом
//   - Добавьте в начало массива число 0 соответствующим методом
//   - Удалите элемент с индексом 2 из массива соответствующим методом
//   - Удалите последний элемент из массива соответствующим методом
//   В результате вы должны получить [0, 1, 3, 4, 5] */
const numArrayFive = [1, 2, 3, 4, 5];
numArrayFive.push(6);
numArrayFive.unshift(0);
numArrayFive.splice(2, 1);
numArrayFive.pop();
console.log(numArrayFive);
console.log(" \n======================CONTINUE======================\n ");

// /*3. Деструктуризация массивов
//   - Создайте массив из 5 любых чисел (придумать числа самим)
//   - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
//   - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5] */
const numAnyArray = [101, 3, 69, 7, 28, 15];
const [first, second, ...rest] = numAnyArray;
console.log(first);
console.log(second);
console.log(rest);
console.log(" \n======================CONTINUE======================\n ");

// /*4. Конкатенация массивов
//   - Создайте массив с числами [1,2,3,4,5]
//   - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
//   - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
//   - Используйте спред оператор */
const arrayFirst = [1, 2, 3, 4, 5];
const arraySecond = [6, 7, 8, 9, 10];
const mergedArray =[...arrayFirst, ...arraySecond]
console.log(mergedArray)
console.log(" \n======================CONTINUE======================\n ");

/*1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'] */
const competitorPizzas = [ "Peperoni", "Caprichosa", "Diablo", "4 cheeses", "hawai",];
const myPizzas = ["peperoni", "Hawai", "DiabloS", "7 cheeses", "CaprichoZa"];
// const myPizzas = ['PEperoni', 'cAprichosa', 'diablo', '4 cheeses', 'haWai']
let checkPizzas = 0;
const competitorPizzasMini = [];
const differentPizzas = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasMini[i] = competitorPizzas[i].toLowerCase();
}
for (i = 0; i < myPizzas.length; i++) {
  if (competitorPizzasMini.includes(myPizzas[i].toLowerCase())) {
    checkPizzas++;
  } else {
    differentPizzas.push(myPizzas[i]);
  }
}
if (checkPizzas === myPizzas.length) {
  console.log("null");
} else {
  console.log(differentPizzas);
}
console.log(" \n======================CONTINUE======================\n ");
/* Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться */
const dubleBuble = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 11, 11, 12, 13, 14, 12, 14, 13];
const cloneDubleBuble = []
for (i = 0; i < dubleBuble.length; i++) {
if (dubleBuble.includes(dubleBuble[i], i+1)){
    cloneDubleBuble.push(dubleBuble[i])
    }
}
console.log(cloneDubleBuble)



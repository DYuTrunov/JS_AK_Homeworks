const pr = (n) => console.log(n)
const line = () => console.log(" \n======================CONTINUE======================\n ")
line()
// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
const arrNumbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
arrNumbers.forEach((elem)=> elem%3 === 0 && pr(elem))
line()

/* 2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
  [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]*/
const arrSubtractLength = arrNumbers.map((elem, index, array) => elem - array.length)
pr(arrSubtractLength)
line()
 /* 3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
    [8, 30, 85, 95, 94]*/
const filterArray = arrNumbers.filter((elem, index, array) => array[index-1] < array[index] && array [index])
pr(filterArray)
line()
// 4. find - найдите элемент, равный своему индексу //2
const numIndexEqual = arrNumbers.find((elem, index) => elem === index)
pr(numIndexEqual)
line()
  /*5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]*/
const sortArray = arrNumbers.sort((a, b) => a - b)
pr(sortArray)
line()
//   6. reduce - получите сумму всех чисел массива //466
const sumArray = arrNumbers.reduce((summa, elem) => summa + elem, 0)
pr(sumArray)
line()
// 7. some - проверьте, есть ли в массиве элементы больше 90 //true
const someArray = arrNumbers.some((elem) => elem > 90)
pr(someArray)
line()
// 8. every - проверьте, что все элементы массива двухзначные //false*/
const everyArray = arrNumbers.every((elem) => elem.length === 2)
pr(everyArray)
line()

  /*Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
    Массив должен быть отсортирован по возрастанию количества гласных букв в слове.*/
  const words = [
    "umbrella",   
    "apple",      
    "ocean",      
    "independent",
    "education",  
    "elephant",   
    "island",     
    "universe",   
    "environment",
    "queue"       
  ]

  function sortVowelsNum(array = []) {
    function countVowels(word) {
    const vowels = "aueoyi";
    return [...word].filter((elem) => vowels.includes(elem)).length;
  }
  return array.sort((a, b) => countVowels(a) - countVowels(b))
}
pr(sortVowelsNum(words))
line()

    /*Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.*/

function findMissingNumber(array = []){
    return array.sort((a, b) => a - b).find((_elem, index, array)=> array[index+1]-array[index] == 2) +1
    }
pr(findMissingNumber([29,28,27,28,32,30,29,28,33]))




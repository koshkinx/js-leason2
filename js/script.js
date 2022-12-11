// 1.дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else
//  if при спробі поділити на 0 виводити alert з попередженням. Повині бути команди
//  (додавання, множення, ділення, віднімання)

// let first = parseFloat(prompt("Type number1", 0));
// let second = parseFloat(prompt("Type number2", 0));
// let operation = prompt("Operation");
// let result = 0;
// if (operation == "+") {
//   result = first + second;
//   console.log("plus value:", result);
// } else if (operation == "-") {
//   result = first - second;
//   console.log("minus value:", result);
// } else if (operation == "*") {
//   result = first * second;
//   console.log("multiplication value:", result);
// } else if (operation == "/" && (second == 0 || first == 0)) {
//   alert("only Chuck Noris can divide by zero");
// } else if (operation == "/") {
//   result = first / second;
//   console.log("division value:", result);
// } else {
//   alert("not corrert position");
// }

// 2. за допомогою циклу вивести в консоль всі парні значення числа 20

// for (let x = 2; x <= 20; x += 2) {
//   console.log(x);
// }

// 3.використовуючи цикл виведіть суму чисел між  А і В з умовою що A<B

// let B = 10;
// for (let A = 0; A <= 10; A++) {
//   if (A < B) {
//     console.log(B + A);
//   }
// }

// 4.зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

// for (let x = 10; x >= 0; x--) {
//   console.log(x);
// }

// 5.отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій
//  довжина і ширина це отримані значення. Наприкда а=2 і в=2 буде ось
//  така фігура
// **
// **

// let A = 5;
// let B = 4;
// let star = "*";

// for (i = 0; i < B; i++) {
//   let str = "";

//   if (i == 0 || i == B) {
//     for (let j = 0; j < A; ++j) {
//       str += star;
//     }
//   }
//   console.log(str);
// }
// 6.напишіть змінні які питають логін та пароль з prompt  якщо логін admin
// і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні
// то виводити "Пароль логін не вірні"

// let admin = prompt("your logo", "write");
// let pass = prompt("your password", "write");
// if (admin == "admin" && pass == "12345") {
//   console.log("вітаємо в системі");
// } else {
//   console.log("Пароль логін не вірні");
// }

// 7.отримати 3 значення від користувача і порахувати середнє значення цих значень

// let first = parseFloat(prompt("your first number", "write"));
// let second = parseFloat(prompt("your second number", "write"));
// let third = parseFloat(prompt("your third number", "write"));
// let result = (first + second + third) / 3;
// console.log(result)

// 8.Спитати в користувача вік, далі використовуючи
// тернарний оператор ( це скорочений запис іf ) створити змінну яка отримує
// true якщо вік більше 18  i false якщо менше

// let age = parseFloat(prompt("your age", "write this"));
// let ageOne = age > 18 ? true : false;
// console.log(ageOne);

// 9.створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи
// то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

// let planet = prompt("на якій планеті ви живете?", "введіть планету");
// switch (planet) {
//   case "меркурій":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   case "венера":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   case "земля":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   case "марс":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   case "юпітер":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   case "сатурн":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   case "уран":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   case "плутон":
//     console.log(alert("ця планета в сонячній системі"));
//     break;
//   default:
//     console.log(alert("такої планети нема в сонячній системі"));
// }

// 10.Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3%
// і вивести значення якщо більше 3000 то порахувати знижку 5% і якщо більше 10000 то порахувати
// знижку 7% в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"

// let price = parseFloat(prompt("введіть сумму", "сумма"));
// if (price === 0) {
//   alert("У вас нема знижки до сплати число яке було введене");
// } else if (price <= 2999) {
//   sale = (price / 100) * 3;
//   result = price - sale;
//   alert(`знижкa 3% ${result}`);
// } else if (price <= 9999) {
//   sale = (price / 100) * 5;
//   result = price - sale;
//   alert(`знижкa 5% ${result}`);
// } else if (price >= 10000) {
//   sale = (price / 100) * 7;
//   result = price - sale;
//   alert(`знижкa 7% ${result}`);
// } else {
//   alert("У вас нема знижки до сплати число яке було введене");
// }

// 11.отримати від користувача назву трарини і за допогомою світч вивести звук який вона видає . Наприклад корова: му-му  і т.д

let animal = prompt(
  "введіть назву тварини щоб дізнатись який звук вона видає",
  "введіть тварину"
);
switch (animal) {
  case "корова":
    console.log(alert("му-му"));
    break;
  case "собака":
    console.log(alert("гав-гав"));
    break;
  case "кіт":
    console.log(alert("мяу-мяу"));
    break;
  case "жаба":
    console.log(alert("ква-ква"));
    break;
  case "орки":
    console.log(alert("8 лет бамбас"));
    break;
  case "голуб":
    console.log(alert("курлик-курлик"));
    break;
  case "вовк":
    console.log(alert("ауф"));
    break;
  case "лев":
    console.log(alert("ррррррррррррвау"));
    break;
  default:
    console.log(alert("такої тварини нема в сонячній системі"));
}

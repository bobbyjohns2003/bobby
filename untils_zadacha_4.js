// Функция принимает строку с выражением и возвращает результат вычислений
export function calcEquation(equation) {
  // Массив всех используемых операторов
  const operators = ['+', '-', '/', '*'];

  // поиск оператора в строке
  let operatorFound = false;
  let operatorPosition = -1;

  for (const op of operators) {
    const pos = equation.indexOf(op);
    if (pos > -1) { // нашел оператор
      operatorFound = true;
      operatorPosition = pos;
      break;
    }
  }

  // Если оператор не найден, значит выражение некорректно
  if (!operatorFound) {
    return '';
  }

  // Получение левого и правого операндов
  const leftOperandStr = equation.substring(0, operatorPosition).trim(); // Левый операнд
  const rightOperandStr = equation.substring(operatorPosition + 1).trim(); // Правый операнд

  // Преобразование операндов в числа
  const leftOperand = parseFloat(leftOperandStr);
  const rightOperand = parseFloat(rightOperandStr);

  // Проверка, что оба операнда являются действительными числами
  if (isNaN(leftOperand) || isNaN(rightOperand)) {
    return ''; // Некорректные операнды
  }

  // Выбор операции и выполнение расчёта
  switch (equation.charAt(operatorPosition)) {
    case '+':
      return String(leftOperand + rightOperand);
    case '-':
      return String(leftOperand - rightOperand);
    case '/':
      if (rightOperand === 0) {
        return ''; // Деление на ноль недопустимо
      }
      return String(leftOperand / rightOperand);
    case '*':
      return String(leftOperand * rightOperand);
    default:
      return ''; // Случай, когда оператор неизвестен (хотя ранее мы убедились, что такой случай невозможен)
  }
}

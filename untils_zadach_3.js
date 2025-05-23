// Функция проверки строки уравнения
export function validateEquation(equation) {
  const operators = ['+', '-', '/', '*'];

  // Проверка наличия оператора
  if (!operators.some(op => equation.includes(op))) return 'не хватает одного или нескольких операндов';

  // Извлекаем первую операцию и проверяем наличие операндов, здесь я сомневаюсь в коде
  let opIndex = Math.max(
    equation.indexOf('+'),
    equation.indexOf('-'),
    equation.indexOf('/'),
    equation.indexOf('*')
  );

  // Определяем левую и правую части уравнения, блин, надо задеплоить на vps, но времени нет куча заданий по другим предметам
  const leftOperand = equation.slice(0, opIndex);
  const rightOperand = equation.slice(opIndex + 1);

  // Проверка на операнды
  if (!leftOperand || !rightOperand) return 'не хватает одного или нескольких операндов';

  // Проверка, что оба операнда являются числами
  if (isNaN(Number(leftOperand)) || isNaN(Number(rightOperand)))
    return 'операнды могут быть только числами';

  // Нет ошибок
  return '';
}




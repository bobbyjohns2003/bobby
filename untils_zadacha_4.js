// Стандартная фитча
export function calcEquation(expression) {
  try {
    // Взял из примера, но надо было без eval, как всегда серверные настройки заблокируют eval
    const result = eval(expression);
    
    // Проверяем, что результат - целое число или конечная десятичная дробь
    if (Number.isInteger(result) || Number(result).toString().includes('.') && !Number(result).toString().match(/\.0$/)) {
      return String(result);
    }
  } catch (err) {
    // Если выражение некорректно или отдаем пустую строку
    console.error(err.message);
  }

  return ''; // Отдаем пустую строку, если выражение неверно или произошло исключение
}

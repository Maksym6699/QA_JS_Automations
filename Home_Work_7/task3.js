function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Помилка: обидва аргументи повинні бути числами');
  }

  if (denominator === 0) {
    throw new Error('Помилка: неможливо ділити на нуль');
  }
  return numerator / denominator;
}

try {
  const result1 = divide(20, 4);
  console.log('Результат: ' + result1);
} catch (error) {
  console.log('Помилка: ' + error.message);
} finally {
  console.log('Робота завершена\n');
}

try {
  const result2 = divide(10, 3);
  console.log('Результат: ' + result2);
} catch (error) {
  console.log('Помилка: ' + error.message);
} finally {
  console.log('Робота завершена\n');
}

try {
  const result3 = divide(10, 0);
  console.log('Результат: ' + result3);
} catch (error) {
  console.log('Помилка: ' + error.message);
} finally {
  console.log('Робота завершена\n');
}

try {
  const result4 = divide(15, 'abc');
  console.log('Результат: ' + result4);
} catch (error) {
  console.log('Помилка: ' + error.message);
} finally {
  console.log('Робота завершена\n');
}

try {
  const result5 = divide('10', '2');
  console.log('Результат: ' + result5);
} catch (error) {
  console.log('Помилка: ' + error.message);
} finally {
  console.log('Робота завершена\n');
}

try {
  const result6 = divide(-20, 5);
  console.log('Результат: ' + result6);
} catch (error) {
  console.log('Помилка: ' + error.message);
} finally {
  console.log('Робота завершена\n');
}

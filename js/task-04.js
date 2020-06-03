const countTotalSalary = function(employees) {
  // const names = Object.keys(employees);
  const salary = Object.values(employees);
  let totalSalary = 0;
  // console.log(salary.length);
  for (let i = 0; i < salary.length; i += 1) {
    totalSalary += salary[i];
  }
  return `общая сумма зарплат всех сотрудников составляет: ${totalSalary}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

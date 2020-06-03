const findBestEmployee = function(employees) {
  const employeeNames = Object.keys(employees);
  const numberOfTasks = Object.values(employees);
  const maxValue = Math.max(...numberOfTasks);
  const index = numberOfTasks.indexOf(maxValue);
  const bestEmployeeName = employeeNames[index];
  return bestEmployeeName;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.table(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

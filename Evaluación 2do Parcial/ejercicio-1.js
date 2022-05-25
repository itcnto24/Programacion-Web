var name = prompt ("¿Cuál es tu nombre?");
var edad = prompt ("¿Qué edad tienes en la actualidad?");
var futuro = 2050;
var actual = 2022;

var nacimiento = actual - edad;
var edadFuturo = futuro - nacimiento;

// IMPRESIÓN EN CONSOLA
console.log("Bien " + name + " tu edad actual es de " + edad + " años, tu edad en el año " + futuro + " será de " + edadFuturo + " años.");
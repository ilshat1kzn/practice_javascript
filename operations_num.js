// код, который будет присваивать переменной "х" удвоенное значение остатка от деления произведения переменных "a" и "b" на их сумму.

function testOperation(a, b) {
    var x;
    x = ((a * b) % (a + b)) * 2
    return x;
}

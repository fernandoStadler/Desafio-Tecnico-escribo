const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const setSum = (number) => {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

rl.question('Digite um número positivo e inteiro para retornar os valores somatórios de todos os números anteriores que são divisíveis por 3 ou 5: ', (answer) => {
    let number = parseInt(answer);
    if (Number.isInteger(number) && number > 0) {
        console.log(setSum(number));
    } else {
        console.log('Por favor, o número escolhido deve ser um número inteiro e positivo!');
    }
    rl.close();
});

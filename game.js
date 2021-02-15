// Получение выбора пользователя

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "камень") {
        return userInput;
    } else if (userInput === "ножницы") {
        return userInput;
    } else if (userInput === "бумага") {
        return userInput;
    } else {
        return "Можно выбрать только камень, ножницы или бумагу";
    }
}


// Получение выбора компьютера

/* const getComputerChoice = () => {
    let randChoice = Math.floor(Math.random() * 3) // получение случайного числа от 0 до 2
    // Замена случайных чисел на строчные значения выбора
    if (randChoice === 0) {
        return "камень";
    } else if (randChoice === 1) {
        return "ножницы";
    } else if (randChoice === 2) {
        return "бумага";
    }
}

*/

// switch версия

const getComputerChoice = () => {
    let randChoice = Math.floor(Math.random() * 3);
    switch (randChoice) {
        case 0:
            return "камень"
            break;
        case 1:
            return "ножницы"
            break;
        case 3:
            return "бумага"
            break;
        default:
            return "Ошибка в выборе компьютера"
            break;
    }
}

// Определение победителя

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Ничья!!!";
    }

    if (userChoice === "камень") {
        if (computerChoice === "ножницы") {
            return "Вы победили!";
        } else {
            return "Победил компьютер";
        }
    }

    if (userChoice === "ножницы") {
        if (computerChoice === "бумага") {
            return "Вы победили!";
        } else {
            return "Победил компьютер";
        }
    }

    if (userChoice === "Бумага") {
        if (computerChoice === "камень") {
            return "Вы победили!";
        } else {
            return "Победил компьютер";
        }
    }

    if (userChoice !== "камень" || userChoice !== "ножницы" || userChoice !== "бумага") {
        return "Ваш выбор не может участвовать в игре.";
    }

}

// Старт игры, вывод в консоль

const playGame = () => {
    const userChoice = getUserChoice("камень"); // ввод выбора пользователя
    const computerChoice = getComputerChoice();
    console.log(`Вы выбрали ${userChoice}`);
    console.log(`Компьютер выбрал ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

// вызов функции запуска игры

playGame();


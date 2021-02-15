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

const getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3) // получение случайного числа от 0 до 2
    // Замена случайных чисел на строчные значения выбора
    if (rand === 0) {
        return "камень";
    } else if (rand === 1) {
        return "ножницы";
    } else if (rand === 2) {
        return "бумага";
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


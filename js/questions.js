let current;

let answered = [];

function selectQuestion() {

    current = Math.round(Math.random() * (questions.length - 1));

    if (answered.indexOf(current) > -1) {
        selectQuestion();
        return;
    }

    // console.log(current)

    $("#question").text(questions[current].text);
}

function checkAnswer(val) {

    console.log(questions[current].answers)

    console.log(val);

    let check = questions[current].answers.indexOf(val.trim().toLowerCase() + "") >= 0;

    // console.log("Answer: " + check)

    if (check)
        answered.push(current);

    return check;
}

let questions = [

    {
        text: "Ваш дом со всем вашим имуществом загорелся. После спасения близких и домашних животных у вас есть время, чтобы забежать в дом еще раз и спасти какую-то одну вещь. Что бы это могло быть?",
        answers: ["1", "паспорт", "хуй", "себя"]
    },
    {
        text: "Ответь 1 или 2",
        answers: ["1", "2", "0"]
    },
    {
        text: "В чем смысл жизни?",
        answers: ["42"]
    },
    {
        text: "Атака корабля противника при непосредственном сближении с ним для рукопашного боя называется..",
        answers: ["абордаж"]
    },
    {
        text: "Как называется защищённая от волн внешняя часть порта?",
        answers: ["аванпорт"]
    },
    {
        text: "Какой флот был исторически первым?",
        answers: ["парусно-гребной"]
    },
    {
        text: "Сколько веков Военный флот стоит на страже национальных интересов России?",
        answers: ["3", "три", "более трех"]
    },
    {
        text: "Военный корабль, оборудованный как подвижной морской аэродром, называется..",
        answers: ["авианосец"]
    },
    {
        text: "Бог морей и потоков в древнеримской мифологии это..",
        answers: ["нептун"]
    },
    {
        text: "Из какого города в своё первое плавание ушёл крейсер «Аврора»?",
        answers: ["кронштадт", "из кронштадта"]
    },
    {
        text: "Какие у матросов вопросы?",
        answers: ["их нет", "нет", "у матросов нет вопросов"]
    },
    {
        text: "Что означает выкрик «Полундра!»?",
        answers: ["внимание", "опасность", "тревога", "угроза"]
    },
    {
        text: "Пустой вопрос",
        answers: ["Пустой ответ"]
    }
];

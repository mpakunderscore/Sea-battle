// let allQuestions = [];

//TODO 1 6 4 2 7

let current;

let answered = [];

// answered.push([]);

let order = 1;

let past;

let block = 0;

// let i = 0;

function selectQuestion() {

    past = 0;

    //blocks of questions
    for (let i = 0; i < questions.length; i++) {

        if (order > questions[i].length + past) {

            //next block
            past += questions[i].length;
            continue;

        } else if (order === past + 1) {

            // first question in new block

            // next block
            block = i;

            //new answers block
            answered.push([]);

            console.log("next block: " + i);
        }

        current = Math.round(Math.random() * (questions[i].length - 1));

        if (answered[block].indexOf(current) > -1) {
            selectQuestion();
            return;
        }

        console.log("order: " + order)

        let q = $("#question").text(
            block + "/" + current + "/" + order + " " +
            questions[block][current].text
        );
        q.html(q.html().replace(/\n/g, "<br/>"));

        if (questions[i][current].image)
            q.append("<img style='width: 100%;' src='" + questions[block][current].image + "'>");

        order++;

        startTimer();

        return;
    }
}

let timer;

let time;

function startTimer() {

    time = 30;

    let text = Math.floor(time/60) + ":" +
        (time%60 < 10 ? "0" + time%60 : time%60);

    $("#timer div").text("Подсказка через " + text);

    timer = setInterval(function(){ timerSec() }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function timerSec() {

    time--;

    let text = Math.floor(time/60) + ":" +
        (time%60 < 10 ? "0" + time%60 : time%60);

    $("#timer div").text("Подсказка через " + text);

    if (time <= 0) {
        clearInterval(timer);
        $("#timer div").text("Подсказка");
        $("#timer div").click(function() {
            showHelp();
        });
    }
}

function showMuseumMap() {

    let win = window.open("images/map/" + questions[block][current].map, "_blank");
    win.focus();
}

function showHelp() {
    $("#timer").css("display", "none");
    $("#text").text(questions[block][current].help)

    // questions[i][current]
}

function checkAnswer(val) {

    console.log(questions[block][current].answers)

    console.log(val);

    let check = questions[block][current].answers.indexOf(val.trim().toLowerCase() + "") >= 0;

    // console.log("Answer: " + check)

    if (check)
        answered[block].push(current);

    return check;
}

function fool() {

    let input = $("input");
    input.val(questions[block][current].answers[0]);
    answer()
}

let questions = [

    [
        {
            text: "Без ПЕРВОГО не было бы ни музея, ни города. Без ВТОРОГО – возможно, не было бы революции. ПЕРВЫЙ - черный, ВТОРОЙ – белый. " +
            "Обоих можно видеть с точки, на которой вы стоите. " +
            "Формат ответа: имя ПЕРВОГО прозвище ВТОРОГО" +

            "\n",

            image: "images/map/example.png",

            answers: ["петр железняк", "железняк"],
            help: "Осмотрите памятник в арке сразу после входа",
            map: "example.png"
        }
    ],
    [
        {
            text: "На карте экспедиции первооткрывателей Антарктиды (1819-1821 гг.) есть остров, названный в честь человека, чьё имя вы точно знаете (ведь вы не только прошли мимо него, но и вбивали его в ответ). Какой меридиан к этому острову самый ближайший на этой карте? Формат ответа: число",
            answers: ["90"],
            help: "Карта находится по левую руку от входа в зал во второй секции",
            map: "example.png"
        },
        {
            text: "В самом большом экспозиционном зале должна находиться и самая большая модель в музее. Найдите этот линкор со 111-ю пушками и ответьте, КАКИМ военным кораблем в российском флоте с деревянным корпусом он был? Формат ответа: третьим",
            answers: ["последним"],
            help: "На самом деле в ответе не число",
            map: "example.png"
        },
        {
            text: "Судя по её достижениям во главе государства, она была Владычицей Морскою. По крайней мере, трон у нее точно был. А во время посещения какого города она им пользовалась? Формат ответа: Название",
            answers: ["херсон"],
            help: "Сразу слева от входа. Город на полуострове, который недавно аннексировали",
            map: "example.png"
        },
        {
            text: "Главный золотой символ Адмиралтейства блестит и переливается ярким светом. Увидеть его таинственные символы может каждый, но только внимательный ответит на вопрос «Кем он был «возобновлёнъ»? Формат ответа: слесарем Хюбнеромъ",
            answers: ["архитектором риглеромъ", "риглеромъ"],
            help: "Заметить буквы можно не сразу, но они там есть. Всмотритесь внимательно в золотую поверхность",
            map: "example.png"
        },
        {
            text: "Как будто мы на поле Куликовом! Вот стоит Ослябя! А вот – Витязь! А кто же это между ними? Формат ответа: Имя Фамилия",
            answers: ["дмитрий донской", "донской"],
            help: "Речь идет об огромных рострах кораблей на стенах зала по периметру",
            map: "example.png"
        },
        {
            text: "Рассмотрите внимательно карту боевых действий эскадры русского флота под командованием Сенявина в южных морях. В порт какого острова пришла эскадра 18 января? Формат ответа: Название",
            answers: ["корфу"],
            help: "Сама схема по левую руку от входа в зал",
            map: "example.png"
        }
    ],
    [
        {
            text: "Самая широкая яхта в этом зале была построена в Глазго. А названа она в честь известного места в Крыму. Формат ответа: Название",
            answers: ["ливадия"],
            help: "Поднимайтесь на второй этаж первого зала",
            map: "example.png"
        },
        {
            text: "Между НЕЙ Энгстрёмом и НЕЙ Фаррингтоном стоит еще одна ОНА. Назовите город, где она была изготовлена. Формат ответа: Название",
            answers: ["гатфорд"],
            help: "Речь о пулеметных установках, но подходит только одна",
            map: "example.png"
        },
        {
            text: "Если вы умеете пользоваться компасом, то вам даже свой не понадобится. Ведь в направлении NW от «10 магнитного путевого компаса сухого типа» стоит ОНА. Назовите фамилию ЕЕ создателя. Формат ответа: Фамилия",
            answers: ["джевецкий"],
            help: "Нужный вам компас стоит почти посреди зала, но закрыт специальным кожухом",
            map: "example.png"
        },
        {
            text: "Отличительной особенностью шлема с надписью 9258 является перенос травящего клапана оттуда. Откуда? Формат ответа: из ухи",
            answers: ["с котелка"],
            help: "Ищите в самом дальнем углу зала от лестницы наверх",
            map: "example.png"
        },
    ],
    [
        {
            text: "Спустившись на первый этаж под анфиладой, вы согласитесь, что этот летающий объект немного странно видеть в морском музее. Тем не менее, море из него было видно прекрасно. А человек, им управлявший, стал первым дважды Героем Советского Союза за подвиги в ВОВ. Напишите сумму красных и белых, если известно, что красные надо посчитать, а белые не надо. Формат ответа: число",
            answers: ["73"],
            help: "Речь о самолете, звездах и числах у него на фюзеляже",
            map: "example.png"
        },
        {
            text: "Скрасить ожидание киносеанса вам поможет осмотр известного оборонительного сооружения в Кронштадте, получившего страшное альтернативное название благодаря испытаниям над животными в конце 19 - начале 20 вв. Как называется тот, что выходит впервые? Формат ответа: Генерал Печкин",
            answers: ["адмирал горшков", "горшков"],
            help: "Ищите картину слева от входа в кинозал, буквально в 2-3 метрах",
            map: "example.png"
        },
    ],
    [
        {
            text: "Александр и Николай засмотрелись на корабли, вспоминая, где те были построены. И хоть оба мужчины были не первыми, а каждым из них, даже Николаем, можно было бы наградить за третье место, города кораблестроительных верфей вы точно сможете назвать. Формат ответа: Город Город",
            answers: ["або севастополь", "турку севастополь"],
            help: "Отправляйтесь в зал № 99",
            map: "example.png"
        },
        {
            text: "Отправляйтесь туда, где восходит солнце, и найдите уменьшенную копию великого подвига русских моряков. Назовите писателя, рядом с объектом имени которого в Петербурге находится оригинал. Кстати, вспомнить подвиг вам поможет столица Ямайки. Формат ответа: Имя Фамилия",
            answers: ["максим горький"],
            help: "Отправляйтесь в зал № 99",
            map: "example.png"
        },
        {
            text: "Только «Внимательный» игрок, осматриваясь у рельефной обороны Порт-Артура, сможет верно назвать рыбу. Формат ответа: белуга",
            answers: ["форель"],
            help: "Отправляйтесь в зал № 99",
            map: "example.png"
        },
        {
            text: "Вспомнив, о каком «гордом строе» пел Александр Розенбаум, вы без труда найдёте первый, второй и третий. Первый когда-то тоже был в подобном построении кораблей третьим, но после выхода из строя первого и второго сам на некоторое время стал первым, пока не погиб. Второй назван в честь легендарного богатыря, но чуть менее известного, чем самые знаменитые три. На третьем служил брат известного путешественника с двойной фамилией. Назовите фамилию выжившего на одном из них. Формат ответа: Фамилия",
            answers: ["ющин"],
            help: "Отправляйтесь в зал № 99",
            map: "example.png"
        },
        {
            text: "Назовите журнал, в котором описывались и гибель знаменитого крейсера во время Первой мировой войны, и загадочная судьба русского летчика. Помочь вам может зал, где есть рогатая, спасательные, машинный, посыльное и даже первый новгородский. Формат ответа: Слово множественного числа",
            answers: ["искры"],
            help: "Отправляйтесь в зал № 99",
            map: "example.png"
        },
        {
            text: "В одном углу зала - британский гюйс. Во втором - бортовая надпись знаменитого ледокола. В третьем - карикатура, на которой польский пан остаётся без головы. Вам же нужна надпись на объекте из последнего угла, находящаяся на вагоне за тем же порядковым номером, что и сам угол. Формат ответа: слово слово слово",
            answers: ["вся власть советам"],
            help: "Отправляйтесь в зал № 99",
            map: "example.png"
        },
        {
            text: "Средство звукового обнаружения подводных объектов с помощью акустического излучения",
            answers: ["гидролокатор", "эхолот", "сонар"],
            help: "Вопрос не из музея",
            map: "example.png"
        }
    ],
    [
        {
            text: "Дуплет. Этот эскадренный броненосец назван в честь русского государственного деятеля, создателя и первого главнокомандующего Черноморского военного флота, известного также своими «деревнями». Найдите броненосец. 1. Вспомнив, ЧТО этот герой брал штурмом, назовите объект слева от НЕГО. 2. Внимательно осмотрите броненосец. Мы не знаем, играли ли в эту игру на самом корабле, но если вы железно рассмотрите все детали, вам наверняка придёт в голову именно её название. Формат ответа: Картечь Прятки",
            answers: ["мина домино", "мина кости"],
            help: "Отправляйтесь в зал № 99",
            map: "example.png"
        }
    ]
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const selectedValue = document.getElementById('selectedValue'); 

const value = [
{ value: "1", text: "1. Иванов Иван Иванович ivan@gmail.com", className: "option1" },
{ value: "2", text: "2. Петров Семен Алекандрович petrov@mail.ru", className: "option2" },
{ value: "3", text: "3. Анисимов Олег Петрович anis@gmail.com", className: "option3" },
{ value: "4", text: "4. Токарев Михаил Антонович Тtokarevprio@gmail.com", className: "option4" },
{ value: "5", text: "5. Ешенко Данил Ярославович echenko@gmail.com", className: "option5" },
{ value: "6", text: "6. Абрамов Александр Серегеевич alexabr@mail.ru", className: "option6" },
{ value: "7", text: "7. Уткин Василий Вячеславович legendafootbol@gmail.com", className: "option7" },
{ value: "8", text: "8. Негучев Роман Владимирович romannaguchev@gmail.com", className: "option8" },
{ value: "9", text: "9. Голиков Александр Алексеевич antongolikov@mail.ru", className: "option9" }
];


// обработчик события для того чтобы при нажатии на строку выводился список
searchInput.addEventListener('click', () => { 
    showAllValue();
});

// обработчик ввода текста
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    
    // если строка пуста, вызываем функцию showAllValue() которая выводит все варинаты
    if (searchValue === '') {
        showAllValue();
    } 
    // фильтрация
    else {
        searchResults.innerHTML = '';
        const filter = value.filter(value => value.text.toLowerCase().includes(searchValue));

        filter.forEach((value) => {
            createResultElement(value);
        });
    }
});

function showAllValue() {
    searchResults.innerHTML = '';

    value.forEach((value) => {
        createResultElement(value);
    });
}

function createResultElement(value) {
    const result = document.createElement('div');
    result.textContent = value.text;
    result.className = value.className;
    result.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.innerHTML = '';
        selectedValue.textContent = value.text;
    });
    searchResults.appendChild(result);
}
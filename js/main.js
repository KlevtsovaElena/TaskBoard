
    localStorage.clear();
    //массив адресов обоев
    let wallpaper = [
        {   "title" : "popular",
            "title-rus" : "Популярное",
            "image": [
                "https://klevtsovaelena.github.io/wallpaper/img/1.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/2.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/3.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/4.png",
                "https://klevtsovaelena.github.io/wallpaper/img/5.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/6.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/7.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/8.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/9.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/10.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/11.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/12.jpg",
                
            ]
        },
        {   "title" : "black_white",
            "title-rus" : "Чёрно-белое",
            "image": [
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite1.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite2.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite3.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite4.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite5.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite6.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite7.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite8.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite9.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite10.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite11.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite12.jpg",
                
            ]
        },
        {   "title" : "north_lights",
            "title-rus" : "Северное сияние",
            "image": [
                "https://klevtsovaelena.github.io/wallpaper/img/Shine1.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine2.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine3.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine4.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine5.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine6.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine7.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine8.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine9.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine10.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine11.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Shine12.jpg",
                
            ]
        },
        {   "title" : "winter",
            "title-rus" : "Зима",
            "image": [
                "https://klevtsovaelena.github.io/wallpaper/img/Winter1.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter2.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter3.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter4.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter5.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter6.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter7.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter8.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter9.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter10.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter11.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Winter12.jpg",
                
            ]
        },
        {   "title" : "fire",
            "title-rus" : "Фейерверки",
            "image": [
                "https://klevtsovaelena.github.io/wallpaper/img/Fire1.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire2.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire3.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire4.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire5.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire6.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire7.jpeg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire8.png",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire9.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire10.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire11.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Fire12.jpg",
                
            ]
        },
        {   "title" : "flower",
            "title-rus" : "Цветы",
            "image": [
                "https://klevtsovaelena.github.io/wallpaper/img/Flower1.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower2.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower3.jpeg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower4.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower5.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower6.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower7.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower8.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower9.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower10.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower11.jpg",
                "https://klevtsovaelena.github.io/wallpaper/img/Flower12.jpg",
            ]
        },
      ]


    //создаем модель таскборда
    let data = localStorage.getItem('boards');
    console.log(data)

    //если нет сохраненного то выдаем стартовый объект
    if (data == null) {
        //перезаписываем data
        data = {
            "boards":[
                {
                    "title":"Новая доска",
                    "background": "https://klevtsovaelena.github.io/wallpaper/img/BlackWhite11.jpg",
                    "columns":[
                        {
                            "title":"Новая колонка",
                            "cards":[

                            ]
                        }
                    ]
                }
            ]
        };
    } else {
        data = JSON.parse(data);
    }

    console.log(data);
 
    renderBoards();

    //функция сохранения
    function save() {

        //кодируем data в json
        let dataJson = JSON.stringify(data);

        //сохраняем в localStorage
        localStorage.setItem('boards',dataJson);
    }

    //функция отрисовки досок
    function renderBoards() {

        //получаем шаблоны
        let tmpl_board = document.getElementById('tmpl-board').innerHTML;
        let tmpl_column = document.getElementById('tmpl-column').innerHTML;
        let tmpl_card = document.getElementById('tmpl-card').innerHTML;

        //находим контейнер под доски
        let container = document.getElementById('boards');

        //очищаем доски
        container.innerHTML = '';

        //в цикле подставляем данные в шаблоны (СОБИРАЕМ ДОСКИ)
        for (let i = 0; i < data['boards'].length; i++ ) {


            //собираем html колонок доски  (СОБИРАЕМ КОЛОНКИ ДОСКИ)
            let boardColumns = '';
            for (let j = 0; j < data['boards'][i]['columns'].length; j++) { 


                //собираем html карточек колонки (СОБИРАЕМ КАРТОЧКИ КОЛОНКИ)
                let columnCards = '';
                for (let k = 0; k < data['boards'][i]['columns'][j]['cards'].length; k++) {

                    //html одной карточки
                    let cardHtml = tmpl_card.replace('${card_header}',data['boards'][i]['columns'][j]['cards'][k]['title'])
                                            .replace('${board_number}',i)                        
                                            .replace('${column_number}',j)
                                            .replace('${card_number}',k)
                                            .replace('${card_content}',data['boards'][i]['columns'][j]['cards'][k]['description']);   

                    //добавляем готовый текст карточки к картокам КОЛОНКИ
                    columnCards += cardHtml;

                }

                //html одной колоночки
                let columnHtml = tmpl_column.replace('${column_header}',data['boards'][i]['columns'][j]['title'])
                                            .replace('${board_number}',i)
                                            .replace('${board_number}',i)
                                            .replace('${board_number}',i)
                                            .replace('${board_number}',i)
                                            .replace('${board_number}',i)
                                            .replace('${board_number}',i)
                                            .replace('${board_number}',i)
                                            .replace('${column_number}',j)
                                            .replace('${column_number}',j)
                                            .replace('${column_number}',j)
                                            .replace('${column_number}',j)
                                            .replace('${column_number}',j)
                                            .replace('${column_number}',j)
                                            .replace('${column_number}',j)
                                            .replace('${column_content}',columnCards);


                //добавляем готовый текст КОЛОНКИ к колонкам ДОСКИ
                boardColumns += columnHtml;

            }

            //подстваляем данные в шаблон доски и добавляем в контейнер
            container.innerHTML += tmpl_board.replace('${board_header}',data['boards'][i]['title'])
                                             .replace('${board_background}',data['boards'][i]['background']) 
                                             .replace('${board_background}',data['boards'][i]['background']) 
                                             .replace('${board_number}',i) 
                                             .replace('${board_number}',i) 
                                             .replace('${board_number}',i)
                                             .replace('${board_number}',i)
                                             .replace('${board_content}',boardColumns);
        }


    }

    //функция переименования доски
    function boardRename(board_number) {

        let name = event.target.value;

        data['boards'][board_number]['title'] = name;

        save();
    }



    //функция создания колонки
    function columnAdd(board_number){

        //создаем пустую колонку
        let column = {
                        "title":"Новая колонка",
                        "cards":[]
                     }; 

        //добавляем колонку на доску
        data['boards'][board_number]['columns'].push(column)  

        //вывести модель в консоль
        console.log(data);  

        //перерисовываем доски
        renderBoards();   

        save();     
        
    }

    //функция переименования колонки
    function columnRename(board_number, column_number) {

        //определяем содержимое инпута
        let name = event.target.value;

        //перезаписываем имя колонки в модели
        data['boards'][board_number]['columns'][column_number]['title'] = name;

        //сохраняем
        save();
    }

    //функция для удаления колонок
    function columnDelete(board_number, column_number) {

        //спросить подтверждение
        let ok = confirm("Вы действительно хотите удалить колонку?");  //true / false

        if (ok) {

            //удаляем колонку из модели
            data['boards'][board_number]['columns'].splice(column_number,1);

            //сохраняем
            save();

            //перерисовываем
            renderBoards();
        } 
        
    }

    function showAddCardForm(board_number, column_number){
        //форму для заполнения названия и описания задачи

        let id_formCardAdd = "formCardAdd_" + board_number + "_" + column_number;
        
        document.getElementById(id_formCardAdd).style.display="block";

    }

    //функция добавления карточки(задачи)
    function cardAdd(board_number, column_number) {

        //создаем пустую карточку
        let card = {};

        //получить содержимое текстового поля
        let id_title = "card-title_" + board_number + "_" + column_number;
        let id_description = "card-description_" + board_number + "_" + column_number;
        let title = document.getElementById(id_title).value;
        let description = document.getElementById(id_description).value;

        //наполняем карточку полученными данными
        card['title'] = title;
        card['description'] = description;

        //добавить карточку в модель
        data['boards'][board_number]['columns'][column_number]['cards'].push(card);

        //вывести модель в консоль
        console.log(data);

        //перерисовываем доски
        renderBoards(); 

        save();
    }


    //функция удаления карточки
    function cardDelete(board_number, column_number, card_number) {

        //спросить подтверждение
        let ok = confirm("Вы действительно хотите удалить задачу?");  //true / false

        if (ok) {

            //удаляем колонку из модели
            data['boards'][board_number]['columns'][column_number]['cards'].splice(card_number,1);

            //сохраняем
            save();

            //перерисовываем
            renderBoards();
        } 

    }

    /*
//получаем название новой задачи и её описание
    function getCardName(board_number, column_number) {
        //получить содержимое текстового поля
      let title = document.getElementById("card-title").value;
      let description = document.getElementById("card-description").value;

        //наполняем карточку полученными данными
        card['title'] = title;
        card['description'] = description;
        return title_card = event.target.value;
    }
    function getCardDescription() {
        return description_card = event.target.value;
    }
*/

//отрисовываем картинки для выбора фона доски 
    function showWallpapaers(board_number){
         //находим контейнер для обоев  
        let wallpapersContainer = document.getElementById('wallpapers');
        //находим шаблон для обоев
        let templateWallpapers = document.getElementById('tmpl-wallpapers').innerHTML;
        //показать блок с 
        document.getElementById('changeBackground').style.right = "0";
        //для каждой категории картинок
        for (let i = 0; i<wallpaper.length; i++){
            //выводим картинки этой категории
            for (let j = 0; j<wallpaper[i]['image'].length; j++){
                wallpapersContainer.innerHTML += templateWallpapers .replace('${image}', wallpaper[i]['image'][j])
                                                                    .replace('${image}', wallpaper[i]['image'][j])
                                                                    .replace('${board_number}', board_number)
                                                                    .replace('${wallpaper_number}', i)
                                                                    .replace('${image_number}', j);               
            }
        }

    
    }
//закрываем меню с обоями
function wallpapersDelete(){
    let wallpapersContainer = document.getElementById('wallpapers');
    wallpapersContainer.innerHTML = "";
    document.getElementById('changeBackground').style.right = "-400px";
}
    //функция для замены обоев
    function boardChangeBackground(board_number, wallpaper_number, image_number) {

        //получаем ссылку на фон
        let background = wallpaper[wallpaper_number]['image'][image_number];
        //обновляем фон в модели
        data['boards'][board_number]['background'] = background;

        //сохраняем
        save();

        //перерисовываем
        renderBoards();

    }
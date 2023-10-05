let news = [

    {
        id:'1',
        name:'Киноафиша',
        author:'Киномакс',
        date:'07.07.23',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
    },
    {
        id:'2',
        name:'Котята',
        author:'Приют "Добрые дела"',
        date:'01.12.23',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
    },
    {
        id:'3',
        name:'Привет всем',
        author:'От вау',
        date:'09.09.23',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
    },
    {
        id:'4',
        name:'Фото',
        author:'Здравия желаю.',
        date:'10.10.23',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
    },
    {
        id:'5',
        name:'Котёнок',
        author:'neelxv',
        date:'01.01.23',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
    },
] 

let boxcontent = '<div class="list-content"></div>';
let box = document.querySelector('.main-list');

for (let i = 0; i < news.length; i++){

    box.insertAdjacentHTML('beforeend',
    '<div class="list-content"><div class="content-title"><h1 class="name">'+news[i]['name']+'</h1> <p class="text">'+news[i]['date']+'</p></div> <div class="content-text">'+news[i]['text']+'</div> <div class="content-footer"><p class="subtitle">'+news[i]['author']+'</p><p class="id"> Id:'+news[i]['id']+'</p></div></div>');

}
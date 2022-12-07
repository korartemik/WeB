const baseUrl = 'https://jsonplaceholder.typicode.com/';

const getPhotos = async (albumId) => {
    return await fetch(`${baseUrl}albums/${albumId}/photos`)
        .then(response => response.json());
}

if (!sessionStorage.getItem('page'))
    sessionStorage.setItem('page', '1');

const container = document.getElementById('album-list');
const pagination = document.getElementById('pages');
const buttons = [...pagination.children];

const loadPhotos = async () => {
    container.innerHTML = '<img src="https://i.imgur.com/Os63UKo.gif" width="300" height="150" alt="mask">';

    try {
        const data = (await getPhotos(sessionStorage.getItem('page'))).slice(0, 8);

        buttons.forEach(button => {
            if (button.innerText === sessionStorage.getItem('page'))
                button.classList.add('active');
            else
                button.classList.remove('active');
        });
        /*let descrip = item.title
        if (descrip.length > 50){
            descrip = descrip.substring(0,50)
        }*/
        container.innerHTML = '';
        for (const item of data) {
            container.innerHTML += `
     <div class="responsive">
     <div class="gallery">
     <a target="_blank" href="#">
                      <img src=${item.url} alt="chto to ne tak" width="600" height="400">
                  </a>
                  <div class="desc">${item.title.substring(0,49)}</div>
              </div>
     </div>
     `
        }
    } catch (e) {
        container.innerHTML = '<p class="error">Произошла ошибка. Попробуйте позже</p>';
    }
}
loadPhotos();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText === sessionStorage.getItem('page'))
            return;

        sessionStorage.setItem('page', button.innerText);
        loadPhotos();
    });
});
const photoOnPage = document.querySelector('.photo');
const like = document.querySelector('.like');
const author = document.querySelector('.author');
const quanityLikes = document.querySelector('.quanity-likes');

let page = 1;

async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=11&client_id=jOUkeXyb0JpaaUWVtGh_uJkw4-b0THkuWmy8gYpkxKI`);
        const photos = await response.json();
        console.log(response);
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return [];
    }
}

async function loadPhoto() {
    let responseObj = await fetchPhotos();
    console.log(responseObj);
    let randNum = Math.floor((Math.random() * 10));

    currentObj = responseObj[randNum];
    photoOnPage.src = currentObj.urls.small;
    photoOnPage.alt = currentObj.alt_description;

    quanityLikes.textContent = currentObj.likes;
    author.textContent = `Author: ${currentObj.user.name}`;
}


loadPhoto();

like.addEventListener('click', function() {
    let newLike = parseInt(quanityLikes.textContent) + 1;
    quanityLikes.textContent = newLike;
})
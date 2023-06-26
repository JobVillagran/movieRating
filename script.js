const moviesContainer = document.getElementById('movies-container');

const movies = [
    { title: 'Mario Bross - The Movie', rating: 4, image: '/assets/img/movie1.jpg' },
    { title: 'Guardianes de la Galaxia Vol. 3', rating: 4, image: '/assets/img/movie2.jpg' },
    { title: 'Spider-Man: A través del Spider-Verso', rating: 5, image: '/assets/img/movie3.jpg' },
    { title: 'La Ballena', rating: 5, image: '/assets/img/movie4.jpg' },
    { title: 'Flash', rating: 3, image: '/assets/img/movie5.jpg' },
];

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const title = document.createElement('h2');
    title.classList.add('movie-title');
    title.textContent = movie.title;

    const image = document.createElement('img');
    image.classList.add('movie-image');
    image.src = movie.image;
    image.alt = movie.title;

    const rating = document.createElement('div');
    rating.classList.add('rating');

    for (let i = 0; i < movie.rating; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '★';
        rating.appendChild(star);
    }

    movieCard.appendChild(title);
    movieCard.appendChild(image);
    movieCard.appendChild(rating);
    moviesContainer.appendChild(movieCard);
});

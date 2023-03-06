export const categories$ = (movies$) => {
  let categories = ['All'];

  for (let movie of movies$) {
    if (!categories.includes(movie.category)) {
      categories.push(movie.category);
    }
  }

  return categories;
};


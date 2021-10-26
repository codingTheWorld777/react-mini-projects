export const categories$ = (movies$) => {
  let categories = [];

  for (let movie of movies$) {
    if (!categories.includes(movie.category)) {
      categories.push(movie.category);
    }
  }

  return categories;
};


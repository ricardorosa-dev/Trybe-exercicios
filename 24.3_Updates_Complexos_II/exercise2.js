db.movies.find(
  { category: "action", imdbRating: { $gt: 7 } }
)

db.movies.find(
  { ratings: { $elemMatch: { $gte: 100, $lte: 105 } } },
  { title: 1, ratings: 1, _id: 0 }
)

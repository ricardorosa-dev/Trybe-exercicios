db.movies.find(
  { ratings: { $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] } } },
  { title: 1, ratings: 1, _id: 0 }
)

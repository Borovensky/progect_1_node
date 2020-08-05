const advancedResult = (model, populate) => async(req, res, next) => {
  let query;

  query = model.find();

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('createdAt');
  }

  const result = await query;

  res.advancedResults = {
    success: true,
    count: result.length,
    data: result,
  };

  next();
}

module.exports = advancedResult;
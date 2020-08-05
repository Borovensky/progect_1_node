const asyncHandler = require('../middleware/async');

exports.getPrediction = asyncHandler(async (req, res, next) => {
  setTimeout(() => {
    res.status(200).json({
      success: true,
      deta: 'Go fuck your self',
    });
  }, 2000);
});

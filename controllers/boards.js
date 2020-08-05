const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Board = require('../models/Board');

// @desc    Get all boards
// @route   GET /api/v1/boards
// @access  Private
exports.getBoards = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single board
// @route   GET /api/v1/boards/:id
// @access  Private
exports.getBoard = asyncHandler(async (req, res, next) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    return next(new ErrorResponse('Board not found', 404));
  }

  res.status(200).json({
    success: true,
    data: board,
  });
});

// @desc    Create new board
// @route   POST /api/v1/boards
// @access  Private
exports.createBoard = asyncHandler(async (req, res, next) => {
  const board = await Board.create(req.body);

  res.status(200).json({
    success: true,
    data: board,
  });
});

// @desc    Update board
// @route   PUT /api/v1/boards/:id
// @access  Private
exports.updateBoard = asyncHandler(async (req, res, next) => {
  let board = await Board.findById(req.params.id);

  if (!board) {
    return next(new ErrorResponse('Board not found', 404))
  }

  board = await Board.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: board,
  });
});

// @desc    Delete board
// @route   DELETE /api/v1/boards/:id
// @access  Private
exports.deleteBoard = asyncHandler(async (req, res, next) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    return next(new ErrorResponse('Board not found', 404));
  }

  board.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
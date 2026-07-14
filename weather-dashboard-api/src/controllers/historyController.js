const SearchHistory = require('../models/SearchHistory');

// GET /api/history — get last 10 searches
const getHistory = async (req, res, next) => {
  try {
    const history = await SearchHistory.find()
      .sort({ searchedAt: -1 }) // newest first
      .limit(10);

    res.status(200).json({
      success: true,
      count: history.length,
      data: history,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/history/:id — delete one record
const deleteHistory = async (req, res, next) => {
  try {
    const record = await SearchHistory.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({ success: false, message: 'Record not found' });
    }

    res.status(200).json({ success: true, message: 'Record deleted' });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/history — clear all history
const clearHistory = async (req, res, next) => {
  try {
    await SearchHistory.deleteMany({});
    res.status(200).json({ success: true, message: 'All history cleared' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getHistory, deleteHistory, clearHistory };

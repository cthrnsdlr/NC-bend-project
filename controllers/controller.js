const { selectCategories, selectReviews, selectReviewsById } = require("../models/model.js");

exports.getCategories = (req, res, next) => {
  return selectCategories()
    .then((categories) => {
      res.status(200).send({ categories: categories });
    })
    .catch(next);
};

exports.getReviews = (req, res, next) => {
  return selectReviews()
    .then((reviews) => {
      res.send({ reviews });
    })
    .catch(next);
};

exports.getReviewsById = (req,res,next) => {
    return selectReviewsById(req.params.review_id)
    .then((review) => {
        res.send({ review })
    })
    .catch(next)
}
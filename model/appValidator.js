const { param, check, validationResult } = require('express-validator/check');
module.exports = {
    add: [
        check('name').not().isEmpty().withMessage('is required').isString().withMessage('must be a string'),
        check('image').optional().isString().isURL().withMessage('must be an URL'),
        check('link').not().isEmpty().withMessage('is required').isString().isURL().withMessage('must be an URL'),
        check('category').isString().withMessage('must be a string'),
        check('rank').not().isEmpty().withMessage('is required').isInt().withMessage('must be a number'),
        check('objectID').optional().isInt().withMessage('must be a number'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            else {
                next();
            }
        }
    ],
    remove: [
        param('id').not().isEmpty().withMessage('is required').isInt().withMessage('must be a number'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            else {
                next();
            }
        }
    ]
};
//# sourceMappingURL=appValidator.js.map
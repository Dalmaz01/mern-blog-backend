import { body } from 'express-validator'

export const loginValidation = [
    body('email', 'Incorrect form of email').isEmail(),
    body('password', 'Password should be consist of minimum 5 symbols').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Incorrect form of email').isEmail(),
    body('password', 'Password should be consist of minimum 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Enter the full name').isLength({ min: 3 }),
    body('avatarUrl', 'Incorrect url').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Enter name of the article').isLength({ min: 3 }).isString(),
    body('text', 'Enter the text of article').isLength({ min: 10 }).isString(),
    body('tags', 'Wrong formate of the tags (enter array)').optional().isString(),
    body('imageUrl', 'Incorrect url').optional().isString(),
];
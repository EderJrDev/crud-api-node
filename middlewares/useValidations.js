const { body } = require("express-validator")

const productCreateValidation = () => {
  return [
    body('name')
      .isString().withMessage('O nome deve ser uma string')
      .notEmpty().withMessage('O nome é obrigatório'),
    body('description')
      .isString().withMessage('A descrição deve ser uma string')
      .notEmpty().withMessage('A descrição é obrigatória'),
    body('color')
      .isString().withMessage('A cor deve ser uma string')
      .notEmpty().withMessage('A cor é obrigatória'),
    body('weight')
      .isFloat({ min: 0.1 }).withMessage('O peso deve ser um número positivo'),
    body('type')
      .isString().withMessage('O tipo deve ser uma string')
      .notEmpty().withMessage('O tipo é obrigatório'),
    body('price')
      .isFloat({ min: 0 }).withMessage('O preço deve ser um número positivo')
  ]
}

const productUpdateValidation = () => {
  return [
    body('name')
      .isString().withMessage('O nome deve ser uma string')
      .notEmpty().withMessage('O nome é obrigatório'),
    body('description')
      .isString().withMessage('A descrição deve ser uma string')
      .notEmpty().withMessage('A descrição é obrigatória'),
    body('color')
      .isString().withMessage('A cor deve ser uma string')
      .notEmpty().withMessage('A cor é obrigatória'),
    body('weight')
      .isFloat({ min: 0.1 }).withMessage('O peso deve ser um número positivo'),
    body('type')
      .isString().withMessage('O tipo deve ser uma string')
      .notEmpty().withMessage('O tipo é obrigatório'),
    body('price')
      .isFloat({ min: 0 }).withMessage('O preço deve ser um número positivo')
  ]
}

module.exports = {
  productCreateValidation,
  productUpdateValidation
};


var _ = require('underscore');

var Ast = {};
Ast.Node = {};
Ast.Helpers = {};

/**
 *  elements: [Element]
 */
Ast.Node.Block = function (elements) {
    return {
        ast: 'BLOCK',
        elements: elements
    };
};

/**
 *  identifier: Identifier
 *  expression: Expression
 */
Ast.Node.Assignment = function (identifier, expression) {
    return {
        ast: 'ASSIGNMENT',
        identifier: identifier,
        expression: expression
    };
};

/**
 *  identifier: Identifier
 *  args:       [Expression]
 */
Ast.Node.Application = function (identifier, args, block) {
    return {
        ast: 'APPLICATION',
        identifier: identifier,
        args: args,
        block: block
    };
};

/**
 *  predicate: Expression
 *  ifBlock:   Block
 *  elseBlock: Block
 */
Ast.Node.If = function (predicate, ifBlock, elseBlock) {
    return {
        ast: 'IF',
        predicate: predicate,
        ifBlock: ifBlock,
        elseBlock: elseBlock,
    };
};

/**
 *  argNames: [Identifier]
 *  body:     Block
 */
Ast.Node.Closure = function (argNames, body) {
    return {
        ast: 'CLOSURE',
        argNames: argNames,
        body: body
    };
};

/**
 *  number:  Expression
 *  block:   Block
 *  loopVar: Identifier
 */
Ast.Node.Times = function (number, block, loopVar) {
    return {
        ast: 'TIMES',
        number: number,
        block: block,
        loopVar: loopVar
    };
};

/**
 *  block: Block
 */
Ast.Node.DoOnce = function (block) {
    return {
        ast: 'DOONCE',
        block: block
    };
};

/**
 *  operation: String
 *  expr1: Expression
 */
Ast.Node.UnaryMathOp = function (operation, expr1) {
    return {
        ast: 'UNARYMATHOP',
        operation: operation,
        expr1: expr1
    };
};

/**
 *  operation: String
 *  expr1: Expression
 *  expr2: Expression
 */
Ast.Node.BinaryMathOp = function (operation, expr1, expr2) {
    return {
        ast: 'BINARYMATHOP',
        operation: operation,
        expr1: expr1,
        expr2: expr2
    };
};

/**
 *  operation: String
 *  expr1: Expression
 */
Ast.Node.UnaryLogicOp = function (operation, expr1) {
    return {
        ast: 'UNARYLOGICOP',
        operation: operation,
        expr1: expr1
    };
};

/**
 *  operation: String
 *  expr1: Expression
 *  expr2: Expression
 */
Ast.Node.BinaryLogicOp = function (operation, expr1, expr2) {
    return {
        ast: 'BINARYLOGICOP',
        operation: operation,
        expr1: expr1,
        expr2: expr2
    };
};

/**
 *  value: Number
 */
Ast.Node.Num = function (value) {
    return {
        ast: 'NUMBER',
        value: value
    };
};

/**
 *  value: Identifier
 */
Ast.Node.Variable = function (identifier) {
    return {
        ast: 'VARIABLE',
        identifier: identifier
    };
};

/**
 *  value: String
 */
Ast.Node.Str = function (value) {
    return {
        ast: 'STRING',
        value: value
    };
};

module.exports = Ast;


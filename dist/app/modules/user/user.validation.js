"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidationSchema = exports.UserValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.UserValidationSchema = joi_1.default.object({
    userId: joi_1.default.number().required(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    fullName: joi_1.default.object({
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required(),
    }).required(),
    age: joi_1.default.number().required(),
    email: joi_1.default.string().email().required(),
    isActive: joi_1.default.boolean().default(true),
    hobbies: joi_1.default.array().items(joi_1.default.string()).default([]),
    address: joi_1.default.object({
        street: joi_1.default.string().required(),
        city: joi_1.default.string().required(),
        country: joi_1.default.string().required(),
    }).required(),
    orders: joi_1.default.array().items(joi_1.default.object({
        productName: joi_1.default.string().required(),
        price: joi_1.default.number().required(),
        quantity: joi_1.default.number().required(),
    })).default([]),
});
exports.OrderValidationSchema = joi_1.default.object({
    productName: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    quantity: joi_1.default.number().required(),
});

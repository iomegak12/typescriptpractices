"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("../models/customer"));
const DEFAULT_TIMEOUT = 3000;
const FOUND_INDEX_POS = 0;
const MIN_SEARCH_LENGTH = 3;
const MAX_SEARCH_LENGTH = 10;
class CustomerService {
    constructor() {
        this.customers = [];
        this.customers =
            [
                new customer_1.default(11, 'Northwind', 'Bangalore', 12000, true, 'Simple Record'),
                new customer_1.default(12, 'Southwind', 'Bangalore', 12000, true, 'Simple Record'),
                new customer_1.default(13, 'Westwind', 'Bangalore', 12000, true, 'Simple Record'),
                new customer_1.default(14, 'Eastwind', 'Hassan', 22000, true, 'Simple Record'),
                new customer_1.default(15, 'Oxyrich', 'Mysore', 32000, false, 'Simple Record')
            ];
    }
    *[Symbol.iterator]() {
        for (let customer of this.customers) {
            if (customer) {
                yield customer;
            }
        }
    }
    getCustomers(customerName) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!customerName)
                    resolve(this.customers);
                else {
                    let validation = customerName.length >= MIN_SEARCH_LENGTH &&
                        customerName.length <= MAX_SEARCH_LENGTH;
                    if (!validation)
                        reject(validation);
                    let filteredCustomers = this.customers.filter(customer => customer.name.indexOf(customerName) >= FOUND_INDEX_POS);
                    resolve(filteredCustomers);
                }
            }, DEFAULT_TIMEOUT);
        });
        return promise;
    }
}
exports.default = CustomerService;
//# sourceMappingURL=customerservice.js.map
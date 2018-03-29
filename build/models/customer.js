"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DELIMITER = ',';
const INVALID_ARGUMENTS = "Invalid Argument(s) Specified!";
class Customer {
    constructor(id, name, address, credit, status, remarks) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
        this.remarks = remarks;
    }
    toString() {
        let formattedMessage = `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}, ${this.remarks}`;
        return formattedMessage;
    }
    static create(csvString) {
        if (!csvString)
            throw new Error(INVALID_ARGUMENTS);
        let splittedString = csvString.split(DELIMITER);
        let customer = new Customer(parseInt(splittedString[0]), splittedString[1], splittedString[2], parseInt(splittedString[3]), splittedString[4], splittedString[5]);
        return customer;
    }
}
exports.default = Customer;
//# sourceMappingURL=customer.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./customer"));
class InternetCustomer extends customer_1.default {
    constructor(id, name, address, credit, status, remarks, blogUrl) {
        super(id, name, address, credit, status, remarks);
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
        this.remarks = remarks;
        this.blogUrl = blogUrl;
    }
    toString() {
        return `${super.toString()}, ${this.blogUrl}`;
    }
}
exports.default = InternetCustomer;
//# sourceMappingURL=internetcustomer.js.map
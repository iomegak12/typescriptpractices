"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerservice_1 = __importDefault(require("./services/customerservice"));
let customerService = new customerservice_1.default();
// for (let customer of customerService) {
//     console.log(customer.toString());
// }
let searchString1 = 'wind';
let searchString2 = 'ri';
// let getCustomersPromise1 = customerService.getCustomers(searchString1);
// let getCustomersPromise2 = customerService.getCustomers(searchString2);
// Promise.all([getCustomersPromise1, getCustomersPromise2])
//     .then(
//         results => {
//             console.log(`Promise 1 Result for ${searchString1} : ${results[0].length}`);
//             console.log(`Promise 2 Result for ${searchString2} : ${results[1].length}`);
//             console.info('I want this line to be printed only after both promised successfully completed!');
//         },
//         error => {
//             console.log('Error occurred in One of the promises, details ... ' + JSON.stringify(error));
//         });
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let searchPromise1 = customerService.getCustomers(searchString1);
            let searchPromise2 = customerService.getCustomers(searchString2);
            searchPromise1.catch(error => console.log('Promise 1 Specific Error Handling ...'));
            let combinedPromise = Promise.all([searchPromise1, searchPromise2]);
            let results = yield combinedPromise;
            console.log(`Search Results 1 ${searchString1} : ${results[0].length}`);
            console.log(`Search Results 2 ${searchString2} : ${results[1].length}`);
            console.log('This line would be printed only after all promises have been completed!');
        }
        catch (error) {
            console.log('Error Occurred in Processing ... Details : ' + JSON.stringify(error));
        }
    });
})();
//# sourceMappingURL=index.js.map
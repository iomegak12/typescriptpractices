import Customer from '../models/customer';
import ICustomerService from './customerservice.interface';

const DEFAULT_TIMEOUT: number = 3000;
const FOUND_INDEX_POS = 0;
const MIN_SEARCH_LENGTH = 3;
const MAX_SEARCH_LENGTH = 10;

class CustomerService implements ICustomerService {
    private customers: Customer[] = [];

    constructor() {
        this.customers =
            [
                new Customer(11, 'Northwind', 'Bangalore', 12000, true, 'Simple Record'),
                new Customer(12, 'Southwind', 'Bangalore', 12000, true, 'Simple Record'),
                new Customer(13, 'Westwind', 'Bangalore', 12000, true, 'Simple Record'),
                new Customer(14, 'Eastwind', 'Hassan', 22000, true, 'Simple Record'),
                new Customer(15, 'Oxyrich', 'Mysore', 32000, false, 'Simple Record')
            ];
    }

    *[Symbol.iterator]() {
        for (let customer of this.customers) {
            if (customer) {
                yield customer;
            }
        }
    }

    getCustomers(customerName?: string): Promise<Customer[]> {
        let promise = new Promise<Customer[]>(
            (resolve, reject) => {
                setTimeout(() => {
                    if (!customerName)
                        resolve(this.customers);
                    else {
                        let validation = customerName.length >= MIN_SEARCH_LENGTH &&
                            customerName.length <= MAX_SEARCH_LENGTH;

                        if (!validation)
                            reject(validation);

                        let filteredCustomers = this.customers.filter(
                            customer => customer.name.indexOf(customerName) >= FOUND_INDEX_POS);

                        resolve(filteredCustomers);
                    }
                }, DEFAULT_TIMEOUT);
            });

        return promise;
    }
}

export default CustomerService;

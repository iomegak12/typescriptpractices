import Customer from '../models/customer';

interface ICustomerService {
    getCustomers(customerName?: string): Promise<Customer[]>;
}

export default ICustomerService;

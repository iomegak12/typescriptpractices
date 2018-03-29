import Customer from './customer';

class InternetCustomer extends Customer {
    constructor(public id: number, public name: string,
        public address: string, public credit: number,
        public status: boolean, public remarks: string, public blogUrl: string) {
        super(id, name, address, credit, status, remarks);
    }

    toString(): string {
        return `${super.toString()}, ${this.blogUrl}`;
    }
}

export default InternetCustomer;

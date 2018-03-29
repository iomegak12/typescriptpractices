const DELIMITER: string = ',';
const INVALID_ARGUMENTS: string = "Invalid Argument(s) Specified!";

class Customer {
    constructor(public id: number, public name: string,
        public address: string, public credit: number,
        public status: boolean, public remarks: string) { }

    toString(): string {
        let formattedMessage: string =
            `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}, ${this.remarks}`;

        return formattedMessage;
    }

    static create(csvString: string): Customer {
        if (!csvString)
            throw new Error(INVALID_ARGUMENTS);

        let splittedString = csvString.split(DELIMITER);
        let customer = new Customer(
            parseInt(splittedString[0]),
            splittedString[1], splittedString[2],
            parseInt(splittedString[3]), <any> splittedString[4], splittedString[5]);

        return customer;
    }
}

export default Customer;

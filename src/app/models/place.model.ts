export class place {

    name: string;
    address_number: number;
    address_street: string;
    address_postcode: number;
    address_city: string;
    type: string;
    mark: number;
    description: string;
    price_min: number;
    price_max: number;
    author: string;

    constructor(name: string, address_number: number, address_street: string, address_postcode: number,
        address_city: string, type: string, mark: number, description: string,
        price_min: number, price_max: number, author: string) {
        this.name = name;
        this.address_number = address_number;
        this.address_street = address_street;
        this.address_postcode = address_postcode;
        this.address_city = address_city;
        this.type = type;
        this.mark = mark;
        this.description = description;
        this.price_min = price_min;
        this.price_max = price_max;
        this.author = author;
        }
}
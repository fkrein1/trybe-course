class Client {
  constructor(public name: string) {}
}

class OrderItem {
  constructor(public name: string, public price: number) {}
}

class Order {
  constructor(
    public client: string,
    public orderItems: { name: string; price: number }[],
    public paymentType: 'credit' | 'cash' | 'debit',
    public discount: number,
  ) {}

  grossOrder() {
    return this.orderItems.reduce((acc, cur) => acc + cur.price, 0);
  }

  netOrder() {
    return this.grossOrder() * (1 - this.discount);
  }
}

const rafael = new Client('Rafael');
const burguer = new OrderItem('Burguer', 30)
const fries = new OrderItem('Fries', 10)
const shake = new OrderItem('Shake', 14)

const rafaelOrder = new Order(rafael.name, [burguer, fries, shake], 'cash', 0.1)

console.log(rafaelOrder.grossOrder())
console.log(rafaelOrder.netOrder())
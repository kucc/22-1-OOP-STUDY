import Ticket from './ticket';

class TicketOffice {
  #amount: number;
  #tickets: Array<Ticket>;

  constructor(amount: number, tickets: Array<Ticket>) {
    this.#amount = amount;
    this.#tickets = tickets;
  }

  getTicket() {
    const ticket = this.#tickets.shift();

    if (!ticket) throw Error();
    return ticket;
  }

  minusAmount(amount: number) {
    this.#amount -= amount;
  }

  plusAmount(amount: number) {
    this.#amount += amount;
  }
}

export default TicketOffice;

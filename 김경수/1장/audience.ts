import Bag from './bag';
import Ticket from './ticket';

class Audience {
  #bag: Bag;

  constructor(bag: Bag) {
    this.#bag = bag;
  }

  buy(ticket: Ticket) {
    if (this.#bag.hasInvitation()) {
      this.#bag.setTicket(ticket);
      return 0;
    }
    this.#bag.setTicket(ticket);
    this.#bag.minusAmount(ticket.getFee());
    return ticket.getFee();
  }
}

export default Audience;

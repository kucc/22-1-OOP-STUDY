import Invitation from './invitation';
import Ticket from './ticket';

class Bag {
  #amount: number;
  #invitation: Invitation | null;
  #ticket: Ticket | null;

  constructor(invitation: Invitation | null, amount: number) {
    this.#invitation = invitation;
    this.#amount = amount;
    this.#ticket = null;
  }

  hasInvitation() {
    return this.#invitation !== null;
  }

  hasTicket() {
    return this.#ticket !== null;
  }

  setTicket(ticket: Ticket) {
    this.#ticket = ticket;
  }

  minusAmount(amount: number) {
    this.#amount -= amount;
  }

  plusAmount(amount: number) {
    this.#amount += amount;
  }
}

export default Bag;

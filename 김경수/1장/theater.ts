import Audience from './audience';
import TicketSeller from './ticketSeller';

class Theater {
  #ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.#ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    this.#ticketSeller.sellTo(audience);
  }
}

export default Theater;

import Audience from './audience';
import TicketOffice from './ticketOffice';

class TicketSeller {
  #ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.#ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience) {
    const ticketPrice = audience.buy(this.#ticketOffice.getTicket());
    this.#ticketOffice.plusAmount(ticketPrice);
  }
}

export default TicketSeller;

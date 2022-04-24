class Ticket {
  #fee: number;

  constructor(fee: number) {
    this.#fee = fee;
  }

  getFee() {
    return this.#fee;
  }
}

export default Ticket;

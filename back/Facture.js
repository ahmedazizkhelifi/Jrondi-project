"use strict";
const db = require("./db.js");

module.exports = class Facture {
  #idFacture;
  #montantFacture;
  #montantRemise;
  #dateFacture;
  #active;

  constructor(id, montantR, montantF, dateF, active) {
    this.#idFacture = id;
    this.#montantFacture = montantF;
    this.#montantRemise = montantR;
    this.#dateFacture = dateF;
    this.#active = active;
  }

  Facture() {
    console.log(";;;");
  }

  create() {
    db.createFacture(this);
  }

  static async getAll() {
    return await db.getFactures();
  }
  // ===================

  getId() {
    return this.#idFacture;
  }

  getMontantFacture() {
    return this.#montantFacture;
  }
  getMontantRemise() {
    return this.#montantRemise;
  }
  getDateFacture() {
    return this.#dateFacture;
  }
  getActive() {
    return this.#active;
  }

  setId(id) {
    this.#idFacture = id;
  }

  setMontantFacture(m) {
    this.#montantFacture = m;
  }
  setMontantRemise(m) {
    this.#montantRemise = m;
  }
  setDateFacture(d) {
    this.#dateFacture = d;
  }
  setActive(a) {
    this.#active = a;
  }
};

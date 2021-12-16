/* const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected"))
  .catch((err) => console.log("err", err));

const factureSchema = new mongoose.Schema({
  id: Number,
  montant: Number,
  remise: Number,
  date: { type: Date, default: Date.now },
  active: Boolean,
});

const Facture = mongoose.model("Facture", factureSchema);

let db = {};

db.createFacture = async function (object) {
  const facture = new Facture({
    id: object.getId(),
    montant: object.getMontantFacture(),
    remise: object.getMontantRemise(),
    date: object.getDateFacture(),
    active: object.getActive(),
  });

  const result = await facture.save();
  console.log(result);
};

db.getFactures = async function () {
  const factures = await Facture.find();
  // .find ( {price: { $gt: 10}} ) >> traja3 price greater than 10
  // .find({id: 5})>> traja3 id = 5
  // .or([ {date : new Date (3000,1,1)}, {active: true}])
  // .limit
  // .sort({ montant : 1}) >>>> 1: asc, -1: dsc
  // .select ({id :1, date: 1}) >>> select only lhajet eli nhebou alehom
  //console.log(factures);
  return factures;
};
//createFacture();
//getFactures();
module.exports = db;
 */

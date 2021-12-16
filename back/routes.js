const express = require("express");
// const Facture = require("./Facture.js");
const mongoose = require("mongoose");
const Facture = require("./Facture.js");

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
const Factures = mongoose.model("Facture", factureSchema);

const router = express.Router();

// get by id
router.get("/factures/:id", async (req, res) => {
  try {
    Factures.find({ id: req.params.id }).then((r) => {
      return res.json(r);
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/factures", async (req, res) => {
  try {
    Factures.find().then((r) => {
      L = [];
      console.log("done");
      r.forEach((x) =>
        L.push({
          id: x.id,
          montant: x.montant,
          remise: x.remise,
          date: x.date,
          active: x.active,
        }),
      );
      return res.json(L);
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/factures", async (req, res) => {
  Factures.find({ id: req.body.id }).then((r) => {
    if (r.length != 0) {
      res.status(404).json("Facture exist!");
      return;
    } else {
      const facture = new Factures({
        id: req.body.id,
        montant: req.body.montant,
        remise: req.body.remise,
        date: req.body.date,
        active: req.body.active,
      });
      try {
        const result = /* await */ facture.save();
        res.json(result);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
    }
  });

  // check id not exist in document
});

router.put("/factures/:id", async (req, res) => {
  try {
    await Factures.find({ id: req.params.id }).then((r) => {
      if (r.length == 0) return res.json("Facture n'exsite pas!");
      else {
        Factures.findOneAndUpdate(
          { id: req.params.id },
          {
            $set: {
              montant: req.body.montant,
              remise: req.body.remise,
              date: req.body.date,
              active: req.body.active,
            },
          },
          {
            upsert: false,
            new: true,
          },
          (err, doc) => {
            if (err) {
              console.log("Something wrong when updating data!");
            }

            console.log(doc);
          },
        );
        return res.json("Changement done");
      }
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/factures/:id", async (req, res) => {
  try {
    Factures.deleteOne({ id: req.params.id }).then((r) => {
      return res.json(r);
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;

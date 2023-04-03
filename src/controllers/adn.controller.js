import db from "../model/index.js";
import mutationFunc from "../utils/mutation.js";
const ADN = db.Cadena;

// Guardar una Cadena nueva
const CreateCadena = (req, res) => {
  // Validar request
  if (!req.body.dna) {
    return { status: 400, message: "Se requiere un adn" };
  }
  // Crea una Cadena
  const adn = {
    adn: JSON.parse(req.body.dna),
  };
  // Save ADN in the database
  ADN.create(adn)
    .then((data) => {
      if (mutationFunc(adn.adn)) {
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algo salio mal durante la creacion",
      });
    });
};

// Retrieve all ADNs from the database.
const GetCadenas = (req, res) => {
  const result = {
    count_mutations: 0,
    count_no_mutations: 0,
    ratio: 0,
  };
  ADN.findAll({
    attributes: ["adn"],
  })
    .then((data) => {
      data.forEach((dna) => {
        if (mutationFunc(dna.adn)) {
          result.count_mutations++;
        } else {
          result.count_no_mutation++;
        }
      });

      result.ratio =
        result.count_no_mutations !== 0
          ? result.count_mutations / result.count_no_mutations
          : 1;
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algo salio mal durante el fetch",
      });
    });
};

export default { CreateCadena, GetCadenas };

const CadenaModel = (sequelize, Sequelize) => {
    const Cadena = sequelize.define("cadena", {
      adn: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      } 
    });
  
    return Cadena;
  };

export default CadenaModel;
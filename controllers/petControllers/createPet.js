const { PersonRegister, Address, Contact, Role, Pet, Patient, Cage, Treatment, Medication, PatientsDailyChart } = require("../../db/models/modelSequelize")



async function createPet(req, res) {
  const { name, species, breed, color, weight, sex, age, photo, behavior, neurologicalDisorders, notes, cpf } = req.body;

  try {
    formatarcpf(cpf)
    const newPet = await Pet.create({
      name,
      species,
      breed,
      color,
      weight,
      sex,
      age,
      photo,
      behavior,
      neurologicalDisorders,
      notes
    });

    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar um novo pet.' + error });
  }
};

module.exports = {
  createPet
}
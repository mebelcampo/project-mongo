const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  estado: { type: String, enum: ['pendiente', 'en progreso', 'finalizado'], default: 'pendiente' }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);

const db = require('./db');

// 1. Listar nombre, apellido y teléfono de todos los pacientes
function getTelefonos() {
  const query = `SELECT nombre, apellido, telefono FROM paciente`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error en getTelefonos:', err.message);
      return;
    }
    console.log('Listado de teléfonos:');
    console.table(results);
  });
}

// 2. Buscar teléfono de un paciente por número de historial
function getTelefonoPaciente(numero_historial) {
  const query = `SELECT telefono FROM paciente WHERE nro_historial_clinico = ?`;
  db.query(query, [numero_historial], (err, results) => {
    if (err) {
      console.error('Error en getTelefonoPaciente:', err.message);
      return;
    }
    if (results.length === 0) {
      console.log(`No se encontró paciente con historial ${numero_historial}`);
    } else {
      console.log(`Teléfono del paciente ${numero_historial}:`, results[0].telefono);
    }
  });
}

// 3. Buscar médicos que atendieron a un paciente (INNER JOIN)

function getMedicosPaciente(numero_historial) {
  const query = `
    SELECT DISTINCT m.nombre AS nombre_medico, m.apellido AS apellido_medico
    FROM ingreso i
    INNER JOIN medico m ON i.matricula_medico = m.matricula
    WHERE i.nro_historial_paciente = ?
  `;
  db.query(query, [numero_historial], (err, results) => {
    if (err) {
      console.error('Error en getMedicosPaciente:', err.message);
      return;
    }
    if (results.length === 0) {
      console.log(`El paciente ${numero_historial} no tiene médicos registrados.`);
    } else {
      console.log(`Médicos que atendieron al paciente ${numero_historial}:`);
      console.table(results);
    }
  });
}


// 🔍 Elegí una función para probar:
//getTelefonos();
//getTelefonoPaciente(675);
getMedicosPaciente(675);


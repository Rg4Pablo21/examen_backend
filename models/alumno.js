const db = require('../src/db');

class Alumno {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM alumnos');
        return rows;
    }

    static async create(nombre, correo) {
        const [result] = await db.query('INSERT INTO alumnos (nombre, correo) VALUES (?, ?)', [nombre, correo]);
        return result.insertId;
    }

    static async delete(id) {
        await db.query('DELETE FROM alumnos WHERE id = ?', [id]);
    }
}

module.exports = Alumno;

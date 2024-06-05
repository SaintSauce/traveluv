const pool = require('../db');

class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    static async findByUsername(username) {
        try {
            const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
            if (result.rows.length > 0) {
                const { id, username, password } = result.rows[0];
                return new User(id, username, password);
            }
            return null;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async save() {
        try {
            const result = await pool.query(
                'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
                [this.username, this.password]
            );
            this.id = result.rows[0].id;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async findById(id) {
        try {
            const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            if (result.rows.length > 0) {
                const { id, username, password } = result.rows[0];
                return new User(id, username, password);
            }
            return null;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    toJSON() {
        return {
            id: this.id,
            username: this.username
        };
    }
}

module.exports = User;
console.log('process.env.DATABASE_URL == ', process.env.DATABASE_URL)

module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false },
    "migrations": ["src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entities": "src/model"
    }
}
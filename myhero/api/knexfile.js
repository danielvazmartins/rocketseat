module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './database/myhero.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './database/migrations'
		}
	}
};
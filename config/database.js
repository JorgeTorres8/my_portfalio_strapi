require('dotenv')

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mysql',
      settings: {
        host: env('DATABASE_HOST', process.env.DB_HOST),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', process.env.DB_PORT),
        database: env('DATABASE_NAME', process.env.DB_NAME),
        username: env('DATABASE_USERNAME', process.env.DB_USERNAME),
        password: env('DATABASE_PASSWORD', process.env.DB_PASSWORD),
      },
      //options: {
        //authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        //ssl: env.bool('DATABASE_SSL', true),
      //},
    },
  },
});

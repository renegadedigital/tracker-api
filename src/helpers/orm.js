import Sequelize from 'sequelize'

import config from '../config/config.json'

const { database, dialect, host, password, port, username } = config.development


export const orm = new Sequelize(database, username, password, { host, dialect, define: { freezeTableName: true } })
export const connected = orm.authenticate()
export default orm

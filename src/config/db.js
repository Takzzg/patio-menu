import faunadb from 'faunadb'
const client = new faunadb.Client({
    secret: process.env.DB_KEY,
    domain: 'db.eu.fauna.com',
    scheme: 'https',
})
const q = faunadb.query
export { client, q }

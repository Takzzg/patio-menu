import { client, q } from '../config/db'

export const getAllCarritos = client
    .query(q.Paginate(q.Match(q.Ref('indexes/carritos_details'))))
    .then((response) => {
        const carritoRef = response.data
        const getAllDataQuery = carritoRef.map((ref) => {
            return q.Get(ref)
        })
        return client.query(getAllDataQuery).then((data) => data)
    })
    .catch((error) => console.error('Error: ', error.message))

export const createCarritoItem = (nombre) =>
    client
        .query(
            q.Create(q.Collection('carritos'), {
                data: {
                    nombre,
                    desc: `descripcion ${nombre}`,
                },
            })
        )
        .then((ret) => ret)
        .catch((error) => console.error('Error: ', error.message))

export const deleteCarritoItem = (carritoId) =>
    client
        .query(q.Delete(q.Ref(q.Collection('carritos'), carritoId)))
        .then((ret) => ret)
        .catch((error) => console.error('Error: ', error.message))

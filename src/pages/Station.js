export default Station = {
    nombre: 'Station',
    foto: '',
    desc: 'Panchos y Ciabatta',
    userInsta: '',
    idFace: '',
    numWpp: '',
    carta: {
        principales: [
            {
                id: 0,
                nombre: 'Pancho 1',
                foto: '',
                desc: 'Descripcion pancho 1',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Pancho 2',
                foto: '',
                desc: 'Descripcion pancho 2',
                precio: '$$$$',
            },
            {
                id: 2,
                nombre: 'Ciabatta',
                foto: '',
                desc: 'Descripcion ciabatta',
                precio: '$$$$',
            },
        ],
        acompañamientos: [
            {
                id: 0,
                nombre: 'Papas 1',
                foto: '',
                desc: 'Descripcion papas 1',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Papas 2',
                foto: '',
                desc: 'Descripcion papas 2',
                precio: '$$$$',
            },
        ],
        bebidas: [shared.gaseosas, shared.agua_mineral],
    },
}

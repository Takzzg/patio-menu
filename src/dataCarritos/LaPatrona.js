const photos = {
    logo: '../images/LaPatrona/logo.jpeg',
}

const LaPatrona = {
    nombre: 'La Patrona',
    foto: photos.logo,
    desc: 'Comida Mexicana',
    userInsta: '',
    idFace: '',
    numWpp: '',
    carta: {
        tacos: [
            {
                id: 0,
                nombre: 'Carne',
                foto: '',
                desc: 'Descripcion tacos carne',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Veggie',
                foto: '',
                desc: 'Descripcion tacos veggie',
                precio: '$$$$',
            },
            {
                id: 2,
                nombre: 'Quesadillas',
                foto: '',
                desc: 'Descripcion quesadillas',
                precio: '$$$$',
            },
        ],
        acompañamientos: [
            {
                id: 0,
                nombre: 'Nachos',
                foto: '',
                desc: 'Descripcion nachos',
                precio: '$$$$',
            },
        ],
    },
}

export default LaPatrona

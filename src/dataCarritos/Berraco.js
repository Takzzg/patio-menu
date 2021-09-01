const photos = {
    logo: '../images/Berraco/logo.jpeg',
    veggie: ' ../images/Berraco/veggie.jpeg',
    veggieRecortada: ' ../images/Berraco/veggieRecortada.jpeg',
    milanesa: '../images/Berraco/milanesa.jpeg',
    milanesaRecortada: '../images/Berraco/milanesaRecortada.jpeg',
    lomito: '../images/Berraco/lomito.jpeg',
    lomitoRecortado: '../images/Berraco/lomitoRecortado.jpeg',
    papasFritas: '../images/Berraco/papasFritas.jpeg',
}

const Berraco = {
    nombre: 'Berraco',
    foto: photos.logo,
    desc: 'Lomitos y Milanesas',
    userInsta: '',
    idFace: '',
    numWpp: '',
    carta: {
        lomitos: [
            {
                id: 0,
                nombre: 'Lomito Simple',
                foto: photos.lomito,
                desc: 'Pan artesanal, Carne vacuna, Queso, Tomate, Lechuga y Papas Fritas. Aderezos a elección',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Lomito Full',
                foto: photos.lomitoRecortado,
                desc: 'Pan artesanal, Carne vacuna, Queso, Jamón, Tomate, Lechuga, Huevo y Papas Fritas. Aderezos a elección',
                precio: '$$$$',
            },
        ],
        milanesas: [
            {
                id: 0,
                nombre: 'Sandwich Milanesa simple',
                foto: photos.milanesa,
                desc: 'Pan artesanal, Milanesa de ternera, Queso, Jamón, Tomate, Lechuga y Papas Fritas. Aderezos a elección',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Sandwich Milanesa Full',
                foto: photos.milanesaRecortada,
                desc: 'Pan artesanal, Milanesa de ternera, Queso, Jamón, Tomate, Lechuga, Huevo y Papas fritas. Aderezos a elección',
                precio: '$$$$',
            },
        ],
        veggie: [
            {
                id: 0,
                nombre: 'Sandwich Veggie',
                foto: photos.veggieRecortada,
                desc: 'Pan Integral, Milanesa de Garbanzo, Queso, Palta, Berenjena, Tomate, Lechuga y Mayonesa vegetal de Zanahoria y Calabaza',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Opcional Vegano',
                foto: '',
                desc: 'Sandwich Veggie opcional vegano ',
                precio: '$$$$',
            },
            {
                id: 2,
                nombre: 'Adicional Huevo',
                foto: '',
                desc: 'Sandwich Veggie adicional huevo',
                precio: '$$$$',
            },
            {
                id: 3,
                nombre: 'Adicional Papas',
                foto: '',
                desc: 'Sandwich Veggie adicional papas',
                precio: '$$$$',
            },
        ],
        papas_fritas: [
            {
                id: 0,
                nombre: 'Cono',
                foto: photos.papasFritas,
                desc: 'Cono de papas',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Bandeja',
                foto: photos.papasFritas,
                desc: 'Bandeja de papas',
                precio: '$$$$',
            },
            {
                id: 2,
                nombre: 'Bandeja Salseada',
                foto: photos.papasFritas,
                desc: 'Cheddar, Bacon y Verdeo',
                precio: '$$$$',
            },
        ],
        bebidas: [
            {
                id: 2,
                nombre: 'Fernet Cola',
                foto: '',
                desc: 'Fernet branca con cola',
                precio: '$$$$',
            },
        ],
    },
}

export default Berraco

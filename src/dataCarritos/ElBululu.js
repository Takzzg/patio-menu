const photos = {
    logo: '../images/ElBululu/logo.jpeg',
    arepas1: '../images/ElBululu/arepas1.jpeg',
    arepas2: '../images/ElBululu/arepas2.jpeg',
    arepas3: '../images/ElBululu/arepas3.jpeg',
    tequeños1: '../images/ElBululu/tequeños1.jpeg',
    tequeños2: '../images/ElBululu/tequeños2.jpeg',
}

const ElBululu = {
    nombre: 'El Bululu',
    foto: photos.logo,
    desc: `Comida Venezolana y Helado Soft`,
    userInsta: 'elbululu.ve',
    idFace: '',
    numWpp: [5492664848269, 5491154579188],
    carta: {
        arepas: [
            {
                id: 0,
                nombre: 'Mechada',
                foto: photos.arepas1,
                desc: 'Arepa hecha con harina de maíz sin TACC, con relleno de carne desmenuzada con queso',
                precio: '$$$$$$',
            },
            {
                id: 1,
                nombre: 'Reina pepiada',
                foto: photos.arepas2,
                desc: 'Arepa hecha con harina de maíz sin TACC, con relleno de pollo desmenuzado con aderezo de palta y queso',
                precio: '$$$$$$',
            },
            {
                id: 2,
                nombre: 'Pollo al Grill',
                foto: photos.arepas3,
                desc: 'Arepa hecha con harina de maíz sin TACC, con relleno de pollo a la plancha con jamón y queso',
                precio: '$$$$$$',
            },
            {
                id: 3,
                nombre: 'Veggie',
                foto: photos.arepas1,
                desc: 'Arepa hecha con harina de maíz sin TACC, con relleno de vegetales salteados y queso',
                precio: '$$$$$$',
            },
        ],
        tequeños: [
            {
                id: 0,
                nombre: 'Queso',
                foto: photos.tequeños1,
                desc: 'deditos de queso blanco envueltos en harina de trigo',
                precio: '$$$$$$',
            },
            {
                id: 1,
                nombre: 'Chocolate',
                foto: photos.tequeños2,
                desc: 'deditos de chocolate envueltos en harina de trigo',
                precio: '$$$$$$',
            },
        ],
    },
}

export default ElBululu

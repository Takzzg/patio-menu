const photos = {
    logo: '../images/Sapore/logo.jpeg',
    raviolones1: '../images/Sapore/raviolones1.jpeg',
    raviolones2: '../images/Sapore/raviolones2.jpeg',
    sorrentinos1: '../images/Sapore/sorrentinos1.jpeg',
    sorrentinos2: '../images/Sapore/sorrentinos2.jpeg',
    sorrentinos3: '../images/Sapore/sorrentinos3.jpeg',
    sorrentinos4: '../images/Sapore/sorrentinos4.jpeg',
    tallarines: '../images/Sapore/tallarines.jpeg',
    ñoquisTricolor: '../images/Sapore/ñoquisTricolor.jpeg',
    vino: '../images/Sapore/vino.png',
}

const Sapore = {
    nombre: 'Sapore Di Famiglia',
    foto: photos.logo,
    desc: 'Pastas Caseras',
    userInsta: '_saporedifamiglia_',
    idFace: '',
    numWpp: [5492664020989, 5492664173795],
    carta: {
        sorrentinos: [
            {
                id: 0,
                nombre: 'Muzarella y jamon',
                foto: photos.sorrentinos1,
                desc: 'Sorrentinos de Muzarella y jamon',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Muzarella, tomate y albahaca',
                foto: photos.sorrentinos2,
                desc: 'Sorrentinos de Muzarella, tomate y albahaca',
                precio: '$$$$',
            },
            {
                id: 2,
                nombre: 'Muzarella y cantimpalo',
                foto: photos.sorrentinos3,
                desc: 'Sorrentinos de Muzarella y cantimpalo',
                precio: '$$$$',
            },
            {
                id: 3,
                nombre: 'Muzarella, rucula y jamon crudo',
                foto: photos.sorrentinos4,
                desc: 'Sorrentinos de Muzarella, rucula y jamon crudo',
                precio: '$$$$',
            },
        ],
        raviolones: [
            {
                id: 0,
                nombre: 'Muzarella, verdeo y panceta',
                foto: photos.raviolones1,
                desc: 'Raviolones de Muzarella, verdeo y panceta',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Cuatro quesos',
                foto: photos.raviolones2,
                desc: 'Raviolones de Cuatro quesos',
                precio: '$$$$',
            },
        ],
        ñoquis: [
            {
                id: 0,
                nombre: 'De papa',
                foto: photos.ñoquisTricolor,
                desc: 'Ñoquis de papa',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Tricolor',
                foto: photos.ñoquisTricolor,
                desc: 'Ñoquis tricolor',
                precio: '$$$$',
            },
        ],
        tallarines: [
            {
                id: 0,
                nombre: 'Tallarines',
                foto: photos.tallarines,
                desc: 'Tallarines',
                precio: '$$$$',
            },
        ],
        salsas: [
            {
                id: 0,
                nombre: 'Salsa 1',
                foto: photos.sorrentinos1,
                desc: 'Descripcion salsa 1',
                precio: '$$$$',
            },
            {
                id: 1,
                nombre: 'Salsa 2',
                foto: photos.sorrentinos2,
                desc: 'Descripcion salsa 2',
                precio: '$$$$',
            },
        ],
        bebidas: [
            {
                id: 2,
                nombre: 'Vino 1',
                foto: photos.vino,
                desc: 'Consultar variedades',
                precio: '$$$$',
            },
        ],
    },
}

export default Sapore

import Berraco from './Berraco.js'
import BuenaFaena from './BuenaFaena.js'
import Chunkana from './Chunkana.js'
import Detuti from './Detuti.js'
import ElBululu from './ElBululu.js'
import Garinger from './Garinger.js'
import LaPatrona from './LaPatrona.js'
import Poppi from './Poppi.js'
import Sapore from './Sapore.js'
import Sativa from './Sativa.js'
import Bebidas from './Bebidas.js'

const carrLinks = {
    berraco: Berraco,
    buena_faena: BuenaFaena,
    chunkana: Chunkana,
    detuti: Detuti,
    el_bululu: ElBululu,
    garinger: Garinger,
    la_patrona: LaPatrona,
    poppi: Poppi,
    sapore: Sapore,
    sativa: Sativa,
    bebidas: Bebidas,
}

const IndexCarritos = Object.fromEntries(
    Object.entries(carrLinks).sort(([, a], [, b]) => a - b)
)

export const filterIds = (key, value) => {
    let ids = Object.keys(IndexCarritos)
    let resul = []
    for (let i = 0; i < ids.length; i++) {
        if (IndexCarritos[ids[i]][key] === value) resul.push(ids[i])
    }
    return resul
}

export default IndexCarritos

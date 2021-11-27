import { ADD_DATA, UPDATE_DATA } from "../actions/data"

const defaultState = {
    dataList: [
        {
          id: 0,
          tipo: "Terremoto",
          ubicacion: "Región de Valparaíso, Placilla, Población Las Hayas",
          necesidades: [
            {nombre: "Agua", cantidad: 100},
            {nombre: "Comida", cantidad: 100},
            {nombre: "Ropa", cantidad: 100},
            {nombre: "Refugio", cantidad: 100},
          ],
          estado: "Crítico",
          latitud: -33.120088, 
          longitud: -71.577629,
          personal: {
            nombre: "Juan",
            organizacion: "Organización 1",
            telefono: "123456789",
            correo: "juan@organizacion.com"
          },
          emergencia:{
            region: "Región de Valparaíso",
            comuna: "Placilla",
            emergencia: "Terremoto",
            direccion: "Las Hayas 123",
          }
        },
        {
          id: 1,
          tipo: "Terremoto",
          ubicacion: "Región Metropolitana, La Cisterna, Población Asturias",
          necesidades: [
            {nombre: "Agua", cantidad: 50},
            {nombre: "Comida", cantidad: 50},
            
          ],
          estado: "Crítico",
          latitud: -33.528578, 
          longitud: -70.669660,
          personal: {
            nombre: "Pedro",
            organizacion: "Organización 2",
            telefono: "111111111",
            correo: "pedro@organizacion.cl"
          },
          emergencia:{
            region: "Región Metropolitana",
            comuna: "La Cisterna",
            emergencia: "Terremoto",
            direccion: "Asturias 123",
          }
        }],
}

export default function data(state = defaultState, action) {
    switch (action.type) {
        case ADD_DATA:
            return ({
                ...state,
                dataList: [...state.dataList, action.payload]
            });
        case UPDATE_DATA:
            return ({
                ...state,
                dataList: state.dataList.map(data => {
                    if (data.id === action.payload.id) {
                        return action.payload
                    }
                    return data
                })
            });
        default:
            return state;
    }
}
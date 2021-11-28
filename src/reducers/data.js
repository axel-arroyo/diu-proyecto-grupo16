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
            region: "Valparaíso",
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
            region: "Región Metropolitana de Santiago",
            comuna: "La Cisterna",
            emergencia: "Terremoto",
            direccion: "Asturias 123",
          }
        },
        {
          id: 2,
          tipo: "Incendio",
          ubicacion: "Región Metropolitana, El Bosque, Población Los Alamos",
          necesidades: [
            {nombre: "Refugio", cantidad: 150},
            {nombre: "Ropa", cantidad: 150},
            
          ],
          estado: "Crítico",
          latitud: -33.569124, 
          longitud: -70.668678,
          personal: {
            nombre: "Diego",
            organizacion: "Organización 3",
            telefono: "2222222",
            correo: "diego@organizacion.cl"
          },
          emergencia:{
            region: "Región Metropolitana de Santiago",
            comuna: "El Bosque",
            emergencia: "Incendio",
            direccion: "Los Alamos 123",
          }
        },
        {
          id: 3,
          tipo: "Sequía",
          ubicacion: "Región de Arica y Parinacota, Arica, Población Charles Richet",
          necesidades: [
            {nombre: "Agua", cantidad: 10},
          ],
          estado: "No Crítico",
          latitud: -18.472928, 
          longitud: -70.301004,
          personal: {
            nombre: "Luis",
            organizacion: "Organización 4",
            telefono: "2222222",
            correo: "luis@organizacion.cl"
          },
          emergencia:{
            region: "Región de Arica y Parinacota",
            comuna: "Arica",
            emergencia: "Sequía",
            direccion: "Charles Richet 123",
          }
        }
      ],
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
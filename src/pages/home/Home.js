import React from 'react';
import { Button } from 'reactstrap';


export default function Home(){


    return (
        <>
        <div style={{textAlign:'center', marginTop:'10%'}}>
        <h2 style={{fontSize:'3.5rem', fontWeight:'bold', marginBottom:'5%'}}>¡Bienvenido!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis odio nec enim consequat accumsan.</p>
        <p>Sed tincidunt dui ut eros sodales luctus. Curabitur condimentum rutrum quam, eu luctus est fringilla at.</p> 
        <p>Sed lorem purus, tempus sed condimentum at, commodo vitae odio. Fusce quis efficitur est.</p>
        <p>Donec dapibus purus sed risus interdum, ut consequat enim efficitur. 
            Duis ut ligula ut magna ullamcorper consequat. Mauris ac tristique sem</p>
        <Button onClick={() => window.location.href='#step1'} color="primary" size="lg" className='mt-5 mr-5'>Ingresar emergencia</Button>
        <Button onClick={() => window.location.href='#app'} color="primary" size="lg" className='mt-5 ml-5'>Administrar ayuda</Button>
        </div>
        </>
    )
}




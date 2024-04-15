//import liraries
import React,{useState} from 'react';
import { supabase } from './createClient';

// create a component
const App = () => {
    const [users, setUsers]=useState([])
    console.log(users)
    async function fetchUsers(){
        const {data} = supabase
        .from('users')
        .select('*')
        setUsers(data)
    }


    return (
        
            <div>MyComponent</div>
        
    );
};


//make this component available to the app
export default App;

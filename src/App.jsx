//import liraries
import React,{useState} from 'react';
import {supabase} from './createClient';

// create a component
const App = () => {
    const []
    async function fetchUsers(){
        const {data} = supabase
        .from('users')
        .select('*')
    }


    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};


//make this component available to the app
export default App;

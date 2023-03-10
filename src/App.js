import Dropdown from './dropdown';
import { useState } from 'react';

function App () {

    const options = [
        {
            label: 'The color Red',
            value: 'Red',
        },
        {
            label: 'The color Blue',
            value: 'Blue'
        },

        {
            label: 'The color Green',
            value: 'Green'
        }
    ]

    const [selected, setSelected] = useState(options[0])

    return <Dropdown 
    selected={selected} 
    options={options} 
    onSelectedChange={setSelected}/>
}

export default App;
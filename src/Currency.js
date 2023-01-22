import './App.css'
import { useState } from 'react';

export default function Currency({item,addNominal}){
    const [count,setCount] = useState(item.count)
    const handleAddNominal = (nominal,count) => {
        addNominal(nominal);
        setCount(count + 1)
    }
    return (
        
        <div className='currency'>
             <img src={item.img} alt='nominal' onClick={() => handleAddNominal(item.nominal,count)} className='imgNominals' />
          x{count}
        </div>
    )
}
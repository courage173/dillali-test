import React, {useState} from 'react';
import './entriesCard.css';

const EntriesCard = ({entries}) => {
    const [active, setActive] = useState(false)
    return (
        <div className='entry-wrapper'>
            {
                entries.map((entry,index) => (
                    <div className='entry' onClick={() => setActive(index)} 
                    style={{
                        background: active === index? '#d2cdcd' : 'white'
                    }}
                    >{entry}</div>
                ))
            }
        </div>
    )
}

export default EntriesCard

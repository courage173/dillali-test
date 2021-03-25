import React from 'react';
import EntriesCard from './entriesCard';

const AppMode = () => {
    const entries = ['Entry1', 'Entry2', 'Entry3', 'Entry4', 'Entry5' ]
    return (
        <div>           
            <EntriesCard entries={entries}/>
        </div>
    )
}

export default AppMode

import React from 'react';
import EntriesCard from './entriesCard';

const AdminMode = () => {
    const entries = ['AdminEntry1', 'AdminEntry2', 'AdminEntry3']
    return (
        <div>           
            <EntriesCard entries={entries}/>
        </div>
    )
}

export default AdminMode

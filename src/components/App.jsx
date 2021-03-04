import React from 'react';
import contacts from '../contacts';
import makeCard from '../makeCard';

function App() {
  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      {contacts.map(makeCard)}
    </div>
  );
}

export default App;

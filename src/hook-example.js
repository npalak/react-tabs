//how to create Nav bar tab using react-hooks ?

import React, { useState } from 'react';

const types = ['Cash', 'Credit Card', 'Bitcoin'];
function App1() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map(type => (
          <button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}
export default App1;

// MyComponent.tsx
import React from 'react';

const BEPCInputText: React.FC = () => {
  return (
    <>
    <p className='my-1'>Insert your name here!</p>
    <input type="text" className="bepc-input-text" placeholder='Placeholder text here' name="nombre"></input>
    </>
  );
};

export default BEPCInputText;

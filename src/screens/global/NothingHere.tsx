import React from 'react';
import { Card } from 'react-daisyui';
import { IoDocument } from 'react-icons/io5';

const NothingHere = () => {
  return (
    <Card bordered className="items-center text-center">
      <IoDocument size={'50%'} style={{ color: 'hsl(var(--n))' }} />
      <p style={{ color: 'hsl(var(--n))', fontSize: '2rem' }}>No files added</p>
    </Card>
  );
};

export default NothingHere;

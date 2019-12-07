import React, { useState } from 'react';
import Button from '../Button';

import './styles.scss';

const Subscribe = props => {
  const { onSubmit } = props;
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // onSubmit(email);
  }

  return (
    <form onSubmit={handleSubmit} className="subscribe">
      <input
        value={email}
        placeholder='Enter your email'
        onChange={e => setEmail(e.target.value)}
      />
      <Button type="submit" className="subscribe__button">Subscribe</Button>
    </form>
  );
};

export default Subscribe;

import React from 'react';
import NumberFormat from 'react-number-format';

// eslint-disable-next-line react/prop-types
const Price = ({ value }) => (
  <div>
    <NumberFormat
      value={value}
      displayType="text"
      thousandSeparator
      prefix="$"
    />
    .00
  </div>
);

export default Price;

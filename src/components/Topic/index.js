import React from 'react';
import Price from '../Price';
import { Text, Box } from './styles';

// eslint-disable-next-line react/prop-types
const Topic = ({ name, valor }) => (
  <Box>
    <Text>{name}</Text>
    <Price value={valor} />
  </Box>
);

export default Topic;

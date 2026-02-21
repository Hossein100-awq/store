import React from 'react';
import ListProduct from '../Component/ShowList/ListProduct';
import Container from '../Component/Container';

interface ListProps {
  searchQuery: string;
}

export default function List({ searchQuery }: ListProps) {
  return <Container>
    <ListProduct searchQuery={searchQuery} />
  </Container>;
}
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryCard from '../ui/CategoryCard';

export default function MainPage() {
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    try {
      const res = await fetch('/api/categories');
      if (res.status === 200) {
        const result = await res.json();
        setCategories(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  // useEffect(() => {
  //     fetch('/api/categories')
  //       .then((res) => res.json())
  //       .then((data) => setCategories(data));
  //   }, []);

  return (
    <Container className="d-flex justify-content-center">
      {categories.map((el) => (
        <Row key={el.id}>
          <Col xs="4">
            <CategoryCard category={el} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CategoryCard from '../ui/CategoryCard';

export default function MainPage() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/api/categories')
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);

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
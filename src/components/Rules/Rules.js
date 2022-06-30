import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Rules.css';

const Rules = () => {
  return (
    <Container className="rules">
      <Row>
        <p>
          <button disabled>
            You have to guess the Word in <b>six</b> goes or less.
          </button>
        </p>
        <p>
          <button disabled>
            A correct letter turns{' '}
            <span style={{ color: '#79b851', fontWeight: '700' }}>GREEN</span>.
          </button>
        </p>
        <p>
          <button disabled>
            A correct letter in the wrong place turns{' '}
            <span style={{ color: '#f3c237', fontWeight: '700' }}>YELLOW</span>.
          </button>
        </p>
        <p>
          <button disabled>
            An incorrect letter turns{' '}
            <span style={{ color: '#a4aec4', fontWeight: '700' }}>GRAY</span>.
          </button>
        </p>
        <p>
          <button disabled>Letters can be used more than once.</button>
        </p>
        <p>
          <button disabled>Answers are never plurals.</button>
        </p>
      </Row>
    </Container>
  );
};

export default Rules;

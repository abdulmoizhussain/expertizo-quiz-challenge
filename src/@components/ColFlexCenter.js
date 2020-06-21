import React from 'react';
import { Col } from 'reactstrap';

export default function ColFlexCenter({ children }) {
  return <Col className="d-flex justify-content-center">{children}</Col>;
}

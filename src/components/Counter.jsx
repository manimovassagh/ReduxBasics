import React from "react";
import { Card, Button, Alert, Badge } from "react-bootstrap";

const Counter = props => {
    return (
        <Card bg="secondary" className="mx-auto w-50">
            <Card.Body className="mx-auto">
                <Alert variant="info">
                    شمارش :{" "}
                    <Badge pill variant="success">
                        0
                    </Badge>
                </Alert>
                <Button variant="danger" className="fa fa-plus m-2" />
                <Button variant="danger" className="fa fa-minus m-2" />
            </Card.Body>
        </Card>
    );
};

export default Counter;

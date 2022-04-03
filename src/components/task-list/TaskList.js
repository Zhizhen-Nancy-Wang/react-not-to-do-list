import React from "react";
import { Form, Table, Button } from "react-bootstrap";

export const TaskList = () => {
  return (
    <div>
      <Table striped hover>
        <tbody>
          <h2 className="text-center bg-warning">Task List</h2>
          <hr />
          <tr className="bg-light">
            <td>
              <Form.Check type="checkbox" label="" />
            </td>

            <td>task</td>
            <td>hr</td>
            <td className="text-end">
              <Button variant="danger">
                <i className="fa-solid fa-trash-can"></i>
              </Button>{" "}
              <Button variant="primary">
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

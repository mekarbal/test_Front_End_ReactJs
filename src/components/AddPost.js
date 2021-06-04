import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/postActions";
const AddPost = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addNewPost = async (e) => {
    e.preventDefault();
    console.log(title, body);
    dispatch(addPost(title, body));
    setShow(false);
    setBody("");
    setTitle("");
  };
  return (
    <>
      <Button
        variant="success"
        className="btn-block font-weight-bold"
        style={{
          marginLeft: "-33px",
          border: "2px solid green",
        }}
        onClick={handleShow}
      >
        New Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addNewPost}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPost;

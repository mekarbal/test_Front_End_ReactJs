import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Modal, Button } from "react-bootstrap";
import AddPost from "./AddPost";
import Loader from "./Loader";
import Message from "./Message";
import Post from "./Post";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sPost, setPost] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  let [data, setDAta] = useState();
  const handleClose = () => setShow(false);

  const getAllDAta = async () => {
    setLoading(true);
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setLoading(false);
        const items = response.data.slice(0, 16);
        setDAta(items);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  if (search.length > 0) {
    data = data.filter((i) => {
      return i.title.match(search);
    });
  }
  const getPostById = (id) => {
    setShow(true);
    const post = data.find((item) => item.id === id);
    setPost(post);
  };

  const UpdatePost = (id) => {
    const post = data.find((item) => item.id === id);
    post.title = newTitle;
    setShow(false);
    setNewTitle("");
  };

  const deletePost = (id) => {
    data = data.filter((item) => {
      return item.id !== id;
    });
    setDAta(data);
  };

  useEffect(() => {
    getAllDAta();
  }, []);
  return (
    <>
      <Container>
        {error && <Message variant="danger">{error}</Message>}
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1 className="text-success font-weight-bold text-center">
              My Blog
            </h1>
            <Row className="my-5 justify-content-center">
              <Col md={10}>
                <Form.Group controlId="name">
                  <Form.Control
                    type="name"
                    placeholder="Type in order to search"
                    style={{
                      border: "3px solid green",
                      width: "101%",
                      height: "40px",
                    }}
                    value={search}
                    onChange={handleSearchChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={2}>
                <AddPost />
              </Col>
            </Row>
            <Row>
              {data &&
                data.map((post) => (
                  <Col sm={12} md={6} lg={4} xl={3} key={post.id}>
                    <Post
                      post={post}
                      getPostById={() => getPostById(post.id)}
                      deletePost={() => deletePost(post.id)}
                    />
                  </Col>
                ))}
            </Row>
          </>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder={sPost.title}
                defaultValue={sPost.title}
                onChange={(e) => setNewTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => UpdatePost(sPost.id)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Home;

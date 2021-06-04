import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postDetails } from "../actions/postActions";
import Loader from "./Loader";
import Message from "./Message";

const SinglePost = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.postDetails);
  const { post, error, loading } = postDetail;
  useEffect(() => {
    dispatch(postDetails(id));
  }, [dispatch,id]);
  return (
    <Container>
      <Row className="justify-content-center">
        {error && <Message variant="danger">{error}</Message>}
        {loading ? (
          <Loader />
        ) : (
          <>
            <Col md={4}>
              <h1 className="text-success font-weight-bold text-center">
                {post.title}
              </h1>
            </Col>
            <Col md={8} className="mt-3">
              <h5 className="text-center">{post.body}</h5>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default SinglePost;

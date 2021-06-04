import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Post = (props) => {
  const { post, getPostById, deletePost } = props;
  return (
    <div>
      <Card
        className="my-3  rounded cardContent"
        style={{ height: "300px", backgroundColor: "#D2FCE5" }}
      >
        <Link to={`${post.id}`}></Link>
        <Card.Body className="">
          <Card.Title
            as="h1"
            style={{
              fontSize: "20px",
              color: "Black",
              fontWeight: "bold", 
              width: "101%",
            }}
            className="text-center"
          >
            {post.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "15px" }} as="div">
            {post.body.substring(0, 105)}...
          </Card.Text>
        </Card.Body>
        <Link to={`/post/${post.id}`} className="mt-5">
          <Card.Text
            as="h6"
            className="mt-5 float-right"
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              marginRight: "8px",
            }}
          >
            Read More...
          </Card.Text>
        </Link>
        <div
          as="div"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            float: "left",
          }}
        >
          <Button
            variant="success"
            style={{
              fontSize: 24,
              width: "100%",
              borderRadius: 0,
              backgroundColor: "#F6622D",
              border: 0,
            }}
            className="btn-block mt-3 font-weight-bold"
            onClick={getPostById}
          >
            Edit
          </Button>
          <Button
            variant="success"
            style={{
              fontSize: 28,
              width: "100%",
              backgroundColor: "#E5173B",
              border: 0,
              borderRadius: 0,
              marginLeft: "1px",
            }}
            className=" mt-3"
            onClick={deletePost}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Post;

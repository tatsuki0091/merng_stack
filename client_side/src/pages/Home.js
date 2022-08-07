import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";

const Home = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <Grid.Column>
          <h1>React Posts</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          data &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;

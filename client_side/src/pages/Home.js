import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_POST_QUERY } from "../util/graphql";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { AuthContext } from "../context/auth";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  console.log(data);
  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <Grid.Column>
          <h1>React Posts</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
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

export default Home;

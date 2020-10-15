import React from "react"
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
    {
        movies {
            id
            title
        }
    }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <>
        <h1> Home </h1>
    </>
  );
}

export default Home;
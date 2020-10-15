import React from "react"
import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const GET_MOVIE = gql`
  query getMovie($id: Int!) { 
      movie(id: $id) {
          id
          title
          medium_cover_image
          description_intro
      }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  console.log(id, error, loading, data);
  return (
    <>
      {id}
    </>
  );
};

export default Detail;
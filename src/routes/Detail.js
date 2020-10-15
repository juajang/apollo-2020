import React from "react"
import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import styled from 'styled-components';
import Movie from "../components/Movie";

const GET_MOVIE = gql`
  query getMovie($id: Int!) { 
      movie(id: $id) {
          title
          language
          rating
          medium_cover_image
          description_intro
      }
      suggestions(id: $id) {
          id
          medium_cover_image
      }
  }
`;

const Container = styled.div`
  height: 100vh;
  padding: 10rem;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  height: 60%;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Poster = styled.div`
  width: 280px;
  height: 400px;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

const SuggestionsTitle = styled.h2`
  color: white;
  font-size: 35px;
  margin: 3rem auto;
`
const SuggestionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  console.log(data);
  return (
    <Container>
      <MovieWrapper>
        <Column>
          <Title> {loading ? "Loading..." : data?.movie?.title} </Title>
          <Subtitle>{data?.movie?.language} {data?.movie&&"·"} {data?.movie?.rating} </Subtitle>
          <Description>{data?.movie?.description_intro}</Description>
        </Column>
        <Poster bg={data?.movie?.medium_cover_image}/>
      </MovieWrapper>
      <SuggestionsTitle> Suggestions </SuggestionsTitle>
      <SuggestionsWrapper>
        {data?.suggestions?.map(movie =>
          <Movie key={movie.id} id={movie.id} bg={movie.medium_cover_image}/>
        )}
      </SuggestionsWrapper>
    </Container>
  );
};

export default Detail;
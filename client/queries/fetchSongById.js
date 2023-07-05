import { gql } from "@apollo/client";

export default gql`
query GetSong($id: ID!){
  song(id:$id){
    id
    title
    lyrics{
      id
      content
      likes
    }
  }
}
`
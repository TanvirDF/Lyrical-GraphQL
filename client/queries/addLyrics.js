import { gql } from "@apollo/client";

export default gql`
mutation AddLyrics($content: String, $id:ID!){
  addLyricToSong(content:$content, songId: $id){
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
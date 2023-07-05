import { gql } from "@apollo/client";

export default gql`
mutation AddLike($id: ID!){
  likeLyric(id:$id){
    id
    likes
  }
}
`
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import addLyrics from '../queries/addLyrics'


const LyricCreate = ({songId:id}) => {
  const [content, setContent] = useState('')
  const [mutateFunction] = useMutation(addLyrics)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("test")
    mutateFunction({
      variables: {
        content,
        id
      }
    }).then(()=>setContent(""))
    
  }

  return (

    <form onSubmit={handleSubmit}>
      <label> Add Lyric</label>
      <input value={content} onChange={e=> setContent(e.target.value)}/>
    </form>
  )
}

export default LyricCreate;





















// import React, { useState } from "react";
// import { gql, useMutation } from "@apollo/client";

// const mutation = gql`
//   mutation AddLyric($id: ID!, $content: String!) {
//     addLyricToSong(songId: $id, content: $content) {
//       id
//       lyrics {
//         id
//         content
//         likes
//       }
//     }
//   }
// `;

// const LyricCreate = ({ songId }) => {
//   const [content, setContent] = useState("");
//   const [mutateFunction] = useMutation(mutation);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     mutateFunction({
//       variables: {
//         id: songId,
//         content,
//       },
//     });

//     setContent("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Add a lyric:</label>
//       <input
//         type="text"
//         value={content}
//         onChange={(event) => {
//           setContent(event.target.value);
//         }}
//       ></input>
//     </form>
//   );
// };

// export default LyricCreate;

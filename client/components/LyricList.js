import React from 'react'
import likeLyric from '../queries/likeLyric'
import { useMutation } from '@apollo/client'
import fetchSongById from '../queries/fetchSongById'



export default function LyricList({ lyrics}) {
  const [mutateFunction] = useMutation(likeLyric)

  const onLike = (id, likes) => {
    mutateFunction({
      variables: {
        id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }     
    })
  }
  
  const renderLyrics = () => {
    return (
      lyrics.map(({ id, content, likes }) => (
        
        <li className="collection-item" key={id}>
          {content}
          <div className='vote-box'>
           <span className='likes'>{likes}</span> 
          <i className='material-icons' onClick={() => {
            onLike(id, likes)
            }}>thumb_up </i>
          </div>

        </li>
      ))
    )
  }

  return (
    <div>
      <ul className='collection'>
        {renderLyrics()}
      </ul>
    
    </div>
  )
}








// import React from "react";
// import { gql, useMutation } from "@apollo/client";

// const mutation = gql`
//   mutation AddLike($id: ID!) {
//     likeLyric(id: $id) {
//       id
//       likes
//     }
//   }
// `;

// const LyricList = ({ lyrics }) => {
//   const [mutateFunction] = useMutation(mutation);

//   const onLike = (id, currentLikes) => {
//     mutateFunction({
//       variables: {
//         id,
//       },
//       optimisticResponse: {
//         __typename: "Mutation",
//         likeLyric: {
//           id,
//           __typename: "LyricType",
//           likes: currentLikes + 1,
//         },
//       },
//     });
//   };

//   const renderLyrics = () => {
//     return (lyrics || []).map(({ id, content, likes }) => {
//       return (
//         <li className="collection-item " key={id}>
//           {`${content} (${likes || 0})`}
//           <i
//             className="material-icons"
//             onClick={() => {
//               onLike(id, likes);
//             }}
//           >
//             thumb_up
//           </i>
//         </li>
//       );
//     });
//   };

//   return <ul className="collection">{renderLyrics()}</ul>;
// };

// export default LyricList;

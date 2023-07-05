import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import fetchSongs from '../queries/fetchSongs'
import deleteSong from '../queries/deleteSong'


const SongList = () => {
  const { loading, data, refetch, error } = useQuery(fetchSongs);
  const [mutateFunction] = useMutation(deleteSong)

  const onSongDelete = (id) => {
    console.log('delte icon clickedd')
    console.log(`${id} deleting`)
    
    mutateFunction({
      variables: { id }
    }).then((res) => {
      console.log(res.data.deleteSong.id, 'deleted')
      refetch()
    });
  }

  const renderSongs = () => {
    return (
      data.songs.map(({id, title}) => {
        return (
          <li to='/songs/new' key={id} className="collection-item" >
            <Link to={`/songs/${id}`}>
            {title}
            </Link>
            
            <i className="material-icons" onClick={() => { onSongDelete(id) }}>delete</i>
          </li>
        )
      })
    )
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> Unable to fetch data :( </div>
  }

  return (
    <div>
      <ul className="collection">
      { renderSongs()}
      </ul> 
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>

  );
};

export default SongList;

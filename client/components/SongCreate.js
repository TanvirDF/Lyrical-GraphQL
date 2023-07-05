import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import fetchSongs from "../queries/fetchSongs";

const mutationAddsong = gql`
mutation AddSong($title: String){
  addSong(title:$title){
    id
    title
  }
}
`

const SongCreate = () => {


  const [title, setTitle] = useState("");
  const [mutateFunction] = useMutation(mutationAddsong);
  const history = useHistory();

    function  onSubmit(event){
      event.preventDefault();
      mutateFunction({
        variables: {
          title
        },
        refetchQueries: [{query: fetchSongs}]
      }).then(() => { history.push('/') } )
  }


 


  return (
    <div>
      <Link to="/">
        <i className="material-icons">arrow_back</i>
      </Link>
      <h3> Create a new song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Tittle: </label>
        <input onChange={e => setTitle(e.target.value)}
          value={ title} />
      </form>
    </div>
  );
};

export default SongCreate;

import React from "react";
import { Link, useParams } from "react-router-dom";
import fetchSongById from "../queries/fetchSongById";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";;
import { useQuery } from "@apollo/client";


const SongDetail = () => {
  const { id } = useParams()
  const { loading, data, error, refetch} = useQuery(fetchSongById, {variables: {id}})
  
  if (loading) return <p> Data loading....</p>
  if (error) return <p> error fetching data</p>
  

  return (
    <div>
      <Link to='/'>
        <i className="material-icons">arrow_back</i>
      </Link>
      <h3> {data.song.title}</h3>
      <LyricList lyrics={data.song.lyrics} />
      <LyricCreate songId={data.song.id}/>
    </div>


  );
};

export default SongDetail;

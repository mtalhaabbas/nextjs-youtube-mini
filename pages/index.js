import React, { useState } from "react";
import Spinner from "../components/Spinner";
import Head from "next/head";
import Link from 'next/link'
const Home = () => {
  const [q, setq] = useState({
    search:''
  })
  const [result, setresult] = React.useState({
    items: [],
  });
  const onChange = (e) => setq({ [e.target.name]: e.target.value });
  const fetchData = async () => {
    setresult(
      {
       items: [], 
      }
    )
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyBYBmR_RpApXoR9ollfvPx02lYikS_JgMY&maxResults=20&q=${q.search}`).then((response)=>response.json()).then((data) => {   
    setresult(
     {
      items: data.items
     }
   )
  })
  }
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />  </Head>   
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" href="/">Mini YouTube</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-3" type="search" onClick={onChange} name="search" placeholder="Search" aria-label="Search" required />
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={fetchData} type="submit">Search</button>
    </div>
  </div>
</nav>
      {Object.keys(result.items).length === 0 ? (
        <>{<Spinner />}</>
      ) : (
        <div className="row">
                {result.items.map((n) => {
                 const {id} =n
                 n=id.videoId
                 let video=`https://www.youtube.com/embed/${n}`
                 return (
                    <>
                     <div className="my-3 ml-3">
                     <iframe width="490" height="300" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                     </div>    
                    </>
                  );
                }
                )}
              </div>
      )}
    </>
  );
};
export default Home;

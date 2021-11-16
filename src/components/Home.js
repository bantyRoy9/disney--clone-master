import React ,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import {useDispatch, useSelector} from "react-redux";
import { setMovies } from "../features/movie/movieSlider";
import {selectUserName} from '../features/user/userSlice'
import db from '../firebase'
// import Viewers from './Viewers'
import Trending from './Trending'
import Recommend from './Recommend';
import NewDisney from './NewDisney';
import Original from './Original';
// import { Switch } from 'react-router';
function Home() {

  const dispatch = useDispatch();
//   const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];



    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                console.log(originals);
                switch(doc.data().type){
                    case "recommend":
                        recommends= [...recommends, {id: doc.id, ...doc.data()}]
                    break;    
                    case "new":
                        newDisneys= [...newDisneys, {id: doc.id, ...doc.data()}]
                    break;    
                    case "original":
                        originals= [...originals, {id: doc.id, ...doc.data()}]
                    break;    
                    case "trending":
                        trendings= [...trendings, {id: doc.id, ...doc.data()}]
                    break;    
                }
            })
            dispatch(setMovies({
                recommend:recommends,
                newDisney:newDisneys,
                original: originals,
                trending:trendings
            }))
        }
        )});
    return (
        <Container>
         <ImgSlider/>
         <Trending />
          {/* <Viewers /> */}
          <Recommend/>
          <Original />
          <NewDisney />
        </Container>
    )
}

export default Home

const Container = styled.main`
 min-height: 100vh;
 padding: 0 calc(3.5vw + 5px);
 position: relative;
 overflow: hidden;

 &:before{
    
     content:"";
     position: absolute;
     top:0;
     left:0;
     right:0;
     bottom:0;
     z-index:-1;
 }
`

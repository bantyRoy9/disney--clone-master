import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams } from "react-router-dom"
import db from "../firebase"

function Detail() {
    const {id } = useParams();
    console.log(id);
    const [movie, setMovie] = useState();

    useEffect(()=>{
        db.collection("movies").doc(id).get().then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());   
            }
        })
    }, [id])
        return (
        <Container> 
            {movie && (
            <>
                <Background>
                <img src={movie.backgroundImg} alt=""/>
                </Background>
                <ImageTitle>
                <img src = {movie.titleImg} alt="" />
                </ImageTitle>
             <Controls>
                <PlayButton>
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                        <img src="/images/play-icon-white.png" alt=""/>
                        <span>TRAILER</span>

                </TrailerButton>
                <AddButton>
                         <span>+</span>  
                </AddButton>
                <GroupButton>
                        <img src = "/images/group-icon.png" alt=""/>
                </GroupButton>
                
                </Controls>
                <Subtitle>
                {movie.subTitle}
              </Subtitle>
               <Description>
                 {movie.description}
              </Description>
            </>
            )}
            
        </Container>
    )
}

export default Detail


const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;

`
const Background = styled.div`
 position:fixed;
 top:0;
 left:0;
 bottom:0;
 right:0;
 z-index: -1;
 opacity:0.8; 
 img{
     width:100%;
     height:100%;
     object-fit:cover;
     background-size:cover;
 }

`
const ImageTitle = styled.div`
     height: 30vh;
     min-height: 170px;
     width: 35vw;
     min-width: 200px;
     margin-top:60px;
     
     img {
         width:100%;
         height:100%;
         object-fit: contain;
        }
 `
const Controls = styled.div`
     display:flex;
     align-items:center;
`
const PlayButton = styled.button` 
    border-radius:4px;
    font-size:15px;
    padding:0px 24px;
    margin-right:  22px;
    display:flex;
    align-items:center;
    height:56px;
    background: rgb(249,249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198,198,198);

    }
`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid white;
color:white;
  
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid white; 
    background: rgba(0,0,0,0.3);
    color:white;
    align-items:center;
    margin-right:16px;
    display:flex;
    align-items:center;
    justify-content: center;
    cursor:pointer;

    span{
        font-size:30px;
    }
`
const GroupButton = styled(AddButton)`
    background: rgb(0,0,0);
`

const Subtitle = styled.div`
        font-size: smaller;
        min-height:20px;
        margin: 26px 0px;
`
const Description = styled.div`
        width:50%;
        font-size:20px;
        line-height:1.4;

         
`
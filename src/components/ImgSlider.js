import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
function ImgSlider() {
let settings ={
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToScroll:1,
    autoplay:true
};

    return (
        <Carousel {...settings}>
    
     <Containers>

        <Containerss>    
            <Wraps>
                <img src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2021-10-22/deskspops-17cce89e-9600-4df7-9a8a-08a4c7f5fd35.jpg" alt=""/>
                <Title>  
                    <LogoTitle>
                   <img src="https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png" alt=""/>
                         <span>Endless Entertainmen...<br/>Entertainment ka Sixer</span>
                    
                        
                    </LogoTitle>
                    <Subtitle>
                        <span>Subscribe now to match ICC Mens T20 World Cup and theatre se pehle movies</span>
                    </Subtitle>
                    <SubscriptionBtn>
                         SUBSCRIBE NOW
                     </SubscriptionBtn>
                </Title>
            </Wraps>
            </Containerss>
        </Containers>

       <Containers>
         <Container>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt=""/>
                <Title>
                     <span>Movie</span>
                    <Subtitle>
                        <h2> movie.subTitle</h2>
                    </Subtitle>
                    <Description>
                        movie.description
                    </Description>
                </Title>
            </Wrap>
            </Container>
         </Containers>
        
        <Containers>
         <Container>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt=""/>
                <Title>
                     <span>Movie</span>
                    <Subtitle>
                        <h2> movie.subTitle</h2>
                    </Subtitle>
                    <Description>
                        movie.description
                    </Description>
                </Title>
            </Wrap>
            </Container>
        </Containers>
        
        <Containers>
          <Container>
             <Wrap>
                <img src="/images/slider-badag.jpg" alt=""/>
                <Title>
                     <span>Movie</span>
                    <Subtitle>
                        <h2> movie.subTitle</h2>
                    </Subtitle>
                    <Description>
                        movie.description
                    </Description>
                </Title>
            </Wrap>
        </Container>
         </Containers>
            
            
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`

margin-top:80px;

    ul li button{
         &:before{
             display:none;
             font-size:10px;
             color: rgba(150, 158, 171);
         }
     }
     li.slick-active button::before{
         color: white;
     }

    .slick-list{
        overflow: visible;
    }
    .slick-arrow{
        opacity: 0;
        background:transparent;
        z-index:1;
    }
    &:hover{
        button{
            opacity: 1;
    visibility: visible;
        }
    }
`
const Containers = styled.div`
padding:0px 18px;
`
const Container=styled.div`
padding:0 18px;
border-radius: 5px;
background: #030b17;

`
const Containerss = styled(Container)`
  background: #1c2940;
`



const Wrap = styled.div`
cursor: pointer;
padding:0 20px;

    height:60vh;
    
    img {
        margin-left:427px;
        width:65%;
        height:100%;
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        &:hover{
            // border: 4px solid rgba(249, 249, 249, 0.8)
        }
    }

    

    `
    const Wraps = styled(Wrap)`
    
    img{
        margin-left:200px;
        padding:50px 50px;
        width:85%;
        box-shadow: none;
        border-radius: 15px;
        
    }
    `
    
    const Title=styled.div`
    margin: -350px 40px;
    width:50%;
    
    
    
    `
    const LogoTitle=styled.div`
    display:flex;
    flex-direction:columns;
    align-items:center; 
    margin-left:-250px;
    img{
        border-radius:5px;
        width:16%;
        height:16%;
    }
    
    span{color:#9EAFB0;
        font-size:13px;
       margin-left:-40px;
    }
    
    `
    const Div=styled.div`
    display:flex;
    flex-direction:row;
    `
    const Subtitle=styled.div`
     width:30%;
     color:#9EAFB0;
     margin-top:-20px;
    `
    const Description = styled.div``
    const SubscriptionBtn = styled.button`
    padding: 10px 45px;
   background:  transparent;
   color:#1f80e0;
   margin-top:30px;
   
   font-size:12px;
   border:1px solid #1f80e0;
   font-weight:bolder;
   border-radius:4px;
   transition: all 0.2s ease 0s;
   cursor:pointer;
   &:hover{
   color:  white;
   
   border-color:white;
}
`
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
                    <CTA>
                        <CTALogoOne src="/images/cta-logo-one.svg"/>
                        <SignUp>
                            All To See Here
                        </SignUp>
                        <Description>
                            jakdf ajdfkajf afkhajkfh afd kad ff d adkfh akfdfda sdfa ka sd da shasd ds sadhkhf df dsf fdskahjkadhk df fad fadhfd a
                        </Description>
                        <CTALogoTwo src="/images/cta-logo-two.png"/>
                    </CTA>

                     
        </Container>
    )
}

export default Login

const Container = styled.div`
    postion:relative;
    height: calc(100vh- 70px);
    display:flex;
    align-items:top;
    justify-content:center;
    
    &:before{
        background-position:top;
        background-image: url("/images/login-background.jpg");
        background-size:cover;
        background-repeat: no-repeat;
        position:absolute;
        content:"";
        height:100%;
        width:100%;
        z-index:-1;
        top:0;
        left:0;
        buttom:0;
        right:0;
        opacity:0.7;



    }
`
const CTA = styled.div`
 max-width:650px;
 padding:80px 40px;
 width:90%;
 display:flex;
 flex-direction:column;
 
`
const CTALogoOne = styled.img``
const SignUp= styled.a`
width:100%;
background-color: #0063e5;
font-weight:bold;
padding:17px 0px;
border-radius:4px;
text-align:center;
color:#f9f9f9;
font-size:18px;
cursor:pointer;
transition: all 250ms;
latter-spacing: 1.5px;
margin-top:8px;
margin-bottom:12px;

&:hover{
    background:#0483ee;
}

`
const Description = styled.div`
    font-size:11px;
    letter-spacing: 1.5px;
    text-align: center;

`
const CTALogoTwo = styled.img`
margin-top:12px;
`
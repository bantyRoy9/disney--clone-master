import React from 'react'
import styled from 'styled-components'
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { auth, provider } from '../firebase'
import { selectUserName, selectUserPhoto,setUserLogin,userLogin,setSignOut} from "../features/user/userSlice"
import { useDispatch,useSelector } from "react-redux"   
import { useHistory } from 'react-router';  
import { NavLink } from 'react-router-dom';   
import Login from './Login';
function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = ()=>
    {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push('/')
        }).catch((error) =>{
            alert(error.message);
        });
    };
    const signOut= () =>{
        auth.signOut().then(()=>{
            dispatch(setSignOut());
            // history.push("/home")
        })

    }
    const loginPage= () =>{
            history.push("/login")
    }
    return (
        <Nav>
            <Menu src="/images/icons8-menu.svg"/>
            <Logo src="/images/logo.svg"/>hotstar
             
            <>
                <NavMenu>        
                    <NavLink to="/">
                        <span>TV</span>
                    </NavLink>
                    <NavLink to="/">
                        <img src="/images/watchList-icon.svg" alt="" />
                        <span>Movies</span>
                    </NavLink>
                    <NavLink to="/">
                        <img src="/images/original-icon.svg" alt="" />
                        <span>Sports</span>
                    </NavLink>
                    <NavLink to="/">
                        <img src="/images/movie-icon.svg" alt="" />
                        <span>Disney+</span>
                    </NavLink>
                    <Logos src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"/>
                </NavMenu>
            
                <Search>
                    <SearchBar placeholder="Serach"></SearchBar>
                    <SearchBarIcon src="/images/search-icon.svg" alt="" />

                </Search>
                <SubscriptionBtn onClick={loginPage}>
                    SUBSCRIBE
                </SubscriptionBtn>
            </>
                    {!userName ? (
                        <LoginContainer>
                    <Logins onClick={handleAuth} >
                        LOGIN
                    </Logins>
                </LoginContainer> 
                
                ):
                <>
                <UserImg onClick={signOut} src="/images/banty.jpg"/>
                     
                     </>
                }
            
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    display:flex;
    align-items:center;
    padding: 0 30px;
    height: 80px;
    width:100%;
    // border:1px solid red;
    overflow: hidden;
    z-index:1;
    position:fixed;

    &:before{
        background: linear-gradient(to bottom, #141b29, #0c111b 300px);
        content:"";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`
const Menu = styled.img`
   margin:25px;
   width:20px;
   
   `
   const Logo = styled.img`
    width:60px;
    margin-top:-10px;
`
const NavMenu = styled.div`
   display: flex;
   flex:1;
    margin-left: 25px;

   a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        color:white;
        text-decoration:none;
        
        img{
            height:20px;
            display:none;
        }
        span{
            font-size:15px;
            color:#9EAFB0;
            font-weight:bolder;
            position:relative;
            &:after{
                content:"";
                height:2px;
                background: white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                 transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0)
            }
        }
     &:hover{
         span:after{
             transform: scaleX(1);
             opacity:1;
         }
        span:hover{ 
            color:#C2D1D2;
        }
     }
   }
`
const UserImg = styled.img`
   width:48px;
   height:48px;
   border-radius:50%;
   cursor:pointer;

`
const LoginContainer = styled.div`
   display:flex;
   justify-content:flex-end;
//    flex:1;
`

const Logins = styled.div`
   font-size:12px;
    color: whitesmoke;
    transition: all 0.2s ease 0s;
   cursor:pointer;
//    &:hover{
//        background-color: #f9f9f9;
//        color:#000;
//        border-color:transparent;
//    }
`
const Logos = styled.img`
 margin-left:20px;
 cursor:pointer;

`
const Search = styled.div`
   border-bottom: 1px solid #1f80e0;
   color:white;
   font-size:15px;
`
const SearchBar = styled.input`
border: none;
outline: none;
color:white;
font-size:12px;
background:transparent;
`
const SearchBarIcon = styled.img`

width:18px;

`

const SubscriptionBtn = styled.button`
   padding: 5px 12px;
   background:  #1f80e0;
   color:white;
   margin:0 12px;
   font-size:10px;
   border:none;
   latter-spacing:1;
   font-weight:bolder;
   border-radius:2px;
   transition: all 0.2s ease 0s;
   cursor:pointer;
   &:hover{
   background:  #1f80b9;

       border-color:transparent;
   }
`
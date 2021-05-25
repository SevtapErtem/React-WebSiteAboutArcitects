import React from 'react'
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';




const Nav = styled.nav`
height:60px;
display:flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position:fixed;
width:100%;

`;


const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
cursor:pointer;
text-decoration: none;
`

const Logo = styled(Link)`
${NavLink}
color: white;
font-style: italic;
`;

const MenuBars= styled(FaBars)`
display:none;
@media screen and (max-width:780px){
    display:block;
    height:30px;
    width:30px;
    cursor:pointer;
    color: white;
    position:absolute;
    top: 0px;
    right:0px;
    transform: translate(-50%, 50%);
}

`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: -48px;

@media screen and (max-width:780px){
    display:none;
}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width:780px){
    display:none;
}
`


const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">ARCHITECTURAL GENIUSES</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item,index)=>(
                     <NavMenuLinks  to={item.Link} key={index}>
                         {item.title}
                     </NavMenuLinks>
                ))}

            </NavMenu>
            <NavBtn>
                <Button to= "/contact" primary='true'> Contact Us </Button> 
            </NavBtn>
        </Nav>
    );
}

export default Navbar



//buttondaki primary=true kısmı dıştaki border alanını yarattı
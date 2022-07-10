import React from 'react'
import styled from 'styled-components'
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Container = styled.div`
	min-height:30px;
	${mobile({height:"50px"})}
`;
const Language = styled.div`
   font-size:14px;
   cursor:pointer;
   ${mobile({display:"none"})}
`
const Wrapper = styled.div`
     padding:0px 20px;
     display: flex;
     align-items: center;
     justify-content:space-between;
	${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
     flex:1;
     display:flex;
     align-items:center;
`
const Right = styled.div`
	flex: 1;
     display:flex;
     align-items:center;
     justify-content:flex-end;
     ${mobile({justifyContent:"center", flex:"2"})}
`;
const Center = styled.div`
	flex: 1;
     text-align:center;
`;
const SrchContainer = styled.div`
     border:0.5px solid lightgray;
     display: flex;
     align-items:center;
     margin-left:25px;
     padding:5px;
`
const Input = styled.input`
     border:none;
	${mobile({width:"50px"})}
`
const Logo = styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 20px;
	${mobile({fontSize:"12px",marginLeft:"10px"})}
`;

const Navbar = () => {
	const quantity = useSelector(state => state.cart.quantity)
  return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SrchContainer>
						<Input />
						<SearchIcon
							style={{ color: "gray", fontSize: 16 }}
						/>
					</SrchContainer>
				</Left>
				<Center>
					<Logo>SKUNDU</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Sign in</MenuItem>
					<Link to="/cart" >
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartIcon />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
  );
}

export default Navbar
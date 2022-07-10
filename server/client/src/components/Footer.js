import React from 'react'
import styled from 'styled-components'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from '../responsive';

const Container = styled.div`
display:flex;
%{mobile({flexDirection:"column"})}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({backgroundColor:"#fff8f8"})}
`;
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`

const Logo = styled.h1`
display:flex;
justify-content:left;
margin-bottom:0;
`
const Description = styled.p`
margin:20px 0px;
text-align:justify;
`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment = styled.img`
width:100%;`

const Footer = () => {
  return (
		<Container>
			<Left>
				<Logo>SKUNDU</Logo>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptate pariatur fugiat Lorem laboris quis pariatur do dolore aliquip aliquip proident. Labore irure magna in anim nisi dolor deserunt minim reprehenderit aliquip ad reprehenderit dolore ea.
				</Description>
				<SocialContainer>
					<SocialIcon color="#3B5999">
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon color="#E4405F">
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon color="#55ACEE">
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon color="#E60023">
						<PinterestIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Men Fashion</ListItem>
					<ListItem>Women Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<RoomIcon style={{ marginRight: "10px" }} />
					Anand Nagar, Barha Road, Lucknow-226005
				</ContactItem>
				<ContactItem>
					<PhoneIcon style={{ marginRight: "10px" }} /> +91
					7525815111
				</ContactItem>
				<ContactItem>
					<MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
					contact@shreya.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
  );
}

export default Footer
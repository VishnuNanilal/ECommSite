import React from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	weight: 100vw;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
`;
const Wrapper = styled.div`
	background-color: white;
	padding: 20px;
	width: 25%;
	${mobile({width:"75%"})}
`;
const Form = styled.form`
	display: flex;
     flex-direction: column;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
     margin-bottom:10px;
	&:disabled{
		color:green;
		cursor:not-allowed;
	}
`;
const Link = styled.a`
margin:5px 0;
font-size:12px;
cursor:pointer;
text-decoration:underline;
`

const Error = styled.span`
  color: red;
`

const Login = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const dispatch = useDispatch();
	const {isFetching, error} = useSelector(state => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch,{username, password})
	}

  return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
					     placeholder="Password"
					     type="password"
					     onChange={(e) => setPassword(e.target.value)}
					/>
				  <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
				  {error && <Error>Something went wrong...</Error>}
					<Link>FORGOT PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
  );
}

export default Login
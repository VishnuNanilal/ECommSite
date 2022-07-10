// import StripeCheckout from 'react-stripe-checkout';
// import { useState, useEffect } from 'react';

// const KEY =
// 	"pk_test_51LAUB8SHxvYIf1n85B34pq6O9LUZ5kw1Pp35DLCuu8z5WrEO23yupvZWOwMdyzi4SJ2AF4IBoo15XfdxszsAZOqP00s3goqDtm";

// const Pay = () => {
//      const [stripeToken,setStripeToken] = useState(null);
//      const history = useHistory();

//      const onToken = (token) => {
//           setStripeToken(token);
//      }

//      useEffect(() => {
//           const makeRequest = async () => {
//                // const response = await fetch('/api/pay', {
//                //      method: 'POST',
//                //      headers: { 'Content-Type': 'application/json' },
//                //      body: JSON.stringify({ token })
//                // });
//                // const body = await response.json();
//                // console.log(body);
//                try {
//                     const res = await axios.post("http://localhost:5000/api/checkout/payment", {
//                          tokenId: stripeToken.id,
//                          amount: 100
//                     })
//                     console.log(res.data)
//                     history.push('/success');
//                } catch (err) {
//                     console.log(err)
//                }
//           };
//           stripeToken && makeRequest
//      }, [stripeToken, history]);

//      return (
// 		<div
// 			style={{
// 				height: "100vh",
// 				display: "flex",
// 				alignItems: "center",
// 				justifyContent: "center",
// 			}}
// 		>
// 			{stripeToken ? (
// 				<span>Processing. Please wait ...</span>
// 			) : (
// 				<StripeCheckout
// 					name="EShop"
// 					image="https://avatars.githubusercontent.com/u/1486366?v=4"
// 					billingAddress
// 					shippingAddress
// 					description="Your total is $100"
// 					amount={100}
// 					token={onToken}
// 					stripeKey={KEY}
// 				>
// 					<button
// 						style={{
// 							border: "none",
// 							width: 120,
// 							borderRadius: 5,
// 							padding: "20px",
// 							backgroundColor: "black",
// 							color: "white",
// 							fontWeight: "600",
// 							cursor: "pointer",
// 						}}
// 					>
// 						Pay Now
// 					</button>
// 				</StripeCheckout>
// 			)}
// 		</div>
// 	);
// }

// export default Pay;

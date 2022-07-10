import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   min-height:30px;
   background-color:teal;
   color:white;
   font-size:14px;
   font-weight:bold;
   padding-top:11px;
`
const Announcement = () => {
  return (
       <Container>
            Super Deal! Free Shipping on Orders Over $100
       </Container>
  )
}

export default Announcement
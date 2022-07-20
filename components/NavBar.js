import Link from 'next/link';
import styled from 'styled-components'; 

const Nav = styled.nav`

height: 80px;
background: #000;
color: #fff; 
display: flex;  
justify-content: space-between; 
align-items: center; 
`

const StyledLink = styled.a `
padding: 0rem 2rem; 

`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href = "/" passHref > 
                <StyledLink>Miguel Ledesma</StyledLink>
                </Link> 
            </div>

            <div>
            <Link href = "/" passHref > 
                <StyledLink>Home</StyledLink>
            </Link> 

            <Link href = "/taskResponse" passHref > 
                <StyledLink>PA Task</StyledLink>
            </Link> 


            <Link href = "/reflection" passHref > 
                <StyledLink>Reflection</StyledLink>
            </Link> 

            <Link href = "/email" passHref > 
                <StyledLink>Email Response</StyledLink>
            </Link> 

            <Link href = "/recommendation" passHref > 
                <StyledLink>Recommendations</StyledLink>
            </Link> 

            <Link href = "/contact" passHref > 
                <StyledLink>Contact</StyledLink>
                </Link> 
            </div>

        </Nav>
    )
}

export default Navbar; 
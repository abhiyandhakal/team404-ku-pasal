import styled from "styled-components";


const StyledLoginNavbar = styled.header`
    display:flex;
    gap:60%;
    align-items:center;
    max-height:5rem;
    color:white;
 
    h3{
        font-weight:var(--fw-h3);
        font-size:var(--fz-h3);
    }

    img{
        height:7.8rem;
        margin-left:1rem;
    }
    section{
        margin-top: -10px;
        display:flex;
        gap:12rem;
    }
    a{
        text-decoration:none;
    }
`


export default StyledLoginNavbar;
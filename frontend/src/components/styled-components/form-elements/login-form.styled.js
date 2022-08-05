import styled from "styled-components";

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:var(--form-bg);
    width:var(--form-width);
    height:var(--form-height);
    gap:1.45rem;
    margin: var(--form-margin);
    border-radius: 1.6rem;
    box-shadow: var(--box-shadow-2);

    overflow:hidden;


    h1{
        letter-spacing:1px;
        word-spacing: 5px;
        padding-top:4rem;
        padding-bottom:4rem;
        
    }

    h3{
        padding-bottom:1rem;
        padding-left:1rem;
    }
    input{
        border:0;
        width:31rem;
        height:5rem;
        border-radius:0.9rem;
        font-size:var(--fz-h3);
        padding-left: 1rem;
    }

    button{
        border:0;
        margin-top:1rem;
        width:15.6rem;
        font-size:var(--fz-h2);
        font-weight:var(--fw-h3);
        color:white;
        background-color:black;
        border-radius:200px;
        
    }

    p{
        font-size:1.2rem;
    }


`

export default StyledForm;
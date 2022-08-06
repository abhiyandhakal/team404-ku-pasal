import styled from "styled-components";

const StyledSignupForm = styled.form`
    display:flex;
    flex-direction:column;
    padding-top:6rem;
    width:600px;
    padding-left:15rem;    
    gap:30px;


    h1{
        color:white;
        padding-left:50px;
        padding-bottom:10px;
        font-weight: var(--fw-h2);

    }

    input{
        height:40px;
        border-radius:10px;
        padding-left : 20px;
        border:0;
        margin:0;

    
    }

    .checkBox{
        margin-top:-15px;
        padding-top:0;
        display:flex;
        align-items:center;
        gap:20px;
        margin-left:40px;
    }
    button{
        width:200px;
        height:40px;
        border:0;
        border-radius:20px;
        background-color:black;
        color:white;
        font-size:var(--fz-h3);
        font-weight:var(--fw-h2);
    }

    .signupOptions{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
    }

    a{
        margin-top:-20px;
    }

`


export default StyledSignupForm;
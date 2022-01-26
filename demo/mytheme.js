module.exports = (color = 'white') => `

    *{
        text-align: center;
        font-family: Arial;
        font-size: 16px;
    }

    h1{
        font-size: 4rem;
    }

    body{
        box-sizing: border-box;
        margin: 0;
    }

    .form-container{
        display: flex;
        justify-content: center;
    }
    .form{
        background-color: ${color};
        text-align: center;
        width: 30%;
        height: 40vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid 3px black;
    }


    input[type=text]{
        border: solid 2px black;
        width: 12rem;
        height: 2rem;
        margin: 1rem auto;
        text-transform: capitalize;
    }

    input[type=text]:focus{
        outline: none;
        border: solid 2px gray;
        font-size: 1.1rem;
    }

    input[type=submit]{
        width: 8rem;
        margin: 2rem auto;
        border: solid 2px black;
        padding: .5rem;
    }

    input[type=submit]:hover{
        border: solid 2px gray;
        color: gray;
    }


`

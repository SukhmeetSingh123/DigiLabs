import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle

    `
    body{
        background-color: ${props => props.darkmode ? '#1C2534' : 'white'};
        color: ${props => props.darkmode ? 'white' : 'black'};
    }
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6rem;
    }    
    
    .Body{
        border:1px solid grey;
        border-radius:10px;
        margin: 3rem ;
        display:flex;
        flex-direction:column;
        width: 50%;  
    }
    
    
    // CSS FOR ICONS
    .icon-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        
    }
    .Top{
        border-radius:10px;
        background-color: ${props => props.darkmode ? '#252D3C' : 'white'};
        padding:1.5rem;
    }
    .icon-container img{
        width:21%;
    }
    
    .dot{
        border:1px dashed #DAE0E6;
        width:100%
    }
    
    .dot1{
        border: ${props => props.darkmode ? '1px dashed #648EF7' : '1px dashed #DAE0E6'};
    }
    
    
    // CSS FOR TEXT
    
    
    .Texts{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        margin-top: 1rem;
        font-family: 'Inter'
    }
    .text1{
        color:#437EF7;
    }

    .Texts div{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 20px;
        
    }


//CSS FOR TEXTAREA


.TextArea{
    display:flex;
    flex-direction: column;
    padding: 1rem 3rem;
    
}

.TextArea .input{
    padding: 12px 16px;
    width:100%;
    border:none;
    margin-right:0.5rem;
    outline:none;
    background-color: ${props => props.darkmode ? '#333B48' : 'white'};
}

.TextArea1{
    display:flex;
    flex-direction: column;
    margin-bottom:1rem;
}

.TextArea1 span{
    margin-bottom:1rem;

}

.TextArea2{
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    margin-bottom:1rem;
    flex-grow: 1;
}
.TextArea3{
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    margin-bottom:1rem;
    flex-grow: 1;
}

.textBoxContainer{
    display:flex;
    align-items:center;
    background: ${props => props.darkmode ? '#333B48' : 'white'};
    border:1px solid ${props => props.darkmode ? '#1C2534' : '#DAE0E6'};
    justify-content:space-evenly;
    padding:0.2rem 1rem;
    border-radius:6px;
    }
    .textBoxContainer2{
    width:80%;
    }

    .inputPass{
        padding: 12px 16px;
        width:80%;
        border:none;
    }
    .inputPassContainer{
        width:80%;
    }
    .inputCPass{
        padding: 12px 16px;
        width:80%;
        border:none;
    }
    .inputCPassContainer{
        width:80%;
    }

    .Button{
        background-color: ${props => props.darkmode ? '#252D3C' : 'white'};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 16px 48px;
        margin-top:2rem;
    }
    .PassCPass{
        display:flex;
        width:100%;
        align-items:center;
        justify-content:space-between;
    }

    .button{
        cursor:pointer;
        width: 96px;
        height: 46px;
        background: #437EF7;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
        border-radius: 6px;
        color:white;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        }


    @media screen and (max-width: 1000px) {
        .PassCPass{
            flex-direction:column;
        }
        .button{
            width:100%;
        }
        .inputPass{
           
            width:100%;
        }
        .inputCPass{
      
            width:100%;
        }
        .Body{
            width:100%;
        }
        .TextArea2{
            width:100%;
            margin:0;
        }
        .TextArea3{
            width:100%;
            margin:0;
        }
      
`
import styled from 'styled-components';



export const Tabela = styled.table`
    text-align: center;
    border: 1px solid #9EA0A1;
    width: 100%;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-weight: bold;
   
`;


export const Td = styled.td`
   
    width: ${props => props.width};
    background: ${props =>
    props.status === "ABERTO" ? "rgb(26, 152, 11)" :
        props.status === "FECHADO" ? "rgb(184, 16, 16)":
            props.status === "ENCERRADO" ? "rgb(255,211,3)":null

};
    
    border: 1px solid #9EA0A1;
    color: ${props =>
        props.color === "ABERTO" ? "rgb(0,97,3)" :
            props.color === "FECHADO" ? "rgb(184,11,78)":
                props.color === "ENCERRADO" ? "rgb(255,134,20)":null
};
`;

export const Tr = styled.tr` 
       font-size: ${props => props.size}
       text-align: center;
       border: 1px solid #9EA0A1;
       tab-size: 50px;
       
       background: ${props =>
    props.status === "ABERTO" ? "rgba(211,239,171,0.37)" :
        props.status === "FECHADO" ? "rgb(255,243,236)" :
            props.status === "ENCERRADO" ? "rgb(255,252,208)" : null

    };
       
       :hover{
        background-color: 
        
        
        
        rgba(44,83,87,0.76);
        color:white;
        cursor:pointer;
        }
     
`;



export const Btnzoom = styled.span`
        color: #fff;
        font-size: 17px;
        border-radius: 50%;
        display: inline-block;
        height: 25px;
        width: 25px;
        background: ${props => props.background}
        text-align: center;
        cursor:pointer;
        
        
        :hover{
        font-size: 17px;
        height: 26px;
        width: 26px;
        background-color: #ff3b00;
        color: white;
        cursor:pointer;
        }
`;



export const Ckeck = styled.span`
        color: #fff;
        font-size: 15px;
        border-radius: 20%;
        display: inline-block;
        height: 22px;
        width: 22px;
        background: ${props => props.background}
        text-align: center;
        cursor:pointer;
        
        :hover{
        font-size: 17px;
        height: 26px;
        width: 26px;
        background-color: #ff3b00;
        color: white;
        cursor:pointer;
        }
`;

export const Zom = styled.div`
    width: 300px;
    margin-left: 1%;
    margin-right: 1%;
    background: rgb(201,201,199);
    background: linear-gradient(0deg, rgba(201,201,199,1) 40%, rgb(249,249,249) 80%);
    height: 100px;
    float: right; 
    border: 1.3px solid rgb(159,159,157);
    font-size: 18px;
    padding: 15px;
    font-weight: bold;
    border-radius: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-top: -15px;
    text-align: center;
    cursor:pointer;
 
`;


export const Title = styled.div`
    width: 80%;
    background: ${props => props.background}
    height: 100px;
    float: right; 
    text-align: right;
    
    h1{
      font-family: "Trebuchet MS", Helvetica, sans-serif;
      font-weight: bold;
      font-size: 2.5em;
      text-align: center;
      color: black;
    }
  
 
`;


export const Nav = styled.div`
  width: 100%;
  top: 0;
  margin-left: -1.5%;
  height: 100px;
  background: rgb(201,201,199);
  background: linear-gradient(0deg, rgba(201,201,199,1) 19%, rgb(245,245,245) 79%);
  float: left; 
  position: fixed;
  padding: 0;
  align-items: center;
  display: flex;
 
    
  
`;



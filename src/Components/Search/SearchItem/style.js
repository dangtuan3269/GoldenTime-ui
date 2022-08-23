import styled from "styled-components";

export const SearchItemWrapper = styled.div`

.search{
    display: flex;
    background-color: #333333;
    width: 100%;
    height: 100px;
 }
 
 .search img:first-child{
    height: 80px;
    max-width: 550px;
    margin-right: 150px;
 }

 .input input{
   width: 350px;
   height: 39px;
   border: none;
   outline: none;
   border-radius: 5px 0 0 5px;
   padding-left: 20px;
 }

.search_input{
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 100px;
}

.search_button{
   border: none;
   background-color: #bf9375;
   border-radius: 0 5px 5px 0;
}


.search_button svg{
   padding: 11px 30px;
   color: white;
}

`
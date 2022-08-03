import styled from "styled-components";

export const NewsItemWrapper = styled.div`

background-color: #F5F5F5;
padding-bottom: 50px;
overflow: hidden;
font-family: timenewroman;

.news {
    text-align: center;
    width: 100%;
  }
  
  .news h2 {
    font-weight: bold;
    font-family: arial;
  }

  span{
    font-style: italic;
    color: gray;
  }
  
  .hotnews {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .news1{
    width: 400px;
    margin-right: 50px;
    margin-left: 150px;
  }

  .news2{
    width: 365px;
    margin-right: 50px;
  }

  .news3{
    width: 400px;
  }

.news1 img{
    height: auto;
    width: 400px;
}

.news2 img{
    height: auto;
    width: 365px;
}

.news3 img{
    height: auto;
    width: 400px;
}

`
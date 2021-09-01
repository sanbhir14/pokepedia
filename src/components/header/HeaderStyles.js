import styled from "styled-components";

const media = {
    desktop: '@media(min-width: 1000px)'
}

export const HeaderWrap = styled.div`
    width: 100%;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    body {
        background-color: #F2F2F2;
        font-family: 'Open Sans', sans-serif;
    }
    h1{
        margin-left: 10px;
        color: #FC766AFF;
        font-size: 
    }

    .content {
        padding: 0 20px;
    }
      
    header {
        width: 100%;
        background-color: #2F2F2F;
        position: sticky;
        z-index: 999;
    }
      
    .logo {
        color: #5FC0DC;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 36px;
        font-weight: bold;
    }
      
    .toggler {
        color: #5FC0DC;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 35px;
        font-size: 27px;
        text-decoration: none;
    }
      
    nav {
        width: 100%;
        display: none;
    }
      
    nav ul {
        list-style: none;
    }
      
    nav ul li a {
        text-decoration: none;
        color: #F2F2F2;
        font-size: 18px;
        line-height: 40px;
        transition: 0.3s ease-out;
    }
      
    nav ul li a:hover {
        color: #5FC0DC;
    }
      
    .active {
        color: #5FC0DC;
    }
      
    .side-nav {
        text-align: center;
    }
      
    .side-nav a {
        text-decoration: none;
        color: #5FC0DC;
        padding-right: 15px;
        line-height: 40px;
    }
    
    section {
        margin-top: 500px;
        text-align: center;
        font-size: 10px;
        color: #2F2F2F;
        margin-bottom: 20px;
    }
      
    section:after {
        content: 'Jan/2018';
        font-size: 12px;
        font-weight: bold;
    }
      
    #info {
        padding-top: 200px;
        text-align: center;
        color: #5FC0DC;
    }
      
    @media screen and (min-width: 872px) {
        .content {
          padding: 0 50px;
        }
        
        .toggler {
          display: none;
        }
        
        nav {
          display: inline-block !important; /* prevent the nav to hide when resize */
          position: relative;
          width: auto;
          float: right;
          padding: 5px 0;
        }
       
        nav ul {
          float: left;
        }
        
        nav ul li {
          display: inline-block;
          padding-right: 20px;
        }
        
        .side-nav {
         float: right;
        }
      }
    
`;
import styled from "styled-components";

const media = {
    ltablet_laptop: '@media(min-width: 960px)',
    small_tablets: '@media(min-width: 620px)',
    desktop: '@media(min-width: 1200px)'
}

export const PokemonDetailWrap = styled.div`
    .detail-header{
        padding: 0;
        position: relative;
        max-width: 1280px;
        width: 100%;
    }
    .pagination{
        width: 100%;
        align-items:center;
        justify-content:center;
        
        .previous{
            justify-content:center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
            background-color: Transparent;
            border:none;
            cursor:pointer;
            outline:none;
            margin: 32px;
            text-align: center;
            ${media.desktop}{
                margin-left: 170px;
                font-size: 28px;
            }
        }
        .pokemon-name{
            text-transform: capitalize;
        }

    }
    .page-container{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;   
    }
    .description{
        
        .types{
            margin-top: 25px;
            font-size: 15px;
            font-weight: bold;
            border: 2px solid #EDC351;
            border-radius: 10px;
            background-color: #E54545;
            text-align: center;
            width: 29%;
            height: 25px;
            margin-left: 148px;

            ${media.small_tablets}{
                width: 20%;
                height: 26px;
                margin-left: 266px;
            }
            
        }
        .moves{
            display:flex;
            flex-direction: column;
            justify-content:flex-start;
            align-items:flex-start;
            
            h2{
                place-self:center;
                font-size: 18px;
                margin-top: 10px;
                margin-bottom: 26px;
                ${media.ltablet_laptop}{
                    margin-top: 18px;
                    margin-bottom: 26px;
                }
                
            }
            .move-section{
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%;
                margin-top: -13px;

                .move-list{
                    width:100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr; 
                    grid-column-gap: 16px;
                    grid-row-gap: 16px;
                    text-align: center;
                    border: 2px solid #EDC351;
                    border-radius: 10px;
                    padding: 5px;
                    ${media.small_tablets}{
                        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    }
                    h4{
                        border: 2px solid #E54545;
                        border-radius: 10px; 
                        font-size: 12px;
                        width: 103%;
                        height: 88%;
                    }
                }
            }
        
        }
        .catch{
            margin-top:37px;
            text-align:center;
        }
        
    }
    .catch-btn{
        border-color: #e74c3c;
        border-radius: 24px;
        color: black;
        box-shadow: 0 0 40px 40px #e74c3c inset, 0 0 0 0 #e74c3c;
        transition: all 150ms ease-in-out;
        font-weight:bold;
        width: 22%;
        font-size: 12px;
        &:hover {
          box-shadow: 0 0 10px 0 #e74c3c inset, 0 0 10px 4px #e74c3c;
        }
    }
    
    
`
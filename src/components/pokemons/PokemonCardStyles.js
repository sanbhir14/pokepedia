import styled from "styled-components";

const media = {
    ltablet_laptop: '@media(min-width: 960px)',
    small_tablets: '@media(min-width: 620px)',
    desktop: '@media(min-width: 1200px)'
}

export const PokemonCardWrap = styled.div`

.card {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 245px;
    width: 164px;
    margin: -2px;
    border: 8px solid #EDC351;
    border-radius: 10px;
    background-color: ;

    ${media.small_tablets}{
        height: 286px;
        width: 189px;
        margin: -6px;
    }
    ${media.ltablet_laptop}{
        height: 290px;
        width: 205px;
        margin: -11px;
    }
    ${media.desktop}{
        height: 310px;
        width: 218px;
        margin: -2px;
    }

    .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        width: 100%;
        font-size: 13px;

        h2 {
            margin-left: 11px;
            font-size: 17px;
            text-transform: capitalize;
            ${media.ltablet_laptop}{
                font-size: 22px;
            }
        }

        p {
            margin-right: 20px;
            color: #E54545;
        }
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        width: 90%;
        background-color: #E54545;
        border-radius: 5px;
    }

    .stats {
        display: flex;
        justify-content: center;
        height: 20px;
        width: 80%;
        margin: 2px 0 15px 0;
        background-color: #EDC351;
        border-radius: 3px;
        font-size: 14px;
    }

    .about {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 70px;
        width: 100%;

        .id {
            padding-left: 15px;
            text-align: center;
            font-size: 13px;
            p {
                margin: 5px;
            }
            h3{
                font-size: 16px;
            }			
        }

        .abilities {
            padding-right: 10px;
            margin-top: -6px;

            p {
                margin: 0;
            }
            
        }
    }
    .detail-btn{
        border-color: #e74c3c;
        color: black;
        box-shadow: 0 0 40px 40px #e74c3c inset, 0 0 0 0 #e74c3c;
        transition: all 150ms ease-in-out;
        font-weight:bold;
        width: 100%;
        font-size: 12px;
        &:hover {
          box-shadow: 0 0 10px 0 #e74c3c inset, 0 0 10px 4px #e74c3c;
        }
    }
    .types{
        margin-top: 2px;
        font-size: 12px;
        font-weight: bold;
        border-radius: 10px;
        text-align: center;
        width: 124px;
        margin-left: -14px;

        ${media.small_tablets}{
            width: 124px;
            margin-left: -14px;
        }
        
    }
}

`;
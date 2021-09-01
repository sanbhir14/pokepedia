import styled from "styled-components";

const media = {
    ltablet_laptop: '@media(min-width: 960px)',
    small_tablets: '@media(min-width: 620px)',
    desktop: '@media(min-width: 1200px)'
}

export const PokemonsWrap = styled.div`
    justify-content:center;
    align-items:center;
    h1{
        text-align: center;
    }
    .page-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .card-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 17px;
        grid-row-gap: 20px;
        margin-top: 8px;

        ${media.small_tablets}{
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 52px;
            grid-row-gap: 44px;
            margin-top: 22px;
        }
        ${media.ltablet_laptop}{
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-column-gap: 52px;
            grid-row-gap: 44px;
            margin-top: 22px;
        }
        ${media.desktop}{
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-column-gap: 52px;
            grid-row-gap: 44px;
            margin-top: 22px;
        }
    }
`;
import styled, { css } from 'styled-components/macro';
import { shade } from 'polished';

// Importa a estilização comum "ContentWrapper" para que seja possível alterar suas propriedades
import { ContentWrapper } from '../../styles/common/HomeStyledComponents';

// Importa as configurações de quebra das telas
import breakPoints from '../../styles/config/breakPoints';

const wrapperMaxWidth = '153rem';

export const SearchContainer = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 10.9rem;
  margin: 5rem auto 7rem;
  padding: 0 4rem;

  .col-7 {
    padding: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  form {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 85.8rem;
    height: 5.2rem;

    border-radius: 3.2rem;
    background: var(--color-background-secondary);

    button:first-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 13.4rem;
      height: 100%;

      background: none;
      font: normal 1.3rem/1.6rem var(--font-primary);

      img:first-of-type {
        width: 1.1rem;
        margin-left: 2.3rem;
      }
    }

    input {
      flex: 1;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 3rem;
      background: none;
      font: normal 1.6rem/1.9rem var(--font-primary);

      &::placeholder {
        color: #b9b9b9;
      }
    }

    button:last-of-type {
      display: flex;
      width: 10.4rem;
      height: 100%;
      background: var(--color-primary);

      svg {
        margin: auto;
        transform: scaleX(-1);
      }
    }
  }

  .sugestions {
    overflow-x: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 85.8rem;

    p {
      font: normal 1.3rem/1.6rem var(--font-primary);
      margin-right: 3vw;
    }

    button {
      padding: 0.3rem 1rem;
      border: 1px solid var(--color-background-secondary);
      border-radius: 1.6rem;
      background: none;
      font: normal 1.3rem/1.6rem var(--font-primary);

      & + button {
        margin-left: 0.4vw;
      }
    }
  }

  aside {
    overflow: hidden;
    width: 100%;
    height: 10.9rem;
    padding-left: 5rem;
    padding-right: 0;
    border-radius: 0.9rem;

    > div {
      position: relative;

      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 0.9rem;
    }

    .text {
      position: absolute;
      z-index: 3;
      top: 0;
      right: 0;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 1.2rem min(2vw, 5rem) 1.1rem 0;

      h4 {
        font: bold 2.4rem/2.4rem var(--font-primary);
        color: var(--color-primary);
      }

      p {
        max-width: 31.7rem;
        font: normal 1.4rem/1.6rem var(--font-primary);
        color: var(--color-text-white);
      }

      a {
        font: bold 1.4rem/1.4rem var(--font-primary);
        color: var(--color-primary);
      }

      img {
        position: absolute;
        right: 36.7rem;
        top: 0;
        height: 10.9rem;
      }

      .triangle {
        position: absolute;
        right: 37rem;
        top: 0;
        z-index: -1;
        height: 0;
        width: 0;
        border-left: 0px solid transparent;
        border-right: 18px solid #141414;
        border-bottom: 55px solid transparent;
        border-top: 55px solid transparent;
        opacity: 0.65;
      }

      .filter {
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        height: 10.9rem;
        width: 37rem;
        background: #141414;
        opacity: 0.65;
      }
    }

    > img {
      width: 100%;
      height: 100%;

      border-radius: 0.9rem;

      object-fit: cover;
    }
  }
`;

export const CarouselContainer = styled.article`
  width: 100%;

  ${ContentWrapper} {
    display: flex;
    flex-direction: column;
    margin: 0 auto 8rem;
  }
`;

export const LaunchCard = styled.div`
  overflow: hidden;
  position: relative;
  max-width: 34.8rem;
  width: 95%;
  height: 31.9rem;
  margin: 0 auto;
  border-radius: 1rem;

  > div {
    z-index: +2;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 3rem;
    color: var(--color-text-white);

    span {
      font: normal 1.5rem/1.5rem var(--font-primary);
    }

    h4 {
      width: 101%;
      margin-top: 1.5rem;
      font: bold 2.5rem/2.5rem var(--font-primary);
    }

    p {
      font: normal 2rem/2.5rem var(--font-primary);
    }
  }

  .filter {
    z-index: +1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.53;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const HighlightsContainer = styled.article`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 52.5rem;
  margin: 3rem 0;

  @media screen and (max-width: ${breakPoints.phone}) {
    height: 75rem;
  }

  ${props =>
    props.extraMargin &&
    css`
      margin-top: 13rem;
    `}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${ContentWrapper} {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    > section {
      width: 27.5rem;
      color: var(--color-text-white);

      h5 {
        font: normal 2rem/2.4rem var(--font-primary);
        margin-bottom: 2rem;
      }

      h3 {
        font: normal 3rem/2.5rem var(--font-primary);
        margin-bottom: 0.8rem;
      }

      h4 {
        font: normal 2rem/2.5rem var(--font-primary);
        margin-bottom: 0.8rem;
      }

      > span {
        display: block;
        max-width: 18rem;
        font: normal 1.5rem/2rem var(--font-primary);
        color: var(--color-primary);

        strong {
          font: normal 3.5rem/2rem var(--font-primary);
        }

        & + span {
          margin-top: 1rem;
        }
      }

      p {
        font: normal 1.5rem/2rem var(--font-primary);
      }

      a {
        display: block;
        width: fit-content;
        margin: 1.8rem 0;
      }
    }

    > aside {
      width: 75%;
      max-width: 108.2rem;

      h5 {
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #bfbfbf;
        font: normal 2rem/2.4rem var(--font-primary);
        color: var(--color-text-white);
      }
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
      > aside {
        width: 70%;
      }
    }

    @media screen and (max-width: ${breakPoints.tabletPortrait}) {
      > aside {
        width: 60%;
      }
    }

    @media screen and (max-width: ${breakPoints.phone}) {
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding-top: 3rem;
      padding-bottom: 3rem;

      > section {
        width: 100%;
      }

      > aside {
        width: 100%;
      }
    }
  }

  .filters-container {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 60rem;
    height: 100%;
  }

  .triangle {
    position: absolute;
    right: -21rem;
    top: 0;
    z-index: -1;
    height: 0;
    width: 0;
    border-left: 210px solid #141414;
    border-right: 0px solid transparent;
    border-bottom: 263px solid transparent;
    border-top: 263px solid transparent;
    opacity: 0.85;
  }

  .filter {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 200rem;
    background: #141414;
    border-right: 1px solid #141414;
    opacity: 0.85;
  }

  .filter-white {
    position: absolute;
    right: 0;
    top: 0;
    z-index: +1;
    height: 100%;
    width: 100%;
    background: #ffffff;
    opacity: 0.69;
  }

  .filter-black {
    position: absolute;
    right: 0;
    top: 0;
    z-index: +1;
    height: 100%;
    width: 100%;
    background: #000000;
    opacity: 0.36;
  }
`;

export const HighlightsCard = styled.div`
  overflow: hidden;
  position: relative;
  width: 95%;
  max-width: 25.8rem;
  height: 26.7rem;
  margin: 0 auto;
  border-radius: 0.7rem;
  box-shadow: 0px 3px 6px #00000029;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 15.9rem;
    object-fit: cover;
  }

  div {
    width: 100%;
    height: 10.8rem;
    padding: 1rem 0.5rem 0 1.4rem;
    background: var(--color-background);

    h4 {
      font: normal 1.3rem/1.6rem var(--font-primary);
      color: var(--color-secondary);
    }

    p {
      font: normal 1.5rem/2rem var(--font-primary);
      color: var(--color-text-base);
    }
  }
`;

export const ThemesContainer = styled.article`
  width: 100%;
  margin: 8rem 0;

  ${ContentWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 85.4rem;
    height: 100%;
    margin-right: 1rem;
    padding: 4rem 7rem 7rem 7rem;
    border-radius: 1.5rem;
    background: var(--color-background-secondary);

    > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
    }

    h2 {
      font: normal 2.5rem/3rem var(--font-primary);
      color: var(--color-secondary);
      text-transform: uppercase;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13.5rem;
      height: 3.6rem;
      margin: 4rem 0 1rem;
      padding: 0 1rem;
      border: 1px solid #bfbfbf;
      border-radius: 2.2rem;
      font: normal 1.2rem/1.5rem var(--font-primary);
      color: #535353;
      background: var(--color-background);
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
      transition: background-color 0.2s;

      :hover {
        background: ${shade(0.2, '#ffffff')};
      }

      &.themes {
        font-size: 1.4rem;
        background: var(--color-primary);

        &:hover {
          background: var(--color-primary-hover);
        }
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  @media screen and (max-width: ${breakPoints.tabletPortrait}) {
    ${ContentWrapper} {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    section {
      margin-bottom: 3rem;
      padding: 2rem 2.8rem 2.8rem;

      a {
        width: 47%;
        margin-top: 1rem;
      }
    }
  }

  aside {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 55.6rem;
    height: 31rem;
    border-radius: 2rem;

    h3 {
      z-index: +2;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 75%;
      font: normal 2.2rem/2.4rem var(--font-primary);
      color: var(--color-text-white);
      text-align: center;
    }

    a {
      z-index: +2;
      position: absolute;
      bottom: 3rem;
      right: 4rem;
    }

    .filter {
      z-index: +1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #4b8a67;
      opacity: 0.74;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const CareerCard = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 34.8rem;
  height: 43.9rem;
  margin: 0 auto;
  border-radius: 0.9rem;
  box-shadow: 0px 3px 6px #00000029;

  img {
    width: 100%;
    height: 17.7rem;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 26.2rem;
    padding: 1.8rem 3rem 1.8rem;
    background: #408b68;

    h4 {
      margin-bottom: 0.8rem;
      font: normal 2.5rem/2.5rem var(--font-primary);
      color: var(--color-text-white);
    }

    p {
      font: normal 2rem/2.5rem var(--font-primary);
      color: var(--color-text-white);
    }

    div {
      align-self: center;
      justify-self: flex-end;
    }

    a {
      display: block;
    }
  }
`;

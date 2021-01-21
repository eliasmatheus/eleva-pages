import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { BiSearchAlt } from 'react-icons/bi';
import {
  Container,
  CarouselContainer,
  CarouselButton,
  Hero,
  SearchSection,
  TrackCard,
} from './styles';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Icons
import CoursesIcon from '../../assets/images/icons/courses-icon-02.svg';
import HeroDetail from '../../assets/images/other/hero-detail.svg';
import FilterIcon from '../../assets/images/icons/filter-icon.svg';
import BitwiseImg from '../../assets/images/icons/bitwise.svg';
import CardDetail from '../../assets/images/other/card-detail.svg';

import Header from '../../components/headers/MainHeader';
import Footer from '../../components/footers/MainFooter';

// Mockups
import HeroImg from '../../assets/images/mockups/home-trilhas/person-touching-open-macbook-on-table-839465.png';
import PremiumCardImg from '../../assets/images/mockups/home-trilhas/person-in-blue-shirt-wearing-black-round-analog-watch-3747106.png';
import TrackImg from '../../assets/images/mockups/home-trilhas/Grupo 843.png';
import TrackImg02 from '../../assets/images/mockups/home-trilhas/soybeans-4019684_960_720.png';
import TrackImg03 from '../../assets/images/mockups/home-trilhas/thumbnail-10.png';

const HomeTracks = () => {
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  // Funções para teste
  const handleLogin = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'free');

    setViewerStatus('free');
  }, []);

  const backToVisit = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'visit');

    setViewerStatus('visit');
  }, []);

  const becomePremium = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'premium');

    setViewerStatus('premium');
  }, []);

  const responsive = {
    0: { items: 3 },
    1100: { items: 4 },
    1530: { items: 4 },
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronLeft size={30} />
      </CarouselButton>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronRight size={30} />
      </CarouselButton>
    );
  };

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      <Hero>
        <div className="hero-img">
          <img src={HeroImg} className="image" alt="Hero" />
        </div>

        <div className="content-wrapper">
          <div className="page-title">
            <h1>
              <img src={CoursesIcon} alt="TRILHAS DE ENSINO" />
              TRILHAS DE ENSINO
            </h1>
            <h2>EDUCAÇÃO NO AGRO ELEVADA A OUTRO NÍVEL.</h2>
            <p>
              Montamos grades de ensino com nossos cursos para o seu melhor
              aprendizado.
            </p>
          </div>

          <div className="details-container">
            <img src={HeroDetail} className="detail" alt="Hero" />
            <div className="triangle" />
            <div className="filter" />
          </div>
        </div>
      </Hero>

      <SearchSection className="row">
        <section className="col-7">
          <form className="search-container">
            <button type="button">
              <img src={FilterIcon} alt="Filtrar" />
              CATEGORIA
              <img src={BitwiseImg} alt="" />
            </button>
            <input type="text" placeholder="Localizar uma trilha" />
            <button type="submit">
              <BiSearchAlt size={20} />
            </button>
          </form>

          <div className="sugestions">
            <p>Sugestões:</p>
            <button type="button">SOJA</button>
            <button type="button">DOENÇAS</button>
            <button type="button">SEMENTES</button>
            <button type="button">NUTRIÇÃO</button>
            <button type="button">DANINHAS</button>
            <button type="button">SOLOS</button>
            <button type="button">GESTÃO</button>
            <button type="button">FINANÇAS</button>
          </div>
        </section>

        <aside className="col-5">
          <div>
            <div className="text">
              <h4>Descontos Premium</h4>
              <p>
                Associado Premium tem grandes descontos e promoções exclusivas
                em todos as trilhas.
              </p>
              <Link to="/">Saiba mais</Link>
              <img src={CardDetail} alt="" />
              <div className="triangle" />
              <div className="filter" />
            </div>

            <img src={PremiumCardImg} alt="" />
          </div>
        </aside>
      </SearchSection>

      <CarouselContainer>
        <header>
          <h3>LANÇAMENTOS</h3>
          <div className="border-bottom" />
          <Link to="/">VER TODAS</Link>
        </header>

        <AliceCarousel
          responsive={responsive}
          mouseTracking
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
          <TrackCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>FERRUGEM 360º</h4>
                <p>Visão completa para o domínio da soja.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </div>
            <span className="filter" />
            <img src={TrackImg} alt="" />
          </TrackCard>

          <TrackCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>VENDAS DE INSUMOS AGRÍCOLAS </h4>
                <p>
                  Aumente suas skills de vendas fortaleça o seu argumentario.
                </p>
              </div>

              <Link to="/">Saiba mais</Link>
            </div>
            <span className="filter" />
            <img src={TrackImg02} alt="" />
          </TrackCard>

          <TrackCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>PERCEVEJOS</h4>
                <p>Conhecimento garantido para o combate.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </div>
            <span className="filter" />
            <img src={TrackImg03} alt="" />
          </TrackCard>

          <TrackCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>FERRUGEM 360º</h4>
                <p>Visão completa para o domínio da soja.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </div>
            <span className="filter" />
            <img src={TrackImg} alt="" />
          </TrackCard>

          <TrackCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>FERRUGEM 360º</h4>
                <p>Visão completa para o domínio da soja.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </div>
            <span className="filter" />
            <img src={TrackImg} alt="" />
          </TrackCard>

          <TrackCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>VENDAS DE INSUMOS AGRÍCOLAS </h4>
                <p>
                  Aumente suas skills de vendas fortaleça o seu argumentario.
                </p>
              </div>

              <Link to="/">Saiba mais</Link>
            </div>
            <span className="filter" />
            <img src={TrackImg02} alt="" />
          </TrackCard>

          <TrackCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>PERCEVEJOS</h4>
                <p>Conhecimento garantido para o combate.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </div>
            <span className="filter" />
            <img src={TrackImg03} alt="" />
          </TrackCard>
        </AliceCarousel>
      </CarouselContainer>

      <Footer />
    </Container>
  );
};

export default HomeTracks;

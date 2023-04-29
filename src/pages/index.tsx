import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import { PlanetServices } from 'services/planet-service';
import { ListPlanet } from 'components/list-planet';
import { ListContainer } from 'components/template/list';
import { BodyContainer } from 'components/template/body-container';
import Image from 'next/image';
import { Footer, FooterLogo } from 'components/template/footer';
import IPlanet from 'dto/planet';
import { ButtonOutline } from 'components/template/button-outline';

const Home: NextPage = () => {
  const refPlanets = useRef<HTMLUListElement>(null);
  const services = PlanetServices(refPlanets);

  return (
    <BodyContainer>
      <Head>
        <title>Test Frontend Developer React</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ButtonOutline href="/wishlist">Wish List</ButtonOutline>
      <ListContainer role="list" onScroll={services.onScroll} ref={refPlanets}>
        {services.planets.length > 0 ? (
          services.planets.map((planet: IPlanet, idx) => <ListPlanet planet={planet} key={idx} />)
        ) : (
          <li></li>
        )}
      </ListContainer>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <FooterLogo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </FooterLogo>
        </a>
      </Footer>
    </BodyContainer>
  );
};

export default Home;

import { RefObject, useEffect, useState } from 'react';
import IPlanet, { IPlanets } from 'dto/planet';

export function PlanetServices(ref: RefObject<HTMLUListElement>) {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [currPage, setCurrPage] = useState(1); // storing current page number
  const [prevPage, setPrevPage] = useState(0); // storing prev page number
  const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list
  useEffect(() => {
    const get = async () => {
      try {
        let res = await fetch(`https://swapi.dev/api/planets?page=${currPage}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const resJSON: IPlanets = await res.json();
        if ('details' in resJSON) {
          setWasLastList(true);
        } else {
          if (!resJSON.next) {
            setWasLastList(true);
          }
          setPrevPage(currPage);
          setPlanets([...planets, ...resJSON.results]);
        }
      } catch (e) {
        setWasLastList(true);
        console.log('ERR: ', e);
      }
    };
    if (!wasLastList && prevPage !== currPage) {
      get();
    }
  }, [currPage, planets, prevPage, wasLastList]);

  const onScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        if (wasLastList) {
          alert('This is the last page');
        } else {
          setCurrPage(currPage + 1);
        }
      }
    }
  };

  return { onScroll, planets };
}

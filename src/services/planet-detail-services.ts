import IPlanet from 'dto/planet';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const PlanetDetailService = () => {
  const [planet, setPlanet] = useState<IPlanet>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const getDetail = async (id: string) => {
      try {
        const res = await fetch(`https://swapi.dev/api/planets/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const resJSON = await res.json();
        setPlanet(resJSON);
        console.log('RES:', resJSON);
      } catch (e) {
        console.log('ERR :', e);
      }
    };
    if (id) {
      getDetail(id as string);
    }
  }, [id]);

  return { planet };
};

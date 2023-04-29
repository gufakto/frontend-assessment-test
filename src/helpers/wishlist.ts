import IPlanet from 'dto/planet';

export default function getList(): IPlanet[] {
  const res = typeof window !== 'undefined' ? window.localStorage.getItem(`LIST_PLANET`) : false;
  if (res) {
    return JSON.parse(res) as IPlanet[];
  } else {
    return [];
  }
}

export const setList = (data: IPlanet) => {
  const res = localStorage.getItem(`LIST_PLANET`);
  if (!res) {
    localStorage.setItem(`LIST_PLANET`, JSON.stringify([data]));
  } else {
    const resList: IPlanet[] = JSON.parse(res);
    const temp = [...resList, data];
    localStorage.setItem(`LIST_PLANET`, JSON.stringify(temp));
  }
};

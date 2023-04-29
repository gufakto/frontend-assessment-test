import { People } from 'dto/resident';
import { convertUrlToID } from 'helpers/convert-url-id';
import { useEffect, useState } from 'react';

interface Props {
  url: string;
}

export default function DetailResident({ url }: Props) {
  const id = convertUrlToID(url);
  const [people, setPeople] = useState<People>();

  useEffect(() => {
    const getResident = async (id: string) => {
      try {
        const res = await fetch(`https://swapi.dev/api/people/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const resJSON = await res.json();
        setPeople(resJSON);
      } catch (e) {
        console.log('ERR: ', e);
      }
    };
    if (id) {
      getResident(id);
    }
  }, [id]);

  return (
    <>
      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
        <div className="flex w-0 flex-1 items-center">
          <div className="ml-4 flex min-w-0 flex-1 gap-2">
            <span className="truncate font-medium">{people?.name}</span>
            <span className="flex-shrink-0 text-gray-400">{people?.gender}</span>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <span className="font-medium text-indigo-600 hover:text-indigo-500">
            {people?.birth_year}
          </span>
        </div>
      </li>
    </>
  );
}

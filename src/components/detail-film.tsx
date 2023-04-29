import { Film } from 'dto/film';
import { convertUrlToID } from 'helpers/convert-url-id';
import { timeSince } from 'helpers/readable-time';
import { useEffect, useState } from 'react';

interface Props {
  url: string;
}
export function DetailFilm({ url }: Props) {
  const id = convertUrlToID(url);
  const [film, setFilm] = useState<Film>();

  useEffect(() => {
    const getFilm = async (id: string) => {
      try {
        const res = await fetch(`https://swapi.dev/api/films/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const resJSON = await res.json();
        if (resJSON) {
          setFilm(resJSON);
        }
      } catch (e) {
        console.log('Err, ', e);
      }
    };
    if (id) {
      getFilm(id);
    }
  }, [id]);

  return (
    <>
      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
        <div className="flex w-0 flex-1 items-center">
          <div className="ml-4 flex min-w-0 flex-1 gap-2">
            <span className="truncate font-medium">{film?.title}</span>
            <span className="flex-shrink-0 text-gray-400">{film?.director}</span>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <span className="font-medium text-indigo-600 hover:text-indigo-500">
            {timeSince(film?.created as Date)} ago
          </span>
        </div>
      </li>
    </>
  );
}

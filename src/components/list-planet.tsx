import { timeSince } from 'helpers/readable-time';
import { ListContent } from './template/list';
import { ButtonOutline } from './template/button-outline';
import { numberWithDot } from 'helpers/number-format';
import { convertUrlToID } from 'helpers/convert-url-id';
import IPlanet from 'dto/planet';
import { setList } from 'helpers/wishlist';

interface Props {
  planet: IPlanet;
}

export const ListPlanet = ({ planet }: Props) => {
  return (
    <>
      <ListContent>
        <div className="flex gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">Planet {planet.name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{planet.terrain}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-3 text-gray-900">
            {numberWithDot(planet.population)} <span>Peoples</span>
          </p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Created <time dateTime={planet.created.toString()}>{timeSince(planet.created)}</time>
          </p>
          <ButtonOutline href={`/detail-planet/${convertUrlToID(planet.url)}`}>
            Detail
          </ButtonOutline>
          <ButtonOutline
            onClick={() => {
              setList(planet);
            }}
          >
            Add Item
          </ButtonOutline>
        </div>
      </ListContent>
    </>
  );
};

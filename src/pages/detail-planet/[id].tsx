import { DetailFilm } from 'components/detail-film';
import DetailResident from 'components/detail-resident';
import { ButtonOutline } from 'components/template/button-outline';
import { LoadingPage } from 'components/template/loading';
import { numberWithComa, numberWithDot } from 'helpers/number-format';
import { PlanetDetailService } from 'services/planet-detail-services';

export default function DetailPlanet() {
  const services = PlanetDetailService();

  if (services.planet) {
    return (
      <>
        <div className="px-4">
          <div className="px-4 mx-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Planet Information</h3>
            <span className="float-right mb-3">
              <ButtonOutline href="/">Back</ButtonOutline>
            </span>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              {services.planet?.terrain}
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">name</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {services.planet?.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Population</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {services.planet?.population == 'unknown'
                    ? 'Unknown'
                    : numberWithDot(services.planet?.population as string)}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Diameter</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {numberWithComa(services.planet?.diameter as string)}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Climate</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {services.planet?.climate}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Gravity</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {services.planet?.gravity}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Orbital Period</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {services.planet?.orbital_period}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Rotation Period</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {services.planet?.rotation_period}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Surface Water</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {services.planet?.surface_water}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Residents</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    {services.planet?.residents ? (
                      services.planet?.residents.map((item, idx) => (
                        <DetailResident url={item} key={idx} />
                      ))
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Films</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    {services.planet?.films ? (
                      services.planet?.films.map((item, idx) => <DetailFilm url={item} key={idx} />)
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </>
    );
  } else {
    return <LoadingPage />;
  }
}

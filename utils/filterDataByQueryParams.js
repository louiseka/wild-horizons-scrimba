export const filterDataByQueryParams = (destinations, queryObj) => {
  const { country, continent, is_open_to_public } = queryObj;
  return destinations.filter((destination) => {
    if (!country && !continent && is_open_to_public === undefined) {
      return true;
    }

    let isCountryMatch = true;
    let isContinentMatch = true;
    let isPublicMatch = true;

    if (country) {
      isCountryMatch = destination.country === country;
    }
    if (continent) {
      isContinentMatch = destination.continent === continent;
    }
    if (is_open_to_public !== undefined) {
      isPublicMatch =
        destination.is_open_to_public.toString() === is_open_to_public;
    }
    return isContinentMatch && isCountryMatch && isPublicMatch;
  });
};

export const fetchAddress = async (postalCode) => {
  const response = await fetch(
    `https://developers.onemap.sg/commonapi/search?searchVal=${postalCode}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
  );
  const data = await response.json();
  const address = data.results[0];
  return address;
};

export const fetchHawker = async () => {
  const response = await fetch(
    `https://data.gov.sg/api/action/datastore_search?resource_id=b80cb643-a732-480d-86b5-e03957bc82aa`
  );
  const data = await response.json();
  return data.result.records;
};

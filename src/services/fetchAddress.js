export const fetchAddress = async (postalCode) => {
  const response = await fetch(
    `https://developers.onemap.sg/commonapi/search?searchVal=${postalCode}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
  );
  const data = await response.json();
  const address = data.results[0].ADDRESS;
  return address;
};

export const fetchAddress = async (postalCode) => {
  const response = await fetch(
    `https://developers.onemap.sg/commonapi/search?searchVal=${postalCode}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
  );
  const data = await response.json();
  const address = data.results[0];
  return address;
};

export const fetchHawker = async () => {
  const response = await fetch(`https://api.jael.ee/datasets/hawker`);
  const data = await response.json();
  return data;
};

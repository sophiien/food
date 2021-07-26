const contributorList = [];

const saveContributor = (hawkerName, postalCode, recommendations) => {
  const contributor = {
    hawkerName,
    postalCode,
    recommendations,
  };
  contributorList.push(contributor);
};

const getContributors = () => contributorList;

module.exports = { saveContributor, getContributors };

async function makeQuery(endpoint) {
  try {
    const response = await fetch(endpoint);
    const responseJSON = await response.json();
    return responseJSON.feed.entry;
  } catch (error) {
    throw new Error(error);
  }
}

export { makeQuery }
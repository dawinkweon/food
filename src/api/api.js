import { featureFlags } from "../config/featureFlags";
import { DummyDataUrls } from "./testData";
import { apiConfig } from "./config";

const DATA_ENDPOINT = apiConfig.DATA_ENDPOINT;

export const api = {
  listAllThings: async () => {
    console.debug(`Listing all the things`);
    if (featureFlags.useTestData) {
      console.debug("Using test data since flag is on");
      return DummyDataUrls;
    }

    return await findAllThings();
  },
  findThingsByTag: async (tag) => {
    console.debug(`Performing search with tag: ${tag}`);

    if (featureFlags.useTestData) {
      console.debug("Using test data since flag is on");
      return DummyDataUrls;
    }

    const things = await findAllThings();

    const thingsByTag = things.filter((t) => isIncludedCaseInsensitive(tag, t.tags));
    console.info(
      `API response for find things by tag. tag: ${tag}, response things: ${thingsByTag}`
    );

    return thingsByTag;
  },
};

const findAllThings = async () => {
  const data = await fetch(DATA_ENDPOINT);
  const json = await data.json();
  return json.things;
};

const isIncludedCaseInsensitive = (value, targetValues) => {
  const valuesToLower = targetValues.map(v => v.toLowerCase());
  return valuesToLower.includes(value.toLowerCase());
}
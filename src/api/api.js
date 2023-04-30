import { featureFlags } from "../config/featureFlags";
import { DummyDataUrls } from "./testData";

export const api = {
  search: (value) => {
    console.debug(`Performing search with value: ${value}`);
    // TODO call api to search
    if (featureFlags.useTestData) {
      console.debug("Using test data since flag is on");
      return DummyDataUrls;
    }
    return [];
  },
};

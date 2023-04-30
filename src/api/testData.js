import { faker } from "@faker-js/faker";
import _ from "underscore";

const imageCount = process.env.REACT_APP_SEARCH_RESULT_LIMIT || 100;

const sizes = [
  { height: 480, width: 640 },
  { height: 500, width: 500 },
  { height: 640, width: 480 },
];

const getRandomSize = () => {
  return _.sample(sizes);
}

const DummyDataUrls = _.range(0, imageCount).map(() => {
  const { width, height } = getRandomSize();
  const url = faker.image.food(width, height, true);
  return url;
});

export { DummyDataUrls };

import { faker } from "@faker-js/faker";
import _ from "underscore";

const imageCount = 80;

const sizes = [
  { height: 480, width: 640 },
  { height: 500, width: 500 },
  { height: 640, width: 480 },
];

const Urls = _.range(0, imageCount).map(() => {
  const { width, height } = _.sample(sizes);
  const url = faker.image.food(width, height, true);
  return url;
});

export { Urls };

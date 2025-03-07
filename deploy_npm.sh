rm -rf dist &&
yarn build:c &&
cd dist &&
npm publish
cd -


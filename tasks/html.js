const fs = require('fs');
const { resolve, join, basename } = require('path');
const globby = require('globby');
const handlebars = require('handlebars');
const fm = require('front-matter');

const PATHS = {
  layouts: './src/layouts',
  pages: './src/pages/**/*.hbs',
  partials: './dist/**/*.{js,css}',
  // data: resolve('./data'),
  dest: './dist'
};

// HALP
const readFile = file => fs.readFileSync(file, 'utf8');
const filename = filePath => basename(filePath);
const tmplName = filePath => basename(filePath, '.hbs');
const ymlName = filePath => basename(filePath, '.yml');

const registerPartials = () => {
  globby.sync(PATHS.partials).forEach((file) => {
    let fileName = filename(file);
    let fileOutput = readFile(file);
    handlebars.registerPartial(fileName, fileOutput);
  });
};

const getPageComponents = (pagePath) => {
  const file = readFile(pagePath);
  const frontMatter = fm(file);
  const layoutFile = frontMatter.attributes.layout || 'layout';
  // let dataFile = frontMatter.attributes.dataFile;
  return {
    layout: getLayout(layoutFile),
    data: frontMatter.attributes,
    // data: getData(dataFile),
    body: frontMatter.body,
    rename: frontMatter.attributes.rename
  };
};

const getLayout = (layoutFileName) => {
  const layoutFilePath = join(PATHS.layouts, `${layoutFileName}.hbs`);
  const layout = readFile(layoutFilePath);
  return layout;
};

// const getData = (dataFiles) => {
//   if (!dataFiles) return {};
//   let dataFilePaths = path.join(PATHS.data, `${ dataFiles }.yml`);
//   let glob = globby.sync(dataFilePaths);
//   return glob.reduce((data, file) => {
//     let key = ymlName(file);
//     let val = YAML.parse(readFile(file));
//     data[key] = val;
//     return data;
//   }, {});
// };

const renderPage = (pagePath) => {
  const { data, body, layout, rename } = getPageComponents(pagePath);
  const pageTemplate = handlebars.compile(body);
  // const pageData = Object.assign(pageComponents.data, { pkg: pkg });
  const renderedPage = pageTemplate(data);

  const layoutTemplate = handlebars.compile(layout);
  const renderedLayout = layoutTemplate({ ...data, body: renderedPage });

  let pageName = rename ? rename : tmplName(pagePath);

  return {
    name: pageName,
    content: renderedLayout || renderedPage
  };
}

const isPage = (pathToTest) => {
  if (!pathToTest) return false;
  const pagesDir = './src/templates/pages';
  const fileName = path.basename(pathToTest);
  const pages = fs.readdirSync(pagesDir);
  return pages.indexOf(fileName) > -1;
};

function doTheThing($event, $file) {
  // registerHelpers();
  registerPartials();

  globby.sync(PATHS.pages).forEach((pagePath) => {
    const page = renderPage(pagePath);
    const destination = join(PATHS.dest, `${page.name}.html`);
    fs.writeFileSync(destination, page.content);
  });
};

doTheThing();

module.exports = doTheThing;

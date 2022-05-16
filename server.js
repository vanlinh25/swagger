const { generateApi } = require('swagger-typescript-api');
const path = require('path');

generateApi({
  name: 'alphabetMobile.api.ts',
  output: path.resolve(process.cwd(), './services/modules'),
  url: 'https://dev.tmonline.vn/back-office/v2/api-docs',
  httpClientType: 'axios',
  generateClient: true,
  generateRouteTypes: false,
  generateResponses: true,
  modular: true,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: 'all',
    parser: 'typescript',
  },
  cleanOutput: true,
  moduleNameFirstTag: true,
  generateUnionEnums: false,
  extraTemplates: [],
}).catch(e => console.error(e));

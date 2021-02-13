module.exports = function (plop) {
  plop.setGenerator('template', {
    description: 'template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Template name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  });
};

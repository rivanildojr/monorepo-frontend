module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'], // Tipo deve ser em lowercase
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nova feature
        'fix', // Correção de bug
        'docs', // Documentação
        'style', // Formatação, sem mudança de código
        'refactor', // Refatoração
        'perf', // Melhoria de performance
        'test', // Testes
        'build', // Build system ou dependências
        'ci', // CI/CD
        'chore', // Outras mudanças
        'revert', // Reverter commit
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        // Modulos
        'ui',
        'core',
        'styles',
        'icons',

        // Apps
        'cvcrm',
        'portal-cliente',
        'storybook',
        'docs',

        // Configs
        'vscode',
        'eslint',
        'stylelint',
        'commitlint',
        'editorconfig',
        'prettier',
        'deps',
        'config',
      ],
    ],
    'scope-empty': [2, 'never'], // Escopo não pode ser vazio
    'subject-case': [0], // Permite qualquer case no subject
    'subject-max-length': [2, 'always', 72], // Limite de 72 caracteres no subject
    'subject-empty': [2, 'never'], // Subject não pode ser vazio
    'subject-full-stop': [2, 'never', '.'], // Subject não deve terminar com ponto
    'body-empty': [0], // Aviso se o body estiver vazio
  },
};

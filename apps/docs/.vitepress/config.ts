import { defineConfig } from 'vitepress';
import path from 'path';

export default defineConfig({
  title: 'Documentação CVCRM',
  description: 'Documentação para o time de desenvolvimento e produto CVCRM',
  base: '/',
  lang: 'pt-BR',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentação', link: '/docs/documentacao/' },
    ],

    logo: {
      dark: '/logo-white.svg',
      light: '/logo.svg',
    },

    siteTitle: '',

    footer: {
      message: 'Feito com ❤️ pela equipe CVCRM',
      copyright: 'Copyright © 2025 CVCRM',
    },

    sidebar: [
      {
        text: 'Design',
        base: '/docs/design/',
        collapsed: false,
        items: [
          {
            text: 'Guia de Início',
            collapsed: false,
            items: [{ text: 'Introdução', link: '/markdown-examples/' }],
          },
        ],
      },
      {
        text: 'Frontend',
        base: '/docs/frontend/',
        collapsed: false,
        items: [
          {
            text: 'Guia de Início',
            collapsed: false,
            items: [
              { text: 'Introdução', link: '/guia-inicio/' },
              { text: 'Instalação', link: '/guia-inicio/instalacao' },
              {
                text: 'Planejamento do Projeto',
                link: '/guia-inicio/planejamento',
              },
            ],
          },
          {
            text: 'Design System',
            collapsed: false,
            items: [
              { text: 'Visão Geral', link: '/design-system/' },
              {
                text: 'Tokens de Design',
                collapsed: false,
                items: [{ text: 'Cores', link: '/design-system/tokens/cores' }],
              },
              {
                text: 'Componentes',
                collapsed: false,
                items: [
                  { text: 'Visão Geral', link: '/design-system/componentes/' },
                ],
              },
              {
                text: 'Estilos',
                collapsed: true,
                items: [
                  { text: 'ITCSS', link: '/design-system/estilos/itcss' },
                ],
              },
            ],
          },
          {
            text: 'Arquitetura',
            collapsed: false,
            items: [{ text: 'Visão Geral', link: '/arquitetura/' }],
          },
          {
            text: 'Configuração',
            collapsed: false,
            items: [{ text: 'Visão Geral', link: '/configuracao/' }],
          },
          {
            text: 'Qualidade de Código',
            collapsed: false,
            items: [{ text: 'Visão Geral', link: '/qualidade-codigo/' }],
          },
          {
            text: 'Guias Práticos',
            collapsed: false,
            items: [{ text: 'Visão Geral', link: '/guias/' }],
          },
          {
            text: 'Core',
            collapsed: false,
            items: [{ text: 'Visão Geral', link: '/core/' }],
          },
          {
            text: 'Storybook',
            collapsed: false,
            items: [{ text: 'Visão Geral', link: '/storybook/' }],
          },
        ],
      },
      {
        text: 'Backend',
        base: '/docs/backend/',
        collapsed: false,
        items: [
          {
            text: 'Guia de Início',
            collapsed: false,
            items: [{ text: 'Introdução', link: '/api-examples/' }],
          },
        ],
      },
      {
        text: 'Documentação',
        base: '/docs/documentacao/',
        collapsed: false,
        items: [{ text: 'Visão Geral', link: '/' }],
      },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar',
          },
          modal: {
            noResultsText: 'Nenhum resultado encontrado',
            resetButtonTitle: 'Limpar busca',
            footer: {
              selectText: 'para selecionar',
              navigateText: 'para navegar',
              closeText: 'para fechar',
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Construtor-de-Vendas' },
      { icon: 'storybook', link: 'https://github.com/Construtor-de-Vendas' },
    ],

    docFooter: {
      prev: 'Página Anterior',
      next: 'Próxima Página',
    },

    lastUpdated: {
      text: 'Última Atualização',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        '@/docs': path.resolve(__dirname, './src'),
        '@monorepo-frontend/core': path.resolve(
          __dirname,
          '../../../libs/core/src',
        ),
        '@monorepo-frontend/icons': path.resolve(
          __dirname,
          '../../../libs/icons/src',
        ),
        '@monorepo-frontend/styles': path.resolve(
          __dirname,
          '../../../libs/styles/src',
        ),
        '@monorepo-frontend/ui': path.resolve(
          __dirname,
          '../../../libs/ui/src',
        ),
      },
    },
  },
});

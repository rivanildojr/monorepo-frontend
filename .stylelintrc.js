module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [
      //  1. Display
      {
        groupName: 'Display',
        emptyLineBefore: 'never',
        properties: [
          'display'

          // Flexbox
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'flex-direction',
          'flex-wrap',
          'flex-flow',
          'justify-content',
          'align-items',
          'align-content',
          'align-self',
          'order',
          'gap',
          'row-gap',
          'column-gap',

          // Grid
          'grid',
          'grid-template',
          'grid-template-columns',
          'grid-template-rows',
          'grid-template-areas',
          'grid-auto-columns',
          'grid-auto-rows',
          'grid-auto-flow',
          'grid-column',
          'grid-row',
          'grid-area',
        ]
      },

      // 2. Positioning
      {
        groupName: 'Positioning',
        emptyLineBefore: 'always',
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'float',
          'clear',
        ]
      },

      // 3. Box Model
      {
        groupName: 'Box Model',
        emptyLineBefore: 'always',
        properties: [
          // Conteúdo
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',

          // Padding
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',

          // Border
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'border-style',
          'border-top-style',
          'border-right-style',
          'border-bottom-style',
          'border-left-style',
          'border-color',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset',

          // Margin
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',

          // Box sizing
          'box-sizing',
          'overflow',
          'overflow-x',
          'overflow-y',
        ]
      },

      // 4. Colors & Typography
      {
        groupName: 'Colors & Typography',
        emptyLineBefore: 'always',
        properties: [
          // Background
          'background',
          'background-color',
          'background-image',
          'background-position',
          'background-size',
          'background-repeat',
          'background-attachment',
          'background-clip',
          'background-origin',

          // Colors
          'color',

          // Typography
          'font',
          'font-family',
          'font-size',
          'font-weight',
          'font-style',
          'font-variant',
          'font-size-adjust',
          'font-stretch',
          'line-height',
          'letter-spacing',
          'text-align',
          'text-indent',
          'text-decoration',
          'text-transform',
          'white-space',
          'word-spacing',
          'text-overflow',
          'text-shadow',
          'vertical-align',
        ]
      }

      // 5. Others
      {
        groupName: 'Others',
        emptyLineBefore: 'always',
        properties: [
          // Visibility
          'visibility',
          'opacity',

          // Transforms
          'transform',
          'transform-origin',
          'transform-style',

          // Transitions & Animations
          'transition',
          'transition-property',
          'transition-duration',
          'transition-timing-function',
          'transition-delay',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
          'animation-fill-mode',
          'animation-play-state',

          // Cursor
          'cursor',
          'pointer-events',
          'user-select',

          // Others
          'box-shadow',
          'filter',
          'resize',
          'appearance',
          'content',
          'list-style',
          'list-style-type',
          'list-style-position',
          'list-style-image',
          'table-layout',
        ]
      }
    ],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9-]*$',
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'declaration-empty-line-before': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use', 'forward', 'mixin', 'include', 'extend', 'apply', 'layer']
      }
    ],
  },
}

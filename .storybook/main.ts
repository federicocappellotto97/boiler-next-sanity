import type { StorybookConfig } from '@storybook/nextjs'

import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-styling-webpack', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve ??= {}
    config.resolve.alias ??= {}
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  },
}
export default config

import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    //hide className control
    className: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Component: Story = {
  render: ({ children }) => (
    <Button
      onClick={() => {
        alert('clicked')
      }}
    >
      {children}
    </Button>
  ),
}

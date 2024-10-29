import type { Meta, StoryObj } from '@storybook/react'
import { Button } from "./Button.tsx";


const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const BasicButton: Story = {
  args: {
    children: 'Basic Button',
  },
}

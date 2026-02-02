import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sticky: {
      control: "boolean",
      description: "Sticky navigation bar",
    },
    showCart: {
      control: "boolean",
      description: "Show cart button",
    },
    cartCount: {
      control: "number",
      description: "Cart item count",
    },
    showUser: {
      control: "boolean",
      description: "Show user button",
    },
    userName: {
      control: "text",
      description: "User name (if logged in)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {},
};

export const WithCartItems: Story = {
  args: {
    cartCount: 3,
  },
};

export const LoggedIn: Story = {
  args: {
    userName: "John Doe",
    cartCount: 5,
  },
};

export const WithoutCart: Story = {
  args: {
    showCart: false,
  },
};

export const WithoutUser: Story = {
  args: {
    showUser: false,
  },
};

export const CustomLinks: Story = {
  args: {
    links: [
      { label: "Destinations", href: "/destinations" },
      { label: "Itineraries", href: "/itineraries" },
      { label: "Places", href: "/places" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const NonSticky: Story = {
  args: {
    sticky: false,
  },
};

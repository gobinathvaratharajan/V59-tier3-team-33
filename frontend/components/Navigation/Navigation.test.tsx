import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, test } from "vitest";
import { Navigation } from "./Navigation";

test("renders navigation with logo", () => {
  render(<Navigation />);
  expect(screen.getByAltText("JoyRoute")).toBeDefined();
});

test("renders default navigation links", () => {
  render(<Navigation />);
  expect(screen.getByRole("link", { name: /home/i })).toBeDefined();
  expect(screen.getByRole("link", { name: /categories/i })).toBeDefined();
  expect(screen.getByRole("link", { name: /about/i })).toBeDefined();
});

test("renders custom navigation links", () => {
  const customLinks = [
    { label: "Destinations", href: "/destinations" },
    { label: "Itineraries", href: "/itineraries" },
  ];
  render(<Navigation links={customLinks} />);
  expect(screen.getByRole("link", { name: /destinations/i })).toBeDefined();
  expect(screen.getByRole("link", { name: /itineraries/i })).toBeDefined();
});

test("displays cart count badge when showCart is true", () => {
  render(<Navigation showCart cartCount={5} />);
  expect(screen.getByText("5")).toBeDefined();
});

test("displays 9+ when cart count exceeds 9", () => {
  render(<Navigation showCart cartCount={15} />);
  expect(screen.getByText("9+")).toBeDefined();
});

test("renders login button when user is not logged in", () => {
  render(<Navigation showUser />);
  expect(screen.getByRole("button", { name: /login/i })).toBeDefined();
});

test("renders user name when logged in", () => {
  render(<Navigation showUser userName="John Doe" />);
  expect(screen.getByText(/john doe/i)).toBeDefined();
});

test("does not render cart when showCart is false", () => {
  render(<Navigation showCart={false} />);
  const cartButtons = screen.queryAllByLabelText(/shopping cart/i);
  expect(cartButtons.length).toBe(0);
});

test("toggles mobile menu", async () => {
  const user = userEvent.setup();
  render(<Navigation />);

  const menuButton = screen.getByLabelText(/toggle menu/i);
  await user.click(menuButton);

  // Mobile menu should be visible
  const mobileLinks = screen.getAllByRole("link", { name: /home/i });
  expect(mobileLinks.length).toBeGreaterThan(1); // Desktop + Mobile
});

test("applies sticky positioning", () => {
  const { container } = render(<Navigation sticky />);
  const nav = container.querySelector("nav");
  expect(nav?.className).toContain("sticky");
});

test("does not apply sticky positioning when sticky is false", () => {
  const { container } = render(<Navigation sticky={false} />);
  const nav = container.querySelector("nav");
  expect(nav?.className).not.toContain("sticky");
});

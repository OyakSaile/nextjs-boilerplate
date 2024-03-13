import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/ui/header";

it("Should render a header", () => {
  render(<Header />);
  screen.debug();
  expect(document.querySelector("h1")).not.toBeNull();
});

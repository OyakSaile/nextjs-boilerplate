import { expect,  it} from "vitest";
import { render } from "@testing-library/react";
import HomePage from "../../app/(home)/page";

it("Should render a home page", () => {
  render(<HomePage />);
  expect(document.querySelector("h1")?.textContent).toBe("Crie anotações incríveis");
});

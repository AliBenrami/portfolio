import { render, screen } from "@testing-library/react";
import type { ImgHTMLAttributes } from "react";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt ?? ""} />
  ),
}));

describe("Navbar", () => {
  it('marks active nav item with aria-current="page"', () => {
    (usePathname as jest.Mock).mockReturnValue("/projects");

    render(<Navbar />);

    const projectsLink = screen.getByRole("link", { name: "Projects" });
    const homeLink = screen.getByRole("link", { name: "Home" });

    expect(projectsLink).toHaveAttribute("aria-current", "page");
    expect(homeLink).not.toHaveAttribute("aria-current");
  });
});

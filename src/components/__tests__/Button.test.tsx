import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  it("renders an internal link when href is local", () => {
    render(<Button href="/projects">View Projects</Button>);

    const link = screen.getByRole("link", { name: "View Projects" });
    expect(link).toHaveAttribute("href", "/projects");
  });

  it("renders target and rel for external links", () => {
    render(
      <Button href="https://github.com/AliBenrami" external>
        GitHub
      </Button>
    );

    const link = screen.getByRole("link", { name: "GitHub" });
    expect(link).toHaveAttribute("href", "https://github.com/AliBenrami");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not force new-tab attributes for mailto links", () => {
    render(
      <Button href="mailto:abenrami06@gmail.com" external>
        Email
      </Button>
    );

    const link = screen.getByRole("link", { name: "Email" });
    expect(link).toHaveAttribute("href", "mailto:abenrami06@gmail.com");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });
});

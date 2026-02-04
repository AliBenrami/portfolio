import { projects } from "@/data/projects";

describe("projects data", () => {
  it("contains at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("ensures required fields exist for each project", () => {
    for (const project of projects) {
      expect(project.title.trim().length).toBeGreaterThan(0);
      expect(project.description.trim().length).toBeGreaterThan(0);
      expect(project.tags.length).toBeGreaterThan(0);
      for (const tag of project.tags) {
        expect(tag.trim().length).toBeGreaterThan(0);
      }
    }
  });
});

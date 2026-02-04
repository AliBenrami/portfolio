import {
  personalInfo,
  highlights,
  experiences,
  skills,
  featuredSkills,
} from "@/data/resume";

describe("resume data", () => {
  it("has non-empty personal info", () => {
    expect(personalInfo.name.trim().length).toBeGreaterThan(0);
    expect(personalInfo.title.trim().length).toBeGreaterThan(0);
    expect(personalInfo.contactLinks.length).toBeGreaterThan(0);
  });

  it("has non-empty sections", () => {
    expect(highlights.length).toBeGreaterThan(0);
    expect(experiences.length).toBeGreaterThan(0);
    expect(skills.languages.length).toBeGreaterThan(0);
    expect(skills.frameworks.length).toBeGreaterThan(0);
    expect(skills.tools.length).toBeGreaterThan(0);
    expect(featuredSkills.length).toBeGreaterThan(0);
  });
});

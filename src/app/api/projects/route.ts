import { NextResponse } from "next/server";
import * as fs from "fs/promises";
import path from "path";

// src/app/api/projects/route.ts

export interface Project {
  id: string;
  projectName: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

const dataFilePath = path.join(process.cwd(), "src/data/projects.json");
console.log("Data file path:", dataFilePath);

// Helper to read projects
async function getProjects(): Promise<Project[]> {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch {
    // If file doesn't exist yet, return empty array
    return [];
  }
}

// Helper to save projects
async function saveProjects(projects: Project[]): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), "utf8");
}

// GET all projects
export async function GET() {
  const projects = await getProjects();
  return NextResponse.json(projects);
}

// POST to create a new project
export async function POST(request: Request) {
  try {
    const newProject = await request.json();

    // Add ID if not provided
    if (!newProject.id) {
      newProject.id = Date.now().toString();
    }

    const projects = await getProjects();
    projects.push(newProject);
    await saveProjects(projects);

    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

// PUT to update a project
export async function PUT(request: Request) {
  try {
    const updatedProject = await request.json();
    const projects = await getProjects();

    const index = projects.findIndex((p) => p.id === updatedProject.id);
    if (index === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    projects[index] = updatedProject;
    await saveProjects(projects);

    return NextResponse.json(updatedProject);
  } catch {
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE a project
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const projects = await getProjects();
    const newProjects = projects.filter((p) => p.id !== id);

    if (projects.length === newProjects.length) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    await saveProjects(newProjects);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}

"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ProjectViewModel = {
  name: string;
  problem: string;
  stack: string[];
  github?: string;
  demo?: string;
  highlight?: string;
};

export default function ProjectDialog({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectViewModel | null;
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-balance">{project.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{project.problem}</p>

          {project.stack.length ? (
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          ) : null}

          {project.highlight ? (
            <div className="rounded-lg border bg-muted/40 p-3">
              <p className="text-sm">
                <span className="font-medium">Highlight:</span> {project.highlight}
              </p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2">
            {project.github ? (
              <Button asChild variant="secondary">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            ) : null}
            {project.demo ? (
              <Button asChild>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

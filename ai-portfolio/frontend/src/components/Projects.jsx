import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

export default function Projects({ preview }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(preview ? data.slice(0, 3) : data));
  }, []);

  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

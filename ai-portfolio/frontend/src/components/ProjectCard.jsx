export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl p-6 shadow hover:scale-105 transition">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-gray-500">{project.description}</p>
      <p className="mt-2 text-sm text-gray-400">Tech: {project.tech}</p>
      <a
        href={project.link}
        target="_blank"
        className="inline-block mt-4 text-blue-600"
      >
        View Details →
      </a>
    </div>
  );
}

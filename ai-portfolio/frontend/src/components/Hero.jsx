export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold">Hi, I'm Vignesh 👋</h1>
        <p className="mt-4 text-xl text-gray-400">
          AI / ML Engineer • Frontend Developer • Research Enthusiast
        </p>
        <a
          href="/projects"
          className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-2xl shadow"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

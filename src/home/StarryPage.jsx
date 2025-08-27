import StarsBackground from "../Stars/StarsBackground";

function StarryPage() {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <StarsBackground />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Hello, Cosmos ✨</h1>
        <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
          Twinkling stars in the background, smooth and lightweight.
        </p>
      </div>
    </section>
  );
}

export default StarryPage;

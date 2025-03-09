import { Title, Link } from "@solidjs/meta";

export default function Home() {
  return (
    <main class="min-h-screen canvas-texture">
      <Title>Shattered Design - Interactive Media & Video Games</Title>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={""} />
      <Link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet" />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <Link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center">
        <div class="container mx-auto px-6 py-20 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 accent-text  tracking-wider ">
              Hello Aneesah
            </h1>
            <p class="text-xl md:text-2xl mb-10 text-[rgb(var(--rich-brown))]">
              I love you
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

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
            <h1 class="text-5xl md:text-6xl font-bold mb-6 accent-text title-font tracking-wider major-mono-display-regular">
              Shattered Design
            </h1>
            <p class="text-xl md:text-2xl mb-10 text-[rgb(var(--rich-brown))]">
              Crafting interactive experiences that bring art and gaming together
            </p>
            <a
              href="#featured-game"
              class="canvas-button inline-block"
            >
              Discover Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Featured Game Section */}
      <section id="featured-game" class="py-20 bg-[rgb(var(--warm-white))]">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 accent-text title-font tracking-wider">
            Shattered Canvas
          </h2>
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <h3 class="text-3xl font-semibold accent-text">
                Art Through the Ages
              </h3>
              <p class="text-lg">
                Embark on a unique multiplayer journey where art history meets
                collaborative puzzle-solving. In Shattered Canvas, players work
                together to reconstruct masterpieces from throughout history,
                discovering the stories and techniques behind each work of art.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <span class="accent-text mr-2">✓</span>
                  Collaborative multiplayer puzzle-solving
                </li>
                <li class="flex items-center">
                  <span class="accent-text mr-2">✓</span>
                  Explore famous artworks from different periods
                </li>
                <li class="flex items-center">
                  <span class="accent-text mr-2">✓</span>
                  Learn art history while having fun
                </li>
              </ul>
              <button class="canvas-button mt-4">
                Coming Soon
              </button>
            </div>
            <div class="canvas-card aspect-video flex items-center justify-center p-4">
              <div class="relative w-full h-full flex items-center justify-center bg-[rgb(var(--canvas-cream))]">
                {/* Placeholder for game screenshot or trailer */}
                <span class="text-[rgb(var(--rich-brown))] text-xl">Game Preview Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-8 accent-text">Our Approach</h2>
            <p class="text-lg mb-10">
              At Shattered Design, we believe that games can be both entertaining and educational.
              Our mission is to create experiences that inspire curiosity about art and history
              while providing engaging gameplay that brings people together.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="canvas-card p-6">
                <h3 class="text-xl font-semibold mb-3 accent-text">Collaborative</h3>
                <p>We design experiences that encourage players to work together toward common goals.</p>
              </div>
              <div class="canvas-card p-6">
                <h3 class="text-xl font-semibold mb-3 accent-text">Educational</h3>
                <p>Our games seamlessly blend learning with fun, making knowledge accessible.</p>
              </div>
              <div class="canvas-card p-6">
                <h3 class="text-xl font-semibold mb-3 accent-text">Artistic</h3>
                <p>We celebrate the beauty of art history through thoughtful, aesthetic design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="py-20 bg-[rgb(var(--warm-white))]">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 accent-text">Get in Touch</h2>
          <p class="text-xl mb-10 max-w-2xl mx-auto">
            Interested in learning more about Shattered Design or Shattered Canvas?
            We'd love to hear from you.
          </p>
          <a
            href="mailto:contact@shattered.design"
            class="canvas-button inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

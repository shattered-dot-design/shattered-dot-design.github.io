import { A } from "@solidjs/router";

export default function Nav() {
  return (
    <nav class="fixed w-full z-50 bg-[rgb(var(--canvas-cream))] shadow-sm">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-20">
          <A href="/" class="accent-text font-bold text-xl title-font tracking-wider major-mono-display-regular">
            Shattered Design
          </A>
          <div class="flex space-x-8">
            <A
              href="#featured-game"
              class="text-[rgb(var(--rich-brown))] hover:text-[rgb(var(--muted-gold))] transition-colors"
            >
              Our Game
            </A>
            <A
              href="#contact"
              class="text-[rgb(var(--rich-brown))] hover:text-[rgb(var(--muted-gold))] transition-colors"
            >
              Contact
            </A>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2025 Rolando Mondilla Jr. All rights reserved.</p>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, Next.js, and Tailwind CSS • Designed with passion for clean code and exceptional user
            experiences
          </p>
        </div>
      </div>
    </footer>
  )
}

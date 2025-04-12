export default function RodoPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-2xl font-bold mb-4">Regulamin RODO</h1>
        <embed
          src="/RODO.pdf"
          type="application/pdf"
          className="w-full max-w-4xl h-[80vh] border border-gray-300 rounded-lg"
        />
        <a
          href="/RODO.pdf"
          download
          className="mt-4 px-6 py-2 bg-[var(--primary-color)] text-[var(--foreground)] font-medium rounded-lg hover:bg-[var(--primary-color-dark)] transition-colors"
        >
          Pobierz dokument
        </a>
      </div>
    );
  }
import Link from 'next/link';

export default function Galerija() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl sm:text-3xl font-bold text-blue-600">
              ReeBam
            </Link>
            <div className="flex space-x-3 sm:space-x-6 items-center text-sm sm:text-base">
              <Link href="/usluge-auto" className="text-gray-700 hover:text-blue-600 transition font-medium">Usluge</Link>
              <Link href="/galerija" className="text-blue-600 font-bold">Galerija</Link>
              <Link href="/#cjenik" className="text-gray-700 hover:text-blue-600 transition font-medium">Cjenik</Link>
              <Link href="/kontakt-stranica" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Galerija naših radova
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Pogledajte transformaciju prije i poslije profesionalnog dubinskog čišćenja
          </p>
        </div>
      </section>

      {/* Vozila - Before/After */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-4xl sm:text-5xl mr-4">🚗</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Čišćenje vozila</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Primjer 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Auto sjedala]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Auto sjedala]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Detailing tekstilnih sjedala</h3>
                <p className="text-sm sm:text-base text-gray-600">Kompletno uklanjanje mrlja i osvježavanje vozila</p>
              </div>
            </div>

            {/* Primjer 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Tepihi]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Tepihi]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Dubinsko pranje tepiha</h3>
                <p className="text-sm sm:text-base text-gray-600">Uklanjanje duboke prljavštine i mirisa</p>
              </div>
            </div>

            {/* Primjer 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Kožna sjedala]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Kožna sjedala]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Čišćenje kožnih sjedala</h3>
                <p className="text-sm sm:text-base text-gray-600">Njega i zaštita kože</p>
              </div>
            </div>

            {/* Primjer 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Unutrašnjost]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Unutrašnjost]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Kompletna unutrašnjost</h3>
                <p className="text-sm sm:text-base text-gray-600">Full detailing tretman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Namještaj - Before/After */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-4xl sm:text-5xl mr-4">🛋️</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Čišćenje namještaja</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Primjer 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Garnitura]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-200 to-green-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Garnitura]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Kutna garnitura</h3>
                <p className="text-sm sm:text-base text-gray-600">Kompletna transformacija</p>
              </div>
            </div>

            {/* Primjer 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Madrac]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-200 to-green-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Madrac]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Dubinsko čišćenje madraca</h3>
                <p className="text-sm sm:text-base text-gray-600">Uklanjanje mrlja i dezinfekcija</p>
              </div>
            </div>

            {/* Primjer 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Tepih]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-200 to-green-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Tepih]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Tepih</h3>
                <p className="text-sm sm:text-base text-gray-600">Osvježavanje boja i teksture</p>
              </div>
            </div>

            {/* Primjer 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[PRIJE - Stolice]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRIJE
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-200 to-green-300 h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">[POSLIJE - Stolice]</p>
                      <p className="text-xs text-gray-600 mt-2">600x400px</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POSLIJE
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Tapeciran namještaj</h3>
                <p className="text-sm sm:text-base text-gray-600">Profesionalno čišćenje stolica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Želite ovakve rezultate?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Kontaktirajte nas i transformirajte svoje vozilo ili namještaj!
          </p>
          <Link href="/kontakt-stranica" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Rezerviraj termin →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-3 sm:mb-4">ReeBam</h3>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">Dubinsko čišćenje - Jer detalji čine razliku</p>
            <div className="flex justify-center space-x-6 mb-4">
              <Link href="/usluge-auto" className="hover:text-blue-400 transition">Čišćenje vozila</Link>
              <Link href="/usluge-namjestaj" className="hover:text-blue-400 transition">Čišćenje namještaja</Link>
              <Link href="/galerija" className="hover:text-blue-400 transition">Galerija</Link>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">© 2025 ReeBam. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
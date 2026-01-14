import Link from 'next/link';

export default function Usluge() {
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
              <Link href="/usluge-auto" className="text-blue-600 font-bold">Usluge</Link>
              <Link href="/galerija" className="text-gray-700 hover:text-blue-600 transition font-medium">Galerija</Link>
              <Link href="/#cjenik" className="text-gray-700 hover:text-blue-600 transition font-medium">Cjenik</Link>
              <Link href="/kontakt-stranica" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Naše usluge
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Profesionalno dubinsko čišćenje namještaja i vozila s vrhunskom opremom
          </p>
        </div>
      </section>

      {/* NAMJEŠTAJ SECTION */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-5xl sm:text-6xl mr-4">🛋️</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Čišćenje namještaja</h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Dubinsko čišćenje namještaja, madraca, tepiha i stolica za zdraviji dom
          </p>

          {/* Paketi - Namještaj */}
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">cjenik usluga</h3>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Paket 1 - Mali paket */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mali paket</h3>
              <div className="mb-6">
                <p className="text-3xl font-bold text-green-600">Od 40€</p>
                <p className="text-sm text-gray-600 mt-1">Ovisno o veličini</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Fotelja ili dvosjed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">1-2 madraca (90x200)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Do 4 stolice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Tepih do 5m²</span>
                </li>
              </ul>

              <Link href="/kontakt-stranica" className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Naruči paket
              </Link>
            </div>

            {/* Paket 2 - Srednji paket - FEATURED */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 sm:p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold">
                NAJPOPULARNIJE
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-4">Srednji paket</h3>
              <div className="mb-6">
                <p className="text-3xl font-bold text-white">Od 80€</p>
                <p className="text-sm text-green-100 mt-1">Ovisno o veličini</p>
              </div>

              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Trosjed ili kutna garnitura S</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">2-3 madraca (do 160x200)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Do 6 stolica</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Tepih do 10m²</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Dezinfekcija parom (besplatno)</span>
                </li>
              </ul>

              <Link href="/kontakt-stranica" className="block w-full text-center bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Naruči paket
              </Link>
            </div>

            {/* Paket 3 - Veliki paket */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Veliki paket</h3>
              <div className="mb-6">
                <p className="text-3xl font-bold text-green-600">Od 150€</p>
                <p className="text-sm text-gray-600 mt-1">Ovisno o veličini</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Kutna garnitura M/L</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Svi madraci u kući</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Do 10 stolica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Svi tepihi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Dezinfekcija parom (besplatno)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Prioritetni termin</span>
                </li>
              </ul>

              <Link href="/kontakt-stranica" className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Naruči paket
              </Link>
            </div>
          </div>

          {/* Prije i Poslije - Namještaj */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Prije i poslije</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="text-gray-700 font-semibold">[PRIJE - Garnitura]</p>
                    <p className="text-sm text-gray-600 mt-2">600x400px</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">PRIJE</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="text-gray-700 font-semibold">[POSLIJE - Garnitura]</p>
                    <p className="text-sm text-gray-600 mt-2">600x400px</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-600 text-center">POSLIJE</h3>
              </div>
            </div>
          </div>

          {/* Pojedinačne cijene - Namještaj */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Pojedinačne cijene</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Fotelja</h4>
                <p className="text-2xl font-bold text-green-600">15€</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Dvosjed</h4>
                <p className="text-2xl font-bold text-green-600">25€</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Trosjed</h4>
                <p className="text-2xl font-bold text-green-600">35€</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Kutna S/M/XL</h4>
                <p className="text-2xl font-bold text-green-600">45€/55€/65€</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Madrac 90x200</h4>
                <p className="text-2xl font-bold text-green-600">10€</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Madrac 160x200</h4>
                <p className="text-2xl font-bold text-green-600">20€</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Stolica tapecirana</h4>
                <p className="text-2xl font-bold text-green-600">10€</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Tepih/tapison</h4>
                <p className="text-2xl font-bold text-green-600">4€/m²</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/kontakt-stranica" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
              Rezerviraj čišćenje namještaja
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-2"></div>

      {/* AUTO SECTION */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-5xl sm:text-6xl mr-4">🚗</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Čišćenje vozila</h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Profesionalan detailing unutrašnjosti vozila s vrhunskom opremom
          </p>

          {/* Paketi */}
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">cjenik usluga</h3>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Paket 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Osnovno čišćenje</h3>
              <div className="mb-6">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">S: 25€</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">M: 30€</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">L: 35€</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Usisavanje vozila</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Čišćenje svih tvrdih površina</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Usisavanje/pranje tepiha</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Pranje stakala iznutra</span>
                </li>
              </ul>

              <Link href="/kontakt-stranica" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Naruči paket
              </Link>
            </div>

            {/* Paket 2 - Featured */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold">
                NAJPOPULARNIJE
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-4">Detailing - Tekstil</h3>
              <div className="mb-6">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-semibold text-sm">S: 90€</span>
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-semibold text-sm">M: 100€</span>
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-semibold text-sm">L: 110€</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Usisavanje vozila</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Dubinsko pranje tepiha</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Dubinsko pranje sjedala</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Pranje obloga vrata i prtljažnika</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Čišćenje plastike + UV premaz</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Čišćenje volana</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-sm">Pranje sigurnosnih pojaseva</span>
                </li>
              </ul>

              <Link href="/kontakt-stranica" className="block w-full text-center bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Naruči paket
              </Link>
            </div>

            {/* Paket 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailing - Koža</h3>
              <div className="mb-6">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">S: 110€</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">M: 120€</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">L: 130€</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Usisavanje vozila</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Dubinsko pranje tepiha</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Pranje podnih obloga</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Čišćenje kožnih sjedala</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Zaštitni premaz za kožu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm">Sve iz Detailing paketa</span>
                </li>
              </ul>

              <Link href="/kontakt-stranica" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Naruči paket
              </Link>
            </div>
          </div>

          {/* Prije i Poslije - Auto */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Prije i poslije</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="text-gray-700 font-semibold">[PRIJE - Auto sjedala]</p>
                    <p className="text-sm text-gray-600 mt-2">600x400px</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">PRIJE</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="text-gray-700 font-semibold">[POSLIJE - Auto sjedala]</p>
                    <p className="text-sm text-gray-600 mt-2">600x400px</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-600 text-center">POSLIJE</h3>
              </div>
            </div>
          </div>

          {/* Dodatne usluge */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Dodatne usluge</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">🌪️ Ozon</h4>
                <p className="text-sm text-gray-600 mb-2">Dezinfekcija</p>
                <p className="text-2xl font-bold text-blue-600">30€</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">❄️ Klima</h4>
                <p className="text-sm text-gray-600 mb-2">Dezinfekcija parom</p>
                <p className="text-2xl font-bold text-blue-600">10€</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">🔧 Demontaža</h4>
                <p className="text-sm text-gray-600 mb-2">Sjedala</p>
                <p className="text-2xl font-bold text-blue-600">20€</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">☁️ Krovna</h4>
                <p className="text-sm text-gray-600 mb-2">Obloga</p>
                <p className="text-2xl font-bold text-blue-600">30€</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/kontakt-stranica" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
              Rezerviraj čišćenje vozila
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Spremni za dubinsko čišćenje?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Kontaktirajte nas i zakažite termin već danas!
          </p>
          <Link href="/kontakt-stranica" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Kontaktirajte nas →
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
              <Link href="/usluge-auto" className="hover:text-blue-400 transition">Usluge</Link>
              <Link href="/galerija" className="hover:text-blue-400 transition">Galerija</Link>
              <Link href="/#cjenik" className="hover:text-blue-400 transition">Cjenik</Link>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">© 2025 ReeBam. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
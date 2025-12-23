import Link from 'next/link';

export default function KontaktStranica() {
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
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Kontaktirajte nas
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Spremni smo odgovoriti na sva vaša pitanja i zakazati termin čišćenja
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Kontakt informacije</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:+385123456789" className="text-blue-600 hover:underline text-lg">+385 12 345 6789</a>
                    <p className="text-sm text-gray-600 mt-1">Pon-Pet: 8:00 - 20:00, Sub: 8:00 - 14:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@reebam.hr" className="text-blue-600 hover:underline text-lg">info@reebam.hr</a>
                    <p className="text-sm text-gray-600 mt-1">Odgovaramo u roku 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Lokacija</h3>
                    <p className="text-gray-700 text-lg">Zagreb, Hrvatska</p>
                    <p className="text-sm text-gray-600 mt-1">Dolazimo na vašu adresu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/385123456789" className="text-blue-600 hover:underline text-lg">+385 12 345 6789</a>
                    <p className="text-sm text-gray-600 mt-1">Brza komunikacija putem chata</p>
                  </div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="mt-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-gray-700 font-semibold">[Slika ekipe ili vozila]</p>
                  <p className="text-sm text-gray-600 mt-2">800x600px</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Pošaljite upit</h2>
              
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ime i prezime *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Vaše ime"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="vas.email@primjer.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="+385 12 345 6789"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Vrsta usluge *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none">
                    <option>Čišćenje vozila</option>
                    <option>Čišćenje namještaja</option>
                    <option>Oboje</option>
                    <option>Nisam siguran/na</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Vaša poruka *</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder="Opišite što trebate..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
                >
                  Pošalji upit
                </button>

                <p className="text-xs text-gray-600 text-center">
                  * Obavezna polja. Vaši podaci su sigurni i neće biti dijeljeni s trećim stranama.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Kako funkcionira */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Kako funkcionira proces</h2>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kontakt</h3>
              <p className="text-sm text-gray-600">Pozovite nas ili pošaljite upit putem forme</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dogovor</h3>
              <p className="text-sm text-gray-600">Dogovaramo termin i detalje usluge</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Čišćenje</h3>
              <p className="text-sm text-gray-600">Dolazimo na vašu lokaciju s opremom</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rezultat</h3>
              <p className="text-sm text-gray-600">Uživate u čistom vozilu ili namještaju</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Često postavljena pitanja</h2>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Koliko traje čišćenje?</h3>
              <p className="text-gray-700">
                Čišćenje vozila: 2-4 sata. Namještaj: 1-3 sata ovisno o veličini. Dogovaramo točno vrijeme prilikom rezervacije.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trebam li biti prisutan/na?</h3>
              <p className="text-gray-700">
                Za vozila - po mogućnosti da. Za namještaj - nije potrebno ako nam ostavite pristup.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Koliko unaprijed trebam rezervirati?</h3>
              <p className="text-gray-700">
                Preporučujemo rezervaciju 3-5 dana unaprijed, posebno vikendom.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Koji je način plaćanja?</h3>
              <p className="text-gray-700">
                Gotovina nakon završenog posla ili bankovni transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Spremni za profesionalno čišćenje?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Nazovite nas odmah ili pošaljite upit - tu smo za vas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+385123456789" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              📞 Nazovi nas
            </a>
            <a href="https://wa.me/385123456789" className="inline-block bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition">
              💬 WhatsApp
            </a>
          </div>
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
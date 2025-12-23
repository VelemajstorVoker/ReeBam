import Link from 'next/link';

export default function UslugeNamjestaj() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl sm:text-7xl mb-6">🛋️</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Čišćenje namještaja
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                Profesionalno dubinsko čišćenje namještaja, madraca, tepiha i stolica za zdraviji dom.
              </p>
              <Link href="/kontakt-stranica" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
                Rezerviraj termin
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-8 h-96 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-7xl mb-4">🛋️</div>
                  <p className="text-gray-700 font-semibold text-lg">[Slika čišćenja namještaja]</p>
                  <p className="text-sm text-gray-600 mt-2">Preporučena veličina: 800x600px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Što čistimo */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Što čistimo</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🛋️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Garniture</h3>
              <p className="text-gray-600 text-sm">Dvosjedi, trosjedi, kutne garniture</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🛏️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Madraci</h3>
              <p className="text-gray-600 text-sm">Sve veličine madraca</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🪑</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stolice</h3>
              <p className="text-gray-600 text-sm">Taburei i tapecirana sjedala</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tepihi</h3>
              <p className="text-gray-600 text-sm">Tepihi i tapisoni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Kako radimo</h2>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inspekcija</h3>
              <p className="text-sm text-gray-600">Pregledamo stanje namještaja i vrstu tkanine</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tretman</h3>
              <p className="text-sm text-gray-600">Nanošenje profesionalnih enzimskih sredstava</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ekstrakcija</h3>
              <p className="text-sm text-gray-600">Dubinsko izvlačenje prljavštine ekstraktorom</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sušenje</h3>
              <p className="text-sm text-gray-600">Namještaj spreman za uporabu za 6-8h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholders */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Primjeri našeg rada</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">[Slika garniture]</p>
                  <p className="text-xs text-gray-600 mt-2">600x400px</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Kutna garnitura</h3>
                <p className="text-sm text-gray-600">Prije i poslije čišćenja</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">[Slika madraca]</p>
                  <p className="text-xs text-gray-600 mt-2">600x400px</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Madrac</h3>
                <p className="text-sm text-gray-600">Dubinsko čišćenje i dezinfekcija</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-green-200 to-green-300 h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">[Slika tepiha]</p>
                  <p className="text-xs text-gray-600 mt-2">600x400px</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Tepih</h3>
                <p className="text-sm text-gray-600">Osvježavanje boja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Zašto dubinsko čišćenje?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💨 Uklanjanje alergena</h3>
              <p className="text-gray-700">
                Dubinsko čišćenje uklanja grinje, prašinu i alergene koji se nakupljaju duboko u vlaknima. 
                U madracu se može nakupiti do nekoliko milijuna grinja godišnje.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌿 Ekološka sredstva</h3>
              <p className="text-gray-700">
                Koristimo enzimska sredstva koja razgrađuju organske tvari i biorazgradiva su. 
                Sigurna za djecu i kućne ljubimce.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✨ Produženje vijeka trajanja</h3>
              <p className="text-gray-700">
                Redovito čišćenje produljuje vijek trajanja namještaja i održava svjež izgled tkanina.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏠 Bolji zrak u domu</h3>
              <p className="text-gray-700">
                Čišćenjem poboljšavate kvalitetu zraka u prostoriji i smanjujete rizik od alergijskih reakcija.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Često postavljena pitanja</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Može li se namještaj čistiti zimi?</h3>
              <p className="text-gray-700">
                Da! Tijekom zime zrak je suh i namještaj se brže suši. Namještaj će biti suh za 6-8 sati nakon tretmana.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Koliko često trebam čistiti namještaj?</h3>
              <p className="text-gray-700">
                Preporučujemo dubinsko čišćenje dva puta godišnje za optimalne rezultate i zdravlje.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hoće li se namještaj oštetiti?</h3>
              <p className="text-gray-700">
                Ne! Koristimo profesionalnu opremu i sredstva specifična za vrstu tkanine. Proces je siguran i učinkovit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trebam li usisati prije dolaska?</h3>
              <p className="text-gray-700">
                Da, molimo vas usisajte krupne nečistoće prije našeg dolaska za najbolje rezultate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Vaš namještaj zaslužuje najbolju njegu
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Osvježite svoj dom dubinskim čišćenjem!
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
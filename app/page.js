import Link from 'next/link';

export default function Home() {
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              ReeBam – Dubinsko čišćenje
            </h1>
            <p className="text-xl sm:text-2xl text-blue-800 mb-6 sm:mb-8 font-semibold">
              Jer detalji čine razliku…
            </p>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              Profesionalno dubinsko čišćenje namještaja, madraca, tepiha i vozila. 
              Koristimo vrhunsku opremu i ekološka sredstva za savršenu čistoću.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/usluge-auto" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition">
                Naše usluge
              </Link>
              <Link href="/kontakt-stranica" className="bg-white border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition">
                Rezerviraj termin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O nama */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">O nama</h2>
          
          <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>ReeBam</strong> je obrt koji vrši usluge dubinskog čišćenja tapeciranog namještaja, madraca, tepiha, 
              tapisona i unutrašnjosti vozila, čišćenje kožnog namještaja i kožnih auto sjedala te kompletan 
              detailing unutrašnjosti vozila.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Koristimo profesionalne uređaje za dubinsko i parno čišćenje <strong>Wurth</strong> i <strong>Karcher</strong>, 
              te vrhunska profesionalna sredstva proizvođača <strong>Koch Chemie</strong> i <strong>FraBer</strong> sa aktivnim 
              enzimima za čišćenje koji snažno prodiru u prljavštinu, omekšavaju je i čiste te eliminiraju loše mirise.
            </p>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 my-6 sm:my-8 border-l-4 border-blue-600">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Što je dubinsko čišćenje?</h3>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">
                Dubinsko čišćenje vrši se pomoću profesionalnih uređaja (ekstraktora) koji ne uklanjaju nečistoću 
                samo sa površine već izvlače i svu nakupljenu nečistoću iz dubine vašeg namještaja.
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">✓</span>
                  <span>Enzimska sredstva razgrađuju organske tvari</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">✓</span>
                  <span>Biorazgradiva i sigurna za ljude i kućne ljubimce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">✓</span>
                  <span>Produljuje vijek trajanja namještaja</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">✓</span>
                  <span>Poboljšava kvalitetu zraka u prostoriji</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge Preview */}
      <section id="usluge" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Naše usluge</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Auto čišćenje */}
            <Link href="/usluge-auto" className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition block">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🚗</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Čišćenje vozila</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Kompletan detailing unutrašnjosti vozila s profesionalnim pristupom
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm sm:text-base">Dubinsko čišćenje sjedala</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm sm:text-base">Pranje tepiha i obloga</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm sm:text-base">Dezinfekcija ozonom</span>
                </div>
              </div>

              <span className="text-blue-600 font-semibold hover:underline">
                Saznaj više →
              </span>
            </Link>

            {/* Namještaj čišćenje */}
            <Link href="/usluge-namjestaj" className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition block">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🛋️</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Čišćenje namještaja</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Dubinsko čišćenje namještaja, madraca, tepiha i stolica
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm sm:text-base">Garniture i fotelje</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm sm:text-base">Madraci svih veličina</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-sm sm:text-base">Dezinfekcija parom</span>
                </div>
              </div>

              <span className="text-blue-600 font-semibold hover:underline">
                Saznaj više →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🏆</div>
              <h4 className="font-bold text-lg sm:text-xl mb-2">Profesionalna oprema</h4>
              <p className="text-sm sm:text-base text-blue-100">Wurth i Karcher uređaji</p>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🌿</div>
              <h4 className="font-bold text-lg sm:text-xl mb-2">Ekološka sredstva</h4>
              <p className="text-sm sm:text-base text-blue-100">Koch Chemie i FraBer</p>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✨</div>
              <h4 className="font-bold text-lg sm:text-xl mb-2">Savršeni rezultati</h4>
              <p className="text-sm sm:text-base text-blue-100">Dubinsko čišćenje do posljednjeg vlakna</p>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💯</div>
              <h4 className="font-bold text-lg sm:text-xl mb-2">Zadovoljni klijenti</h4>
              <p className="text-sm sm:text-base text-blue-100">Dugotrajna suradnja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cjenik Preview */}
      <section id="cjenik" className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cjenik usluga</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
            Transparentne cijene za sve naše usluge
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Čišćenje vozila</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">25€ - 130€</p>
              <p className="text-sm text-gray-600">Ovisno o paketu i veličini</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="text-4xl mb-4">🛋️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Čišćenje namještaja</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">3€ - 130€</p>
              <p className="text-sm text-gray-600">Ovisno o vrsti i veličini</p>
            </div>
          </div>

          <Link href="#cjenik-detalji" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Pogledaj detaljan cjenik →
          </Link>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section id="cjenik-detalji" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Detaljan cjenik</h2>

          {/* Auto */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 sm:mb-6 flex items-center">
              <span className="text-3xl sm:text-4xl mr-3">🚗</span>
              Unutarnje čišćenje vozila
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md bg-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                  <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-0">Osnovno čišćenje</h4>
                  <div className="flex gap-2 text-sm sm:text-base">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">S: 25€</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">M: 30€</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">L: 35€</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li>• Usisavanje vozila</li>
                  <li>• Čišćenje svih tvrdih površina</li>
                  <li>• Usisavanje/pranje tepiha</li>
                  <li>• Pranje stakala iznutra</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 sm:p-6 shadow-md border-2 border-blue-500">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl text-gray-900">Detailing - Tekstilna sjedala</h4>
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold">NAJPOPULARNIJE</p>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-base mt-2 sm:mt-0">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">S: 90€</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">M: 100€</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">L: 110€</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li>• Dubinsko pranje tekstilnih sjedala</li>
                  <li>• Dubinsko pranje tepiha i podnih obloga</li>
                  <li>• Pranje prtljažnika i obloga vrata</li>
                  <li>• Detaljno čišćenje plastike s UV zaštitom</li>
                  <li>• Čišćenje volana</li>
                  <li>• Pranje sigurnosnih pojaseva</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md bg-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                  <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-0">Detailing - Kožna sjedala</h4>
                  <div className="flex gap-2 text-sm sm:text-base">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">S: 110€</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">M: 120€</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">L: 130€</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li>• Dubinsko čišćenje kožnih sjedala</li>
                  <li>• Zaštitni premaz za kožu</li>
                  <li>• Sve iz Detailing paketa tekstil</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
              <h5 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Pojedinačne usluge:</h5>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                <div className="flex justify-between py-2 border-b">
                  <span>Tekstilna sjedala</span>
                  <span className="font-bold">50€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Kožna sjedala</span>
                  <span className="font-bold">70€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Podne obloge</span>
                  <span className="font-bold">30€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Prtljažnik</span>
                  <span className="font-bold">15€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Obloge vrata</span>
                  <span className="font-bold">15€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Tekstilni tepihi (set)</span>
                  <span className="font-bold">10€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Dezinfekcija ozonom</span>
                  <span className="font-bold">30€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Krovna obloga</span>
                  <span className="font-bold">30€</span>
                </div>
              </div>
            </div>
          </div>

          {/* Namještaj */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 sm:mb-6 flex items-center">
              <span className="text-3xl sm:text-4xl mr-3">🛋️</span>
              Dubinsko čišćenje namještaja
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md bg-white">
                <h5 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Madraci i jastuci</h5>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between py-2 border-b">
                    <span>Jastuk S/M/L</span>
                    <span className="font-bold">3€/4€/5€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Madrac dječji</span>
                    <span className="font-bold">7€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Madrac 90x200</span>
                    <span className="font-bold">10€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Madrac 120x200</span>
                    <span className="font-bold">15€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Madrac 160x200</span>
                    <span className="font-bold">20€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Madrac 180x200</span>
                    <span className="font-bold">25€</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md bg-white">
                <h5 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Garniture i fotelje</h5>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between py-2 border-b">
                    <span>Tabure S/M/L</span>
                    <span className="font-bold">5€/7€/10€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Fotelja</span>
                    <span className="font-bold">15€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Dvosjed</span>
                    <span className="font-bold">25€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Trosjed</span>
                    <span className="font-bold">35€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Kutna S (2-3 mjesta)</span>
                    <span className="font-bold">45€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Kutna M (4-5 mjesta)</span>
                    <span className="font-bold">55€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Kutna XL (5+ mjesta)</span>
                    <span className="font-bold">65€</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 sm:p-6 shadow-md border-2 border-blue-300">
                <h5 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Kožni namještaj</h5>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span>Tabure kožni S/M/L</span>
                    <span className="font-bold">10€/15€/20€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span>Fotelja kožna</span>
                    <span className="font-bold">30€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span>Dvosjed kožni</span>
                    <span className="font-bold">50€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span>Trosjed kožni</span>
                    <span className="font-bold">70€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span>Kutna kožna S/M/XL</span>
                    <span className="font-bold">90€/110€/130€</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-blue-700 mt-3 sm:mt-4">
                  *Ručno čišćenje kože četkom + zaštitni premaz
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md bg-white">
                <h5 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Stolice i ostalo</h5>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between py-2 border-b">
                    <span>Stolica sjedalo</span>
                    <span className="font-bold">4€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Stolica sjedalo + naslon</span>
                    <span className="font-bold">6€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Stolica potpuno tapecirana</span>
                    <span className="font-bold">10€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Tepih/tapison</span>
                    <span className="font-bold">4€/m²</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Dezinfekcija parom (manja)</span>
                    <span className="font-bold">5€</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Dezinfekcija parom (veća)</span>
                    <span className="font-bold">10€</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-yellow-50 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-500">
              <h5 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">⚠️ Važne napomene:</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <li>• Molimo usisajte namještaj prije dolaska</li>
                <li>• Minimalna narudžba: <strong>40€</strong></li>
                <li>• Dodatni jastuci se naplaćuju odvojeno</li>
                <li>• Leđa namještaja: +10€ po sjedećem mjestu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-12 sm:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Spremni za dubinsko čišćenje?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Kontaktirajte nas i zakažite termin već danas!
          </p>
          
          <div className="space-y-4 mb-8 text-base sm:text-lg">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📞</span>
              <a href="tel:+385123456789" className="hover:underline font-semibold">+385 12 345 6789</a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📧</span>
              <a href="mailto:info@reebam.hr" className="hover:underline font-semibold">info@reebam.hr</a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📍</span>
              <span className="font-semibold">Zagreb, Hrvatska</span>
            </div>
          </div>

          <Link href="/kontakt-stranica" className="inline-block bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition">
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
            <p className="text-xs sm:text-sm text-gray-500">© 2025 ReeBam. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
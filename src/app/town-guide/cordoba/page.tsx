import Image from 'next/image'
import Link from 'next/link'

export default function CordobaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Cordoba</h1>
      
      <div className="prose max-w-none">
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80"
            alt="Cordoba Mezquita"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-lg mb-6">
          Inland Andalucia is collaborating with LuvInland.com to give you the best level of Information about Andalucia and its LIFESTYLE. 
          For Each town we have properties for sale, click on the town name to get all the information you need. 
          Luvinland will return you to us to view the properties for sale in the town selected.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { name: 'Almedinilla', count: 7 },
            { name: 'Almodovar Del Rio', count: 2 },
            { name: 'Baena', count: 5 },
            { name: 'Benameji', count: 2 },
            { name: 'Cabra', count: 6 },
            { name: 'Carcabuey', count: 16 },
            { name: 'Castro Del Rio', count: 1 },
            { name: 'Encinas Reales', count: 3 },
            { name: 'Fuente-Tojar', count: 23 },
            { name: 'Iznajar', count: 28 },
            { name: 'La Carlota', count: 2 },
            { name: 'La Guijarrosa', count: 2 },
            { name: 'Lucena', count: 4 },
            { name: 'Luque', count: 35 },
            { name: 'Montilla', count: 1 },
            { name: 'Montoro', count: 1 },
            { name: 'Monturque', count: 5 },
            { name: 'Priego de Cordoba', count: 74 },
            { name: 'Puente Genil', count: 8 },
            { name: 'Rute', count: 54 },
            { name: 'Santaella', count: 1 },
            { name: 'Valenzuela', count: 1 },
            { name: 'Zuheros', count: 9 }
          ].map((town) => (
            <Link 
              key={town.name}
              href={`/properties?location=${encodeURIComponent(town.name)}`}
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <span className="text-primary-900 font-medium">{town.name}</span>
                <span className="text-secondary-600">{town.count} properties</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">About Cordoba</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <p>
                The "Jewish Quarter" or old town, with its small plazas, patios full of colourful flowers and typical bars where tapas are enjoyed, 
                is full of amazing architecture. The Mezquita (or mosque) attracts thousands of visitors each year who flock to admire the magnificent 
                workmanship - it took two centuries to complete and is an amazing jungle of columns, recesses and arches with a church at its centre. 
                Outside the mosque are the beautiful gardens, "the Patio de los Naranjos" and the "Calleja de la Flores".
              </p>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80"
                  alt="Cordoba Jewish Quarter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">Culture & Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80"
                  alt="Cordoba Alcazar"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                Across the river from the Mezquita is the Alcázar (or fortress) which was built by the Christians in 1328 as a defence against the Muslims. 
                It offers a lovely respite from the summer heat as you wander through the tree shaded gardens and courtyards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">Geography & Agriculture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <p>
                As the city is divided, so is the province: The Sierra Morena in the north with its rugged pine and oak covered hills with a few steep 
                villages set into them. The Campiña in the south which are the farmlands covered in wheat, vine and olive trees. The area is famous for 
                its dry white wines, similar to sherry, which are produced from the Pedro Ximenez grape and olive oil, which is the other main produce 
                from the region.
              </p>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80"
                  alt="Cordoba Countryside"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">Local Cuisine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80"
                  alt="Cordoba Cuisine"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                This is why olive oil is an important ingredient of many typical dishes, Gazpacho and Salmorejo are cold soups made mainly of mashed 
                vegetables and olive oil and are delicious and refreshing in the heat of the summer. Jamon, which is cured ham, Salchichon, a typical 
                sausage, Caña de Lomo and Morcilla, black pudding are also widely enjoyed in the province. Some typical desserts are Alfajores, made of 
                almonds and honey and Pestiños, which is fried in oil and then covered with honey.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">Festivals & Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <p>
                Cordoba enjoys its fiestas and festivals the same as every other town in Spain, and Semana Santa, or Easter week is one of the most 
                important. There are no fewer than 32 processions in total with beautifully decorated and ornate pictures and figures of Saints accompanied 
                by the Nazarenos (men dressed in typical gowns with hoods that cover all the face except the eyes). These processions pass through the town 
                followed by crowds of people. In May there are three festivals; from 5th to 12th there is the Festival of the "Patios Cordobeses", a contest 
                for the most beautifully decorated courtyard; the Cruces de Mayo is when the whole town is decorated with crosses and thousands of flowers; 
                the last week in May is when everyone lets their hair down at the Feria de Cordoba - flamenco music and dance are enjoyed and the whole 
                town revels in the festivities.
              </p>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&q=80"
                  alt="Cordoba Festivals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-primary-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary-900 mb-4">Related Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/buyers-guide/buying-property" className="text-primary-600 hover:text-primary-800">
              Buying a Property
            </Link>
            <Link href="/buyers-guide/buying-process" className="text-primary-600 hover:text-primary-800">
              Buying Process
            </Link>
            <Link href="/buyers-guide/property-taxes" className="text-primary-600 hover:text-primary-800">
              Property Taxes
            </Link>
            <Link href="/buyers-guide/faqs" className="text-primary-600 hover:text-primary-800">
              FAQs
            </Link>
            <Link href="/buyers-guide/unpaid-taxes" className="text-primary-600 hover:text-primary-800">
              Unpaid Taxes
            </Link>
            <Link href="/buyers-guide/mortgage" className="text-primary-600 hover:text-primary-800">
              Mortgage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
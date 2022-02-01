

export default function Hero() {
    return (
        <div class="bg-gray-50">
        <div class="relative overflow-hidden">
          
      
          <div class="relative pt-6 pb-16 sm:pb-24">
          
            <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div class="text-center">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 text-2xl md:text-6xl">
                  <span class="block sm:hidden text-red-800">Brix</span>
                </h1>
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                  <span class="block">Data to enrich your</span>
                  <span class="block text-red-800">online business</span>
                </h1>
                <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
      
          <div class="relative">
            <div class="absolute inset-0 flex flex-col" aria-hidden="true">
              <div class="flex-1"></div>
              <div class="flex-1 w-full bg-gray-800"></div>
            </div>
            <div class="max-w-6xl mx-auto sm:px-6">
              <img class="relative mx-auto rounded-lg shadow-lg" src="https://lizsteel.com/wp-content/uploads/2019/11/Lizsteel-Work-sketch.jpg" alt="App screenshot"/>
            </div>
          </div>
        </div>
        <div class="bg-gray-800">

          <div class="bg-gray-800">
            
            <div class="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
              <div class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">

                <h1 class="text-2xl font-extrabold tracking-tight text-white">What are you looking for?</h1>
                <a href="/" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">Browse all categories<span aria-hidden="true"> &rarr;</span></a>
              </div>

                {/* start categories */}
              <div class="mt-4 flow-root">
                <div class="-my-2">
                  <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                    <div class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                      <a href="/" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                        <span aria-hidden="true" class="absolute inset-0">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg" alt="" class="w-full h-full object-center object-cover"/>
                        </span>
                        <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                        <span class="relative mt-auto text-center text-xl font-bold text-white">New Arrivals</span>
                      </a>

                      <a href="/" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                        <span aria-hidden="true" class="absolute inset-0">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg" alt="" class="w-full h-full object-center object-cover"/>
                        </span>
                        <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                        <span class="relative mt-auto text-center text-xl font-bold text-white">Productivity</span>
                      </a>

                      <a href="/" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                        <span aria-hidden="true" class="absolute inset-0">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg" alt="" class="w-full h-full object-center object-cover"/>
                        </span>
                        <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                        <span class="relative mt-auto text-center text-xl font-bold text-white">Workspace</span>
                      </a>

                      <a href="/" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                        <span aria-hidden="true" class="absolute inset-0">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg" alt="" class="w-full h-full object-center object-cover"/>
                        </span>
                        <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                        <span class="relative mt-auto text-center text-xl font-bold text-white">Accessories</span>
                      </a>

                      <a href="/" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                        <span aria-hidden="true" class="absolute inset-0">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg" alt="" class="w-full h-full object-center object-cover"/>
                        </span>
                        <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                        <span class="relative mt-auto text-center text-xl font-bold text-white">Sale</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 px-4 sm:hidden">
                <a href="/" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">Browse all categories<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
          </div>
          {/* end categories */}

          {/* start footer */}
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">Trusted by over 26,000 forward-thinking companies</h2>
            <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"/>
              </div>
              <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
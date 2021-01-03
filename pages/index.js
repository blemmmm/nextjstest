export default function Home() {
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
              </div>
            </div>
            <div class="ml-3 relative">
            <div>
              <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-indigo-500 hover:bg-indigo-700">
		            Get Started
		          </button>
            </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

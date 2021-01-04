import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot } from '@fortawesome/pro-solid-svg-icons';

library.add(faMugHot);


export default function Home() {
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center font-semibold text-white">
                <FontAwesomeIcon icon={['fas', 'mug-hot']} size="2x"/>
                <div class="pl-5">
                  Company Name
                </div>
              </div>
            </div>
            <div class="ml-3 relative">
            <div>
              <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-indigo-500 hover:bg-yellow-600">
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

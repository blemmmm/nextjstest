import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot } from '@fortawesome/pro-solid-svg-icons';
import { useCallback, useState } from 'react';
import AirTable from 'airtable';

library.add(faMugHot);

const airtable_api_key = 'keyI7i5tzcyx2DHZu';
const airtable_base_id = 'appW1QkraHyDU4sAU';

const base = new AirTable({apiKey: airtable_api_key}).base(airtable_base_id);


const Home = () => {
  const [email, setEmail] = useState('')
  
  const subscribe = useCallback(async () => {
    try {
      await base('Table 1').create([
        {
          'fields' : { email }
        }
      ]);
    } catch (e) {
      alert(e.message);
      console.error(e);
    } 
    setEmail('');
    alert("You have subscribed!");
  }, [email]);

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center font-semibold text-white">
                <FontAwesomeIcon icon={faMugHot} size="2x"/>
                <div className="pl-5">
                  Company Name
                </div>
              </div>
            </div>
            <div className="ml-3 relative">
            <div>
              <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-indigo-500 hover:bg-yellow-600">
		            Sign In
		          </button>
            </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Lorem ipsum dolor </span>
                  <span className="block text-indigo-600 xl:inline">sit amet</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Scelerisque felis imperdiet proin fermentum. Faucibus interdum posuere lorem ipsum dolor sit. Id aliquet risus feugiat in ante metus dictum at tempor. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1609690339416-7c4b115e0794?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
        </div>
      </div>
      <div className="pb-8 relative bg-indigo-100 justify-center items-center">
        <div className="max-w-7xl mx-auto pt-10">
          <div className="relative z-10 pb-16 sm:pb-16 md:pb-8 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
                  <span className="block xl:inline">Wanna know more? </span>
                  <span className="block text-indigo-600">Get in touch with us starting today.</span>
                </h1>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-96 lg:left-2/3 max-w-sm mx-auto p-1 pr-20 flex items-center">
          <input type="email" placeholder="yourmail@example.com" id="emailAddress" value={email} onChange={e => setEmail(e.target.value)} className="flex flex-grow md:flex-grow-0 lg:flex-grow-0 appearance-none rounded-lg shadow-md py-2 px-4 font-semibold text-grey-dark mr-2 focus:outline-none" />
          <button type="submit" className="py-2 px-4 flex font-semibold rounded-lg shadow-md text-white bg-indigo-500 hover:bg-yellow-600" onClick={subscribe}>SUBSCRIBE</button>
        </div>
      </div>
       
    </div>
  )
}

export default Home
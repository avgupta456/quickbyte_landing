function App() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your free trial today!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <a href="https://www.google.com" className="px-5 py-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Get Started</a>
          <a href="https://www.google.com" className="ml-3 px-5 py-3 font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default App;

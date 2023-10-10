function AboutPage() {
  return (
    <section className="container m-auto px-6 mt-8">
      <h1 className="text-center mb-8 sm:text-4xl text-2xl  font-bold">
        Welcome To About Page
      </h1>
      <div className="w-full flex bg-slate-100 flex-col md:flex-row rounded-2xl md:overflow-hidden shadow-lg">
        <div className="md:w-1/2 object-cover h-80">
          <img
            className="h-full w-full"
            src="https://digileaders.com/wp-content/uploads/2018/11/developer-coding-on-laptop_4460x4460-e1542890619241.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full h-auto sm:flex sm:flex-col sm:justify-center p-5">
          <h1 className="font-bold sm:text-4xl text-3xl mb-4">Stap 1</h1>
          <p className="font-normal text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
            eligendi atque? Dolor officiis aliquam reiciendis omnis maiores
            voluptas sed fuga.
          </p>
        </div>
      </div>

      <div className="w-full flex bg-slate-100 flex-col md:flex-row rounded-2xl md:overflow-hidden shadow-lg mt-8">
        <div className="md:w-1/2 w-full h-auto sm:flex sm:flex-col sm:justify-center p-5">
          <h1 className="font-bold sm:text-4xl text-3xl mb-4">Stap 1</h1>
          <p className="font-normal text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
            eligendi atque? Dolor officiis aliquam reiciendis omnis maiores
            voluptas sed fuga.
          </p>
        </div>

        <div className="md:w-1/2 object-cover h-80">
          <img
            className="h-full w-full"
            src="http://www.findtherightclick.com/wp-content/uploads/2015/07/development-software.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

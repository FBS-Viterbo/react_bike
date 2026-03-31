import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511994298241-608e28f14fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2luZ3xlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Ride the Future</h1>
          <p className="mt-4">Explore premium bikes for every journey</p>
        </div>
      </section>
    </>
  );
};

export default Hero;

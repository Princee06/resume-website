import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="pt-24 flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/introani.png')",
        }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            Hello, this is my Resume Website!
          </h1>
          <p className="text-gray-700 text-lg">
            Welcome to my professional portfolio. Scroll down to learn more about me and my projects.
          </p>
        </div>
      </main>
    </>
  );
}

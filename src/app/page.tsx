export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-pink-500">
          💄 RS Beauty Salon
        </h1>
        <p className="text-gray-500 mt-4 text-xl">
          Website is working! Let&apos;s build the rest.
        </p>
        <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}
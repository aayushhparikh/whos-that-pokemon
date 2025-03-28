import { Link } from 'react-router-dom';

export default function Title() {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/pokemonbg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="text-center text-gray-800">
            <h1 className="text-6xl font-extrabold mb-8 drop-shadow-lg">Who's That Pokémon?</h1>
            <Link to="/game">
              <button className="bg-yellow-400 text-black py-3 px-6 rounded-full text-2xl font-semibold hover:bg-yellow-500 transition ease-in-out duration-300">
                Start
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }  
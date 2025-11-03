import { useState } from "react";
import Recipe from "./Recipe.jsx";

const Main = () => {
  const [ingredients, setIngredients] = useState("");
  const [query, setQuery] = useState(""); // what we actually send to Recipe

  function handleSubmit(e) {
    e.preventDefault();                 // stop page reload
    if (!ingredients.trim()) return;
    setQuery(ingredients.trim());       // trigger Recipe to fetch
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-black">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 mt-10 md:mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Create Magic with what you <br />
          <span className="text-indigo-500">have ✨</span>
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Enter the ingredients you have on hand, and let's find the perfect recipe for you.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row justify-center items-center mt-10 gap-4"
      >
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g. tomatoes, garlic, basil..."
          className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 px-6 py-4 rounded-2xl text-lg bg-slate-800/70 border border-slate-700 text-white placeholder-slate-400 outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300 shadow-lg"
        />
        <button
          type="submit"
          className="px-8 py-4 rounded-2xl text-lg font-semibold bg-white text-slate-900 hover:bg-gray-100 transition-all duration-300 shadow-lg border border-slate-300"
        >
          Find Recipes
        </button>
      </form>

      <section className="w-full max-w-4xl mt-16">
        <div>
          {/* Pass the final query down */}
          <Recipe ingredients={query} />
        </div>
      </section>
    </main>
  );
};

export default Main;

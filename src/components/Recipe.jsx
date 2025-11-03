import { useEffect, useState, memo } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

function Recipe({ ingredients }) {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    // Reset showFull when ingredients change
    setShowFull(false);

    // Only fetch when a non-empty ingredients value is provided by Main via submit
    if (!ingredients) {
      setRecipe(null);
      setError("");
      return;
    }

    let cancelled = false;

    async function fetchRecipe() {
      if (!apiKey) {
        setError("Missing VITE_GEMINI_API_KEY. Add it to your .env and restart dev server.");
        return;
      }

      setRecipe("Loading recipe...");
      setError("");

      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Build the prompt string from the ingredients prop
        const prompt = `Create a detailed recipe using the following ingredients: ${ingredients}. Include preparation steps and cooking time.`;

        const result = await model.generateContent(prompt);
        const text = typeof result?.response?.text === "function" ? result.response.text() : result?.response?.text;

        if (!cancelled) setRecipe(text || "No text returned.");
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("Failed to fetch recipe. Check API key, network, or model name.");
      }
    }

    fetchRecipe();

    return () => {
      cancelled = true;
    };
  }, [ingredients]);

  // Short excerpt helper
  const excerptLimit = 400;
  const isLoading = recipe === "Loading recipe...";
  const isLong = recipe && recipe.length > excerptLimit;
  const excerpt = isLong ? recipe.slice(0, excerptLimit).trim() + "..." : recipe;

  return (
    <div className="p-6 bg-white rounded-2xl mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Here is Your Recipe</h2>
      {error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : isLoading ? (
        <p className="text-gray-600 text-center">Loading recipe...</p>
      ) : recipe ? (
        <div className="prose max-w-none text-left text-gray-700">
          {isLong && !showFull ? (
            <>
              <ReactMarkdown>{excerpt}</ReactMarkdown>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setShowFull(true)}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Show full recipe
                </button>
              </div>
            </>
          ) : (
            <ReactMarkdown>{recipe}</ReactMarkdown>
          )}
        </div>
      ) : (
        <p className="text-gray-600 text-center">Submit ingredients and click "Find Recipes" to get a recipe.</p>
      )}
    </div>
  );
}

// Memoize so Recipe only rerenders when `ingredients` prop changes
export default memo(Recipe, (prevProps, nextProps) => prevProps.ingredients === nextProps.ingredients);

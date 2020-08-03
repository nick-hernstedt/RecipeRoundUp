import React from "react";
import recipes from "./recipes";

export default function App() {
  const [recipeName, setRecipeName] = React.useState("");
  const [submittedBy, setSubmittedBy] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [recipe, setRecipe] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      recipeName: ${recipeName}
      submittedBy: ${submittedBy}
      ingredients: ${ingredients}
      Recipe: ${Recipe}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>

      <label>
        Recipe Name:
        <input
          name="recipeName"
          type="recipeName"
          value={recipeName}
          onChange={(e) => setrecipeName(e.target.value)}
          required
        />
      </label>

      <label>
        Submitted By:
        <input
          name="submittedBy"
          type="submittedBy"
          value={submittedBy}
          onChange={(e) => setsubmittedBy(e.target.value)}
          required
        />
      </label>

      <label>
        Ingredients:
        <select
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        >
          <option key=""></option>
          {countries.map((ingredients) => (
            <option key={ingredients}>{ingredients}</option>
          ))}
        </select>
      </label>

      <label>
        Submitted By:
        <input
          name="submittedBy"
          type="submittedBy"
          value={submittedBy}
          onChange={(e) => setsubmittedBy(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
}

import React, { useReducer, useState, useRef, useEffect } from "react";
import Button from "../Button";

type UserType = {
  name: string;
  firstName: string;
  email: string;
  object: string;
  description: string;
};

type FormAction = {
  type: string;
  payload: any; // Consider specifying a more specific type instead of 'any' if possible
};

const BlockForm = () => {
  const initialState = {
    name: "",
    firstName: "",
    email: "",
    object: "",
    description: "",
  };

  const formReducer = (state: UserType, action: FormAction) => {
    switch (action.type) {
      case "SET_FIRST_NAME": {
        return {
          ...state,
          firstName: action.payload,
        };
      }
      case "SET_NAME": {
        return {
          ...state,
          name: action.payload,
        };
      }
      case "SET_EMAIL": {
        return {
          ...state,
          email: action.payload,
        };
      }
      case "SET_OBJECT": {
        return {
          ...state,
          object: action.payload,
        };
      }
      case "SET_DESCRIPTION": {
        return {
          ...state,
          description: action.payload,
        };
      }
      default:
        return state; // Always return the state if the action type is not recognized
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  return (
    <section className="w-full h-auto bg-primaryBlue px-5">
      <div className="text-white lg:container lg:px-5 mx-auto flex flex-col justify-between py-20">
        <h3 className="text-2xl font-bold">CONTACTEZ-NOUS</h3>
        <p>
          Prêt à prendre des mesures concrètes vers une entreprise plus durable
          ?{" "}
        </p>
        <p>
          Contactez nous dès aujourd&apos;hui pour en savoir plus sur nos
          services d&apos;audit énergétique et découvrir comment Audicée peut
          vous aider à atteindre vos objectifs en matière d&apos;efficacité
          énergétique. Ensemble, construisons un avenir plus durable et
          prospère.
        </p>

        {/* <form
          action="submit"
          className="flex flex-col space-y-5 p-5 lg:p-10 my-5 bg-stone-50 rounded-xl shadow-lg w-full lg:w-1/2 items-center"
        >
          <input
            type="text"
            placeholder="Nom"
            name="nom"
            className="w-full"
            onChange={handleInputChange}
            aria-label="nom"
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            className="w-full"
            onChange={handleInputChange}
            aria-label="prenom"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full"
            onChange={handleInputChange}
            aria-label="email"
          />
          <input
            type="objet"
            name="objet"
            placeholder="Objet"
            className="w-full"
            onChange={handleInputChange}
            aria-label="objet"
          />
          <textarea
            placeholder="Message"
            name="message"
            id="description"
            cols={30}
            rows={10}
            aria-label="message"
            className="w-full rounded-xl px-4 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-500"
          ></textarea>

          <Button
            text={"valider"}
            type={"submit"}
            action={() => console.log(state)}
          />
        </form> */}
      </div>
    </section>
  );
};
export default BlockForm;

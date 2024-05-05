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
    <section className="w-full h-auto bg-primaryBlue">
      <div className="lg:container px-5 lg:px-0 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 p-5 lg:p-10 bg-stone-50 rounded-lg shadow-xl lg:mr-10 my-5 lg:my-0">
          <h3>CONTACTEZ-NOUS</h3>
          <p>
            Prêt à prendre des mesures concrètes vers une entreprise plus
            durable ? <br></br>
            <br></br>Contactez nous dès aujourd&apos;hui pour en savoir plus sur
            nos services d&apos;audit énergétique et découvrir comment Audicée
            peut vous aider à atteindre vos objectifs en matière
            d&apos;efficacité énergétique. Ensemble, construisons un avenir plus
            durable et prospère.
          </p>
        </div>
        <form
          action="submit"
          className="flex flex-col space-y-5 p-5 lg:p-10 my-5 lg:my-10 border bg-white rounded-xl shadow-lg w-full lg:w-1/2 items-center"
        >
          <input
            type="text"
            placeholder="Nom"
            name="name"
            className="w-full"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="first_name"
            placeholder="Prénom"
            className="w-full"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full"
            onChange={handleInputChange}
          />
          <input
            type="objet"
            name="objet"
            placeholder="Objet"
            className="w-full"
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Message"
            name="Message"
            id="description"
            cols={30}
            rows={10}
            className="w-full rounded-xl px-4 py-2.5 border border-slate-300 focus:outline-none focus:border-slate-500"
          ></textarea>

          <Button
            text={"valider"}
            type={"submit"}
            action={() => console.log(state)}
          />
        </form>
      </div>
    </section>
  );
};
export default BlockForm;

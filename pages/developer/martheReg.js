import React from "react";

function martheReg() {
  return (
    <div className="flex flex-wrap justify-center p-40  min-h-screen bg-purple-100">
      <p className="text-center "> Hello world</p>
      <div className="grid gap-x-20 grid-cols-1 ">
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 ">
          <p className="text-center text-2xl font-bold">
            QRAFTY NIGHT SCHOOL APPLICATION FORM-Software Developer TRACK 2022
          </p>
          <br></br>
          <p className="subpixel-antialiased">
            Life is an ongoing learning process and this Night school gives you
            an opportunity to learn a new skill that will help you remain
            relevant in your field, earn more money through side hustles or
            realize big dreams and transition of career
          </p>
          <hr></hr>
          <a className="text-blue-600" href="#">
            Change de compte
          </a>

          <p className="subpixel-antialiased">
            Le nom et la photo associés à votre compte Google seront enregistrés
            lorsque vous importerez des fichiers et que vous enverrez ce
            formulaire. Seule l'adresse e-mail que vous entrez fait partie de
            votre réponse.
          </p>
          <br></br>
          <h6 className="text-red-600">&#x26B9;Obligatoire</h6>
        </div>
        <br></br>

        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2">
          <label
            for="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 "
          >
            {" "}
            e-mail Address &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="email"
            placeholder="Your E-mail address "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2">
          <label
            for="floating_full_name"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 "
          >
            {" "}
            Full Name &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="full name"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2">
          <label
            for="floating_phone_number"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 "
          >
            {" "}
            Phone Number &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="email"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>

        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolling for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Night School </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Apprenticeship </span>
          </label>
        </div>

        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Course are you enrolling for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Software Development </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Digital Marketing </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Product Design </span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            {" "}
            What Program are you enrolled for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default martheReg;

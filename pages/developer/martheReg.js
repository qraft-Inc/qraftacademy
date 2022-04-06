import React from "react";

function martheReg() {
  return (
    <div className="flex flex-wrap justify-center p-40  min-h-screen bg-purple-100">
      <div className="grid gap-x-20 grid-cols-1 ">
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-100  ">
          <p className="text-center text-2xl font-bold">
            QRAFTY NIGHT SCHOOL APPLICATION FORM-Software Developer TRACK 2022
          </p>
          <br></br>
          <p className="subpixel-antialiased ">
            Life is an ongoing learning process and this Night school gives you
            an opportunity to learn a new skill that will help you remain
            relevant in your field, earn more money through side hustles or
            realize big dreams and transition of career
          </p>
          <hr></hr>
          <a className="text-blue-600 leading-loose" href="#">
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

        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-30">
          <label
            for="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 leading-loose"
          >
            {" "}
            e-mail Address &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="email"
            placeholder="Your E-mail address "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none "
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-30">
          <label
            for="floating_full_name"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 leading-loose"
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
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-30">
          <label
            for="floating_phone_number"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 leading-loose "
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

        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-38 ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose  "
          >
            {" "}
            What Program are you enrolling for? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300  "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2 "> Night School </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose "
            for="flexCheckDefault"
          >
            <span className="ml-2 "> Apprenticeship </span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-40 ">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose "
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
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
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
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
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
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Product Design </span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  box-content">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose "
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
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
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
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  box-content">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
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
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
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
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Default checkbox</span>
          </label>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  box-content">
          <label
            for="floating_link"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 leading-loose"
          >
            {" "}
            Link to your Linkedln
          </label>{" "}
          <br></br>
          <input
            type="link"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  box-content">
          <label
            for="floating_text_name"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 leading-loose "
          >
            {" "}
            What is your prefered programming stack?
          </label>{" "}
          <br></br>
          <input
            type="name"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
          >
            {" "}
            What is your ideal role?
          </label>{" "}
          <br></br>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Full Stack Developer </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Back End Developer </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Font End Developer </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Mobile Developer </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300  "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex  leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2 "> Other: </span>
          </label>
          <br></br>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content ">
          <label
            for="floating_text"
            className="ml-0.5 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
          >
            {" "}
            How did you learn About QRAFT Academy? What inspired/motivated you
            to apply for this program? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  box-content">
          <label
            for="floating_full_name"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
          >
            {" "}
            What are your expectations froms this program? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2  box-content h-30">
          <label
            for="floating_full_name"
            className="ml-0.5 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
          >
            {" "}
            What are you working on currently? and how do you keep your
            technology skills current? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content">
          <label
            for="floating_text"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 leading-loose"
          >
            {" "}
            What are your favorite and least favorite technology products, and
            why? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content">
          <label
            for="floating_text"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 leading-loose"
          >
            {" "}
            What is your most proud of achievement so far? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="full name"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-48">
          <label
            for="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
          >
            {" "}
            What type of role best suits you? &#x26B9;
          </label>{" "}
          <br></br>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Highly independant role </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Team Based </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />{" "}
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Strong people skills Role </span>
          </label>
          <br></br>
          <input
            type="checkbox"
            aria-describedby="checkbox-3"
            className="w-4 h-4 text-black-200 bg-gray-100 rounded border-gray-300 "
          />
          <label
            className="form-check-label inline-block text-gray-800 inline-flex leading-loose"
            for="flexCheckDefault"
          >
            <span className="ml-2"> Less people focused Role </span>
          </label>
          <br></br>
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content h-33">
          <label
            for="floating_full_name"
            className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
          >
            {" "}
            When was the last time you stood up for something thta you believed
            in? What was your motivation? How did it turn out? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder="Your answer "
            className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
        <div className="bg-white shadow-md rounded-md px-8 py-4 mx-40 mt-3 text-left md:w-1/2 lg:w-1/2 box-content">
          <label
            for="floating_text_name"
            className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300 leading-loose"
          >
            {" "}
            Professionally, what's your goal? &#x26B9;
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder="Your answer "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
          />
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default martheReg;

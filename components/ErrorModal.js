import React from "react";

export default function ErrorModal({ closeModal, value }) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--Overlay Effect--> */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      {/* <!--modal content--> */}
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="relative top-40 mx-auto p-5 border w-96 rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-bold text-gray-900">
              {value} Error!
            </h3>
            <div className="mt-2 px-7 py-3 text-sm text-gray-500">
              The network connection is lost, please try again
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={() => {
                  closeModal(false);
                }}
                id="ok-btn"
                className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

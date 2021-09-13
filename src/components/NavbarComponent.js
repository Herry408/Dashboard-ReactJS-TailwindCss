import React from "react";
import logo from "../logo_hitam.png";

export default function NavbarComponent() {
  return (
    <div class="bg-gray-300">
      <div class="flex">
        <div class="flex items-center p-4">
          <div>
            <button class="w-5 h-5 hover:text-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>

          <div>
            <a href="0" class="flex ml-4">
              <img src={logo} width="150px" alt="logo bv" />
            </a>
          </div>
        </div>

        <div class="flex justify-end w-full w-5-h-5 px-6">
          <button class="hover:text-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

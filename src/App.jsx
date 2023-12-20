import { IconSearch } from "@tabler/icons-react";
import React from "react";

function App() {
  return (
    <div className="flex items-center flex-col space-y-3 w-full h-[100vh] justify-center  bg-gray-700">
      <div className="mt-2">
        <section>
          <p className="text-xl text-white">Developer Search Engine</p>
        </section>
      </div>
      <div className="">
        <div className="w-[26rem] focus:border-none border-none">
          <div className="relative border-none">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IconSearch className="text-gray-400" size={"1.2rem"} />
            </div>
            <div>
              <input
                className=" w-full p-4 ps-10 text-sm focus:outline-none border-none rounded-lg "
                placeholder="Search for Users"
              />
            </div>
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="">
            <div className=" bg-white py-6 px-6  rounded-3xl w-[26rem] my-4 shadow-xl">
              <div className=" text-white flex items-center  rounded-full ">
                <img
                  className="rounded-full h-20 w-20"
                  src="https://avatars.githubusercontent.com/u/68487030?v=4"
                  alt="image description"
                />
              </div>
              <div className="">
                <p className="text-xl font-semibold my-2">Quick Course</p>

                <div class="grid grid-cols-2 gap-4 mb-2">
                  <div className="text-gray-400 ">
                    <div className="flex flex-row ">
                      <p className="text-sm">Email</p>
                      <p className="text-sm">{}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 ">
                    <div className="flex flex-row  items-center ">
                      <p className="text-sm">Followers</p>
                      <p className="text-sm">{}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 ">
                    <div className="flex flex-row ">
                      <p className="text-sm">Repositories</p>
                      <p className="text-sm">{}</p>
                    </div>
                  </div>{" "}
                  <div className="text-gray-400 ">
                    <div className="flex flex-row ">
                      <p className="text-sm">Gists</p>
                      <p className="text-sm">{}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t-2"></div>

                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Bio</p>
                    <div className="flex space-x-2">
                      <p className="text-sm">{}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

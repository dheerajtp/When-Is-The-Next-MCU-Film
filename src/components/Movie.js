import React from "react";
import { useDispatch } from "react-redux";
import { getNext } from "../features/mcu";

function Movie({
  days_until,
  overview,
  poster_url,
  release_date,
  title,
  type,
  nextoverview,
  nextimage,
  nexttitle,
  nextdate,
  following_production,
}) {
  const dispatch = useDispatch();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt={title}
            src={poster_url}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{overview}</p>
          <div className="flex justify-center">
            <dl className="flex items-center mt-6 space-x-8 text-xs">
              <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M3.5 0v5m8-5v5M3 7.5h3m6 0H9m-6 3h3m3 0h3m-10.5-8h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <div className="sm:ml-3 mt-1.5 sm:mt-0">
                  <dt className="text-gray-500">Releasing On</dt>

                  <dd className="font-medium">{release_date}</dd>
                </div>
              </div>

              <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M2.5 11.5v2m10-2v2M1 13.5h3m7 0h3M.5 2.5v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <div className="sm:ml-3 mt-1.5 sm:mt-0">
                  <dt className="text-gray-500">Type</dt>

                  <dd className="font-medium">{type}</dd>
                </div>
              </div>

              <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M3.5 0v5m8-5v5m-4 1v5M5 8.5h5m-8.5-6h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <div className="sm:ml-3 mt-1.5 sm:mt-0">
                  <dt className="text-gray-500">Remaining</dt>

                  <dd className="font-medium">{days_until} Days</dd>
                </div>
              </div>
            </dl>
          </div>
          {Object.keys(following_production).length === 0 ? (
            ""
          ) : (
            <div className="flex justify-center mt-8">
              <div className="bg-white p-3 rounded-xl shadow-xl flex flex-col items-center mt-4">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M4.5 5.5l.248-.434A.5.5 0 004 5.5h.5zm0 4H4a.5.5 0 00.748.434L4.5 9.5zm3.5-2l.248.434a.5.5 0 000-.868L8 7.5zm-4-2v4h1v-4H4zm.748 4.434l3.5-2-.496-.868-3.5 2 .496.868zm3.5-2.868l-3.5-2-.496.868 3.5 2 .496-.868zM10 5v5h1V5h-1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => {
                    dispatch(getNext(release_date));
                  }}
                >
                  <div className="flex space-x-6 items-center">
                    <img
                      src={nextimage}
                      alt={nexttitle}
                      className="w-auto h-24 rounded-lg"
                    />
                    <div>
                      <p className="font-semibold text-base">{nexttitle}</p>
                      <p className="font-semibold text-sm text-gray-400">
                        {nextoverview.substring(0, 50)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Movie;

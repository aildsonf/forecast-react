import React from "react";
import { useGlobalState } from "../context/GlobalState";
import _ from "lodash";
import getDaytime from "../lib/getDaytime";
import getToday from "../lib/getToday";

export default function CapitalForecast() {
  const { capital, setCapital } = useGlobalState();
  const daytime = getDaytime();
  const today = getToday();

  function handleClick() {
    setCapital({});
  }

  return (
    <>
      {!_.isEmpty(capital) && (
        <div className="flex flex-col gap-4 my-8 mx-auto p-4 bg-white w-10/12 rounded-md shadow-lg">
          <button
            type="button"
            className="self-end cursor-pointer"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
            </svg>
          </button>

          <section className="flex flex-col">
            <span className="flex flex-row justify-between m-2">
              <p className="font-semibold">
                {`${capital[today][daytime].entidade || " "}, ${
                  capital[today][daytime].uf || " "
                } - BRASIL`}
              </p>

              <div className="flex gap-4">
                <span>
                  <span className="text-blue-700 mr-1">↓</span>
                  {`${capital[today][daytime].temp_min}°` || "-"}
                </span>

                <span>
                  <span className="text-red-700 mr-1">↑</span>
                  {`${capital[today][daytime].temp_max}°` || "-"}
                </span>
              </div>
            </span>

            <p className="text-sm italic ml-2">{`${
              capital[today][daytime].resumo || "-"
            }`}</p>

            <div className="grid grid-cols-2 m-4 text-xs">
              <span>
                <b>{`${capital[today][daytime].dia_semana}, ${today}`}</b>
                <p>
                  <b>Umidade:</b>
                  {` ${capital[today][daytime].umidade_min} - ${capital[today][daytime].umidade_max}`}
                </p>
              </span>
              <span>
                <p>
                  <b>Nascer do Sol:</b>
                  {` ${capital[today][daytime].nascer || "-"}`}
                </p>
                <p>
                  <b>Por do Sol:</b>
                  {` ${capital[today][daytime].ocaso || "-"}`}
                </p>
              </span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

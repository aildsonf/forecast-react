import React from "react";
import { useGlobalState } from "../context/GlobalState";
import getDaytime from "../lib/getDaytime";
import getToday from "../lib/getToday";

export default function Cities() {
  const { forecast, loading } = useGlobalState();
  const daytime = getDaytime();
  const today = getToday();

  return (
    <>
      {loading ? (
        <div className="mt-8 mx-auto text-white">Carregando...</div>
      ) : (
        <section className="flex flex-col mt-8 gap-4">
          <h3 className="text-3xl text-white font-semibold">Capitais</h3>

          <span>
            <table>
              <tbody className="md:grid grid-cols-2">
                {Object.keys(forecast?.data || {}).map((key) => (
                  <tr key={key} className="md:mr-4">
                    <td>
                      <span className="text-blue-700 mr-1">↓</span>
                      {`${forecast?.data[key][today][daytime].temp_min}°` ||
                        "-"}
                    </td>
                    <td className="pl-2">
                      <span className="text-red-700 mr-1">↑</span>
                      {`${forecast?.data[key][today][daytime].temp_max}°` ||
                        "-"}
                    </td>
                    <td className="pl-4">{key || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </span>
        </section>
      )}
    </>
  );
}

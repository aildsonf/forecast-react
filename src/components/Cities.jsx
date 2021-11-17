import React from "react";
import "./Cities.css";

export default function Cities() {
  return (
    <section className="cities">
      <h3>Capitais</h3>

      <span className="capitals">
        <table>
          <tr>
            <th>Min</th>
            <th>Máx</th>
            <th />
          </tr>

          <tr>
            <td>18°</td>
            <td>27°</td>
            <td>Rio de Janeiro</td>
          </tr>

          <tr>
            <td>14°</td>
            <td>22°</td>
            <td>Sao Paulo</td>
          </tr>

          <tr>
            <td>21°</td>
            <td>32°</td>
            <td>Belo Horizonte</td>
          </tr>
        </table>
      </span>
    </section>
  );
}

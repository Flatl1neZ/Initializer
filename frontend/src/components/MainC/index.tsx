import "./styles.css";

function MainC() {
  return (
    <main>
      <section id="crypto">
        <div className="init-container">
          <div className="init-card">
            <div>
              <table className="init-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>CURRENT STATUS</th>
                    <th className="show992">DROP</th>
                    <th className="show992">UP</th>
                    <th>PRICE</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">BTC</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                  </tr>
                  <tr>
                    <td className="show992">ETH</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                  </tr>
                  <tr>
                    <td className="show992">BNC</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainC;

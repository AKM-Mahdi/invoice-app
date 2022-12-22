import "./App.css";

function App() {
  return (
    <header className="container mx-auto bg-slate-400">
      <h2>INVOICER</h2>

      {/* second section  */}
      <section className="flex">
        <div className="left flex-1">
          <div className="companyLogo">
            <img src="" alt="compnay logo" />
          </div>
        </div>
        <div className="right  flex-1 ">
          <p>BILLED TO:</p>
          <h3>Recipient Name:</h3>
          <p>Recepient Phone No:</p>
          <p>Recepient Address:</p>
        </div>
      </section>
      {/* third section  */}
      <section>
        <section className="flex">
          <div className="left  flex-1">
            <h3>Company Name:</h3>
            <p>Company Phone No:</p>
            <p>Company Address:</p>
          </div>
          <div className="right  flex-1">
            <p>
              <b>Invoice No :</b>
            </p>
            <p>
              <b>Invoice Date :</b>
            </p>
            <p>
              <b>Due Date :</b>
            </p>
          </div>
        </section>
      </section>
    </header>
  );
}

export default App;

import { SyntheticEvent, useState } from "react";

const CaseTracker = () => {
  const [status, setStatus] = useState({
    heading: "",
    details: "",
    CaseNumber: "",
    LatestDate: "",
    FormNumber: "",
  });
  const [CaseNumber, setCaseNumber] = useState("");
  const rpattern1 = '<div class="rows text-center">\n.+\n.+';
  const rpattern2 = ".+\n";
  const rpatternFormNumber = "(I-\\d+)|(I-\\d+\\w)";
  const rpatternDate = "\\w+\\s\\d+,\\s\\d+";
  const searchCase = async (
    e: SyntheticEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.allorigins.win/raw?url=https://egov.uscis.gov/casestatus/mycasestatus.do?appReceiptNum=${CaseNumber}`
    );
    const data = await res.text();
    const obj = data.match(rpattern1);
    if (obj !== null) {
      const preRawStatus = obj[0];
      const rawStatus = preRawStatus
        .replace('<div class="rows text-center">\n<h1>', "")
        .replace("</h1>\n<p>", "\n")
        .replace(
          '<a href="https://www.uscis.gov/contactcenter" target="_blank">',
          ""
        )
        .replace(
          '<a href="https://egov.uscis.gov/e-Request/Intro.do" target="_blank">',
          ""
        )
        .replaceAll("</a>", "")
        .replace(
          '<a href="https://egov.uscis.gov/coa/displayCOAForm.do" target="_blank">',
          ""
        )
        .replace("</p>", "");
      const rawHeading = rawStatus.match(rpattern2);
      if (rawHeading !== null) {
        const latestDate = rawStatus.match(rpatternDate);
        const formNumber = rawStatus.match(rpatternFormNumber);
        if (formNumber !== null && latestDate !== null) {
          setStatus({
            heading: rawHeading[0].replace("\n", ""),
            details: rawStatus.replace(`${rawHeading[0]}`, ""),
            CaseNumber: CaseNumber,
            LatestDate: latestDate[0],
            FormNumber: formNumber[0],
          });
        }
      }
    }
  };
  return (
    <div className="CTIndex">
      <h1 id="CTTitle">Case Tracker</h1>
      <div className="FormCT">
        <form>
          <input
            autoFocus={true}
            id="CaseNumberInputCT"
            type="text"
            placeholder="13 digit Case Number"
            value={CaseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
          />
          <div>
            <input
              onClick={searchCase}
              id="SubmitCT"
              type="submit"
              value="Search Case"
            />
          </div>
        </form>
      </div>
      {status?.heading && (
        <div className="StatusCT">
          <h1 id="statusCTHeading">{status?.heading}</h1>
          <p id="statusCTCaseNumber">Case Number : {status?.CaseNumber}</p>
          <p id="statusCTCaseNumber">Date : {status?.LatestDate}</p>
          <p id="statusCTCaseNumber">Form : {status?.FormNumber}</p>
          <p id="statusCTDetails">{status?.details}</p>
          <button id="SearchAnotherCaseCTBtn" onClick={() => {
              setCaseNumber("");
              }}>
            Search Another Case
          </button>
        </div>
      )}
    </div>
  );
};

export default CaseTracker;

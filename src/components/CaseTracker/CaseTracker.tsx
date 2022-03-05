import { useState } from "react";

const CaseTracker = () => {
  const [status, setStatus] = useState("");
  const rpattern = '<div class="rows text-center">\n.+\n.+';
  const onclick = async () => {
    const res = await fetch(
      "https://api.allorigins.win/raw?url=https://egov.uscis.gov/casestatus/mycasestatus.do?appReceiptNum=EAC2134250313"
    );
    const data = await res.text();
    const obj = data.match(rpattern);
    if (obj !== null) {
      const preRawStatus = obj[0];
      const rawStatus = preRawStatus
        .replace('<div class="rows text-center">\n<h1>', "")
        .replace("</h1>\n<p>", "\n")
        .replace(
          '<a href="https://www.uscis.gov/contactcenter" target="_blank">',
          ""
        )
        .replaceAll("</a>", "")
        .replace(
          '<a href="https://egov.uscis.gov/coa/displayCOAForm.do" target="_blank">',
          ""
        )
        .replace("</p>", "");
      setStatus(rawStatus);
    }
  };

  return (
    <div>
      <button onClick={onclick}>Click Here</button>
      <p>{status && status}</p>
    </div>
  );
};

export default CaseTracker;

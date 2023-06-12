import React from "react";
import FSA from "../../photos/Fullstack Cert PNG.png";
import FCC from "../../photos/FCC Cert PNG.png";
import "./certifications.css";

const Certifications = () => {
  return (
    <div className="certification-container">
      <h1>CERTIFICATIONS</h1>
      <div className="image-container">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.fullstackacademy.com/?utm_term=fullstack%20academy&utm_campaign=fsa_tech_all_google_sr_all_all_core_brand&utm_source=adwords&utm_medium=ppc&hsa_acc=9053058724&hsa_cam=658038665&hsa_grp=38873009648&hsa_ad=596321368696&hsa_src=g&hsa_tgt=kwd-75657140544&hsa_kw=fullstack%20academy&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad=1&gclid=EAIaIQobChMIo7Gu1Z6-_wIVUUlyCh3alAA9EAAYASAAEgLlsPD_BwE"
        >
          <img alt="FSA Certification" src={FSA} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.freecodecamp.org/"
        >
          <img alt="FCC Certification" src={FCC} />
        </a>
      </div>
    </div>
  );
};

export default Certifications;

import React from "react";
import "./PolicyPage.css";
const PolicyPage = () => {
  return (
    <>
      <div className="section-hero">
        <h1 className="hero-title">PRIVACY POLICY</h1>
      </div>

      <div className="privacy-policy-container">
        <h2 className="privacy-policy-title">Introduction</h2>
        <p className="privacy-policy-text">
          At Pixel Vikas, we respect the privacy of individuals and are
          committed to taking reasonable precautions to protect information
          consisting of Personal Information and{" "}
          <strong className="privacy-policy-strong">
            Sensitive Personal Data or Information
          </strong>{" "}
          (SPDI). We comply with all legal, regulatory, and contractual
          obligations related to privacy.
        </p>

        <h2 className="privacy-policy-title">Scope</h2>
        <p className="privacy-policy-text">
          This policy applies to all visitors of Pixel Vikas’ website.
        </p>

        <h2 className="privacy-policy-title">
          Information Covered by This Policy
        </h2>
        <h3 className="privacy-policy-subtitle">Personal Information</h3>
        <p className="privacy-policy-text">
          Personal information includes data such as:
        </p>
        <ul className="privacy-policy-list">
          <li className="privacy-policy-list-item">Full name</li>
          <li className="privacy-policy-list-item">Personal contact numbers</li>
          <li className="privacy-policy-list-item">Residential address</li>
          <li className="privacy-policy-list-item">Email address</li>
          <li className="privacy-policy-list-item">Gender</li>
          <li className="privacy-policy-list-item">Date of birth</li>
        </ul>

        <h3 className="privacy-policy-subtitle">
          Sensitive Personal Data or Information (SPDI)
        </h3>
        <p className="privacy-policy-text">SPDI includes:</p>
        <ul className="privacy-policy-list">
          <li className="privacy-policy-list-item">Passwords</li>
          <li className="privacy-policy-list-item">Financial information</li>
          <li className="privacy-policy-list-item">
            Physical, physiological, or mental health conditions
          </li>
          <li className="privacy-policy-list-item">Sexual orientation</li>
          <li className="privacy-policy-list-item">
            Medical records and history
          </li>
          <li className="privacy-policy-list-item">Biometric information</li>
        </ul>
        <p className="privacy-policy-note">
          <strong>Note:</strong> Information freely available in the public
          domain shall not be regarded as sensitive personal information.
        </p>

        <h2 className="privacy-policy-title">Purpose</h2>
        <p className="privacy-policy-text">
          Pixel Vikas collects and uses information for legitimate business
          purposes, including:
        </p>
        <ul className="privacy-policy-list">
          <li className="privacy-policy-list-item">
            Enabling visitors to download product information
          </li>
          <li className="privacy-policy-list-item">
            Providing information or interactive services
          </li>
          <li className="privacy-policy-list-item">
            Seeking feedback or contacting visitors
          </li>
          <li className="privacy-policy-list-item">
            Processing orders or applications
          </li>
          <li className="privacy-policy-list-item">
            Improving operations and services
          </li>
        </ul>

        <h2 className="privacy-policy-title">Collection of Information</h2>
        <p className="privacy-policy-text">
          Pixel Vikas collects only the minimum information required to meet the
          purposes outlined in this policy. This may include the use of cookies
          and session data.
        </p>

        <h2 className="privacy-policy-title">
          Access, Correction, and Withdrawal of Consent
        </h2>
        <p className="privacy-policy-text">
          Visitors may modify their information or withdraw consent by
          contacting the{" "}
          <strong className="privacy-policy-strong">Grievance Officer</strong>{" "}
          as mentioned below.
        </p>

        <h2 className="privacy-policy-title">
          Retention, Processing, and Storage
        </h2>
        <p className="privacy-policy-text">
          Pixel Vikas retains information only as long as necessary and
          maintains comprehensive security measures to protect the information.
        </p>

        <h2 className="privacy-policy-title">Disclosure of Information</h2>
        <p className="privacy-policy-text">
          Information will not be disclosed except:
        </p>
        <ul className="privacy-policy-list">
          <li className="privacy-policy-list-item">With visitor consent</li>
          <li className="privacy-policy-list-item">As required by law</li>
          <li className="privacy-policy-list-item">
            To business partners with equivalent security measures
          </li>
        </ul>

        <h2 className="privacy-policy-title">Feedback or Concerns</h2>
        <p className="privacy-policy-text">
          For any feedback or concerns, contact us at:
        </p>
        <p className="privacy-policy-text">
          <strong>Email:</strong>{" "}
          <a className="privacy-policy-link" href="mailto:info@pixelvikas.com">
            info@pixelvikas.com
          </a>
        </p>

        <h2 className="privacy-policy-title">Mobility Privacy Policy</h2>
        <p className="privacy-policy-text">
          Pixel Vikas is committed to protecting the privacy of users of its
          website and mobile applications. This policy outlines how information
          is collected, used, and disclosed.
        </p>

        <h3 className="privacy-policy-subtitle">Use of Information</h3>
        <p className="privacy-policy-text">
          Information may be used for purposes such as:
        </p>
        <ul className="privacy-policy-list">
          <li className="privacy-policy-list-item">Processing orders</li>
          <li className="privacy-policy-list-item">Improving services</li>
          <li className="privacy-policy-list-item">
            Responding to user queries
          </li>
          <li className="privacy-policy-list-item">
            Notifying users of updates
          </li>
        </ul>
        <p className="privacy-policy-text">
          If you have any questions, contact us at{" "}
          <a className="privacy-policy-link" href="mailto:info@pixelvikas.com">
            info@pixelvikas.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default PolicyPage;

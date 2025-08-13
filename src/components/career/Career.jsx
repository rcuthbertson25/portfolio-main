import "./career.css";

const Career = () => {
  return (
    <div>
      <div className="career">
        <img
          src="/public/Micronetbd_Logo.webp"
          alt="Micronet Logo"
          className="logo"
        />
        <div className="partners">
          <img
            src="/public/salesforce-partner-logo.png"
            alt="Salesforce Partner Logo"
            className="salesforce"
          />
          <img src="/public/litify.svg" alt="Litify Logo" className="litify" />
        </div>
      </div>
      <div className="job-title">
        <span>Junior Salesforce Administrator</span>
        <p>May 2025 - Present (3 Months)</p>
      </div>
      <div className="cards">
        <div className="card">
          <h3>User Management</h3>
          <p>Managed user accounts, roles, and permission sets to ensure secure and efficient access to Salesforce data.</p>
        </div>
        <div className="card">
          <h3>Data Integrity</h3>
          <p>Performed regular data audits, deduplication, and validation rule setup to maintain data accuracy and consistency.</p>
        </div>
        <div className="card">
          <h3>Automation</h3>
          <p>Built and maintained workflows, process builders, and flows to automate routine tasks and improve team productivity.</p>
        </div>
        <div className="card">
          <h3>Reporting</h3>
          <p>Created custom reports and dashboards to support business decision-making and track key performance indicators (KPIs).</p>
        </div>
      </div>
    </div>
  );
};

export default Career;

import "./career.css";

const Career = () => {
  return (
    <div>
      <div className="career">
        <img
          src="./Micronetbd_Logo.webp"
          alt="Micronet Logo"
          className="logo"
        />
        <div className="partners">
          <img
            src="./salesforce-partner-logo.png"
            alt="Salesforce Partner Logo"
            className="salesforce"
          />
          <img src="./litify.svg" alt="Litify Logo" className="litify" />
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
          <img src="./user-management.webp" alt="User Management Icon" className="icon" />
        </div>
        <div className="card">
          <h3>Data Operations</h3>
          <p>Managed data imports, exports, and mass updates; supported data quality through regular queries, validations, and workflow automation.</p>
          <img src="./data.webp" alt="Data Operations Icon" className="icon" />
        </div>
        <div className="card">
          <h3>Automation</h3>
          <p>Built and maintained workflows, process builders, and flows to automate routine tasks and improve team productivity.</p>
          <img src="./flow.webp" alt="Automation Icon" className="icon" />
        </div>
        <div className="card">
          <h3>Reporting</h3>
          <p>Created custom reports and dashboards to support business decision-making and track key performance indicators (KPIs).</p>
          <img src="./report.webp" alt="Reporting Icon" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Career;

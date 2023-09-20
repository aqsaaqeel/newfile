import {
  Sidebar,
  MetricItem,
  Footer,
  Navbar,
  Project,
  Activity,
} from "../components";
import "./Dashboard.css";

const Dashboard = () => {
  const metricDetails = [
    { number: "07", title: "Active Projects", image: "/frame-1261152735.svg" },
    { number: "04", title: "Proposals", image: "/frame-12611527351.svg" },
    { number: "03", title: "Active Jobs", image: "/frame-12611527352.svg" },
    { number: "240", title: "Application", image: "/frame-12611527353.svg" },
  ];
  return (
    <div className="dashboard">
      <div className="divhero-blur-bg" />
      <Sidebar />
      <Navbar />
      <Footer />
      <div className="header-section">
        <div className="container">
          <div className="page-header">
            <div className="content7">
              <div className="text-and-supporting-text2">
                <div className="text12">Welcome back, Olivia</div>
                <div className="supporting-text2">
                  Track, manage researchers and submissions.
                </div>
              </div>
              <div className="actions">
                <div className="button-04">
                  <div className="button-base3">
                    <div className="text10">Tertiary</div>
                  </div>
                </div>
                <div className="button-03">
                  <div className="button-base4">
                    <div className="text10">Secondary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="metric-group">
        {metricDetails.map((item) => (
          <MetricItem
            number={item.number}
            name={item.title}
            image={item.image}
          />
        ))}
      </div>
      <div className="metric-item-parent">
        <Project />
        <Activity />
      </div>
    </div>
  );
};

export default Dashboard;

import "../../pages/Dashboard.css"
export const Sidebar = () =>{
    return(
        <div className="sidebar-navigation">
        <div className="content">
          <div className="nav">
            <div className="header">
              <img className="logo-icon1" alt="" src="/logo1.svg" />
            </div>
            <div className="navigation">
              <div className="nav-item-base">
                <div className="avatar-label-group">
                  <img
                    className="bar-chart-2-icon"
                    alt=""
                    src="/barchart2.svg"
                  />
                  <div className="text4">Dashboard</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="avatar-label-group">
                  <img className="bar-chart-2-icon" alt="" src="/3layers.svg" />
                  <div className="text4">Projects</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="avatar-label-group">
                  <img className="bar-chart-2-icon" alt="" src="/users.svg" />
                  <div className="text4">Staffing</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="avatar-label-group">
                  <img
                    className="bar-chart-2-icon"
                    alt=""
                    src="/solarchatlinebroken.svg"
                  />
                  <div className="text4">Messages</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-parent">
            <div className="footer">
              <div className="navigation1">
                <div className="nav-item-base4">
                  <div className="avatar-label-group">
                    <img
                      className="bar-chart-2-icon"
                      alt=""
                      src="/barchart2.svg"
                    />
                    <div className="text4">Support</div>
                  </div>
                </div>
                <div className="nav-item-base4">
                  <div className="avatar-label-group">
                    <img
                      className="bar-chart-2-icon"
                      alt=""
                      src="/settings.svg"
                    />
                    <div className="text4">Settings</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer1">
              <img className="divider-icon" alt="" src="/divider.svg" />
              <div className="account">
                <div className="avatar-label-group">
                  <img className="avatar-icon1" alt="" src="/avatar@2x.png" />
                  <div className="page-header">
                    <div className="text10">Olivia Rhye</div>
                    <div className="supporting-text1">
                      olivia@untitledui.com
                    </div>
                  </div>
                </div>
                <div className="icon">
                  <div className="button">
                    <div className="button-base2">
                      <img className="log-out-icon" alt="" src="/logout.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
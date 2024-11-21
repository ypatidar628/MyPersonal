import { Link } from "react-router-dom";

function SideBar(){
    return  <div className="sidebar" data-background-color="dark">
    <div className="sidebar-logo">
      <div className="logo-header" data-background-color="dark">
        <Link to="index.html" className="logo">
          <img
            src="assets/img/kaiadmin/logo_light.svg"
            alt="navbar brand"
            className="navbar-brand"
            height="20"
          />
        </Link>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="gg-menu-right"></i>
          </button>
          <button className="btn btn-toggle sidenav-toggler">
            <i className="gg-menu-left"></i>
          </button>
        </div>
        <button className="topbar-toggler more">
          <i className="gg-more-vertical-alt"></i>
        </button>
      </div>
    
    </div>
    <div className="sidebar-wrapper scrollbar scrollbar-inner">
      <div className="sidebar-content">
        <ul className="nav nav-secondary">
          <li className="nav-item active">
            <Link
              data-bs-toggle="collapse"
              to="#dashboard"
              className="collapsed"
              aria-expanded="false"
            >
              <i className="fas fa-home"></i>
              <p>Dashboard</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="dashboard">
              <ul className="nav nav-collapse">
                <li>
                  <Link to="../demo1/index.html">
                    <span className="sub-item">Dashboard 1</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="fa fa-ellipsis-h"></i>
            </span>
            <h4 className="text-section">Components</h4>
          </li>
          <li className="nav-item">
            <Link data-bs-toggle="collapse" to="#base">
              <i className="fas fa-layer-group"></i>
              <p>Base</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="base">
              <ul className="nav nav-collapse">
                <li>
                  <Link to="components/avatars.html">
                    <span className="sub-item">Avatars</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/buttons.html">
                    <span className="sub-item">Buttons</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/gridsystem.html">
                    <span className="sub-item">Grid System</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/panels.html">
                    <span className="sub-item">Panels</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/notifications.html">
                    <span className="sub-item">Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/sweetalert.html">
                    <span className="sub-item">Sweet Alert</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/font-awesome-icons.html">
                    <span className="sub-item">Font Awesome Icons</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/simple-line-icons.html">
                    <span className="sub-item">Simple Line Icons</span>
                  </Link>
                </li>
                <li>
                  <Link to="components/typography.html">
                    <span className="sub-item">Typography</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link data-bs-toggle="collapse" to="#sidebarLayouts">
              <i className="fas fa-th-list"></i>
              <p>Sidebar Layouts</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="sidebarLayouts">
              <ul className="nav nav-collapse">
                <li>
                  <Link to="sidebar-style-2.html">
                    <span className="sub-item">Sidebar Style 2</span>
                  </Link>
                </li>
                <li>
                  <Link to="icon-menu.html">
                    <span className="sub-item">Icon Menu</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link data-bs-toggle="collapse" to="#forms">
              <i className="fas fa-pen-square"></i>
              <p>Forms</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="forms">
              <ul className="nav nav-collapse">
                <li>
                  <Link to="forms/forms.html">
                    <span className="sub-item">Basic Form</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link data-bs-toggle="collapse" to="#tables">
              <i className="fas fa-table"></i>
              <p>Tables</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="tables">
              <ul className="nav nav-collapse">
                <li>
                  <Link to="tables/tables.html">
                    <span className="sub-item">Basic Table</span>
                  </Link>
                </li>
                <li>
                  <Link to="tables/datatables.html">
                    <span className="sub-item">Datatables</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link data-bs-toggle="collapse" to="#maps">
              <i className="fas fa-map-marker-alt"></i>
              <p>Maps</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="maps">
              <ul className="nav nav-collapse">
                <li>
                  <Link to="maps/googlemaps.html">
                    <span className="sub-item">Google Maps</span>
                  </Link>
                </li>
                <li>
                  <Link to="maps/jsvectormap.html">
                    <span className="sub-item">Jsvectormap</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link data-bs-toggle="collapse" to="#charts">
              <i className="far fa-chart-bar"></i>
              <p>Charts</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="charts">
              <ul className="nav nav-collapse">
                <li>
                  <Link to="charts/charts.html">
                    <span className="sub-item">Chart Js</span>
                  </Link>
                </li>
                <li>
                  <Link to="charts/sparkline.html">
                    <span className="sub-item">Sparkline</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link to="widgets.html">
              <i className="fas fa-desktop"></i>
              <p>Widgets</p>
              <span className="badge badge-success">4</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="../../documentation/index.html">
              <i className="fas fa-file"></i>
              <p>Documentation</p>
              <span className="badge badge-secondary">1</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link data-bs-toggle="collapse" to="#submenu">
              <i className="fas fa-bars"></i>
              <p>Menu Levels</p>
              <span className="caret"></span>
            </Link>
            <div className="collapse" id="submenu">
              <ul className="nav nav-collapse">
                <li>
                  <Link data-bs-toggle="collapse" to="#subnav1">
                    <span className="sub-item">Level 1</span>
                    <span className="caret"></span>
                  </Link>
                  <div className="collapse" id="subnav1">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <Link to="#">
                          <span className="sub-item">Level 2</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="sub-item">Level 2</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link data-bs-toggle="collapse" to="#subnav2">
                    <span className="sub-item">Level 1</span>
                    <span className="caret"></span>
                  </Link>
                  <div className="collapse" id="subnav2">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <Link to="#">
                          <span className="sub-item">Level 2</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#">
                    <span className="sub-item">Level 1</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
}
export default SideBar;
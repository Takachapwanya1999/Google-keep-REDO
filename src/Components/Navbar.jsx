import "./Navbar.css";
import Menu from '../assets/menu.svg'
function Navbar() {
    return (
        <nav>
            <div className="logo-area">
                <div className="tooltip">
                    <img src={Menu} alt="" />
                </div>

                <img
                    className="gb_uc gb_7d"
                    src="https://www.gstatic.com/images/branding/product/1x/keep_2020_48dp.png"
                    alt="Keep logo"
                    aria-hidden="true"
                />
                <span className="logo-text">Keep</span>
            </div>

            <div className="search-area">
                <div className="tooltip">
                    <span className="material-icons-outlined hover">search</span>
                    <span className="tooltip-text">Search</span>
                </div>
                <input type="text" placeholder="Search" />
            </div>

            <div className="settings-area">
                <div className="tooltip">
                    <span className="material-icons-outlined hover">refresh</span>
                    <span className="tooltip-text">Refresh</span>
                </div>
                <div className="tooltip">
                    <span className="material-icons-outlined hover">settings</span>
                    <span className="tooltip-text">Settings</span>
                </div>
            </div>

            <div className="profile-actions-area">
                {/* Add profile-related actions/icons here */}
            </div>
        </nav>
    );
}

export default Navbar;

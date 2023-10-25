export default function Navbar()
{
    return(
        <div class="side-nav side-nav-transparent side-nav-expand">
        <div className="side-nav-header">
          <div className="logo px-6">
            <img src="img/logo/logo-light-full.png" alt="Elstar logo" />
          </div>
        </div>
        <div className="side-nav-content relative side-nav-scroll">
          <nav className="menu menu-transparent px-4 pb-4">
            <div className="menu-group">
              <div className="menu-title">Apps</div>
              <ul>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="menu-item-text">Project</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-project-dashboard" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-project-dashboard.html">
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-project-list" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-project-list.html">
                        <span>Project List</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-scrum-board" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-scrum-board.html">
                        <span>Scrum Board</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-issue" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-issue.html">
                        <span>Issue</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="menu-item-text">CRM</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-crm-dashboard" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-crm-dashboard.html">
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-calendar" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-calendar.html">
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-customers" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-customers.html">
                        <span>Customers</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-customer-details" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-customer-details.html">
                        <span>Customer Details</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-mail" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-mail.html">
                        <span>Mail</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="menu-item-text">Sales</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-sales-dashboard" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-sales-dashboard.html">
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-product-list" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-product-list.html">
                        <span>Product List</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-product-edit" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-product-edit.html">
                        <span>Product Edit</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-new-product" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-new-product.html">
                        <span>New Product</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-order-list" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-order-list.html">
                        <span>Order List</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-order-details" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-order-details.html">
                        <span>Order Details</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="menu-item-text">Crypto</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-crypto-dashboard" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-crypto-dashboard.html">
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-portfolio" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-portfolio.html">
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-market" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-market.html">
                        <span>Market</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-wallets" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-wallets.html">
                        <span>Wallets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="menu-item-text">Knowledge Base</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-help-center" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-help-center.html">
                        <span>Help Center</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-article" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-article.html">
                        <span>Article</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-manage-articles" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-manage-articles.html">
                        <span>Manage Articles</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-edit-article" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-edit-article.html">
                        <span>Edit Article</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="menu-item-text">Account</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-settings" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-settings.html">
                        <span>Settings</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-invoice" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-invoice.html">
                        <span>Invoice</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-activity-log" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-activity-log.html">
                        <span>Activity Log</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-kyc-form" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-kyc-form.html">
                        <span>KYC Form</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu-group">
              <div className="menu-title">UI Components</div>
              <ul>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <span className="menu-item-text">Common</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-button" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-button.html">
                        <span>Button</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-grid" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-grid.html">
                        <span>Grid</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-typography" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-typography.html">
                        <span>Typography</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-icons" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-icons.html">
                        <span>Icons</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="menu-item-text">Feedback</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-alert" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-alert.html">
                        <span>Alert</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-dialog" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-dialog.html">
                        <span>Dialog</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-drawer" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-drawer.html">
                        <span>Drawer</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-progress" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-progress.html">
                        <span>Progress</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-skeleton" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-skeleton.html">
                        <span>Skeleton</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-spinner" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-spinner.html">
                        <span>Spinner</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-toast" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-toast.html">
                        <span>Toast</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="menu-item-text">Data Display</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-avatar" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-avatar.html">
                        <span>Avatar</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-badge" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-badge.html">
                        <span>Badge</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-card" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-card.html">
                        <span>Card</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-table" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-table.html">
                        <span>Table</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-tag" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-tag.html">
                        <span>Tag</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-timeline" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-timeline.html">
                        <span>Timeline</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-tooltip" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-tooltip.html">
                        <span>Tooltip</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="menu-item-text">Forms</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-checkbox" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-checkbox.html">
                        <span>Checkbox</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-date-picker" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-date-picker.html">
                        <span>Date Picker</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-form" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-form.html">
                        <span>Form</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-input" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-input.html">
                        <span>Input</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-input-group" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-input-group.html">
                        <span>Input Group</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-radio" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-radio.html">
                        <span>Radio</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-segment" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-segment.html">
                        <span>Segment</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-select" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-select.html">
                        <span>Select</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-switcher" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-switcher.html">
                        <span>Switcher</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="menu-item-text">Navigation</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-dropdown" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-dropdown.html">
                        <span>Dropdown</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-menu" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-menu.html">
                        <span>Menu</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-pagination" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-pagination.html">
                        <span>Pagination</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-steps" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-steps.html">
                        <span>Steps</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-tabs" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-tabs.html">
                        <span>Tabs</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    <span className="menu-item-text">Graph</span>
                  </div>
                  <ul>
                    <li data-menu-item="modern-chart" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-chart.html">
                        <span>Charts</span>
                      </a>
                    </li>
                    <li data-menu-item="modern-maps" className="menu-item">
                      <a className="h-full w-full flex items-center" href="modern-maps.html">
                        <span>Maps</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu-group">
              <div className="menu-title">Authentication</div>
              <ul>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="menu-item-text">Sign In</span>
                  </div>
                  <ul>
                    <li data-menu-item="signin-simple" className="menu-item">
                      <a className="h-full w-full flex items-center" href="signin-simple.html">
                        <span>Simple</span>
                      </a>
                    </li>
                    <li data-menu-item="signin-side" className="menu-item">
                      <a className="h-full w-full flex items-center" href="signin-side.html">
                        <span>Side</span>
                      </a>
                    </li>
                    <li data-menu-item="signin-cover" className="menu-item">
                      <a className="h-full w-full flex items-center" href="signin-cover.html">
                        <span>Cover</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span className="menu-item-text">Sign Up</span>
                  </div>
                  <ul>
                    <li data-menu-item="signup-simple" className="menu-item">
                      <a className="h-full w-full flex items-center" href="signup-simple.html">
                        <span>Simple</span>
                      </a>
                    </li>
                    <li data-menu-item="signup-side" className="menu-item">
                      <a className="h-full w-full flex items-center" href="signup-side.html">
                        <span>Side</span>
                      </a>
                    </li>
                    <li data-menu-item="signup-cover" className="menu-item">
                      <a className="h-full w-full flex items-center" href="signup-cover.html">
                        <span>Cover</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="menu-item-text">Forgot Password</span>
                  </div>
                  <ul>
                    <li data-menu-item="forget-password-simple" className="menu-item">
                      <a className="h-full w-full flex items-center" href="forget-password-simple.html">
                        <span>Simple</span>
                      </a>
                    </li>
                    <li data-menu-item="forget-password-side" className="menu-item">
                      <a className="h-full w-full flex items-center" href="forget-password-side.html">
                        <span>Side</span>
                      </a>
                    </li>
                    <li data-menu-item="forget-password-cover" className="menu-item">
                      <a className="h-full w-full flex items-center" href="forget-password-cover.html">
                        <span>Cover</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-collapse">
                  <div className="menu-collapse-item">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <span className="menu-item-text">Reset Password</span>
                  </div>
                  <ul>
                    <li data-menu-item="reset-password-simple" className="menu-item">
                      <a className="h-full w-full flex items-center" href="reset-password-simple.html">
                        <span>Simple</span>
                      </a>
                    </li>
                    <li data-menu-item="reset-password-side" className="menu-item">
                      <a className="h-full w-full flex items-center" href="reset-password-side.html">
                        <span>Side</span>
                      </a>
                    </li>
                    <li data-menu-item="reset-password-cover" className="menu-item">
                      <a className="h-full w-full flex items-center" href="reset-password-cover.html">
                        <span>Cover</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu-group">
              <div className="menu-title menu-title-transparent">
                Pages
              </div>
              <ul>
                <li data-menu-item="modern-welcome" className="menu-item menu-item-single mb-2">
                  <a className="menu-item-link" href="modern-welcome.html">
                    <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                    <span className="menu-item-text">Welcome</span>
                  </a>
                </li>
                <li data-menu-item="modern-access-denied" className="menu-item menu-item-single mb-2">
                  <a className="menu-item-link" href="modern-access-denied.html">
                    <span className="menu-item-icon">
                      <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </span>
                    <span className="menu-item-text">Access Denied</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-group">
              <div className="menu-title menu-title-transparent">
                Guide
              </div>
              <ul>
                <li data-menu-item="modern-documentation" className="menu-item menu-item-single mb-2">
                  <a className="menu-item-link" href="http://www.themenate.net/elstar-html-doc" target="_blank">
                    <span className="menu-item-icon">
                      <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <span className="menu-item-text">Documentation</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
}

import Navbar from '@/Components/Navbar';
import Header from '@/Components/Header';
export default function Dashboard({ auth }) {
    return (
        <div id="root">
  {/* App Layout*/}
  <div className="app-layout-modern flex flex-auto flex-col">
    <div className="flex flex-auto min-w-0">
      {/* Side Nav start*/}
        <Navbar/>
      {/* Side Nav end*/}
      {/* Header Nav start*/}
      <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
        <Header name={auth.user.name} email={auth.user.email}/>
        {/* Popup start */}
        <div className="modal fade" id="dialog-search" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog dialog">
            <div className="dialog-content p-0">
              <div>
                <div className="px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center">
                    <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ring-0 outline-none block w-full p-4 text-base bg-transparent text-gray-900 dark:text-gray-100" placeholder="Search..." />
                  </div>
                  <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 rounded font-semibold h-7 px-3 py-1 text-xs" data-bs-dismiss="modal">Esc</button>
                </div>
                <div className="py-6 px-5 max-h-[550px] overflow-y-auto">
                  <div className="mb-6">
                    <h6 className="mb-3">Recommended</h6>
                    <a href="http://www.themenate.net/docs/documentation/introduction">
                      <div className="flex items-center justify-between rounded-lg p-3.5 cursor-pointer user-select bg-gray-50 dark:bg-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-700/90 mb-3">
                        <div className="flex items-center">
                          <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm text-xl group-hover:shadow h-6 w-6 flex items-center justify-center bg-white dark:bg-gray-700 text-primary-600 dark:text-gray-100">
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="text-gray-900 dark:text-gray-300">
                            <span>
                              <span>Documentation</span>
                            </span>
                          </div>
                        </div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>
                    <a href="http://www.themenate.net/docs/changelog">
                      <div className="flex items-center justify-between rounded-lg p-3.5 cursor-pointer user-select bg-gray-50 dark:bg-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-700/90 mb-3">
                        <div className="flex items-center">
                          <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm text-xl group-hover:shadow h-6 w-6 flex items-center justify-center bg-white dark:bg-gray-700 text-primary-600 dark:text-gray-100">
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div className="text-gray-900 dark:text-gray-300">
                            <span>
                              <span>Changelog</span>
                            </span>
                          </div>
                        </div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>
                    <a href="http://www.themenate.net/ui-components/button">
                      <div className="flex items-center justify-between rounded-lg p-3.5 cursor-pointer user-select bg-gray-50 dark:bg-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-700/90 mb-3">
                        <div className="flex items-center">
                          <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm text-xl group-hover:shadow h-6 w-6 flex items-center justify-center bg-white dark:bg-gray-700 text-primary-600 dark:text-gray-100">
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                          </div>
                          <div className="text-gray-900 dark:text-gray-300">
                            <span>
                              <span>Button</span>
                            </span>
                          </div>
                        </div>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="mobile-nav-drawer" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog drawer drawer-start !w-[330px]">
            <div className="drawer-content">
              <div className="drawer-header">
                <h4>Navigation</h4>
                <span className="close-btn" role="button" data-bs-dismiss="modal">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <div className="drawer-body p-0">
                <div className="side-nav-mobile">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-project-dashboard.html">
                                  <span>Dashboard</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-project-list" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-project-list.html">
                                  <span>Project List</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-scrum-board" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-scrum-board.html">
                                  <span>Scrum Board</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-issue" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-issue.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-crm-dashboard.html">
                                  <span>Dashboard</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-calendar" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-calendar.html">
                                  <span>Calendar</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-customers" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-customers.html">
                                  <span>Customers</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-customer-details" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-customer-details.html">
                                  <span>Customer Details</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-mail" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-mail.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-sales-dashboard.html">
                                  <span>Dashboard</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-product-list" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-product-list.html">
                                  <span>Product List</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-product-edit" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-product-edit.html">
                                  <span>Product Edit</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-new-product" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-new-product.html">
                                  <span>New Product</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-order-list" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-order-list.html">
                                  <span>Order List</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-order-details" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-order-details.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-crypto-dashboard.html">
                                  <span>Dashboard</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-portfolio" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-portfolio.html">
                                  <span>Portfolio</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-market" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-market.html">
                                  <span>Market</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-wallets" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-wallets.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-help-center.html">
                                  <span>Help Center</span>
                                </a>
                              </li>
                              <li data-menu-item="stacked-side-article" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-article.html">
                                  <span>Article</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-manage-articles" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-manage-articles.html">
                                  <span>Manage Articles</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-edit-article" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-edit-article.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-settings.html">
                                  <span>Settings</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-invoice" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-invoice.html">
                                  <span>Invoice</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-activity-log" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-activity-log.html">
                                  <span>Activity Log</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-kyc-form" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-kyc-form.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-button.html">
                                  <span>Button</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-grid" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-grid.html">
                                  <span>Grid</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-typography" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-typography.html">
                                  <span>Typography</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-icons" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-icons.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-alert.html">
                                  <span>Alert</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-dialog" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-dialog.html">
                                  <span>Dialog</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-drawer" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-drawer.html">
                                  <span>Drawer</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-progress" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-progress.html">
                                  <span>Progress</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-skeleton" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-skeleton.html">
                                  <span>Skeleton</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-spinner" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-spinner.html">
                                  <span>Spinner</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-toast" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-toast.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-avatar.html">
                                  <span>Avatar</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-badge" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-badge.html">
                                  <span>Badge</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-card" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-card.html">
                                  <span>Card</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-table" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-table.html">
                                  <span>Table</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-tag" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-tag.html">
                                  <span>Tag</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-timeline" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-timeline.html">
                                  <span>Timeline</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-tooltip" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-tooltip.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-checkbox.html">
                                  <span>Checkbox</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-date-picker" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-date-picker.html">
                                  <span>Date Picker</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-form" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-form.html">
                                  <span>Form</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-input" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-input.html">
                                  <span>Input</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-input-group" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-input-group.html">
                                  <span>Input Group</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-radio" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-radio.html">
                                  <span>Radio</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-segment" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-segment.html">
                                  <span>Segment</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-select" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-select.html">
                                  <span>Select</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-switcher" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-switcher.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-dropdown.html">
                                  <span>Dropdown</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-menu" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-menu.html">
                                  <span>Menu</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-pagination" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-pagination.html">
                                  <span>Pagination</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-steps" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-steps.html">
                                  <span>Steps</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-tabs" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-tabs.html">
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
                                <a className="h-full w-full flex items-center" href="stacked-side-chart.html">
                                  <span>Charts</span>
                                </a>
                              </li>
                              <li data-menu-item="modern-maps" className="menu-item">
                                <a className="h-full w-full flex items-center" href="stacked-side-maps.html">
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
                            <a className="menu-item-link" href="stacked-side-welcome.html">
                              <svg className="menu-item-icon" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                              </svg>
                              <span className="menu-item-text">Welcome</span>
                            </a>
                          </li>
                          <li data-menu-item="modern-access-denied" className="menu-item menu-item-single mb-2">
                            <a className="menu-item-link" href="stacked-side-access-denied.html">
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
              </div>
            </div>
          </div>
        </div>
        {/* Popup end */}
        <div className="h-full flex flex-auto flex-col justify-between">
          {/* Content start */}
          <main className="h-full">
            <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6">
              <div className="flex flex-col gap-4 h-full">
                <div className="lg:flex items-center justify-between mb-4 gap-3">
                  <div className="mb-4 lg:mb-0">
                    <h3>Sales Overview</h3>
                    <p>View your current sales &amp; summary</p>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                    <span className="input-wrapper">
                      <input id="date-query-input" datepicker datepicker-orientation="bottom right" className="input input-sm pr-8" placeholder="Pick a date" />
                      <div className="input-suffix-end">
                        <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </span>
                    <button className="btn btn-sm btn-default">
                      <span className="flex items-center justify-center">
                        <span className="text-lg">
                          <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                          </svg>
                        </span>
                        <span className="ltr:ml-1 rtl:mr-1">Filter</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="card card-layout-frame">
                    <div className="card-body">
                      <h6 className="font-semibold mb-4 text-sm">Revenue</h6>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold">
                            <span>$21,827.13</span>
                          </h3>
                          <p>vs. 3 months prior to <span className="font-semibold">20 Jan</span></p>
                        </div>
                        <div className="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100">
                          <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>11.4%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-layout-frame">
                    <div className="card-body">
                      <h6 className="font-semibold mb-4 text-sm">Orders</h6>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold">
                            <span>1,758</span>
                          </h3>
                          <p>vs. 3 months prior to <span className="font-semibold">20 Jan</span></p>
                        </div>
                        <div className="tag gap-1 font-bold border-0 text-red-600 dark:text-red-500 bg-red-100 dark:bg-red-500/20 dark:text-red-100">
                          <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>-3.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-layout-frame">
                    <div className="card-body">
                      <h6 className="font-semibold mb-4 text-sm">Purchases</h6>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold">
                            <span>$7,249.31</span>
                          </h3>
                          <p>vs. 3 months prior to <span className="font-semibold">20 Jan</span></p>
                        </div>
                        <div className="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100">
                          <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>5.7%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="card card-layout-frame col-span-2">
                    <div className="card-body">
                      <div className="flex items-center justify-between">
                        <h4>Sales Report</h4>
                        <button className="btn btn-sm btn-default">Export Report</button>
                      </div>
                      <div id="sales-report-chart" />
                    </div>
                  </div>
                  <div className="card card-layout-frame">
                    <div className="card-body">
                      <h4>Categories</h4>
                      <div className="mt-6">
                        <div id="categories-chart" />
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-4 max-w-[180px] mx-auto">
                        <div className="flex items-center gap-1">
                          <span className="badge-dot" style={{backgroundColor: 'rgb(79, 70, 229)'}} />
                          <span className="font-semibold">Devices</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="badge-dot" style={{backgroundColor: 'rgb(59, 130, 246)'}} />
                          <span className="font-semibold">Watches</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="badge-dot" style={{backgroundColor: 'rgb(16, 185, 129)'}} />
                          <span className="font-semibold">Bags</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="badge-dot" style={{backgroundColor: 'rgb(245, 158, 11)'}} />
                          <span className="font-semibold">Shoes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="card card-layout-frame col-span-2">
                    <div className="card-body">
                      <div className="flex items-center justify-between mb-6">
                        <h4>Latest Orders</h4>
                        <button className="btn btn-sm btn-default">View Orders</button>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="table-default table-hover">
                          <thead>
                            <tr>
                              <th>Order</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Customer</th>
                              <th>Profile Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span className="cursor-pointer select-none font-semibold hover:text-indigo-600">#95954</span>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <span className="badge-dot bg-emerald-500" />
                                  <span className="ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500">Paid</span>
                                </div>
                              </td>
                              <td>
                                <span>10/08/2022</span>
                              </td>
                              <td>Ron Vargas</td>
                              <td>
                                <span>$168.00</span></td>
                            </tr>
                            <tr>
                              <td>
                                <span className="cursor-pointer select-none font-semibold hover:text-indigo-600">#95423</span>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <span className="badge-dot bg-emerald-500" />
                                  <span className="ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500">Paid</span>
                                </div>
                              </td>
                              <td>
                                <span>30/07/2022</span>
                              </td>
                              <td>Carolyn Hanso</td>
                              <td>
                                <span>$523.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="cursor-pointer select-none font-semibold hover:text-indigo-600">#92903</span>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <span className="badge-dot bg-amber-500" />
                                  <span className="ml-2 rtl:mr-2 capitalize font-semibold text-amber-500">Pending</span>
                                </div>
                              </td>
                              <td>
                                <span>18/07/2022</span>
                              </td>
                              <td>Gabriella May</td>
                              <td>
                                <span>$81.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="cursor-pointer select-none font-semibold hover:text-indigo-600">#92627</span>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <span className="badge-dot bg-red-500" />
                                  <span className="ml-2 rtl:mr-2 capitalize font-semibold text-red-500">Failed</span>
                                </div>
                              </td>
                              <td>
                                <span>09/07/2022</span>
                              </td>
                              <td>Tara Fletcher</td>
                              <td>
                                <span>$279.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="cursor-pointer select-none font-semibold hover:text-indigo-600">#89332</span>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <span className="badge-dot bg-emerald-500" />
                                  <span className="ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500">Paid</span>
                                </div>
                              </td>
                              <td>
                                <span>02/06/2022</span>
                              </td>
                              <td>Eileen Horton</td>
                              <td>
                                <span>$597.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="cursor-pointer select-none font-semibold hover:text-indigo-600">#86497</span>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <span className="badge-dot bg-red-500" />
                                  <span className="ml-2 rtl:mr-2 capitalize font-semibold text-red-500">Failed</span>
                                </div>
                              </td>
                              <td>
                                <span>19/03/2022</span>
                              </td>
                              <td>Lloyd Obrien</td>
                              <td>
                                <span>$189.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="cursor-pointer select-none font-semibold hover:text-indigo-600">#86212</span>
                              </td>
                              <td>
                                <div className="flex items-center">
                                  <span className="badge-dot bg-emerald-500" />
                                  <span className="ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500">Paid</span>
                                </div>
                              </td>
                              <td>
                                <span>09/03/2022</span>
                              </td>
                              <td>Tara Fletcher</td>
                              <td>
                                <span>$672.00</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="card card-layout-frame">
                    <div className="card-body">
                      <div className="flex items-center justify-between mb-4">
                        <h4>Top Selling</h4>
                        <button className="btn btn-sm btn-default">View Products</button>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="table-default table-hover">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Sold</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="flex items-center gap-2">
                                  <span className="avatar avatar-rounded avatar-md">
                                    <img className="avatar-img avatar-rounded" src="img/products/product-1.jpg" loading="lazy" />
                                  </span>
                                  <span className="font-semibold">Luminaire Giotto Headphones</span>
                                </div>
                              </td>
                              <td>252</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flex items-center gap-2">
                                  <span className="avatar avatar-rounded avatar-md">
                                    <img className="avatar-img avatar-rounded" src="img/products/product-3.jpg" loading="lazy" />
                                  </span>
                                  <span className="font-semibold">Black Sneaker</span>
                                </div>
                              </td>
                              <td>186</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flex items-center gap-2">
                                  <span className="avatar avatar-rounded avatar-md">
                                    <img className="avatar-img avatar-rounded" src="img/products/product-4.jpg" loading="lazy" />
                                  </span>
                                  <span className="font-semibold">Gray Hoodies</span>
                                </div>
                              </td>
                              <td>166</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flex items-center gap-2">
                                  <span className="avatar avatar-rounded avatar-md">
                                    <img className="avatar-img avatar-rounded" src="img/products/product-5.jpg" loading="lazy" />
                                  </span>
                                  <span className="font-semibold">Blue Backpack</span>
                                </div>
                              </td>
                              <td>93</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="flex items-center gap-2">
                                  <span className="avatar avatar-rounded avatar-md">
                                    <img className="avatar-img avatar-rounded" src="img/products/product-7.jpg" loading="lazy" />
                                  </span>
                                  <span className="font-semibold">Strip Analog Watch</span>
                                </div>
                              </td>
                              <td>81</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Content end */}
          {/* Footer start */}
          <footer className="footer flex flex-auto items-center h-16 px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between flex-auto w-full">
              <span>Copyright © 2023 <span className="font-semibold">Elstar</span> All rights reserved.</span>
              <div>
                <a className="text-gray" href="#">Term &amp; Conditions</a>
                <span className="mx-2 text-muted"> | </span>
                <a className="text-gray" href="#">Privacy &amp; Policy</a>
              </div>
            </div>
          </footer>
          {/* Footer end */}
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default function Header(props)
{
    return(
        <header className="header border-b border-gray-200 dark:border-gray-700">
        <div className="header-wrapper h-16">
          {/* Header Nav Start start*/}
          <div className="header-action header-action-start">
            <div id="side-nav-toggle" className="side-nav-toggle header-action-item header-action-item-hoverable">
              <div className="text-2xl">
                <svg className="side-nav-toggle-icon-expand" stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <svg className="side-nav-toggle-icon-collapsed hidden" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
            <div className="side-nav-toggle-mobile header-action-item header-action-item-hoverable" data-bs-toggle="modal" data-bs-target="#mobile-nav-drawer">
              <div className="text-2xl">
                <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
            </div>
            <div className="header-search header-action-item header-action-item-hoverable text-2xl" data-bs-toggle="modal" data-bs-target="#dialog-search">
              <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          {/* Header Nav Start end*/}
          {/* Header Nav End start */}
          <div className="header-action header-action-end">
            {/* Language Selector*/}
            {/* Notification*/}
            <div className="dropdown">
              <div className="dropdown-toggle" id="nav-notification-dropdown" data-bs-toggle="dropdown">
                <div className="text-2xl header-action-item header-action-item-hoverable">
                  <span className="badge-wrapper">
                    <span className="badge-dot badge-inner" style={{top: 3, right: 6}} />
                    <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* <ul className="dropdown-menu p-0 min-w-[280px] md:min-w-[340px]">
                <li className="menu-item-header">
                  <div className="border-b border-gray-200 dark:border-gray-600 px-4 py-2 flex items-center justify-between">
                    <h6>Notifications</h6>
                    <span className="tooltip-wrapper">
                      <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-9 w-9 inline-flex items-center justify-center text-lg">
                        <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                      </button>
                    </span>
                  </div>
                </li>
                <li className="relative">
                  <div className="max-h-[288px] overflow-y-auto relative notification-scroll">
                    <div className="relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20  border-b border-gray-200 dark:border-gray-600">
                      <div>
                        <span className="avatar avatar-circle avatar-md">
                          <img className="avatar-img avatar-circle" src="img/avatars/thumb-8.jpg" loading="lazy" alt />
                        </span>
                      </div>
                      <div className="ltr:ml-3 rtl:mr-3">
                        <div>
                          <span className="font-semibold heading-text">Jean Bowman </span>
                          <span>invited you to new project.</span>
                        </div>
                        <span className="text-xs">4 minutes ago</span>
                      </div>
                      <span className="badge-dot bg-primary-600  absolute top-4 ltr:right-4 rtl:left-4 mt-1.5" />
                    </div>
                    <div className="relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20  border-b border-gray-200 dark:border-gray-600">
                      <div>
                        <span className="avatar avatar-circle avatar-md bg-primary-600 dark:bg-primary-600">
                          <span className="avatar-string avatar-inner-md">VK</span>
                        </span>
                      </div>
                      <div className="ltr:ml-3 rtl:mr-3">
                        <div>
                          <span className="font-semibold heading-text">Vickie Kim </span>
                          <span>comment in your ticket.</span>
                        </div>
                        <span className="text-xs">20 minutes ago</span>
                      </div>
                      <span className="badge-dot bg-primary-600  absolute top-4 ltr:right-4 rtl:left-4 mt-1.5" />
                    </div>
                    <div className="relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20  border-b border-gray-200 dark:border-gray-600">
                      <div>
                        <span className="avatar avatar-circle avatar-md bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100">
                          <span className="avatar-icon avatar-icon-md">
                            <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="ltr:ml-3 rtl:mr-3">
                        <div>
                          <span>Please submit your daily report.</span>
                        </div>
                        <span className="text-xs">1 hour ago</span>
                      </div>
                      <span className="badge-dot bg-primary-600  absolute top-4 ltr:right-4 rtl:left-4 mt-1.5" />
                    </div>
                    <div className="relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20  border-b border-gray-200 dark:border-gray-600">
                      <div>
                        <span className="avatar avatar-circle avatar-md bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100">
                          <span className="avatar-icon avatar-icon-md">
                            <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="ltr:ml-3 rtl:mr-3">
                        <div>
                          <span>Your request was rejected</span>
                        </div>
                        <span className="text-xs">2 days ago</span>
                      </div>
                      <span className="badge-dot bg-gray-300  absolute top-4 ltr:right-4 rtl:left-4 mt-1.5" />
                    </div>
                    <div className="relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20  border-b border-gray-200 dark:border-gray-600">
                      <div>
                        <span className="avatar avatar-circle avatar-md">
                          <img className="avatar-img avatar-circle" src="img/avatars/thumb-4.jpg" loading="lazy" alt />
                        </span>
                      </div>
                      <div className="ltr:ml-3 rtl:mr-3">
                        <div>
                          <span className="font-semibold heading-text">Jennifer Ruiz </span>
                          <span>mentioned your in comment.</span>
                        </div>
                        <span className="text-xs">2 days ago</span>
                      </div>
                      <span className="badge-dot bg-gray-300  absolute top-4 ltr:right-4 rtl:left-4 mt-1.5" />
                    </div>
                    <div className="relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20">
                      <div>
                        <span className="avatar avatar-circle avatar-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100">
                          <span className="avatar-icon avatar-icon-md">
                            <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="ltr:ml-3 rtl:mr-3">
                        <div>
                          <span>Your request has been approved.</span>
                        </div>
                        <span className="text-xs">4 minutes ago</span>
                      </div>
                      <span className="badge-dot bg-gray-300  absolute top-4 ltr:right-4 rtl:left-4 mt-1.5" />
                    </div>
                  </div>
                </li>
                <li className="menu-item-header">
                  <div className="flex justify-center border-t border-gray-200 dark:border-gray-600 px-4 py-2">
                    <a className="font-semibold cursor-pointer p-2 px-3 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white" href="modern-activity-log.html">
                      View All Activity
                    </a>
                  </div>
                </li>
              </ul> */}
            </div>
            {/* Config*/}
            <div className="text-2xl header-action-item header-action-item-hoverable" data-bs-toggle="modal" data-bs-target="#nav-config">
              <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            {/* User Dropdown*/}
            <div className="dropdown">
              <div className="dropdown-toggle" id="user-dropdown" data-bs-toggle="dropdown">
                <div className="header-action-item flex items-center gap-2">
                  <span className="avatar avatar-circle" data-avatar-size={32} style={{width: 32}}>
                    <img className="avatar-img avatar-circle" src="img/avatars/thumb-1.jpg" loading="lazy" alt /></span>
                  <div className="hidden md:block">
                    <div className="text-xs capitalize">admin</div>
                    <div className="font-bold">{props.name}</div>
                  </div>
                </div>
              </div>
              <ul className="dropdown-menu bottom-end min-w-[240px]">
                <li className="menu-item-header">
                  <div className="py-2 px-3 flex items-center gap-2">
                    <span className="avatar avatar-circle avatar-md">
                      <img className="avatar-img avatar-circle" src="img/avatars/thumb-1.jpg" loading="lazy" alt />
                    </span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-gray-100">{props.name}</div>
                      <div className="text-xs">{props.email}</div>
                    </div>
                  </div>
                </li>
                <li className="menu-item-divider" />
                <li className="menu-item menu-item-hoverable mb-1 h-[35px]">
                  <a className="flex gap-2 items-center" href="modern-settings.html">
                    <span className="text-xl opacity-50">
                      <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <span>Profile</span>
                  </a>
                </li>
                <li className="menu-item menu-item-hoverable mb-1 h-[35px]">
                  <a className="flex gap-2 items-center" href="modern-settings.html">
                    <span className="text-xl opacity-50">
                      <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span>Account Setting</span>
                  </a>
                </li>
                <li className="menu-item menu-item-hoverable mb-1 h-[35px]">
                  <a className="flex gap-2 items-center" href="modern-activity-log.html">
                    <span className="text-xl opacity-50">
                      <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </span>
                    <span>Activity Log</span>
                  </a>
                </li>
                <li id="menu-item-29-2VewETdxAb" className="menu-item-divider" />
                <li className="menu-item menu-item-hoverable gap-2 h-[35px]">
                  <span className="text-xl opacity-50">
                    <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </span>
                  <span>Sign Out</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Header Nav End end */}
        </div>
      </header>
    )
}

import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import './sidebar.css'

import { TabNames } from '../../../const'

const defaultActiveTab = TabNames[3]

const Sidebar = () => {

	const handleTabClick = evt => {
		evt.currentTarget.classList.toggle('active-tab')
	}

	return (
		<div className="sidebar">
			<Logo />

			{/* <ul className="sidebar__list">
				{TabNames.map(tab => (
					<li className={'sidebar__item'} key={tab}>
						<a className="sidebar__link" onClick={()=>{}}>
							{tab}
						</a>
					</li>
				))}
			</ul> */}

			<ul className="sidebar__list">
				<li className="sidebar__item" onClick={handleTabClick}>
					<a className="sidebar__icon">
						<svg width="21" height="21" viewBox="0 0 21 21" fill="" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M7.08698 8.8261C7.08698 6.90511 8.64425 5.34784 10.5652 5.34784C12.4862 5.34784 14.0435 6.90511 14.0435 8.8261C14.0435 10.7471 12.4862 12.3044 10.5652 12.3044C8.64425 12.3044 7.08698 10.7471 7.08698 8.8261ZM8.47828 8.8261C8.47828 9.97869 9.41264 10.9131 10.5652 10.9131C11.7178 10.9131 12.6522 9.97869 12.6522 8.8261C12.6522 7.67351 11.7178 6.73914 10.5652 6.73914C9.41264 6.73914 8.47828 7.67351 8.47828 8.8261Z" fill="white"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0ZM5.4 17.91C5.49443 17.6339 5.60461 17.3635 5.73 17.1C6.6745 15.3212 8.53493 14.2204 10.5487 14.2489C12.5625 14.2773 14.3911 15.4302 15.285 17.235C15.39 17.46 15.48 17.7 15.57 17.94C14.0727 18.9525 12.3075 19.4956 10.5 19.5C8.67826 19.4984 6.8999 18.9439 5.4 17.91ZM16.6239 16.5638C16.6943 16.6896 16.77 16.8249 16.77 16.935L16.845 16.92C19.465 14.3638 20.2759 10.4755 18.896 7.08523C17.5161 3.69492 14.2204 1.47805 10.56 1.47805C6.89963 1.47805 3.60389 3.69492 2.22401 7.08523C0.844121 10.4755 1.65501 14.3638 4.275 16.92C4.33444 16.7339 4.40971 16.5532 4.5 16.38C5.71751 14.1565 8.06274 12.7864 10.5976 12.8178C13.1324 12.8492 15.443 14.277 16.605 16.53C16.6112 16.5412 16.6175 16.5524 16.6239 16.5638Z" fill="white"/>
						</svg>
					</a>
					<a className="sidebar__link">аккаунт</a>
				</li>
				<li className="sidebar__item" onClick={handleTabClick}>
					<a className="sidebar__icon">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M1.9631 1.412C1.6521 1.412 1.4001 1.671 1.4001 1.99V6.184C1.4001 6.503 1.6521 6.763 1.9631 6.763H19.7371C20.0471 6.763 20.3001 6.503 20.3001 6.184V1.99C20.3001 1.671 20.0471 1.412 19.7371 1.412H1.9631ZM1.9631 8.175C1.6521 8.175 1.4001 8.434 1.4001 8.753V12.947C1.4001 13.266 1.6521 13.525 1.9631 13.525H19.7371C20.0471 13.525 20.3001 13.266 20.3001 12.947V8.753C20.3001 8.434 20.0471 8.175 19.7371 8.175H1.9631ZM1.9631 14.937C1.6521 14.937 1.4001 15.197 1.4001 15.516V19.71C1.4001 20.029 1.6521 20.288 1.9631 20.288H19.7371C20.0471 20.288 20.3001 20.029 20.3001 19.71V15.516C20.3001 15.197 20.0471 14.937 19.7371 14.937H1.9631ZM19.7371 21.7H1.9631C1.4611 21.7 0.772103 21.7 0.376103 21.294C-0.000897407 20.907 0.000102598 20.273 0.000102598 19.764V15.516C0.000102598 15.04 0.169103 14.589 0.472103 14.231C0.169103 13.874 0.000102598 13.423 0.000102598 12.947V8.753C0.000102598 8.277 0.169103 7.826 0.472103 7.469C0.169103 7.111 0.000102598 6.66 0.000102598 6.184V1.99C-0.000897402 1.455 -0.00189742 0.871 0.377103 0.486C0.793103 0.063 1.5491 0 1.9631 0H19.7371C20.1541 0 20.9321 0 21.3571 0.507C21.6591 0.869 21.7001 1.46 21.7001 1.99V6.184C21.7001 6.66 21.5321 7.112 21.2291 7.469C21.5321 7.826 21.7001 8.278 21.7001 8.753V12.947C21.7001 13.423 21.5311 13.874 21.2281 14.232C21.5311 14.589 21.7001 15.04 21.7001 15.516V19.71C21.7001 20.113 21.7001 20.723 21.3531 21.122C20.9001 21.644 20.0721 21.7 19.7371 21.7Z" fill="white"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5Z" stroke="white"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M4 12C4.55228 12 5 11.5523 5 11C5 10.4477 4.55228 10 4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12Z" stroke="white"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M4 19C4.55228 19 5 18.5523 5 18C5 17.4477 4.55228 17 4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19Z" stroke="white"/>
							<rect x="9" y="3" width="10" height="1" rx="0.5" fill="white"/>
							<rect x="9" y="10" width="10" height="1" rx="0.5" fill="white"/>
							<rect x="9" y="17" width="10" height="1" rx="0.5" fill="white"/>
						</svg>
					</a>
					<a className="sidebar__link">vps</a>
				</li>
				<li className="sidebar__item" onClick={handleTabClick}>
					<a className="sidebar__icon">
						<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="path-1-inside-1" fill="white">
								<rect x="7" width="7" height="7" rx="1"/>
							</mask>
							<rect x="7" width="7" height="7" rx="1" stroke="white" strokeWidth="2.6" mask="url(#path-1-inside-1)"/>
							<mask id="path-2-inside-2" fill="white">
								<rect x="16" y="15" width="5" height="5" rx="1"/>
							</mask>
							<rect x="16" y="15" width="5" height="5" rx="1" stroke="white" strokeWidth="2.6" mask="url(#path-2-inside-2)"/>
							<rect x="10" y="8" width="1" height="6" rx="0.5" fill="white"/>
							<rect x="2" y="11" width="1" height="3" rx="0.5" fill="white"/>
							<path d="M3.00378 11.4945V11.9945H2.00378V11.4945C2.00378 10.6691 2.6729 10 3.4983 10H17.5C18.3284 10 19 10.6716 19 11.5V12.3779H18V11.5C18 11.2239 17.7761 11 17.5 11H3.4983C3.22519 11 3.00378 11.2214 3.00378 11.4945Z" fill="white"/>
							<rect x="18" y="11" width="1" height="3" rx="0.5" fill="white"/>
							<mask id="path-7-inside-3" fill="white">
								<rect x="8" y="15" width="5" height="5" rx="1"/>
							</mask>
							<rect x="8" y="15" width="5" height="5" rx="1" stroke="white" strokeWidth="2.6" mask="url(#path-7-inside-3)"/>
							<mask id="path-8-inside-4" fill="white">
								<rect y="15" width="5" height="5" rx="1"/>
							</mask>
							<rect y="15" width="5" height="5" rx="1" stroke="white" strokeWidth="2.6" mask="url(#path-8-inside-4)"/>
						</svg>
					</a>
					<a className="sidebar__link">домены</a>
				</li>
				<li className="sidebar__item active-tab" onClick={handleTabClick}>
					<a className="sidebar__icon">
						<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.49731 16.6855H9.28619L9.11028 16.8022L4.75012 19.6954V17.3855V16.6855H4.05012H1C0.834314 16.6855 0.7 16.5512 0.7 16.3855V3.99999C0.7 3.8343 0.834316 3.69998 1 3.69998H20C20.1657 3.69998 20.3 3.8343 20.3 3.99998V16.3855C20.3 16.5512 20.1657 16.6855 20 16.6855H9.49731Z" stroke="white" strokeWidth="1.4"/>
							<path d="M4.69999 4.21405H3.29999V1.99999C3.29999 1.0611 4.0611 0.299988 4.99999 0.299988H22.0516C22.9905 0.299988 23.7516 1.0611 23.7516 1.99999V12.4098C23.7516 13.3487 22.9905 14.1098 22.0516 14.1098H19.7783V12.7098H22.0516C22.2173 12.7098 22.3516 12.5755 22.3516 12.4098V1.99999C22.3516 1.8343 22.2173 1.69999 22.0516 1.69999H4.99999C4.8343 1.69999 4.69999 1.8343 4.69999 1.99999V4.21405Z" fill="white"/>
							<rect x="3" y="6.99998" width="12" height="1" rx="0.5" fill="white"/>
							<rect x="3" y="9.99998" width="10" height="1" rx="0.5" fill="white"/>
							<rect x="3" y="13" width="11" height="1" rx="0.5" fill="white"/>
						</svg>
					</a>
					<a className="sidebar__link">бортовой жрунал</a>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
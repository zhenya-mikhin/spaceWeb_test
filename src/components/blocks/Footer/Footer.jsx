import React from 'react'
import './footer.css'

const Footer = () => {
	return (
		<div className="footer">
			<div className="copyright">
				<p className="copyright__row">
					© 2001– 2018 ООО <a href="#" className="copyright__link">«СпейсВэб»</a>
				</p>
				<p className="copyright__row">
					Все права защищены.
				</p>
				<p className="copyright__row">
					Лицензия <a href="#" className="copyright__link">№163230</a>
				</p>
			</div>

			<div className="contacts">
				<p className="contacts__row">
					<a href="tel:+78123341222" className="contacts__link">+7 (812) 334-12-22</a>
					(в Санкт-Петербурге)
				</p>
				<p className="contacts__row">
					<a href="tel:+74956631612" className="contacts__link">+7 (495) 663-16-12</a>
					(в Москве)
				</p>
				<p className="contacts__row">
					<a href="tel:88001001615" className="contacts__link">(800) 100-16-15</a>
					(бесплатно по России)
				</p>
			</div>
		</div>
	)
}

export default Footer
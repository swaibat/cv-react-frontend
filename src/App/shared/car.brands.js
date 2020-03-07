import React from 'react';
import Toyota from '../../assets/images/logos/Toyota.png';
import Nissan from '../../assets/images/logos/nissan.svg';
import Volkswagen from '../../assets/images/logos/volkswagen.svg';
import Honda from '../../assets/images/logos/Honda.png';
import Benz from '../../assets/images/logos/Benz.png';
import Hyundai from '../../assets/images/logos/Hyundai.png';
import Subaru from '../../assets/images/logos/Subaru.png';
import Ford from '../../assets/images/logos/Ford.png';
import Renault from '../../assets/images/logos/Renault.png';
import Mazda from '../../assets/images/logos/Mazda.png';
import Kia from '../../assets/images/logos/Kia.png';
import Suzuki from '../../assets/images/logos/Suzuki.png';

function Card() {
	return (
		<li className='d-flex flex-column filter-sidebar my-3'>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Toyota} alt='...' />
				<span className='brand-title p-2'>TOYOTA</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Nissan} alt='...' />
				<span className='brand-title p-2'>NISSAN</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Volkswagen} alt='...' />
				<span className='brand-title p-2'>VOLKSWAGEN</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Honda} alt='...' />
				<span className='brand-title p-2'>HONDA</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Benz} alt='...' />
				<span className='brand-title p-2'>BENZ</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Hyundai} alt='...' />
				<span className='brand-title p-2'>HUANDAI</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Subaru} alt='...' />
				<span className='brand-title p-2'>SUBARU</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Kia} alt='...' />
				<span className='brand-title p-2'>KIA</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Mazda} alt='...' />
				<span className='brand-title p-2'>MAZDA</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Ford} alt='...' />
				<span className='brand-title p-2'>FORD</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Renault} alt='...' />
				<span className='brand-title p-2'>RENAULT</span>
			</div>
			<div className='d-flex'>
				<img className='car-logo mx-2' src={Suzuki} alt='...' />
				<span className='brand-title p-2'>SUZUKI</span>
			</div>
		</li>
	);
}
export default Card;

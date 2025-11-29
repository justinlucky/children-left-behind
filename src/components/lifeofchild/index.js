import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import ms5 from '../../images/about6.png'
import TiltCarousel from '../TiltCarousel'

import './style.css'

const Mission = (props) => {
    return (
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>LIFE OF A CHILD</span>
                            <h2>Heartwarming tales of children </h2>
                            <p>Life at our partner organization is a journey from basic needs to boundless potential. Children receive not just shelter and food, but also the educational support and encouragement needed to explore their passions. Take a glimpse of the life changing stories of children here
                            </p>
                        </div>
                    </div>
                </div>
                <TiltCarousel />
            </div>
        </div>
    )
}

export default Mission;
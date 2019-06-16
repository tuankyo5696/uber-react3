import React from 'react';
import './howUberWork.scss';
const howUberWork = (props) => (
    <div className="pageWork" >
    <div className="coverWork">
        <form className="howUberWork">  
            <div className="how flex2">
                <p className="howP">How Uber works</p>
                <p className="Ondemand">On-demand transportation technology is our core service,
                    and the app that connects driver-partners and riders is
                    what makes it all possible. Here’s how it works, step by
                    step:</p>
            </div>
            <br/>
            
            <div className="fiveStep">
                <div className="coverAllStep">
                    <div className="step1">
                            <p className="contactP titleBold">Step 1: A rider opens the app</p>
                            <p className="elm">The rider enters their destination into the Where to? box on the top of the screen; taps each ride
                                option to see the wait time, car sizes, and price; then confirms their pickup location and taps Request.</p>
                    </div>
                    <div className="step2">
                        <p className="contactP titleBold">Step 2: The rider is matched with a driver</p>
                        <p className="elm">TA nearby driver sees and chooses to accept the rider’s trip request. The rider is automatically notified
                            when the driver’s vehicle is about a minute away.</p>
                    </div>
                    <div className="step3">
                        <p className="contactP titleBold">Step 3: The driver picks up the rider</p>
                        <p className="elm">The driver and the rider verify each other’s names and the destination. Then the driver starts the ride.</p>
                    </div>
                    <div className="step4">
                        <p className="contactP titleBold">Step 4: The driver takes the rider to the destination</p>
                        <p className="elm">The app gives the driver the option to access turn-by-turn directions, so the driver can focus on getting
                            there and the rider can focus on enjoying a comfortable ride.</p>
                    </div>
                    <div className="step5">
                        <p className="contactP titleBold">Step 5: The driver and rider leave ratings and reviews</p>
                        <p className="elm">At the end of each trip, drivers and riders can rate each other from 1 to 5 stars. Riders can also give
                            the driver compliments. In cities where tipping is available, they can also add a little extra to show their
                            gratitude.</p>
                    </div>
                </div>
                
            </div>
                
        </form>
    </div>
</div>
)

export default howUberWork;
import React, {useEffect, useRef} from 'react';

import logo1 from '../../../assets/conveyorImages/logo1.jpg';
import logo2 from '../../../assets/conveyorImages/logo2.jpg';
import logo3 from '../../../assets/conveyorImages/logo3.jpg';
import logo4 from '../../../assets/conveyorImages/logo4.jpg';
import logo5 from '../../../assets/conveyorImages/logo5.jpg';
import logo6 from '../../../assets/conveyorImages/logo6.jpg';
import logo7 from '../../../assets/conveyorImages/logo7.jpg';
import logo8 from '../../../assets/conveyorImages/logo8.jpg';
import logo9 from '../../../assets/conveyorImages/logo9.jpg';


import './Conveyor.scss'
const Conveyor = () => {

    const containerRef = useRef(null);
    const scrollSpeedRef = useRef(1); // Initialise scrollSpeed avec useRef

    useEffect(() => {
        const container = containerRef.current;
        
        if (!container) return;

        const originalContent = container.innerHTML;
        const scrollWidth = container.scrollWidth;
        let cloned = false;

        const cloneContent = () => {
        if (!cloned) {
            container.innerHTML += originalContent; // Duplique le contenu
            cloned = true;
        }
        };

        const resetScroll = () => {
        if (container.scrollLeft >= scrollWidth) {
            container.scrollLeft = 0;
        }
        };

        const handleScroll = () => {
            cloneContent();
            resetScroll();
        };

        const setupInfiniteScroll = () => {
            container.addEventListener('scroll', handleScroll);

            const interval = setInterval(() => {
                if (container.scrollLeft < scrollWidth * 2 - container.clientWidth) {
                    container.scrollLeft += scrollSpeedRef.current;
                } else {
                    container.scrollLeft = 0;
                }
            }, 10);

            return () => clearInterval(interval);
        };

        container.addEventListener('mouseenter', () => {
            scrollSpeedRef.current = 0.5; // Utilisation de .current pour modifier
        });

        container.addEventListener('mouseleave', () => {
            scrollSpeedRef.current = 1; // Utilisation de .current pour restaurer
        });

        const intervalId = setupInfiniteScroll();

        return () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('mouseenter', () => {
                scrollSpeedRef.current = 0.5;
            });
            container.removeEventListener('mouseleave', () => {
                scrollSpeedRef.current = 1;
            });
            clearInterval(intervalId);
        };
    }, []);

  return (
    <div ref={containerRef} className="logo-container">
       <div className="logo"><img src={logo1} alt='Logo 1'/></div>
       <div className="logo"><img src={logo2} alt='Logo 2'/></div>
       <div className="logo"><img src={logo3} alt='Logo 3'/></div>
       <div className="logo"><img src={logo4} alt='Logo 4'/></div>
       <div className="logo"><img src={logo5} alt='Logo 5'/></div>
       <div className="logo"><img src={logo6} alt='Logo 6'/></div>
       <div className="logo"><img src={logo7} alt='Logo 7'/></div>
       <div className="logo"><img src={logo8} alt='Logo 8'/></div>
       <div className="logo"><img src={logo9} alt='Logo 9'/></div>
       
    </div>
  );
}

export default Conveyor;

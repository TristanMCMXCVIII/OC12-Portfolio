import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({closeSidebar}) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        closeSidebar();
    }, [pathname]);  // Déclenché à chaque changement de chemin

    return null; // Le composant ne rend rien
}

export default ScrollToTop;

import React, { useEffect, useState } from 'react';

// Function to check if the script is loaded
const isScriptLoaded = () => {
    return typeof window !== 'undefined' && typeof window.gotable !== 'undefined';
};

export default function ResengoWidget() {
    const [scriptLoaded, setScriptLoaded] = useState(isScriptLoaded());

    useEffect(() => {
        if (!scriptLoaded) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://gotable.app/restaurants/130078/reservations/new.js?locale=nl&layout=floating&variant=themed/283&position=bottom-right';

            const onLoad = () => {
                if (typeof window.gotable !== 'undefined') {
                    setScriptLoaded(true);
                } else {
                    console.error('GoTable widget failed to load.');
                }
            };

            script.addEventListener('load', onLoad);

            document.body.appendChild(script);

            return () => {
                script.removeEventListener('load', onLoad);
                document.body.removeChild(script);
            };
        }
    }, [scriptLoaded]);

    return <div id="gotable-widget-container"></div>;
}

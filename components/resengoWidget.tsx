import React, {useEffect, useState} from 'react';

// Function to check if the script is loaded
const isScriptLoaded = () => {
    return typeof window !== 'undefined' && typeof window.RESENGO_WIDGET !== 'undefined';
};

export default function ResengoWidget(){
    const [scriptLoaded, setScriptLoaded] = useState(isScriptLoaded());

    useEffect(() => {
        if (!scriptLoaded) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://static.resengo.com/ResengoWidget';

            const onLoad = () => {
                if (window.RESENGO_WIDGET) {
                    window.RESENGO_WIDGET({
                        companyId: '1778383', // Replace with your actual company ID
                        language: 'nl', // Replace with your preferred language code
                    });
                    setScriptLoaded(true);
                } else {
                    console.error('Resengo widget failed to load.');
                }
            };

            script.addEventListener('load', onLoad);

            document.body.appendChild(script);

            return () => {
                script.removeEventListener('load', onLoad);
                document.body.removeChild(script);
            };
        }
    }, []);

    return <div id="resengo-widget-container"></div>;
};

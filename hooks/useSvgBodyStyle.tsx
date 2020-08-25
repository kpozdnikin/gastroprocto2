import React, { useState, useEffect } from 'react';

function useSvgBodyStyle(ref: any): React.CSSProperties {
    const [elem, setElem] = useState<HTMLElement>(ref);
    const [styles, setStyles] = useState<React.CSSProperties>({
        position: 'initial',
    });

    const handleScroll = () => {
        if (!elem) {
            return;
        }
        if (elem.getBoundingClientRect().top <= 0) {
            if (elem.getBoundingClientRect().top > -570) {
                setStyles((prevStyles) => {
                    return {
                        ...prevStyles,
                        position: 'fixed',
                        width: elem.offsetWidth,
                        top: 0,
                    };
                });
            } else {
                setStyles((prevStyles) => {
                    return {
                        ...prevStyles,
                        position: 'absolute',
                        width: elem.offsetWidth,
                        bottom: 0,
                        top: 'inherit'
                    };
                });
            }
        } else {
            setStyles((prevStyles) => {
                return {
                    ...prevStyles,
                    position: 'initial',
                    width: elem.offsetWidth,
                };
            });
        }
    };

    useEffect(() => {
        setStyles((prevStyles) => {
            return {
                ...prevStyles,
                position: 'initial',
            };
        });
        setElem(ref);
    }, [ref]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    });

    return styles;
}

export default useSvgBodyStyle;

import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';

const navigateTypeEnum = {
    NOT_LOGIN: false,
    REQUIRE_LOGIN: true,
    BOTH: null,
};

const AppNavigate = () => {
    const navigateType = useNavigationType();
    const location = useLocation();
    const root = document.getElementById('root');
    const prevPath = useRef(location.pathname);
    useEffect(() => {
        if (navigateType !== navigateTypeEnum.POP && prevPath.current !== location.pathname) {
            root.scrollTop = 0;
        }
        if (location.pathname.includes('availability')) root.scrollTop = 0;
    }, [ location.pathname, navigateType ]);

    return <Outlet />;
};

export default AppNavigate;

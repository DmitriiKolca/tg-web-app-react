import React, {useEffect} from 'react';
import Button from "../components/Button";
const tg = window.Telegram.WebApp;


const Header = () => {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    };

    return (
        <div className={'header'}>
            <Button onClick = {onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;
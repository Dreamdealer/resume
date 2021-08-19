import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { StyledButton, StyledContainer } from './styles';
import { ReactComponent as Slider } from './Assets/slider.svg';
import Settings from './Settings';

export type LocalSettingsType = {
    selectedBackgroundGradient: string;
};

const Home = () => {
    const [showSettings, setShowSettings] = useState(false);
    const [localSettings, setLocalSettings] = useState<LocalSettingsType>({
        selectedBackgroundGradient: 'royal',
    });

    useEffect(() => {
        const localStorageSettings = localStorage.getItem('HomepageSettings');

        if (localStorageSettings) {
            setLocalSettings(JSON.parse(localStorageSettings));
        }
    }, []);

    return (
        <StyledContainer selectedBackground={localSettings.selectedBackgroundGradient}>
            {showSettings && (
                <Settings
                    localSettings={localSettings}
                    onLocalSettingsChange={settingsObject => {
                        setLocalSettings(settingsObject);
                        console.log(settingsObject);
                        localStorage.setItem('HomepageSettings', JSON.stringify(settingsObject));
                    }}
                    onCloseSettings={() => {
                        setShowSettings(false);
                    }}
                />
            )}
            <h1>Hello World!</h1>
            <p>
                This is my personal website and playground. I am Johan van Tongeren, living in The Netherlands and
                working as a frontend developer and (UX) designer for{' '}
                <a href="https://www.linkedin.com/in/johan-van-tongeren-a963b316b">
                    {new Date().getFullYear() - 2004} years
                </a>
                . I also <a href="https://www.instagram.com/bad_decision_works">love making stuff</a>. This evolved in{' '}
                <a href="https://www.baddecision.works">a webshop</a> for custom Volvo parts in 2019.
            </p>
            <StyledButton
                onClick={() => {
                    setShowSettings(true);
                }}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                }}
            >
                <Slider style={{ height: '20px' }} />
            </StyledButton>
            <Navigation />
        </StyledContainer>
    );
};

export default Home;

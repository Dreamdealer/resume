import React, { FC } from 'react';
import Button from './Button';
import FancyRadios from './FancyRadios';
import Label from './Label';
import { StyledSettingsContainer, StyledSettingsOverlay, StyledSlider } from './Styles';
import { LocalSettingsType } from './Tetris';

type PropsType = {
    localSettings: LocalSettingsType;
    onLocalSettingsChange(localSettings: LocalSettingsType): void;
    onCloseSettings(): void;
};

const Settings: FC<PropsType> = props => (
    <StyledSettingsOverlay>
        <StyledSettingsContainer>
            <Label>Tilt:</Label>
            <StyledSlider
                type="range"
                name="volume"
                value={props.localSettings.tilt}
                min="0"
                max="65"
                onChange={({ target }) => {
                    props.onLocalSettingsChange({
                        ...props.localSettings,
                        tilt: parseInt(target.value),
                    });
                }}
            />
            {/* <Label mt>Theme:</Label>
            <FancyRadios
                name="theme"
                options={[
                    { value: 'light', label: 'Light' },
                    { value: 'dark', label: 'Dark' },
                ]}
                selected={props.localSettings.theme}
                onChange={selected => {
                    props.onLocalSettingsChange({
                        ...props.localSettings,
                        theme: selected as LocalSettingsType['theme'],
                    });
                }}
            /> */}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={() => {
                        props.onCloseSettings();
                    }}
                >
                    Close
                </Button>
            </div>
        </StyledSettingsContainer>
    </StyledSettingsOverlay>
);

export default Settings;

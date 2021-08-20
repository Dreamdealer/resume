import { FC } from 'react';
import { LocalSettingsType } from './Home';
import {
    backgroundGradients,
    StyledButton,
    StyledGradientSwatch,
    StyledModalContainer,
    StyledSettingsOverlay,
    StyledSwatchContainer,
} from './styles';

type PropsType = {
    localSettings: LocalSettingsType;
    onLocalSettingsChange(localSettings: LocalSettingsType): void;
    onCloseSettings(): void;
};

const Settings: FC<PropsType> = props => (
    <StyledSettingsOverlay>
        <StyledModalContainer>
            <label>Background color:</label>
            <StyledSwatchContainer>
                {Object.entries(backgroundGradients).map(([key, gradient]) => (
                    <StyledGradientSwatch
                        key={key}
                        gradient={gradient}
                        onClick={() => {
                            props.onLocalSettingsChange({
                                ...props.localSettings,
                                selectedBackgroundGradient: key,
                            });
                        }}
                    />
                ))}
            </StyledSwatchContainer>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <StyledButton
                    dark
                    onClick={() => {
                        props.onCloseSettings();
                    }}
                >
                    Close
                </StyledButton>
            </div>
        </StyledModalContainer>
    </StyledSettingsOverlay>
);

export default Settings;

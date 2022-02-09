import { FC, useState } from 'react';
import styled from 'styled-components';
import Dice from './Components/Dice';
import Turn from './Components/Turn';
import Extras from './Components/Extras';
import { rgba } from 'polished';
import YellowField from './Components/YellowField';
import BlueField from './Components/BlueField';
import GreenField from './Components/GreenField';
import OrangeField from './Components/OrangeField';
import PurpleField from './Components/PurpleField';

export type TurnTypes = 'DONE' | 'ACTIVE' | 'OPEN';
export type ColorTypes = 'YELLOW' | 'BLUE' | 'GREEN' | 'ORANGE' | 'PURPLE';

export type DiceType = {
    amount: number | null;
    color: ColorTypes | null;
}

export type LocalSettingsType = {
    tilt: number;
    theme: 'light' | 'dark';
};

export type CleverColorType = {
   [key: string]: string;
}

export const CleverColors:CleverColorType = {
    grey: '#AAA',
    yellow: '#ffe100',
    blue: '#0083d5',
    green: '#00b815',
    orange: '#e89300',
    purple: '#6800a9',
}

const Clever:FC = () => {
    const [thrownDice] = useState<Array<DiceType>>([
        { amount: 4, color: 'YELLOW' },
        { amount: 6, color: 'ORANGE' },
        { amount: null, color: null },
    ]);
    const [turns] = useState(['DONE', 'ACTIVE', 'OPEN', 'OPEN', 'OPEN', 'OPEN']);
    const [rethrows] = useState({ total: 7, available: 2, used: 2 });
    const [plusones] = useState({ total: 7, available: 1, used: 4 });

    return (
        <Board>
            {thrownDice.map((dice, index) => (
                <GridItem key={index} color={CleverColors.grey} area={`Dice${index+1}`}>
                    <Dice dice={dice} />
                </GridItem>
            ))}
            {turns.map((turn, index) => (
                <GridItem key={index} color={CleverColors.grey} area={`Turn${index+1}`}>
                    <Turn index={index+1} state={turn} />
                </GridItem>
            ))}
            <GridItem color={CleverColors.grey} area="Rethrows">
                <Extras icon="♻️" {...rethrows} />
            </GridItem>
            <GridItem color={CleverColors.grey} area="PlusOnes">
                <Extras icon="+1" {...plusones} />
            </GridItem>
            <MiddleGrid>
                <GridItem color={CleverColors.yellow} area="Yellow">
                    <YellowField />
                </GridItem>
                <GridItem color={CleverColors.blue} area="Blue">
                    <BlueField />
                </GridItem>
            </MiddleGrid>
            <GridItem color={CleverColors.green} area="Green">
                <GreenField />
            </GridItem>
            <GridItem color={CleverColors.orange} area="Orange">
                <OrangeField />
            </GridItem>
            <GridItem color={CleverColors.purple} area="Purple">
                <PurpleField />
            </GridItem>
        </Board>
    );
};

export default Clever;

const Board = styled.div`
    font-size: 14px;
    font-family: 'Patrick Hand', cursive;
    background-color: #444;
    padding: 20px;
    border-radius: 10px;
    display: grid; 
    grid-template-columns: 5em 5em 5em 5em 5em 5em 5em; 
    grid-template-rows: 5em 5em 5em 5em 5em 5em 5em; 
    gap: 1em; 
    margin: 1em;
    grid-template-areas: 
        "Dice1 Turn1 Turn2 Turn3 Turn4 Turn5 Turn6"
        "Dice2 Rethrows Rethrows Rethrows Rethrows Rethrows Rethrows"
        "Dice3 PlusOnes PlusOnes PlusOnes PlusOnes PlusOnes PlusOnes"
        "Middle Middle Middle Middle Middle Middle Middle"
        "Middle Middle Middle Middle Middle Middle Middle"
        "Middle Middle Middle Middle Middle Middle Middle"
        "Middle Middle Middle Middle Middle Middle Middle"
        "Green Green Green Green Green Green Green"
        "Orange Orange Orange Orange Orange Orange Orange"
        "Purple Purple Purple Purple Purple Purple Purple"; 
`;

const MiddleGrid = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 20px; 
    grid-template-areas: 
        "Yellow Blue"; 
    grid-area: Middle; 
`;

const GridItem = styled.div<{ color: string; area: string }>`
    border: 2px solid ${({ color }) => color};
    box-shadow: 0 0 10px 1px ${({ color }) => color};
    border-radius: 10px;
    padding: 10px;    
    background-color: ${({ color }) => rgba(color, 0.25)};
    grid-area: ${({ area }) => area};
    color: ${({ color }) => color === CleverColors.grey || color === CleverColors.yellow ? '#000' : color};

    display: flex;
    justify-content: space-between;
    align-items: center;
`;


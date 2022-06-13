import { FC, useContext, useEffect } from 'react';
import { CounterContext } from '../Hooks/useGameContext';
import BlueField from './BlueField';
import Dice from './Dice';
import Extras from './Extras';
import Turn from './Turn';
import YellowField from './YellowField';
import styled from 'styled-components';
import { rgba } from 'polished';
import { CleverColors, hasHighlightedScorefields } from '../valuesAndHelpers';
import HorizontalField from './HorizontalField';

const Board: FC = () => {
    const { turn, rethrows, plusones, dices, selectFieldMode, scoreBoard, throwDices } = useContext(CounterContext);

    const unavailableDices = dices.filter(dice => !dice.available);
    const thrownDices = [...unavailableDices, ...Array(3 - unavailableDices.length).fill(null)];

    useEffect(() => {
        // throw dice for first round when game loads only
        throwDices();
    }, []);

    return (
        <StyledBoard>
            {thrownDices.map((dice, index) => {
                if (!dice) {
                    return <GridItem key={index} color={CleverColors.grey} area={`Dice${index + 1}`} />;
                }

                return (
                    <GridItem key={index} color={CleverColors.grey} area={`Dice${index + 1}`}>
                        <Dice thrownDice={dice} />
                    </GridItem>
                );
            })}
            {[...Array(6)].map((_, index) => {
                const turnState = index >= turn ? 'OPEN' : 'ACTIVE';

                return (
                    <GridItem key={index} color={CleverColors.grey} area={`Turn${index + 1}`}>
                        <Turn index={index + 1} state={turnState} />
                    </GridItem>
                );
            })}
            <GridItem color={CleverColors.grey} area="Rethrows">
                <Extras icon="♻️" {...rethrows} />
            </GridItem>
            <GridItem color={CleverColors.grey} area="PlusOnes">
                <Extras icon="+1" {...plusones} />
            </GridItem>
            <MiddleGrid>
                <GridItem
                    color={CleverColors.yellow}
                    area="Yellow"
                    dimmed={selectFieldMode && !hasHighlightedScorefields(scoreBoard.yellow)}
                >
                    <YellowField />
                </GridItem>
                <GridItem
                    color={CleverColors.blue}
                    area="Blue"
                    dimmed={selectFieldMode && !hasHighlightedScorefields(scoreBoard.blue)}
                >
                    <BlueField />
                </GridItem>
            </MiddleGrid>
            <GridItem
                color={CleverColors.green}
                area="Green"
                dimmed={selectFieldMode && !hasHighlightedScorefields(scoreBoard.green)}
            >
                <HorizontalField color="green" />
            </GridItem>
            <GridItem
                color={CleverColors.orange}
                area="Orange"
                dimmed={selectFieldMode && !hasHighlightedScorefields(scoreBoard.orange)}
            >
                <HorizontalField color="orange" />
            </GridItem>
            <GridItem
                color={CleverColors.purple}
                area="Purple"
                dimmed={selectFieldMode && !hasHighlightedScorefields(scoreBoard.purple)}
            >
                <HorizontalField color="purple" />
            </GridItem>
        </StyledBoard>
    );
};

export default Board;

const StyledBoard = styled.div`
    background-color: #444;
    padding: 1.5rem;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 5em 5em 5em 5em 5em 5em 5em;
    gap: 1em;
    grid-template-areas:
        'Dice1 Turn1 Turn2 Turn3 Turn4 Turn5 Turn6'
        'Dice2 Rethrows Rethrows Rethrows Rethrows Rethrows Rethrows'
        'Dice3 PlusOnes PlusOnes PlusOnes PlusOnes PlusOnes PlusOnes'
        'Middle Middle Middle Middle Middle Middle Middle'
        'Middle Middle Middle Middle Middle Middle Middle'
        'Middle Middle Middle Middle Middle Middle Middle'
        'Middle Middle Middle Middle Middle Middle Middle'
        'Green Green Green Green Green Green Green'
        'Orange Orange Orange Orange Orange Orange Orange'
        'Purple Purple Purple Purple Purple Purple Purple';
`;

const MiddleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 20px;
    grid-template-areas: 'Yellow Blue';
    grid-area: Middle;
`;

const GridItem = styled.div<{ color: string; area: string; dimmed?: boolean }>`
    border: 2px solid ${({ color }) => color};
    box-shadow: 0 0 10px 1px ${({ color }) => color};
    border-radius: 10px;
    padding: 10px;
    background-color: ${({ color }) => rgba(color, 0.25)};
    grid-area: ${({ area }) => area};
    color: ${({ color }) => (color === CleverColors.grey || color === CleverColors.yellow ? '#000' : color)};

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ dimmed }) =>
        dimmed &&
        `
        opacity: 0.2;
    `}
`;

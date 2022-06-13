import { StyledLink, StyledNav } from './styles';

const Navigation = () => (
    <StyledNav>
        <StyledLink to="/tetris">
            <strong>Tetris</strong>
            <p>
                This project uses: React, Custom hooks, Typescript, Styled Components, 3D CSS, Theming &amp;
                LocalStorage
            </p>
        </StyledLink>
        <StyledLink to="/clever">
            <strong>Clever</strong>
            <i>Very much work in progress!!</i>
            <p>This project uses: React, Custom hooks, Typescript, Styled Components, Theming &amp; LocalStorage</p>
        </StyledLink>
    </StyledNav>
);

export default Navigation;

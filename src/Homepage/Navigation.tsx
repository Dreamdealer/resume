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
        <StyledLink to="/" disabled>
            {/* <StyledLink to="/breakout"> */}
            <strong>Breakout (WIP)</strong>
            <p>This project uses: React, Custom hooks, RequestAnimationFrame, Theming, Styled Components, etc.</p>
        </StyledLink>
    </StyledNav>
);

export default Navigation;

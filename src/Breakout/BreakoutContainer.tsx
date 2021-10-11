import { Game, Scene, Text } from 'react-phaser-fiber';
// import Breakout from './Breakout';

const BreakoutContainer = () => {
    return (
        <Game width={400} height={400}>
            <Scene sceneKey="main">
                <Text x={100} y={100} text="Hello World!" style={{ color: 'white' }} />
            </Scene>
        </Game>
        // <Game
        //     width={800}
        //     height={800}
        //     physics={{
        //         default: 'arcade',
        //         arcade: {
        //             debug: false,
        //         },
        //     }}
        //     scale={{
        //         mode: Phaser.Scale.FIT,
        //     }}
        // >
        //     <Scene
        //         sceneKey="breakout"
        //         onPreload={scene => {
        //             scene.load.atlas('assets', '/breakout.png', '/breakout.json');
        //         }}
        //         renderLoading={progress => (
        //             <Text x={300} y={400} text={`Loading... (${progress * 100}%)`} style={{ color: 'white' }} />
        //         )}
        //     >
        //         <Breakout />
        //     </Scene>
        // </Game>
    );
};

export default BreakoutContainer;

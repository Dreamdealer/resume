import { FC } from 'react';
import styled from 'styled-components';

const Sweden: FC = () => {
    return (
        <StyledPageContainer>
            <h1>Tjena!</h1>
            <h5>Betekend hey! in het Zweeds</h5>
            <p>
                Wil je bij ons in Zweden op bezoek komen? Dan zijn er verschillende manieren om bij ons te geraken. De
                meest conventionele manieren is om met de auto of met het vliegtuig te komen. Lopen en zwemmen kan vast
                ook, maar daar kunnen wij weinig advies over geven :-)
            </p>
            <h2>Ons adres</h2>
            <p>
                Wij wonen voorlopig in het mooie dorpje Blixterboda. Ons adres is:
                <br />
                Johan en Monique
                <br />
                Västertorp 420
                <br />
                718 92 Frövi
            </p>
            <h2>Met de auto</h2>
            <p>
                Met de auto is het best een eind rijden (14-16 uur als je in één keer doorrijdt) maar schijn bedriegt,
                het is een best makkelijke route. Je kan alleen kiezen hoe je Denemarken doorkruist en wat het fijnste
                is is natuurlijk een persoonlijke keuze. We zullen de opties beschrijven, dan kun je zelf kiezen wat het
                beste bij je past.
                <ul>
                    <li>
                        <b>Boot-Brug</b>
                        <br />
                        Een veelgebruikte optie is om de &quot;korte boot&quot; van Puttgarden naar Rødby te nemen en
                        daarna de <ShortLink linkId="oresundsbron">Øresund brug</ShortLink> van Kopenhagen naar Malmö.
                        Je kan dan fijn een goed uur op de boot rusten en daarna weer doorknallen.
                    </li>
                    <li>
                        <b>Brug-brug</b>
                        <br />
                        Je kunt de wateren in Denemarken oversteken over de Storebelt Bron en de Öresund Bron.
                    </li>
                    <li>
                        <b>Boot-boot</b>
                        <br />
                        Voordat die mooie brug tussen Kopenhagen en Malmö er was ging men met de veerpont van Helsingør
                        naar Helsingborg. Dit kan nog steeds, maar is niet de snelste of makkelijkste oplossing. Wel de
                        meest toeristische.
                    </li>
                </ul>
            </p>
            <p>
                Het oversteken via de boot of brug kost natuurlijk wel geld. Op het moment van schrijven (juni 2022)
                zijn de kosten als volgt:
                <ul>
                    <li>
                        <ShortLink linkId="oresundsbron">Øresund brug</ShortLink> online ticket (enkel): 65 euro.
                    </li>
                    <li>
                        <ShortLink linkId="storebaelt">Storebælt brug</ShortLink> (enkel, normale auto): 250 DKK = 33,60
                        euro
                    </li>
                    <li>
                        Veerpont <ShortLink linkId="puttgarden-rodby">Puttgarden naar Rødby</ShortLink> 47 - 132 euro,
                        afhankelijk van het gekozen ticket type.
                    </li>
                    <li>
                        Puttgarden-Rødby en Öresund brug{' '}
                        <ShortLink linkId="oresund-puttgarden">combinatie ticket</ShortLink>: 84 - 178 euro, afhankelijk
                        van het gekozen ticket type.
                    </li>
                </ul>
            </p>
            <h2>Met het vliegtuig</h2>
            <p>
                Arlanda (stockholm) is het vliegveld waar je het beste naar toe kan vliegen. Dit is het Schiphol van
                Zweden en ongeveer 2 uur rijden van ons huis. Er gaat een snelle trein die je zo naar het centrum van
                Stockholm brengt. Van daar uit kun je met de trein (bij voorkeur de Malartåg, die gaat hard en is
                comfortabel) <ShortLink linkId="train-to-arboga">naar Arboga</ShortLink>
                (20 min naar Blixterboda) of <ShortLink linkId="train-to-orebro">naar Örebro</ShortLink> (40 minuten
                naar Blixterboda).
            </p>
            <p>
                Ook kun je op Arlanda makkelijk een auto huren en daarmee naar ons rijden. Vanaf daar is het{' '}
                <ShortLink linkId="arlanda-to-blixterboda">186 kilometer</ShortLink> (ongeveer 2 uur) met de auto naar
                Blixterboda.
            </p>
            <p>
                Je kan vanuit <ShortLink linkId="flights-to-arlanda">verschillende vliegvelden</ShortLink>
                naar Arlanda vliegen, maar wij vinden zelf <ShortLink linkId="dusseldorf">Dusseldorf</ShortLink> het
                prettigste. Vooral omdat Schiphol zo vervelend is.
            </p>
        </StyledPageContainer>
    );
};

export default Sweden;

const StyledPageContainer = styled.div`
    max-width: 800px;
    padding: 3em;

    h1 {
        margin-bottom: 0;

        & + h5 {
            margin-top: 0.5em;
        }
    }
`;

const ShortLink: FC<{ linkId: string }> = props => {
    const getLink = (id: string): string => {
        const sjTodayString = new Date().toISOString().split('T')[0];
        switch (id) {
            case 'oresundsbron':
                return 'https://oresundsbron.com/en/prices';
            case 'storebaelt':
                return 'https://storebaelt.dk/en/prices-and-discounts/private/';
            case 'oresund-puttgarden':
                return 'https://www.scandlines.com/prices/puttgarden-rodby-oresund-bridge/';
            case 'puttgarden-rodby':
                return 'https://www.scandlines.com/prices/puttgarden-rodby/';
            case 'oresund-ticket':
                return 'https://bropas.oresundsbron.com/en/order/ticket';
            case 'dusseldorf':
                return 'https://www.skyscanner.nl/routes/duss/stoc/dusseldorf-naar-stockholm.html';
            case 'flights-to-arlanda':
                return 'https://www.flightconnections.com/nl/vluchten-naar-stockholm-arlanda-arn';
            case 'train-to-orebro':
                return `https://www.sj.se/en/kop-resa/valj-resa/Stockholm%20Central/Örebro%20C/${sjTodayString}`;
            case 'train-to-arboga':
                return `https://www.sj.se/en/kop-resa/valj-resa/Stockholm%20Central/Arboga/${sjTodayString}`;
            case 'arlanda-to-blixterboda':
                return 'https://goo.gl/maps/5cyhx7xbkZmksdrNA';
            default:
                return 'missing link for {linkId}';
        }
    };

    return (
        <a href={getLink(props.linkId)} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
};

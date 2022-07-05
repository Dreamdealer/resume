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
            <h2>Verblijven in Zweden</h2>
            <p>
                Zo lang we in Blixterboda wonen hebben we helaas niet de gelegenheid om gasten in ons eigen huis onder
                te brengen. Uiteindelijk willen we graag een huis kopen waar een gastenverblijf bij is, maar tot die
                tijd moeten we het hier even mee doen. Op het terrein waar wij wonen is een vakantiehuisje. Kijk op{' '}
                <ShortLink linkId="vastertorp">de website rechtsonderin</ShortLink> voor beschikbaarheid. Een andere
                oplossing dichtbij is lastiger, omdat we in de middle-of-nowhere wonen.{' '}
                <ShortLink linkId="airbnb">Op AirBnB</ShortLink> is wel wat te vinden. Volgens booking.com is er{' '}
                <ShortLink linkId="hotel-lindesberg">één hotel in Lindesberg</ShortLink> (20 minuten rijden). In de
                grote stad (Örebro) zijn er wel wat meer, maar dat is meteen 40-50 minuten rijden van ons.
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
                Je kan vanuit <ShortLink linkId="flights-to-arlanda">verschillende vliegvelden</ShortLink> naar Arlanda
                vliegen, maar wij vinden zelf <ShortLink linkId="dusseldorf">Dusseldorf</ShortLink> het prettigste.
                Vooral omdat Schiphol zo vervelend is.
            </p>
            <h2>Met de flixbus</h2>
            <p>
                Hier hebben wij zelf nog niet mee gereisd, maar het is een optie: met die groene flixbus. Dat zijn
                internationale busreizen. Niet super comfortabel, maar wel goedoop. Als ik nu check zie ik een
                buskaartje <ShortLink linkId="flixbus">van Amsterdam naar Stockholm</ShortLink> voor ongeveer 120 euro.
            </p>
            <h2>Met de trein</h2>
            <p>
                Ook hier hebben wij zelf nog geen ervaring mee, maar je kan ook internationaal met de trein. Ik heb even
                gevogeld op de website van NS Internationaal en blijkbaar rijdt de trein vanuit Arnhem door Duitsland en
                Denemarken naar Zweden. <ShortLink linkId="trein-arnhem-stockholm">Van Arnhem naar Stockholm</ShortLink>{' '}
                in 20 uur en 39 minuten. Da&apos;s best lang maar je kan dan wel lekker uit het raam kijken en
                kruiswoordpuzzels maken.
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
            case 'trein-arnhem-stockholm':
                return 'https://www.nsinternational.com/nl/treintickets-v3/#/search/NLAHM/SESTO';
            case 'flixbus':
                return 'https://shop.flixbus.nl/search?departureCity=40dde3b8-8646-11e6-9066-549f350fcb0c&arrivalCity=40dfdbe7-8646-11e6-9066-549f350fcb0c&route=Amsterdam-Stockholm';
            case 'airbnb':
                return 'https://www.airbnb.nl/s/Blixterboda--Zweden/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&date_picker_type=flexible_dates&query=718%2092%20Blixterboda%2C%20Zweden&place_id=ChIJCd_qvP45XEYRACW3c-nO9wc&source=structured_search_input_header&search_type=user_map_move&ne_lat=59.579847552665164&ne_lng=15.620928351877467&sw_lat=59.43350722850365&sw_lng=15.22233063459231&zoom=12&search_by_map=true&flexible_trip_lengths%5B%5D=weekend_trip';
            case 'vastertorp':
                return 'https://www.vastertorp.nl';
            case 'hotel-lindesberg':
                return 'https://www.booking.com/hotel/se/lindesbergs-stadshotell.nl.html';
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

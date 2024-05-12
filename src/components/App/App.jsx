import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

// import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
// import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Campaign from '../Campaign/Campaign';
import '../../../css/maps.css';
import '../../../css/index.css';
import '../../../css/search.css';
import '../../../css/main.css';
import '../../../css/bootstrap.css';
import '../../../css/classes.css';

// import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <head>
        {/* <!--5ETOOLS_CMP--> */}
        {/* <!--5ETOOLS_ANALYTICS--> */}
        {/* <!--5ETOOLS_ADCODE--> */}
        <meta charSet="utf-8"/>
        <meta name="description" content="A suite of browser-based tools for 5th Edition  Dungeons &amp; Dragons players and Dungeon Masters."/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>

        <title>5etools</title>

        <link rel="stylesheet" href="../../../css/bootstrap.css"/>
        <link rel="stylesheet" href="../../../css/fontawesome.css"/>
        <link rel="stylesheet" href="../../../css/main.css"/>
        <link rel="stylesheet" href="../../../css/index.css"/>

        {/* <!-- Favicons --> */}
        <link rel="icon" type="image/svg+xml" href="favicon.svg"/>
        <link rel="icon" type="image/png" sizes="256x256" href="favicon-256x256.png"/>
        <link rel="icon" type="image/png" sizes="144x144" href="favicon-144x144.png"/>
        <link rel="icon" type="image/png" sizes="128x128" href="favicon-128x128.png"/>
        <link rel="icon" type="image/png" sizes="64x64" href="favicon-64x64.png"/>
        <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>

        {/* <!-- Chrome Web App Icons --> */}
        <link rel="manifest" href="manifest.webmanifest"/>
        <meta name="application-name" content="5etools"/>
        <meta name="theme-color" content="#006bc4"/>

        {/* <!-- Windows Start Menu tiles --> */}
        <meta name="msapplication-config" content="browserconfig.xml"/>
        <meta name="msapplication-TileColor" content="#006bc4"/>

        {/* <!-- Apple Touch Icons --> */}
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png"/>
        <link rel="apple-touch-icon" sizes="360x360" href="apple-touch-icon-360x360.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="apple-touch-icon-167x167.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png"/>
        <meta name="apple-mobile-web-app-title" content="5etools"/>

        {/* <!-- macOS Safari Pinned Tab and Touch Bar --> */}
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#006bc4"/>

        {/* <!-- OpenSearch --> */}
        <link rel="search" href="open-search.xml" title="Search 5etools" type="application/opensearchdescription+xml"/>

        <script type="text/javascript" src="../../sw-injector.js"></script>

        <script type="text/javascript" src="../../js/styleswitch.js"></script>
        <script type="text/javascript" src="../../js/navigation.js"></script>
        <script type="text/javascript" src="../../js/browsercheck.js"></script>
      </head>
      <div>
        {/* <Nav /> */}
        <nav className="container page__nav" id="navigation"><button className="btn btn-default page__btn-toggle-nav">
          Menu</button>
	        <ul className="nav nav-pills page__nav-inner" id="navbar">

	          <li role="presentation" data-page="index.html" className="page__nav-hidden-mobile page__btn-nav-root active">
              <a href="index.html" className="nav__link">
                Home</a></li>
            
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root">
              <a className="dropdown-toggle" href="#" role="button">
                Rules <span className="caret "></span></a>
                <ul className="dropdown-menu dropdown-menu--top">
                  <li role="presentation" data-page="quickreference.html">
                    <a href="quickreference.html" className="nav__link">
                      Quick Reference</a></li>
                  <li role="presentation" data-page="variantrules.html">
                    <a href="variantrules.html" className="nav__link">
                      Optional, Variant, and Expanded Rules</a></li>
                  <li role="presentation" data-page="tables.html">
                    <a href="tables.html" className="nav__link">Tables</a></li><li role="presentation" className="divider"></li>
                  <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile">
                    <a className="dropdown-toggle" href="#" role="button">
                      Books <span className="caret caret--right"></span></a>
                    <ul className="dropdown-menu dropdown-menu--side">
                      <li role="presentation" data-page="books.html">
                        <a href="books.html" className="nav__link">
                          View All/Homebrew</a></li>
                      <li role="presentation" className="divider"></li>
                      <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                        <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Core</li>
                      <li role="presentation" data-page="book.html#phb">
                        <a href="book.html#phb" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2014</div>
                          <div className="nav2-list__disp-source sourcePHB"></div>
                          Player's Handbook</a></li>
                      <li role="presentation" data-page="book.html#mm">
                        <a href="book.html#mm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceMM"></div>
                          Monster Manual</a></li>
                      <li role="presentation" data-page="book.html#dmg">
                        <a href="book.html#dmg" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceDMG"></div>
                          Dungeon Master's Guide</a></li>
                      <li role="presentation" className="divider"></li>
                      <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                        <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Supplements</li>
                      <li role="presentation" data-page="book.html#vgm">
                        <a href="book.html#vgm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2016</div>
                          <div className="nav2-list__disp-source sourceVGM"></div>
                          Volo's Guide to Monsters</a></li>
                      <li role="presentation" data-page="book.html#xge">
                        <a href="book.html#xge" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2017</div>
                          <div className="nav2-list__disp-source sourceXGE"></div>
                          Xanathar's Guide to Everything</a></li>
                      <li role="presentation" data-page="book.html#mtf">
                        <a href="book.html#mtf" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2018</div>
                          <div className="nav2-list__disp-source sourceMTF"></div>
                          Mordenkainen's Tome of Foes</a></li>
                      <li role="presentation" data-page="book.html#ai">
                        <a href="book.html#ai" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2019</div>
                          <div className="nav2-list__disp-source sourceAI"></div>
                          Acquisitions Incorporated</a></li>
                      <li role="presentation" data-page="book.html#tce">
                        <a href="book.html#tce" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2020</div>
                          <div className="nav2-list__disp-source sourceTCE"></div>
                          Tasha's Cauldron of Everything</a></li>
                      <li role="presentation" data-page="book.html#ftd">
                        <a href="book.html#ftd" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2021</div>
                          <div className="nav2-list__disp-source sourceFTD"></div>
                          Fizban's Treasury of Dragons</a></li>
                      <li role="presentation" data-page="book.html#mpmm">
                        <a href="book.html#mpmm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2022</div>
                          <div className="nav2-list__disp-source sourceMPMM"></div>
                          Mordenkainen Presents: Monsters of the Multiverse</a></li>
                      <li role="presentation" data-page="book.html#aag">
                        <a href="book.html#aag" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceAAG"></div>
                          Astral Adventurer's Guide</a></li>
                      <li role="presentation" data-page="book.html#bam">
                        <a href="book.html#bam" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceBAM"></div>
                          Boo's Astral Menagerie</a></li>
                      <li role="presentation" data-page="book.html#bgg">
                        <a href="book.html#bgg" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2023</div>
                          <div className="nav2-list__disp-source sourceBGG"></div>
                          Bigby Presents: Glory of the Giants</a></li>
                      <li role="presentation" data-page="book.html#mpp">
                        <a href="book.html#mpp" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceMPP"></div>
                          Morte's Planar Parade</a></li>
                      <li role="presentation" data-page="book.html#sato">
                        <a href="book.html#sato" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceSatO"></div>
                          Sigil and the Outlands</a></li>
                      <li role="presentation" data-page="book.html#bmt">
                        <a href="book.html#bmt" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceBMT"></div>
                          The Book of Many Things</a></li>
                      <li role="presentation" data-page="book.html#dmtcrg">
                        <a href="book.html#dmtcrg" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceDMTCRG"></div>
                          The Deck of Many Things: Card Reference Guide</a></li>
                      <li role="presentation" className="divider"></li>
                      <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                        <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Settings</li>
                      <li role="presentation" data-page="book.html#scag">
                        <a href="book.html#scag" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2015</div>
                          <div className="nav2-list__disp-source sourceSCAG"></div>
                          Sword Coast Adventurer's Guide</a></li>
                      <li role="presentation" data-page="book.html#ggr">
                        <a href="book.html#ggr" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2018</div>
                          <div className="nav2-list__disp-source sourceGGR"></div>
                          Guildmasters' Guide to Ravnica</a></li>
                      <li role="presentation" data-page="book.html#erlw">
                        <a href="book.html#erlw" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2019</div>
                          <div className="nav2-list__disp-source sourceERLW"></div>
                          Eberron: Rising from the Last War</a></li>
                      <li role="presentation" data-page="book.html#egw">
                        <a href="book.html#egw" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2020</div>
                          <div className="nav2-list__disp-source sourceEGW"></div>
                          Explorer's Guide to Wildemount</a></li>
                      <li role="presentation" data-page="book.html#mot">
                        <a href="book.html#mot" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceMOT"></div>
                          Mythic Odysseys of Theros</a></li>
                      <li role="presentation" data-page="book.html#vrgr">
                        <a href="book.html#vrgr" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2021</div>
                          <div className="nav2-list__disp-source sourceVRGR"></div>
                          Van Richten's Guide to Ravenloft</a></li>
                      <li role="presentation" data-page="book.html#scc">
                        <a href="book.html#scc" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceSCC"></div>
                          Strixhaven: A Curriculum of Chaos</a></li>
                      <li role="presentation" data-page="book.html#tdcsr">
                        <a href="book.html#tdcsr" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2022</div>
                          <div className="nav2-list__disp-source sourceTDCSR"></div>
                          Tal'Dorei Campaign Setting Reborn</a></li>
                      <li role="presentation" className="divider"></li>
                      <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                        <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Extras</li>
                      <li role="presentation" data-page="book.html#ps-z">
                        <a href="book.html#ps-z" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2016</div>
                          <div className="nav2-list__disp-source sourcePSZ"></div>
                          Plane Shift: Zendikar</a></li>
                      <li role="presentation" data-page="book.html#ps-i">
                        <a href="book.html#ps-i" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourcePSI"></div>
                          Plane Shift: Innistrad</a></li>
                      <li role="presentation" data-page="book.html#ps-k">
                        <a href="book.html#ps-k" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2017</div>
                          <div className="nav2-list__disp-source sourcePSK"></div>
                          Plane Shift: Kaladesh</a></li>
                      <li role="presentation" data-page="book.html#ps-a">
                        <a href="book.html#ps-a" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourcePSA"></div>
                          Plane Shift: Amonkhet</a></li>
                      <li role="presentation" data-page="book.html#oga">
                        <a href="book.html#oga" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceOGA"></div>
                          One Grung Above</a></li>
                      <li role="presentation" data-page="book.html#ps-x">
                        <a href="book.html#ps-x" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2018</div>
                          <div className="nav2-list__disp-source sourcePSX"></div>
                          Plane Shift: Ixalan</a></li>
                      <li role="presentation" data-page="book.html#ps-d">
                        <a href="book.html#ps-d" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourcePSD"></div>
                          Plane Shift: Dominaria</a></li>
                      <li role="presentation" data-page="book.html#hwcs">
                        <a href="book.html#hwcs" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2019</div>
                          <div className="nav2-list__disp-source sourceHWCS"></div>
                          Humblewood Campaign Setting</a></li>
                      <li role="presentation" data-page="book.html#rmr">
                        <a href="book.html#rmr" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceRMR"></div>
                          Dungeons &amp; Dragons vs. Rick and Morty: Basic Rules</a></li>
                      <li role="presentation" data-page="book.html#dod">
                        <a href="book.html#dod" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">2021</div>
                          <div className="nav2-list__disp-source sourceDoD"></div>
                          Domains of Delight</a></li>
                      <li role="presentation" data-page="book.html#mabjov">
                        <a href="book.html#mabjov" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceMaBJoV"></div>
                          Minsc and Boo's Journal of Villainy</a></li>
                      <li role="presentation" data-page="book.html#hat-tg">
                        <a href="book.html#hat-tg" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">2023</div>
                          <div className="nav2-list__disp-source sourceHAT-TG"></div>
                          Thieves' Gallery</a></li>
                      <li role="presentation" data-page="book.html#mcv4ec">
                        <a href="book.html#mcv4ec" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceMCV4EC"></div>
                          Monstrous Compendium Volume 4: Eldraine Creatures</a></li>
                      <li role="presentation" data-page="book.html#aatm">
                        <a href="book.html#aatm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceAATM"></div>
                          Adventure Atlas: The Mortuary</a></li><li role="presentation" className="divider"></li>
                      <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                        <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Screens</li>
                      <li role="presentation" data-page="book.html#screen">
                        <a href="book.html#screen" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2015</div>
                          <div className="nav2-list__disp-source sourceScreen"></div>
                          Dungeon Master's Screen</a></li>
                      <li role="presentation" data-page="book.html#screendungeonkit">
                        <a href="book.html#screendungeonkit" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2020</div>
                          <div className="nav2-list__disp-source sourceScDun"></div>
                          Dungeon Master's Screen: Dungeon Kit</a></li>
                      <li role="presentation" data-page="book.html#screenwildernesskit">
                        <a href="book.html#screenwildernesskit" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceScWild"></div>
                          Dungeon Master's Screen: Wilderness Kit</a></li>
                      <li role="presentation" data-page="book.html#screenspelljammer">
                        <a href="book.html#screenspelljammer" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">2022</div>
                          <div className="nav2-list__disp-source sourceScSJ"></div>
                          Dungeon Master's Screen: Spelljammer</a></li>
                      <li role="presentation" className="divider"></li>
                      <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                        <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Recipes</li>
                      <li role="presentation" data-page="book.html#hf">
                        <a href="book.html#hf" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2020</div>
                          <div className="nav2-list__disp-source sourceHF"></div>
                          Heroes' Feast</a></li>
                      <li role="presentation" data-page="book.html#hffotm">
                        <a href="book.html#hffotm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2023</div>
                          <div className="nav2-list__disp-source sourceHFFotM"></div>
                          Heroes' Feast Flavors of the Multiverse</a></li>
                      <li role="presentation" className="divider"></li>
                      <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                        <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Miscellaneous</li>
                      <li role="presentation" data-page="book.html#al">
                        <a href="book.html#al" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2016</div>
                          <div className="nav2-list__disp-source sourceAL"></div>
                          Adventurers League</a></li>
                      <li role="presentation" data-page="book.html#sac">
                        <a href="book.html#sac" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2019</div>
                          <div className="nav2-list__disp-source sourceSAC"></div>
                          Sage Advice Compendium</a></li>
                  </ul></li></ul></li>

            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root">
              <a className="dropdown-toggle" href="#" role="button">
                Player <span className="caret "></span></a>
              <ul className="dropdown-menu dropdown-menu--top">
                <li role="presentation" data-page="classes.html">
                  <a href="classes.html" className="nav__link">
                    Classes</a></li>
                <li role="presentation" data-page="backgrounds.html">
                  <a href="backgrounds.html" className="nav__link">
                    Backgrounds</a></li>
                <li role="presentation" data-page="feats.html">
                  <a href="feats.html" className="nav__link">
                    Feats</a></li>
                <li role="presentation" data-page="races.html">
                  <a href="races.html" className="nav__link">
                    Races</a></li>
                <li role="presentation" data-page="charcreationoptions.html">
                  <a href="charcreationoptions.html" className="nav__link">
                    Other Character Creation Options</a></li>
                <li role="presentation" data-page="optionalfeatures.html">
                  <a href="optionalfeatures.html" className="nav__link">
                    Other Options &amp; Features</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="statgen.html">
                  <a href="statgen.html" className="nav__link">
                    Stat Generator</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="lifegen.html">
                  <a href="lifegen.html" className="nav__link">
                    This Is Your Life</a></li>
                <li role="presentation" data-page="names.html">
                  <a href="names.html" className="nav__link">
                  Names</a></li>
              </ul></li>

            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root">
              <a className="dropdown-toggle" href="#" role="button">
                Dungeon Master <span className="caret "></span></a>
              <ul className="dropdown-menu dropdown-menu--top">
                <li role="presentation" data-page="dmscreen.html">
                  <a href="dmscreen.html" className="nav__link">
                    DM Screen</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile" data-timer-id="1">
                  <a className="dropdown-toggle" href="#" role="button">
                    Adventures <span className="caret caret--right"></span></a>
                  <ul className="dropdown-menu dropdown-menu--side">
                    <li role="presentation" data-page="adventures.html">
                      <a href="adventures.html" className="nav__link">
                        View All/Homebrew</a></li>
                    <li role="presentation" className="divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                      Supplements</li>
                      <li role="presentation" data-page="adventure.html#lmop">
                        <a href="adventure.html#lmop" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2014</div>
                          <div className="nav2-list__disp-source sourceLMoP"></div>
                          Lost Mine of Phandelver</a></li>
                      <li role="presentation" data-page="adventure.html#hotdq">
                        <a href="adventure.html#hotdq" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceHotDQ"></div>
                          Hoard of the Dragon Queen</a></li>
                      <li role="presentation" data-page="adventure.html#rot">
                        <a href="adventure.html#rot" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceRoT"></div>
                          Rise of Tiamat</a></li>
                      <li role="presentation" data-page="adventure.html#pota">
                        <a href="adventure.html#pota" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2015</div>
                          <div className="nav2-list__disp-source sourcePotA"></div>
                          Princes of the Apocalypse</a></li>
                      <li role="presentation" data-page="adventure.html#oota">
                        <a href="adventure.html#oota" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceOotA"></div>
                          Out of the Abyss</a></li>
                      <li role="presentation" data-page="adventure.html#cos">
                        <a href="adventure.html#cos" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2016</div>
                          <div className="nav2-list__disp-source sourceCoS"></div>
                          Curse of Strahd</a></li>
                      <li role="presentation" data-page="adventure.html#skt">
                        <a href="adventure.html#skt" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceSKT"></div>
                          Storm King's Thunder</a></li>
                      <li className="nav2-accord__wrp">
                        <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2017</div>
                          <div className="nav2-list__disp-source sourceTftYP"></div>
                          Tales from the Yawning Portal</div>
                          <div>[+]</div>
                        </div>
                          <div className="nav2-accord__body ve-hidden">
                            <li role="presentation" data-page="adventure.html#tftyp-tsc">
                              <a href="adventure.html#tftyp-tsc" className="nav__link nav2-accord__lnk-item inline-block w-100">
                                <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                                The Sunless Citadel</a></li>
                            <li role="presentation" data-page="adventure.html#tftyp-tfof">
                              <a href="adventure.html#tftyp-tfof" className="nav__link nav2-accord__lnk-item inline-block w-100">
                                <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                                The Forge of Fury</a></li>
                            <li role="presentation" data-page="adventure.html#tftyp-thsot">
                              <a href="adventure.html#tftyp-thsot" className="nav__link nav2-accord__lnk-item inline-block w-100">
                                <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                                The Hidden Shrine of Tamoachan</a></li>
                            <li role="presentation" data-page="adventure.html#tftyp-wpm">
                              <a href="adventure.html#tftyp-wpm" className="nav__link nav2-accord__lnk-item inline-block w-100">
                                <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                                White Plume Mountain</a></li>
                            <li role="presentation" data-page="adventure.html#tftyp-dit">
                              <a href="adventure.html#tftyp-dit" className="nav__link nav2-accord__lnk-item inline-block w-100">
                                <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                                Dead in Thay</a></li>
                            <li role="presentation" data-page="adventure.html#tftyp-atg">
                              <a href="adventure.html#tftyp-atg" className="nav__link nav2-accord__lnk-item inline-block w-100">
                                <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                                Against the Giants</a></li>
                            <li role="presentation" data-page="adventure.html#tftyp-toh">
                              <a href="adventure.html#tftyp-toh" className="nav__link nav2-accord__lnk-item inline-block w-100">
                                <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                                Tomb of Horrors</a></li>
                      </div></li>
                      <li role="presentation" data-page="adventure.html#toa">
                        <a href="adventure.html#toa" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceToA"></div>
                          Tomb of Annihilation</a></li>
                      <li role="presentation" data-page="adventure.html#wdh">
                        <a href="adventure.html#wdh" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2018</div>
                          <div className="nav2-list__disp-source sourceWDH"></div>
                          Waterdeep: Dragon Heist</a></li>
                      <li role="presentation" data-page="adventure.html#wdmm">
                        <a href="adventure.html#wdmm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceWDMM"></div>
                          Waterdeep: Dungeon of the Mad Mage</a></li>
                      <li role="presentation" data-page="adventure.html#gos">
                        <a href="adventure.html#gos" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2019</div>
                          <div className="nav2-list__disp-source sourceGoS"></div>
                          Ghosts of Saltmarsh</a></li>
                      <li role="presentation" data-page="adventure.html#oow">
                        <a href="adventure.html#oow" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceOoW"></div>
                          The Orrery of the Wanderer</a></li>
                      <li className="nav2-accord__wrp">
                        <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceESK"></div>
                          Essentials Kit</div>
                          <div>[+]</div>
                        </div>
                        <div className="nav2-accord__body ve-hidden">
                          <li role="presentation" data-page="adventure.html#dip">
                            <a href="adventure.html#dip" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Dragon of Icespire Peak</a></li>
                          <li role="presentation" data-page="adventure.html#slw">
                            <a href="adventure.html#slw" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Storm Lord's Wrath</a></li>
                          <li role="presentation" data-page="adventure.html#sdw">
                            <a href="adventure.html#sdw" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Sleeping Dragon's Wake</a></li>
                          <li role="presentation" data-page="adventure.html#dc">
                            <a href="adventure.html#dc" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Divine Contention</a></li>
                      </div></li>
                      <li role="presentation" data-page="adventure.html#bgdia">
                        <a href="adventure.html#bgdia" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceBGDIA"></div>
                          Baldur's Gate: Descent Into Avernus</a></li>
                      <li role="presentation" data-page="adventure.html#efr">
                        <a href="adventure.html#efr" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceEFR"></div>
                          Eberron: Forgotten Relics</a></li>
                      <li role="presentation" data-page="adventure.html#mot-nss">
                        <a href="adventure.html#mot-nss" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2020</div>
                          <div className="nav2-list__disp-source sourceMOT"></div>
                          Theros: No Silent Secret</a></li>
                      <li role="presentation" data-page="adventure.html#idrotf">
                        <a href="adventure.html#idrotf" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceIDRotF"></div>
                          Icewind Dale: Rime of the Frostmaiden</a></li>
                      <li role="presentation" data-page="adventure.html#cm">
                        <a href="adventure.html#cm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2021</div>
                          <div className="nav2-list__disp-source sourceCM"></div>
                          Candlekeep Mysteries</a></li>
                      <li role="presentation" data-page="adventure.html#hol">
                        <a href="adventure.html#hol" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceHoL"></div>
                          Ravenloft: The House of Lament</a></li>
                      <li role="presentation" data-page="adventure.html#wbtw">
                        <a href="adventure.html#wbtw" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceWBtW"></div>
                          The Wild Beyond the Witchlight</a></li>
                      <li className="nav2-accord__wrp">
                        <div className="nav2-accord__head split-v-center clickable">
                          <div>
                            <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                            <div className="nav2-list__disp-source sourceSCC"></div>
                            Strixhaven: A Curriculum of Chaos</div>
                          <div>[+]</div>
                        </div>
                        <div className="nav2-accord__body ve-hidden">
                          <li role="presentation" data-page="adventure.html#scc-ck">
                            <a href="adventure.html#scc-ck" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Strixhaven: Campus Kerfuffle</a></li>
                          <li role="presentation" data-page="adventure.html#scc-hfmt">
                            <a href="adventure.html#scc-hfmt" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Strixhaven: Hunt for Mage Tower</a></li>
                          <li role="presentation" data-page="adventure.html#scc-tmm">
                            <a href="adventure.html#scc-tmm" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Strixhaven: The Magister's Masquerade</a></li>
                          <li role="presentation" data-page="adventure.html#scc-arir">
                            <a href="adventure.html#scc-arir" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Strixhaven: A Reckoning in Ruins</a></li>
                      </div></li>
                      <li role="presentation" data-page="adventure.html#jttrc">
                        <a href="adventure.html#jttrc" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2022</div>
                          <div className="nav2-list__disp-source sourceJttRC"></div>
                          Journeys through the Radiant Citadel</a></li>
                      <li role="presentation" data-page="adventure.html#dosi">
                        <a href="adventure.html#dosi" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceDoSI"></div>
                          Dragons of Stormwreck Isle</a></li>
                      <li role="presentation" data-page="adventure.html#lox">
                        <a href="adventure.html#lox" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceLoX"></div>
                          Light of Xaryxis</a></li>
                      <li role="presentation" data-page="adventure.html#dsotdq">
                        <a href="adventure.html#dsotdq" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceDSotDQ"></div>
                          Dragonlance: Shadow of the Dragon Queen</a></li>
                      <li role="presentation" data-page="adventure.html#kftgv">
                        <a href="adventure.html#kftgv" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2023</div>
                          <div className="nav2-list__disp-source sourceKftGV"></div>
                          Keys from the Golden Vault</a></li>
                      <li role="presentation" data-page="adventure.html#pabtso">
                        <a href="adventure.html#pabtso" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourcePaBTSO"></div>
                          Phandelver and Below: The Shattered Obelisk</a></li>
                      <li role="presentation" data-page="adventure.html#tofw">
                        <a href="adventure.html#tofw" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceToFW"></div>
                          Turn of Fortune's Wheel</a></li>
                      <li role="presentation" className="divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                        Extras</li>
                      <li role="presentation" data-page="adventure.html#ttp">
                        <a href="adventure.html#ttp" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2017</div>
                          <div className="nav2-list__disp-source sourceTTP"></div>
                          The Tortle Package</a></li>
                      <li role="presentation" data-page="adventure.html#tlk">
                        <a href="adventure.html#tlk" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceTLK"></div>
                          The Lost Kenku</a></li>
                      <li role="presentation" data-page="adventure.html#xmts">
                        <a href="adventure.html#xmts" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceXMtS"></div>
                          X Marks the Spot</a></li>
                      <li role="presentation" data-page="adventure.html#llk">
                        <a href="adventure.html#llk" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2018</div>
                          <div className="nav2-list__disp-source sourceLLK"></div>
                          Lost Laboratory of Kwalish</a></li>
                      <li role="presentation" data-page="adventure.html#kkw">
                        <a href="adventure.html#kkw" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceKKW"></div>
                          Krenko's Way</a></li>
                      <li role="presentation" data-page="adventure.html#azfyt">
                        <a href="adventure.html#azfyt" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2019</div>
                          <div className="nav2-list__disp-source sourceAZfyT"></div>
                          A Zib for Your Thoughts</a></li>
                      <li role="presentation" data-page="adventure.html#hftt">
                        <a href="adventure.html#hftt" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceHftT"></div>
                          Hunt for the Thessalhydra</a></li>
                      <li role="presentation" data-page="adventure.html#hwaitw">
                        <a href="adventure.html#hwaitw" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceHWAitW"></div>
                          Humblewood: Adventure in the Wood</a></li>
                      <li role="presentation" data-page="adventure.html#lr">
                        <a href="adventure.html#lr" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceLR"></div>
                          Locathah Rising</a></li>
                      <li role="presentation" data-page="adventure.html#imr">
                        <a href="adventure.html#imr" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceIMR"></div>
                          Infernal Machine Rebuild</a></li>
                      <li role="presentation" data-page="adventure.html#rmbre">
                        <a href="adventure.html#rmbre" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceRMBRE"></div>
                          The Lost Dungeon of Rickedness: Big Rick Energy</a></li>
                      <li className="nav2-accord__wrp">
                        <div className="nav2-accord__head split-v-center clickable">
                          <div>
                            <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                            2020</div>
                            <div className="nav2-list__disp-source sourceEGW"></div>
                            Explorer’s Guide to Wildemount</div>
                          <div>[+]</div>
                        </div>
                        <div className="nav2-accord__body ve-hidden">
                          <li role="presentation" data-page="adventure.html#tor">
                            <a href="adventure.html#tor" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Wildemount: Tide of Retribution</a></li>
                          <li role="presentation" data-page="adventure.html#dd">
                            <a href="adventure.html#dd" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Wildemount: Dangerous Designs</a></li>
                          <li role="presentation" data-page="adventure.html#fs">
                            <a href="adventure.html#fs" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Wildemount: Frozen Sick</a></li>
                          <li role="presentation" data-page="adventure.html#us">
                            <a href="adventure.html#us" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Wildemount: Unwelcome Spirits</a></li>
                        </div></li>
                      <li role="presentation" data-page="adventure.html#rtg">
                        <a href="adventure.html#rtg" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2021</div>
                          <div className="nav2-list__disp-source sourceRtG"></div>
                          Return to the Glory</a></li>
                      <li className="nav2-accord__wrp">
                        <div className="nav2-accord__head split-v-center clickable">
                          <div>
                            <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                            <div className="nav2-list__disp-source sourceAitFR"></div>
                            Adventures in the Forgotten Realms</div>
                            <div>[+]</div>
                        </div>
                        <div className="nav2-accord__body ve-hidden">
                          <li role="presentation" data-page="adventure.html#aitfr-isf">
                            <a href="adventure.html#aitfr-isf" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              In Scarlet Flames</a></li>
                          <li role="presentation" data-page="adventure.html#aitfr-thp">
                            <a href="adventure.html#aitfr-thp" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              The Hidden Page</a></li>
                          <li role="presentation" data-page="adventure.html#aitfr-avt">
                            <a href="adventure.html#aitfr-avt" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              A Verdant Tomb</a></li>
                          <li role="presentation" data-page="adventure.html#aitfr-dn">
                            <a href="adventure.html#aitfr-dn" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Deepest Night</a></li>
                          <li role="presentation" data-page="adventure.html#aitfr-fcd">
                            <a href="adventure.html#aitfr-fcd" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              From Cyan Depths</a></li>
                        </div></li>
                      <li className="nav2-accord__wrp">
                        <div className="nav2-accord__head split-v-center clickable">
                          <div>
                            <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                            <div className="nav2-list__disp-source sourceNRH"></div>
                            NERDS Restoring Harmony</div>
                            <div>[+]</div>
                        </div>
                        <div className="nav2-accord__body ve-hidden">
                          <li role="presentation" data-page="adventure.html#nrh-tcmc">
                            <a href="adventure.html#nrh-tcmc" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              The Candy Mountain Caper</a></li>
                          <li role="presentation" data-page="adventure.html#nrh-avitw">
                            <a href="adventure.html#nrh-avitw" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              A Voice in the Wilderness</a></li>
                          <li role="presentation" data-page="adventure.html#nrh-ass">
                            <a href="adventure.html#nrh-ass" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              A Sticky Situation</a></li>
                          <li role="presentation" data-page="adventure.html#nrh-coi">
                            <a href="adventure.html#nrh-coi" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Circus of Illusion</a></li>
                          <li role="presentation" data-page="adventure.html#nrh-tlt">
                            <a href="adventure.html#nrh-tlt" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              The Lost Tomb</a></li>
                          <li role="presentation" data-page="adventure.html#nrh-awol">
                            <a href="adventure.html#nrh-awol" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              A Web of Lies</a></li>
                          <li role="presentation" data-page="adventure.html#nrh-at">
                            <a href="adventure.html#nrh-at" className="nav__link nav2-accord__lnk-item inline-block w-100">
                              <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                              Adventure Together</a></li>
                      </div></li>
                      <li role="presentation" data-page="adventure.html#crcotn">
                        <a href="adventure.html#crcotn" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2022</div>
                          <div className="nav2-list__disp-source sourceCRCotN"></div>
                          Critical Role: Call of the Netherdeep</a></li>
                      <li role="presentation" data-page="adventure.html#sja">
                        <a href="adventure.html#sja" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceSjA"></div>
                          Spelljammer Academy</a></li>
                      <li role="presentation" data-page="adventure.html#gotsf">
                        <a href="adventure.html#gotsf" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block">
                          2023</div>
                          <div className="nav2-list__disp-source sourceGotSF"></div>
                          Giants of the Star Forge</a></li>
                      <li role="presentation" data-page="adventure.html#lk">
                        <a href="adventure.html#lk" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceLK"></div>
                          Lightning Keep</a></li>
                      <li role="presentation" data-page="adventure.html#coa">
                        <a href="adventure.html#coa" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceCoA"></div>
                          Chains of Asmodeus</a></li>
                      <li role="presentation" data-page="adventure.html#pip">
                        <a href="adventure.html#pip" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourcePiP"></div>Peril in Pinebrook</a></li>
                      <li role="presentation" data-page="adventure.html#hfstcm">
                        <a href="adventure.html#hfstcm" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceHFStCM"></div>
                          Heroes' Feast: Saving the Childrens Menu</a></li>
                      <li role="presentation" data-page="adventure.html#ghloe">
                        <a href="adventure.html#ghloe" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceGHLoE"></div>
                          Grim Hollow: Lairs of Etharis</a></li>
                      <li role="presentation" data-page="adventure.html#dodk">
                        <a href="adventure.html#dodk" className="nav__link">
                          <div className="ve-small mr-2 page__nav-date inline-block text-right inline-block"></div>
                          <div className="nav2-list__disp-source sourceDoDk"></div>
                          Dungeons of Drakkenheim</a></li>
                    </ul></li>
                <li role="presentation" data-page="cultsboons.html">
                  <a href="cultsboons.html" className="nav__link">
                  Cults &amp; Supernatural Boons</a></li>
                <li role="presentation" data-page="objects.html">
                  <a href="objects.html" className="nav__link">
                  Objects</a></li>
                <li role="presentation" data-page="trapshazards.html">
                  <a href="trapshazards.html" className="nav__link">
                  Traps &amp; Hazards</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="crcalculator.html">
                  <a href="crcalculator.html" className="nav__link">
                  CR Calculator</a></li>
                <li role="presentation" data-page="encountergen.html">
                  <a href="encountergen.html" className="nav__link">
                  Encounter Generator</a></li>
                <li role="presentation" data-page="lootgen.html">
                  <a href="lootgen.html" className="nav__link">
                  Loot Generator</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="maps.html">
                  <a href="maps.html" className="nav__link">
                  Maps</a></li>
              </ul></li>
              
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root">
              <a className="dropdown-toggle" href="#" role="button">
                References <span className="caret "></span></a>
              <ul className="dropdown-menu dropdown-menu--top">
                <li role="presentation" data-page="actions.html">
                  <a href="actions.html" className="nav__link">Actions</a></li>
                <li role="presentation" data-page="bestiary.html">
                  <a href="bestiary.html" className="nav__link">Bestiary</a></li>
                <li role="presentation" data-page="conditionsdiseases.html">
                  <a href="conditionsdiseases.html" className="nav__link">Conditions &amp; Diseases</a></li>
                <li role="presentation" data-page="decks.html">
                  <a href="decks.html" className="nav__link">Decks</a></li>
                <li role="presentation" data-page="deities.html">
                  <a href="deities.html" className="nav__link">Deities</a></li>
                <li role="presentation" data-page="items.html">
                  <a href="items.html" className="nav__link">Items</a></li>
                <li role="presentation" data-page="languages.html">
                  <a href="languages.html" className="nav__link">Languages</a></li>
                <li role="presentation" data-page="rewards.html">
                  <a href="rewards.html" className="nav__link">Supernatural Gifts &amp; Rewards</a></li>
                <li role="presentation" data-page="psionics.html">
                  <a href="psionics.html" className="nav__link">Psionics</a></li>
                <li role="presentation" data-page="spells.html">
                  <a href="spells.html" className="nav__link">Spells</a></li>
                <li role="presentation" data-page="vehicles.html">
                  <a href="vehicles.html" className="nav__link">Vehicles</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="recipes.html">
                  <a href="recipes.html" className="nav__link">Recipes</a></li>
            </ul></li>
            
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root">
              <a className="dropdown-toggle" href="#" role="button">
                Utilities <span className="caret "></span></a>
              <ul className="dropdown-menu dropdown-menu--top">
                <li role="presentation" data-page="search.html">
                  <a href="search.html" className="nav__link">Search</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="blocklist.html">
                  <a href="blocklist.html" className="nav__link">Content Blocklist</a></li>
                <li role="presentation" data-page="manageprerelease.html">
                  <a href="manageprerelease.html" className="nav__link">Prerelease Content Manager</a></li>
                <li role="presentation" data-page="makebrew.html">
                  <a href="makebrew.html" className="nav__link">Homebrew Builder</a></li>
                <li role="presentation" data-page="managebrew.html">
                  <a href="managebrew.html" className="nav__link">Homebrew Manager</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="inittrackerplayerview.html">
                  <a href="inittrackerplayerview.html" className="nav__link">Initiative Tracker Player View</a></li>
                <li role="presentation" className="divider"></li><li role="presentation" data-page="renderdemo.html">
                  <a href="renderdemo.html" className="nav__link">Renderer Demo</a></li>
                <li role="presentation" data-page="makecards.html">
                  <a href="makecards.html" className="nav__link">RPG Cards JSON Builder</a></li>
                <li role="presentation" data-page="converter.html">
                  <a href="converter.html" className="nav__link">Text Converter</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="plutonium.html">
                  <a href="plutonium.html" className="nav__link">Plutonium (Foundry Module) Features</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="https://wiki.tercept.net/en/betteR20">
                  <a href="https://wiki.tercept.net/en/betteR20" className="nav__link inline-split-v-center w-100" target="_blank">
                    <span>Roll20 Script Help</span>
                    <span className="glyphicon glyphicon-new-window"></span></a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="changelog.html">
                  <a href="changelog.html" className="nav__link">Changelog</a></li>
                <li role="presentation" data-page="https://wiki.tercept.net/en/5eTools/HelpPages/">
                  <a href="https://wiki.tercept.net/en/5eTools/HelpPages/" className="nav__link inline-split-v-center w-100" target="_blank">
                    <span>Help</span>
                    <span className="glyphicon glyphicon-new-window"></span></a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" data-page="privacy-policy.html">
                  <a href="privacy-policy.html" className="nav__link">Privacy Policy</a></li>
            </ul></li>
              
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root">
              <a className="dropdown-toggle" href="#" role="button">
                Settings <span className="caret "></span></a>
              <ul className="dropdown-menu dropdown-menu--top">
                <li role="presentation">
                  <a href="#" className="nightModeToggle">Night Mode (Alt)</a></li>
                <li role="presentation" title="This feature is unsupported. Expect bugs.">
                    <a href="#" className="wideModeToggle">Enable Wide Mode (Experimental)</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" title="Save any locally-stored data (loaded homebrew, active blocklists, DM Screen configuration,...) to a file.">
                  <a href="#">Save State to File</a></li>
                <li role="presentation" title="Load previously-saved data (loaded homebrew, active blocklists, DM Screen configuration,...) from a file.">
                  <a href="#">Load State from File</a></li>
                <li role="presentation" className="divider"></li>
                <li role="presentation" title="Add the site to your home screen. When used in conjunction with the Preload Offline Data option, this can create a functional offline copy of the site.">
                  <a href="#">Add as App</a></li>
                <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile">
                  <a className="dropdown-toggle" href="#" role="button">Preload Data <span className="caret caret--right"></span></a>
                  <ul className="dropdown-menu dropdown-menu--side">
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <p>Preload data for offline use.</p>
                      <p>Note that visiting a page will automatically preload data for that page.</p>
                      <p>Note that data which is already preloaded will not be overwritten, unless it is out of date.</p></li>
                    <li role="presentation" title="Preload adventure text for offline use.">
                      <a href="#">Preload Adventure Text <small>(50MB+)</small></a></li>
                    <li role="presentation" title="Preload book images offline use. Note that book text is preloaded automatically.">
                      <a href="#">Preload Book Images <small>(1GB+)</small></a></li>
                    <li role="presentation" title="Preload adventure text and images for offline use.">
                      <a href="#">Preload Adventure Text and Images <small>(2GB+)</small></a></li>
                    <li role="presentation" title="Preload all images for offline use.">
                      <a href="#">Preload All Images <small>(4GB+)</small></a></li>
                    <li role="presentation" title="Preload everything for offline use.">
                      <a href="#">Preload All <small>(5GB+)</small></a></li>
                    <li role="presentation" className="divider"></li>
                    <li role="presentation" title="Remove all preloaded data, and clear away any caches.">
                      <a href="#">Reset Preloaded Data</a></li>
                </ul></li>
            </ul></li>
            
            <div className="input-group omni__wrp-input">
              <input
                className="form-control search omni__input"
                title="Hotkey: F. Disclaimer: unlikely to search everywhere. Use with caution."
                type="search"
                placeholder="Search everywhere..."
                autoComplete="new-password"
                autoCapitalize="off"
                spellCheck="false"/>
              <span className="absolute glyphicon glyphicon-remove omni__btn-clear"></span>
              <div className="input-group-btn">
                <button className="btn btn-default omni__submit" tabIndex="-1">
                  <span className="glyphicon glyphicon-search"></span></button>
              </div>
            </div>
          </ul>
          <div className="omni__wrp-output ve-flex ve-hidden">
            <div className="omni__output"></div>
          </div>
          <script type="text/javascript" src="../../../js/parser.js"></script>
          <script type="text/javascript" src="../../../js/utils.js"></script>
          <script type="text/javascript" src="../../../js/utils-ui.js"></script>
          <script type="text/javascript" src="../../../lib/localforage.js"></script>
          <script type="text/javascript" src="../../../js/omnidexer.js"></script>
          <script type="text/javascript" src="../../../js/omnisearch.js"></script>
          <script type="text/javascript" src="../../../js/filter.js"></script>
          <script type="text/javascript" src="../../../js/utils-dataloader.js"></script>
          <script type="text/javascript" src="../../../js/utils-brew.js"></script>
          <script type="text/javascript" src="../../../js/render.js"></script>
          <script type="text/javascript" src="../../../js/render-dice.js"></script>
          <script type="text/javascript" src="../../../js/scalecreature.js"></script>
          <script type="text/javascript" src="../../../js/hist.js"></script>
          <script type="module" src="../../../js/index.js"></script>
          <script type="text/javascript" src="../../../lib/jquery.js"></script>
          <script type="text/javascript" src="../../../lib/elasticlunr.js"></script>
        </nav>
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/campaign"
          >
            <Campaign />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

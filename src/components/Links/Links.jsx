import React from "react";
import '../../../css/bootstrap.css'
import '../../../css/fontawesome.css'
import '../../../css/main.css'
import '../../../css/index.css'

function Links(){
    return(
        <div className="home__stripe">
            <div className="home__split relative">
                <div className="home__stripe-header text-right home__h-player"><div className="w-100 text-left mobile__text-center">Players</div></div>
                <div className="ve-flex ve-flex-wrap relative home__split-spaced home__split-spaced--gutter home__split-spaced--no-header home__wrp-buttons">
                    <a className="home__btn-page btn btn-default mr-3 home__btn-player" href="races.html">
                        <div className="fal fa-users home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Races</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-player" href="classes.html" title="Quickly browse the official classes, and their associated subclasses.
        Unearthed Arcana content can be accessed by cycling the &quot;All Sources&quot; button.">
                        <div className="fal fa-hat-wizard home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Classes</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-player" href="feats.html">
                        <div className="fal fa-award home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Feats</h4>
                    </a>
                    <a className="home__btn-page btn btn-default home__btn-player" href="optionalfeatures.html" title="A searchable, filterable list of feature choices, including Eldritch Invocations for the Warlock Class, and Maneuvers for the Fighter's Battlemaster subclass.">
                        <div className="fal fa-drafting-compass home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Options<br/>&amp; Features</h4>
                    </a>

                    {/* <!-- mobile only --> */}
                    <a className="home__btn-page btn btn-default home__narrow-visible home__btn-player" href="backgrounds.html">
                        <div className="fal fa-portrait home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Backgrounds</h4>
                    </a>
                    <a className="home__btn-page btn btn-default home__narrow-visible home__btn-player" href="items.html">
                        <div className="fal fa-helmet-battle home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Items</h4>
                    </a>
                    <a className="home__btn-page btn btn-default home__narrow-visible home__btn-player" href="spells.html">
                        <div className="fal fa-book-spells home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Spells</h4>
                    </a>
                    <a className="home__btn-page btn btn-default home__narrow-visible home__btn-player" href="statgen.html">
                        <div className="fal fa-tally home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Stat<br/>Generator</h4>
                    </a>
                </div>

                <div className="ve-flex ve-flex-wrap home__wrp-buttons home__narrow-hidden">
                    <a className="home__btn-page btn btn-default mr-3 home__btn-player" href="backgrounds.html">
                        <div className="fal fa-portrait home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Backgrounds</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-player" href="items.html">
                        <div className="fal fa-helmet-battle home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Items</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-player" href="spells.html">
                        <div className="fal fa-book-spells home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Spells</h4>
                    </a>
                    <a className="home__btn-page btn btn-default home__btn-player" href="statgen.html">
                        <div className="fal fa-tally home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Stat<br/>Generator</h4>
                    </a>
                </div>
            </div>

            <div className="my-4 home__mobile-hidden home__narrow-hidden"></div>
            <div className="my-4 home__mobile-hidden home__narrow-visible"></div>
            <div className="my-4 home__mobile-hidden"></div>

            <div className="home__split">
                <div className="ve-flex ve-flex-wrap relative home__split-spaced home__split-spaced--gutter home__wrp-buttons">
                    <div className="home__stripe-header home__h-rule"><div className="w-100 text-left mobile__text-center">Rules</div></div>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-rule" href="adventures.html" title="All the official adventures published by Wizards of the Coast.">
                        <div className="fal fa-dungeon home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Adventures</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-rule" href="books.html" title="All the official sources published by Wizards of the Coast.">
                        <div className="fal fa-books home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Books</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-rule" href="quickreference.html" title="A searchable selection of commonly used rules and tables.">
                        <div className="fal fa-info-square home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Quick<br/>Reference</h4>
                    </a>
                    <a className="home__btn-page btn btn-default home__btn-rule" href="conditionsdiseases.html" title="A searchable, filterable list of the conditions found in the Player's Handbook, and various diseases found in the Dungeon Master's Guide and beyond.">
                        <div className="fal fa-skull-crossbones home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Conditions</h4>
                    </a>
                </div>

                <div className="my-4 home__mobile-visible"></div>

                <div className="ve-flex ve-flex-wrap relative home__wrp-buttons">
                    <div className="home__stripe-header home__h-dm"><div className="w-100 text-left mobile__text-center">Dungeon Masters</div></div>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-dm" href="bestiary.html" title="A searchable, filterable list of the more than 1,000 stat blocks in D&amp;D 5e. An encounter builder is included, and creature Challenge Rating can be scaled according to the &quot;Creating Quick Monster Stats&quot; table in the Dungeon Master's Guide.">
                        <div className="fal fa-dragon home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Bestiary</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-dm" href="dmscreen.html" title="A fully-customizable Dungeon Master's screen, featuring an initiative tracker; a unit converter, embedded images, videos, and sites; and the majority of 5etools' content.">
                        <div className="fal fa-map home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">DM Screen</h4>
                    </a>
                    <a className="home__btn-page btn btn-default mr-3 home__btn-dm" href="lootgen.html" title="A random loot generator for both individual and hoards of treasure.">
                        <div className="fal fa-treasure-chest home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">Loot<br/>Generator</h4>
                    </a>
                    <a className="home__btn-page btn btn-default home__btn-dm" href="crcalculator.html" title="A verbose, in-depth Challenge Rating calculator, for determining the CR of homebrew creatures.">
                        <div className="fal fa-abacus home__icn-page"></div>
                        <h4 className="ve-text-center home__lbl-page">CR<br/>Calculator</h4>
                    </a>
                </div>
            </div>

            <div className="my-4"></div>

            <hr className="no-shrink w-100 my-0"/>
        </div>
    )
}

export default Links;
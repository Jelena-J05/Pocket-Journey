import React, { useState } from "react"
import styled from "styled-components"
import HeroBackground from "../images/HeroBackground.png"

export default function HeroHome() {
    const [activeTab, setActiveTab] = useState("FLIGHTS")

    const renderInputsForActiveTab = () => {
        switch (activeTab) {
            case "FLIGHTS":
                return (
                    <>
                        <SearchInput type="text" placeholder="From" />
                        <SearchInput type="text" placeholder="To" />
                        <SearchInput type="date" placeholder="Departure Date" />
                        <SearchInput type="date" placeholder="Return Date" />
                    </>
                )
            case "TRAINS":
                return (
                    <>
                        <SearchInput type="text" placeholder="Destination" />
                        <SearchInput type="date" placeholder="Check In Date" />
                        <SearchInput type="date" placeholder="Check Out Date" />
                        <SearchInput type="number" placeholder="Guests" />
                    </>
                )
            case "HOTELS":
                return (
                    <>
                        <SearchInput type="text" placeholder="Destination" />
                        <SearchInput type="date" placeholder="Check In Date" />
                        <SearchInput type="date" placeholder="Check Out Date" />
                        <SearchInput type="number" placeholder="Guests" />
                    </>
                )
            case "RESTAURANTS":
                return (
                    <>
                        <SearchInput type="text" placeholder="Destination" />
                        <SearchInput type="date" placeholder="Check In Date" />
                        <SearchInput type="date" placeholder="Check Out Date" />
                        <SearchInput type="number" placeholder="Guests" />
                    </>
                )
            case "ACTIVITIES":
                return (
                    <>
                        <SearchInput type="text" placeholder="Destination" />
                        <SearchInput type="date" placeholder="Check In Date" />
                        <SearchInput type="date" placeholder="Check Out Date" />
                        <SearchInput type="number" placeholder="Guests" />
                    </>
                )
            
            default:
                return null
        }
    }

    return (
        <Section
            id="hero"
            style={{ backgroundImage: `url(${HeroBackground})` }}
        >
            <Content>
                <Tabs>
                    {[
                        "FLIGHTS",
                        "HOTELS",
                        "TRAINS",
                        "RESTAURANTS",
                        "ACTIVITIES",
                    ].map((tab) => (
                        <Tab
                            key={tab}
                            active={activeTab === tab}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </Tab>
                    ))}
                </Tabs>
                <SearchBar>
                    {renderInputsForActiveTab()}
                    <SearchButton>SEARCH</SearchButton>
                </SearchBar>
            </Content>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    height: 60vh;
    width: 100%;

    @media (max-width: 768px) {
        padding: 20px;
        height: auto;
        flex-direction: column;
    }
`

const Content = styled.div`
    max-width: 960px;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.3);

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

const Tabs = styled.div`
    display: flex;
    gap: 10px; // Mantiene uno spazio tra i tabs
    justify-content: center;
    flex-wrap: wrap; // Permette ai tabs di andare a capo in spazi ristretti
    margin-bottom: 20px;

    @media (max-width: 768px) {
        justify-content: center; // Centra i tabs su schermi piccoli
        gap: 5px; // Riduce lo spazio tra i tabs per sfruttare meglio lo spazio disponibile
    }
`

const Tab = styled.button`
    background-color: ${(props) =>
        props.active ? "rgba(255, 165, 87, 0.5)" : "transparent"};
    color: ${(props) => (props.active ? "white" : "black")};
    border: 2px solid
        ${(props) =>
            props.active ? "transparent" : "rgba(255, 255, 255, 0.5)"};
    padding: 0.8rem 1.6rem; // Dimensioni comode per la maggior parte dei dispositivi
    border-radius: 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 165, 87, 0.7);
        color: white;
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1rem; // Riduce il padding per risparmiare spazio
        font-size: 0.9rem; // Leggermente più piccolo per adattarsi meglio
    }
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
    overflow: hidden;
    gap: 10px; // Aggiunge spazio tra gli input

    @media (max-width: 768px) {
        flex-wrap: wrap; // Permette agli elementi di andare a capo su schermi piccoli
        justify-content: center;
    }
`

const SearchInput = styled.input.attrs((props) => ({
    type: props.type || "text",
}))`
    flex: 1 1 auto; // Consente agli input di crescere e di comprimersi
    padding: 0.5rem;
    margin-right: 10px; // Assicura un po' di spazio tra gli input
    border: none;
    background: transparent;
    font-size: 1rem;
    color: black;

    &:last-child {
        margin-right: 0; // Rimuove il margine destro per l'ultimo input
    }

    @media (max-width: 768px) {
        flex: 1 1 100%; // Consente agli input di espandersi a piena larghezza su dispositivi piccoli
        margin-right: 0; // Rimuove il margine per evitare spazi extra
        margin-bottom: 10px; // Aggiunge spazio sotto gli input
    }
`

const SearchButton = styled.button`
    padding: 0.5rem 2rem;
    background-color: #ffa557;
    color: white;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0944d;
    }

    @media (max-width: 768px) {
        width: auto; // Consente al pulsante di adattarsi al contenuto
        margin-top: 0; // Rimuove il margine superiore aggiuntivo se presente
    }
`

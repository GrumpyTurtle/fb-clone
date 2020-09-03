import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Batian_Nelion_and_pt_Slade_in_the_foreground_Mt_Kenya.JPG/220px-Batian_Nelion_and_pt_Slade_in_the_foreground_Mt_Kenya.JPG"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emma_Watson_interview_in_2017.jpg/220px-Emma_Watson_interview_in_2017.jpg"
                title="Emma Watson"
            />
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Classic_view_of_a_cloudfree_Peyto_Lake%2C_Banff_National_Park%2C_Alberta%2C_Canada_%284110933448%29.jpg/220px-Classic_view_of_a_cloudfree_Peyto_Lake%2C_Banff_National_Park%2C_Alberta%2C_Canada_%284110933448%29.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/RiP2013_GreenDay_Billie_Joe_Armstrong_0021.jpg/220px-RiP2013_GreenDay_Billie_Joe_Armstrong_0021.jpg"
                title="Billie Joe Armstrong"
            />
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/20100726_Kalamitsi_Beach_Ionian_Sea_Lefkada_island_Greece.jpg/203px-20100726_Kalamitsi_Beach_Ionian_Sea_Lefkada_island_Greece.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Angels%26Airwaves_Hansaring_06_Tom_DeLonge_%28Cropped%29.jpg/220px-Angels%26Airwaves_Hansaring_06_Tom_DeLonge_%28Cropped%29.jpg"
                title="Tom Delonge"
            />
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/The_Adicts_2011_SO36_03.jpg/220px-The_Adicts_2011_SO36_03.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/220px-Leonardo_Dicaprio_Cannes_2019.jpg"
                title="Leonardo DiCaprio"
            />
            <Story
                image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Twelve_Oaks_vacation_movie_filming.jpg/220px-Twelve_Oaks_vacation_movie_filming.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg"
                title="Scarlett Johanson"
            />
        </div>
    );
}

export default StoryReel

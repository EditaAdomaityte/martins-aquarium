import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Render each HTML string to the correct DOM element

const renderFish=(fishHTML)=>{
    const fishLists=document.getElementById('fishList');

    if (fishLists){
        fishLists.innerHTML=fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
};

renderFish(fishHTML);

// Generate the care tips
const tipHTML = tipList()

const renderTips=(tipHTML)=>{
    const tipLists=document.getElementById('tipList');

    if (tipLists){
        tipLists.innerHTML=tipHTML;
    } else {
        console.error('Could not find element with id "tipList"');
    }
};

renderTips(tipHTML);

// Generate the location list
const locationHTML = locationList()

const renderLocation=(locationHTML)=>{
    const locationLists=document.getElementById('locationList');

    if (locationLists){
        locationLists.innerHTML=locationHTML;
    } else {
        console.error('Could not find element with id "locationList"');
    }
};

renderLocation(locationHTML);
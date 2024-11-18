import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML='';

    for (const fish of database.fish) {
        fishHTML +=`
            <article class="fish">
            <img src="${fish.image}" alt="${fish.species} picture" class="fish__picture">
            <div class="fish__details">
                <h2 class="fish__name">${fish.name}</h2>
                <p class="fish__description">Species: ${fish.species}<br>
                Length(in): ${fish.length}<br>
                It is found in ${fish.location}<br>
                Diet: ${fish.diet}</p>
            </div>
            </article>
        `;
    }
    return fishHTML
    // Generate an HTML representation of each fish
};
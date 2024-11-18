import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML='';

    for (const fishLocation of database.location) {
        locationHTML +=`
            <article class="location">
                <section class="location"> 
                    <p>Lives in ${fishLocation.name}, which is close to ${fishLocation.country}.${fishLocation.description}
                    </p>
                </section>
            </article>
        `;
    }
    return locationHTML
    // Generate an HTML representation of each fish
};
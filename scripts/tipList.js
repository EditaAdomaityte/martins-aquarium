import { database } from './aquariumData.js';

export const tipList = () => {
    let tipsHTML='';

    for (const tips of database.tips) {
        tipsHTML +=`
            <article class="tips">
             <ul class="tips">
                <li class="tip">${tips.topic}: ${tips.text}
                </li>
             </ul>
            </article>
        `;
    }
    return tipsHTML
    // Generate an HTML representation of each fish
};
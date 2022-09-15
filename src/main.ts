/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.state.onVariableChange('roomCapacity').subscribe((value) => {
        console.log(value)
        if (value === 8) {
            WA.room.showLayer('filters/8Seats')
        } else if (value === 16) {
            WA.room.showLayer('filters/16Seats')
            WA.room.hideLayer('filters/8Seats')
        } else if (value === 52) {
            WA.room.hideLayer('filters/16Seats')
            WA.room.hideLayer('filters/8Seats')
        }
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};

import { CommandGuard } from "@rbxts/commander";

export const isAdmin: CommandGuard = ( runNext, interaction ) => {
    if ( interaction.executor.UserId !== 811308495 ) {
        interaction.error( "Insufficient permission!" );
        return;
    }

    runNext();
};

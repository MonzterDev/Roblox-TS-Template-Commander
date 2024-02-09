import { CommanderServer } from "@rbxts/commander";
import { currencyType } from "shared/cmdr/types/currency";

const commandsFolder = <Folder>script.Parent?.FindFirstChild( "commands" )
const typesFolder = <Folder>script.Parent?.FindFirstChild( "types" )

CommanderServer.start(
    ( registry ) => {

        registry.registerTypes( currencyType )

        if ( script.Parent === undefined ) return;
        const commandContainer = script.Parent.WaitForChild( "commands" );
        registry.register( commandContainer );

        // const typesContainer = script.Parent.WaitForChild( "types" );
        // registry.register( typesContainer )


        // registry.registerCommands()
    },
    {
        // If you don't want to register built-in types, you can change this option
        // This is set to true by default.b
        registerBuiltInTypes: true,
    },
).catch( ( err ) => warn( "Commander could not be started:", tostring( err ) ) );

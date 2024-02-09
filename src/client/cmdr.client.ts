import { CommanderApp, CommanderClient, TransformResult, TypeBuilder } from "@rbxts/commander";
import { currencyType } from "shared/cmdr/types/currency";


CommanderClient.start(
    ( registry ) => {
        // Register commands or types here
        registry.registerTypes( currencyType )
        // registry.registerTypes( currencyType )
        // registry.registerType( matchNum )
        registry.registerCommands()

    },
    {
        // The app that will be used to display the Commander UI
        // Commander comes with a default app, but you can create your own
        app: CommanderApp,

        // The default key is F2, but you can change it here
        activationKeys: [Enum.KeyCode.F2],

        // The maximum terminal and command history length, default length is 1000
        historyLength: 1000,

        // If you don't want to register built-in types, you can change this option
        // This is set to true by default.
        registerBuiltInTypes: true,
    },
).catch( ( err ) => warn( "Commander could not be started:", tostring( err ) ) );

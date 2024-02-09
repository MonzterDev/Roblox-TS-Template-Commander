import { Command, CommandGuard, CommandInteraction, Commander, CommanderType, Guard } from "@rbxts/commander";
import { store } from "server/store";
import { isAdmin } from "../utils/isAdmin";
import { Currency } from "shared/configs/Currency";

@Commander()
class SetBalanceCommand {
    @Command( {
        name: "setBalance",
        description: "Set the balance of a player",
        arguments: [
            {
                name: "currency",
                description: "currency",
                type: "currency"
            },
            {
                name: "amount",
                description: "amount",
                type: CommanderType.Number
            },
            {
                name: "player",
                description: "player",
                type: CommanderType.Player
            }
        ]
    } )
    @Guard( isAdmin )
    setBalance ( interaction: CommandInteraction, currency: Currency, amount: number, player?: Player ) {
        player = player || interaction.executor;
        store.adjustPlayerCurrency( player.Name, currency, amount );
    }
}

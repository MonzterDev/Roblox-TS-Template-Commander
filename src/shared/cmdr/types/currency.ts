import { BaseRegistry, TransformResult, TypeBuilder } from "@rbxts/commander";
import { t } from "@rbxts/t";
import { CURRENCIES, Currency } from "shared/configs/Currency";

export const currencyType = TypeBuilder.create<Currency>( "currency" )
    .validate( t.valueOf( CURRENCIES ) )
    .transform( ( text ) => {
        const currency = CURRENCIES.find( ( currency ) => currency.lower() === text.lower() );
        if ( currency ) {
            return TransformResult.ok( currency );
        } else {
            return TransformResult.err( `Invalid currency: ${text}` );
        }
    } )
    .suggestions( () => CURRENCIES.map( ( currency ) => currency ) )
    .build();

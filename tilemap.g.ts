// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`24000d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003020000000000000000000000000000000000000000000000000000000000000003030000020708000000000000000000000000000000000003030300000000000000030300000000020708000000000000000000000000000000000303030303060000000000000000000003030202000000000000000000000000000000030300000303030303030300000000030300000600000000000000000000000000030300000000000000030000000000000003000000000004000000000000000303030000000000000000000303030000000000000000000003030303000000030303000000000300000000000006030300000000000000030303030000000000000000000000000000000003030303030303030000000000000603000000000000000005020202020202020202020202020202020202020202020202020202020202020206020202010101010101010101010101010101010101010101010101010101010101010101010101`, img`
....................................
....................................
................................22..
.............................22..2..
.................222.......22....2..
................22222...........2222
...............22..2222222....22....
............22.......2.......2......
.......222.........222..........2222
...222....2.......22.......2222.....
...........22222222.......2.........
222222..222222222222222222222222.222
2222222....2222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.builtin.forestTiles0,sprites.dungeon.doorClosedNorth,myTiles.tile1,sprites.castle.rock0,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

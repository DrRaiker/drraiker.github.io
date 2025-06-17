<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Генератор YAML</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body class="bg-gray-900 text-white p-4">
<div class="grid grid-cols-2 gap-4 h-screen">

    <div class="overflow-y-auto p-4 bg-gray-800 rounded shadow space-y-4">
        <h2 class="text-xl font-bold">Block properties</h2>

        <label class="block">
            <span class="text-sm font-medium">Name</span>
            <input id="name" type="text" placeholder="&fТест" class="mt-1 w-full rounded border p-2 bg-gray-700 text-white" />
        </label>


        <label class="block">
            <span class="text-sm font-medium">Base Type</span>

            <button type="button" class="relative group">
                <span class="text-xs bg-gray-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
                <span class="absolute border left-full top-1/2 -translate-y-1/2 ml-2 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-10">
    The type of block that will be used as a hitbox, barrier universal
  </span>
            </button>


            <input id="baseType" type="text" placeholder="barrier" class="mt-1 w-full rounded border p-2 bg-gray-700 text-white" />
        </label>


        <br>
        <label><input id="isHat" type="checkbox" class="mr-2" />Is Hat</label>
        <button type="button" class="relative group">
            <span class="text-xs bg-gray-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
            <span class="absolute border left-full top-1/2 -translate-y-1/2 ml-2 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-10">
    The player can put a block on his head through the inventory.
  </span>
        </button>

        <br>

        <label><input id="isSolid" type="checkbox" class="mr-2" checked/>Is Solid</label>
        <button type="button" class="relative group">
            <span class="text-xs bg-gray-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
            <span class="absolute border left-full top-1/2 -translate-y-1/2 ml-2 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-10">
    If disabled, the Base Type will not be used. The block will have a hitbox entity.
  </span>
        </button>



        <fieldset class="border p-2 rounded" id="solid-options">
            <legend class="text-sm font-medium">Non solid Hitbox</legend>
            <label class="block">Width: <input id="nonSolidWidth" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
            <label class="block">Height: <input id="nonSolidHeight" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
            <fieldset class="border p-2 rounded">
                <legend class="text-sm font-medium">Offset <button type="button" class="relative group">
                    <span class="text-xs bg-gray-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
                    <span class="absolute border left-full top-1/2 -translate-y-1/2 ml-2 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-10">
                    Offset of hitbox relative to block center
                    </span>
                </button></legend>

                <label class="block">x: <input id="hitboxX" type="number" value="0" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                <label class="block">y: <input id="hitboxY" type="number" value="0" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                <label class="block">z: <input id="hitboxZ" type="number" value="0" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
            </fieldset>
            <br>
            <label class="block"><input id="freePlace" type="checkbox" class="mr-2" />Free place
                <button type="button" class="relative group">
                    <span class="text-xs bg-gray-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
                    <span class="absolute border left-full top-1/2 -translate-y-1/2 ml-2 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-10">
                    If enabled, the block can be placed anywhere, regardless of the block grid
                    </span>
                </button>
            </label>

        </fieldset>

        <label class="block"><input id="canDestroy" type="checkbox" checked class="mr-2" />Destructible</label>

        <fieldset class="border p-2 rounded" id="destroy-options">
            <label class="block"><input id="hasDrop" type="checkbox" checked class="mr-2" />Has Drop</label>

            <label class="block">
                <span class="text-sm font-medium">Destroy time</span>
                <input id="destroyTime" type="number" value="2" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" />
                <button type="button" class="relative group">
                    <span class="text-xs bg-gray-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
                    <span class="absolute border left-full top-1/2 -translate-y-1/2 ml-2 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-10">
                    Block destruction time in seconds
                    </span>
                </button>
            </label>

            <label class="block">
                <span class="text-sm font-medium">Effective instrument</span>
                <select id="effectiveTool" class="mt-1 w-full rounded border p-2 bg-gray-700 text-white">
                    <option value="hoe">hoe</option>
                    <option value="axe">axe</option>
                    <option value="pickaxe" selected>pickaxe</option>
                    <option value="sword">sword</option>
                    <option value="shovel">shovel</option>
                </select>
            </label>
        </fieldset>

        <label class="block"><input id="isSeat" type="checkbox" class="mr-2" />Is Seat</label>


        <fieldset class="border p-2 rounded" id="seat-options">
            <legend class="text-sm font-medium">seat.offset</legend>
            <div  style="display: grid">
            <label>X: <input id="seatX" type="number" value="0" class="bg-gray-700 text-white p-1 rounded ml-2" /></label>
            <label>Y: <input id="seatY" type="number" value="0.5" class="bg-gray-700 text-white p-1 rounded ml-2" /></label>
            <label>Z: <input id="seatZ" type="number" value="0" class="bg-gray-700 text-white p-1 rounded ml-2" /></label>
            <label><input id="rotateByPassenger" type="checkbox" class="mr-2" />rotate-by-passenger</label>
            </div>
        </fieldset>

        <fieldset class="border p-2 rounded" style="display: grid">
            <legend class="text-sm font-medium">canPlace</legend>
            <label><input type="checkbox" id="placeNorth" class="mr-2" checked />north</label>
            <label><input type="checkbox" id="placeSouth" class="mr-2" checked />south</label>
            <label><input type="checkbox" id="placeWest" class="mr-2" checked />west</label>
            <label><input type="checkbox" id="placeEast" class="mr-2" checked />east</label>
            <label><input type="checkbox" id="placeUp" class="mr-2" checked />up</label>
            <label><input type="checkbox" id="placeDown" class="mr-2" checked />down</label>
        </fieldset>

        <fieldset class="border p-2 rounded"  style="display: grid">
            <legend class="text-sm font-medium">Model</legend>
            <div class=" flex-space-around">
                <div class="grid m-5">
                    <p class="text-sm font-medium">Block</p>
                    <label>id: <input id="modelId" type="text" value="feather" class="bg-gray-700 text-white p-1 rounded ml-2 flex-right" /></label>
                    <label>cmd: <input id="modelCmd" type="number" value="0" class="bg-gray-700 text-white p-1 rounded ml-2 flex-right" /></label>
                    <label>color: <input id="modelColor" type="color" value="#FFFFFF" class="ml-2 flex-right" /></label>

                </div>

                <div class="grid m-5">
                    <p class="text-sm font-medium">Inventory</p>
                    <label>id: <input id="itemId" type="text" value="feather" class="bg-gray-700 text-white p-1 rounded ml-2 flex-right" /></label>
                    <label>cmd: <input id="itemCmd" type="number" value="0" class="bg-gray-700 text-white p-1 rounded ml-2 flex-right" /></label>
                    <label>color: <input id="itemColor" type="color" value="#FFFFFF" class="ml-2 flex-right" /></label>
                </div>
            </div>

            <label>lore: <input id="itemLore" type="text" value="Example\n Lore" class="bg-gray-700 text-white p-1 rounded ml-2 w-full" /></label>
            <br>

            <div class=" flex-space-around">
                <fieldset class="border p-2 m-2 rounded grid">
                    <legend class="text-sm font-medium">Scale</legend>
                    <label class="block">x: <input id="scaleX" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                    <label class="block">y: <input id="scaleY" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                    <label class="block">z: <input id="scaleZ" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                </fieldset>

                <fieldset class="border p-2 m-2 rounded grid">
                    <legend class="text-sm font-medium">Rotation</legend>
                    <label class="block">yaw: <input id="yaw" type="number" value="0" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                    <label class="block">pitch: <input id="pitch" type="number" value="0" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                </fieldset>

                <fieldset class="border p-2 m-2 rounded grid" id="offset">
                    <legend class="text-sm font-medium">Offset</legend>
                    <label class="block">x: <input id="offsetX" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                    <label class="block">y: <input id="offsetY" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                    <label class="block">z: <input id="offsetZ" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                </fieldset>
            </div>
        </fieldset>

        <br>
        <label><input id="isRotates" type="checkbox" class="mr-2" />isRotates</label>
        <fieldset class="border p-2 rounded" id="rotate-options">
            <div style="display: grid">
                <label><input id="rotate45" type="checkbox" class="mr-2" />45-rotating</label>
                <label><input id="freeRotating" type="checkbox" class="mr-2" />free-rotating</label>
                <label><input id="rotateByBlockface" type="checkbox" class="mr-2" />rotate-by-blockface</label>
                <div id="binding">
                <label class="block">
                    <span class="text-sm font-medium">blockface-binding</span>
                    <select id="blockfaceBinding" class="mt-1 w-full rounded border p-2 bg-gray-700 text-white">
                        <option value="down">down</option>
                        <option value="up">up</option>
                        <option value="north" selected>north</option>
                        <option value="south">south</option>
                        <option value="west">west</option>
                        <option value="east">east</option>
                    </select>
                </label>

                <fieldset class="border p-2 m-2 rounded grid" id="blockface-offset">
                    <legend class="text-sm font-medium">Blockface Offset</legend>
                    <label class="block">x: <input id="blockface-offsetX" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                    <label class="block">y: <input id="blockface-offsetY" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                    <label class="block">z: <input id="blockface-offsetZ" type="number" value="1" class="w-16 ml-2 bg-gray-700 text-white p-1 rounded" /></label>
                </fieldset>
                </div>
            </div>
        </fieldset>

        <br>
        <br>
        <label><input id="hasInventory" type="checkbox" class="mr-2" />hasInventory</label>
        <fieldset class="border p-2 rounded" id="inv-options">

            <legend class="text-sm font-medium">Inventory</legend>
            <div style="display: grid">

                <label class="block">
                    <span class="text-sm font-medium">lines:</span>
                    <input
                            id="lines"
                            type="range"
                            min="1"
                            max="6"
                            value="1"
                            class="w-full mt-1"
                            oninput="this.nextElementSibling.textContent = this.value"
                    />
                    <span class="ml-2">1</span>
                </label>

                <label>name: <input id="invName" type="text" value="&0Inventory Name" class="bg-gray-700 text-white p-1 rounded ml-2 w-full" /></label>
            </div>
        </fieldset>

        <fieldset class="border p-2 rounded">

            <legend class="text-sm font-medium">Components</legend>
            <div style="display: grid">

                <label class="block">
                    <span class="text-sm font-medium">Max Stack:</span>
                    <input
                            id="maxStack"
                            type="range"
                            min="1"
                            max="64"
                            value="64"
                            class="w-full mt-1"
                            oninput="this.nextElementSibling.textContent = this.value"
                    />
                    <span class="ml-2">64</span>
                </label>
            </div>
        </fieldset>

        <fieldset class="border p-2 rounded space-y-2">
            <legend class="text-sm font-medium">Additional Blocks</legend>
            <div id="additionalBlocks">

            </div>

            <button
                    type="button"
                    class="bg-green-300 text-white px-2 py-1 rounded mt-2"
                    onclick="addAdditionalBlock()"
            >
                ➕
            </button>

        </fieldset>


        <fieldset class="border p-2 rounded">
            <legend class="text-sm font-medium">Sounds</legend>
            <label>place: <input id="soundPlace" type="text" value="minecraft:block.stone.place" class="bg-gray-700 text-white p-1 rounded ml-2 w-full" /></label>
            <label>break: <input id="soundBreak" type="text" value="minecraft:block.stone.break" class="bg-gray-700 text-white p-1 rounded ml-2 w-full" /></label>
            <label>interact: <input id="soundInteract" type="text" value="minecraft:block.stone.ui.button.click" class="bg-gray-700 text-white p-1 rounded ml-2 w-full" /></label>
        </fieldset>


    </div>


    <div class="overflow-y-auto p-4 bg-gray-950 text-green-300 rounded shadow green-scroll">

        <pre id="codeOutput" class="whitespace-pre-wrap"></pre>
    </div>
</div>
<script src="js/script.js"></script>

</body>
</html>

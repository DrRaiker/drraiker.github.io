const examples = {
    "seat": 'name: \'&fWooden Chair\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 2\n' +
        'hasDrop: true\n' +
        'effectiveTool: axe\n' +
        'canPlace:\n' +
        '  up: true\n' +
        'isSeat: true\n' +
        'seat:\n' +
        '  offset:\n' +
        '    x: 0\n' +
        '    y: 0.1\n' +
        '    z: 0\n' +
        '  rotate-by-passenger: false\n' +
        'model:\n' +
        '  id: oak_stairs\n' +
        '  cmd: 0\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: oak_stairs\n' +
        '  itemCmd: 0\n' +
        '  itemColor: \'#ffffff\'\n' +
        '  isRotates: true\n' +
        '  scale:\n' +
        '    x: 1\n' +
        '    y: 1\n' +
        '    z: 1\n' +
        '  rotation:\n' +
        '    yaw: -90\n' +
        '    pitch: 0\n' +
        '  offset:\n' +
        '    x: 0\n' +
        '    y: 0\n' +
        '    z: 0\n' +
        '  45-rotating: true\n' +
        '  itemLore:\n' +
        '  - \'\'\n' +
        'components:\n' +
        '  max_stack_size: 64\n' +
        'sounds:\n' +
        '  place: minecraft:block.stone.place\n' +
        '  break: minecraft:block.stone.break\n' +
        '  interact: minecraft:block.stone.ui.button.click',
    "ore": 'name: \'Example Ore\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 2\n' +
        'effectiveTool: pickaxe\n' +
        'hasDrop: true\n' +
        'requireTool: true\n' +
        'requireToolMaterial: iron\n' +
        'canPlace:\n' +
        '  north: true\n' +
        '  south: true\n' +
        '  west: true\n' +
        '  east: true\n' +
        '  up: true\n' +
        '  down: true\n' +
        'model:\n' +
        '  id: emerald_block\n' +
        '  cmd: 0\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: emerald_block\n' +
        '  itemCmd: 0\n' +
        '  itemColor: \'#ffffff\'\n' +
        '  isRotates: false\n' +
        '  scale:\n' +
        '    x: 1\n' +
        '    y: 1\n' +
        '    z: 1\n' +
        '  rotation:\n' +
        '    yaw: 0\n' +
        '    pitch: 0\n' +
        '  offset:\n' +
        '    x: 0\n' +
        '    y: 0\n' +
        '    z: 0\n' +
        '  itemLore:\n' +
        '  - \'\'\n' +
        'isOre: true\n' +
        'ore:\n' +
        '  height: \n' +
        '    min: -50\n' +
        '    max: 90\n' +
        '  max-blocks-in-vein: 6\n' +
        '  max-veins-in-chunk: 2\n' +
        '  dimension: normal\n' +
        'components:\n' +
        '  max_stack_size: 64\n' +
        'sounds:\n' +
        '  place: minecraft:block.stone.place\n' +
        '  break: minecraft:block.stone.break\n' +
        '  interact: minecraft:block.stone.ui.button.click',
    "close": ''
}
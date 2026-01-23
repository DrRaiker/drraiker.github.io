const examples = {
    "seat": 'name: \'&fStairs Chair\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 2\n' +
        'effectiveTool: axe\n' +
        'hasDrop: true\n' +
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
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: oak_stairs\n' +
        '  itemCmd: \'none\'\n' +
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
        'hasRecipe: true\n' +
        'sounds:\n' +
        '  place: minecraft:block.wood.place\n' +
        '  break: minecraft:block.wood.break\n' +
        '  interact: minecraft:ui.button.click\n' +
        'recipe:\n' +
        '  shape:\n' +
        '  - \'faf\'\n' +
        '  - \' f \'\n' +
        '  ingredients:\n' +
        '    f: \'#minecraft:planks\'\n' +
        '    a: \'stone\'\n' +
        '  amount: 1',
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
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: emerald_block\n' +
        '  itemCmd: \'none\'\n' +
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
        '  interact: minecraft:ui.button.click',
    "painting": 'name: \'Painting\'\n' +
        'baseType: barrier\n' +
        'isSolid: false\n' +
        'nonSolid:\n' +
        '  width: 1\n' +
        '  height: 1\n' +
        '  hitbox-offset:\n' +
        '    x: 0\n' +
        '    y: 0\n' +
        '    z: 0.9\n' +
        '  free-place: false\n' +
        'canDestroy: true\n' +
        'destroy-time: 0\n' +
        'effectiveTool: axe\n' +
        'hasDrop: true\n' +
        'canPlace:\n' +
        '  north: true\n' +
        '  south: true\n' +
        '  west: true\n' +
        '  east: true\n' +
        '  up: true\n' +
        '  down: true\n' +
        'model:\n' +
        '  id: painting\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: painting\n' +
        '  itemCmd: \'none\'\n' +
        '  itemColor: \'#ffffff\'\n' +
        '  isRotates: true\n' +
        '  scale:\n' +
        '    x: 1\n' +
        '    y: 1\n' +
        '    z: 1\n' +
        '  rotation:\n' +
        '    yaw: 0\n' +
        '    pitch: 0\n' +
        '  rotate-by-blockface: true\n' +
        '  blockface-offset:\n' +
        '    x: 0\n' +
        '    y: 0\n' +
        '    z: 0.5\n' +
        '  blockface-binding: north\n' +
        '  itemLore:\n' +
        '  - \'\'\n' +
        'components:\n' +
        '  max_stack_size: 64\n' +
        'sounds:\n' +
        '  place: minecraft:entity.painting.place\n' +
        '  break: minecraft:entity.painting.break\n' +
        '  interact: minecraft:ui.button.click',
    "hanging_drawer": 'name: \'Hanging Drawer\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 3\n' +
        'effectiveTool: axe\n' +
        'hasDrop: true\n' +
        'canPlace:\n' +
        '  north: true\n' +
        '  south: true\n' +
        '  west: true\n' +
        '  east: true\n' +
        '  up: true\n' +
        '  down: true\n' +
        'model:\n' +
        '  id: barrel\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#000000\'\n' +
        '  itemId: barrel\n' +
        '  itemCmd: \'none\'\n' +
        '  itemColor: \'#000000\'\n' +
        '  isRotates: true\n' +
        '  scale:\n' +
        '    x: 1\n' +
        '    y: 0.7\n' +
        '    z: 0.7\n' +
        '  rotation:\n' +
        '    yaw: 0\n' +
        '    pitch: 0\n' +
        '  rotate-by-blockface: true\n' +
        '  blockface-offset:\n' +
        '    x: 0\n' +
        '    y: 0\n' +
        '    z: 0.15\n' +
        '  blockface-binding: down\n' +
        '  itemLore:\n' +
        '  - \'\'\n' +
        'hasInventory: true\n' +
        'inventory:\n' +
        '  lines: 2\n' +
        '  name: \'&rDrawer\'\n' +
        'components:\n' +
        '  max_stack_size: 64\n' +
        'hasRecipe: true\n' +
        'sounds:\n' +
        '  place: minecraft:block.wood.place\n' +
        '  break: minecraft:block.wood.break\n' +
        '  interact: minecraft:block.barrel.open\n' +
        'recipe:\n' +
        '  shape:\n' +
        '  - \'sss\'\n' +
        '  - \'p p\'\n' +
        '  - \'ooo\'\n' +
        '  ingredients:\n' +
        '    s: \'#minecraft:wooden_slabs\'\n' +
        '    p: \'#minecraft:planks\'\n' +
        '    o: \'stone\'\n' +
        '  amount: 1',
    "drawer": 'name: \'Drawer\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 3\n' +
        'effectiveTool: axe\n' +
        'hasDrop: true\n' +
        'canPlace:\n' +
        '  north: true\n' +
        '  south: true\n' +
        '  west: true\n' +
        '  east: true\n' +
        '  up: true\n' +
        '  down: true\n' +
        'model:\n' +
        '  id: barrel\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#000000\'\n' +
        '  itemId: barrel\n' +
        '  itemCmd: \'none\'\n' +
        '  itemColor: \'#000000\'\n' +
        '  isRotates: true\n' +
        '  scale:\n' +
        '    x: 0.7\n' +
        '    y: 0.7\n' +
        '    z: 0.7\n' +
        '  rotation:\n' +
        '    yaw: 180\n' +
        '    pitch: 0\n' +
        '  offset:\n' +
        '    x: 0\n' +
        '    y: -0.15\n' +
        '    z: 0\n' +
        '  itemLore:\n' +
        '  - \'\'\n' +
        'hasInventory: true\n' +
        'inventory:\n' +
        '  lines: 2\n' +
        '  name: \'&rDrawer\'\n' +
        'components:\n' +
        '  max_stack_size: 64\n' +
        'hasRecipe: true\n' +
        'sounds:\n' +
        '  place: minecraft:block.wood.place\n' +
        '  break: minecraft:block.wood.break\n' +
        '  interact: minecraft:block.barrel.open\n' +
        'recipe:\n' +
        '  shape:\n' +
        '  - \'sss\'\n' +
        '  - \'o o\'\n' +
        '  - \'ooo\'\n' +
        '  ingredients:\n' +
        '    s: \'#minecraft:wooden_slabs\'\n' +
        '    o: stone\n' +
        '  amount: 1',
    "flowerFree": 'name: \'Flower &7(Free place)\'\n' +
        'baseType: barrier\n' +
        'isSolid: false\n' +
        'nonSolid:\n' +
        '  width: 0.3\n' +
        '  height: 0.7\n' +
        '  hitbox-offset:\n' +
        '    x: 0\n' +
        '    y: 0\n' +
        '    z: 0\n' +
        '  free-place: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 2\n' +
        'effectiveTool: hoe\n' +
        'hasDrop: true\n' +
        'canPlace:\n' +
        '  up: true\n' +
        'model:\n' +
        '  id: poppy\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: poppy\n' +
        '  itemCmd: \'none\'\n' +
        '  itemColor: \'#ffffff\'\n' +
        '  isRotates: true\n' +
        '  scale:\n' +
        '    x: 1\n' +
        '    y: 1\n' +
        '    z: 1\n' +
        '  rotation:\n' +
        '    yaw: 0\n' +
        '    pitch: 0\n' +
        '  offset:\n' +
        '    x: 0\n' +
        '    y: 0.5\n' +
        '    z: 0\n' +
        '  free-rotating: true\n' +
        '  itemLore:\n' +
        '  - \'\'\n' +
        'components:\n' +
        '  max_stack_size: 16\n' +
        'sounds:\n' +
        '  place: minecraft:block.grass.place\n' +
        '  break: minecraft:block.grass.break\n' +
        '  interact: minecraft:ui.button.click',
    "flower": 'name: \'Flower\'\n' +
        'baseType: barrier\n' +
        'isSolid: false\n' +
        'nonSolid:\n' +
        '  width: 0.3\n' +
        '  height: 0.7\n' +
        '  hitbox-offset:\n' +
        '    x: 0\n' +
        '    y: 0\n' +
        '    z: 0\n' +
        '  free-place: false\n' +
        'canDestroy: true\n' +
        'destroy-time: 2\n' +
        'effectiveTool: hoe\n' +
        'hasDrop: true\n' +
        'canPlace:\n' +
        '  up: true\n' +
        'model:\n' +
        '  id: poppy\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: poppy\n' +
        '  itemCmd: \'none\'\n' +
        '  itemColor: \'#ffffff\'\n' +
        '  isRotates: true\n' +
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
        '  free-rotating: false\n' +
        '  itemLore:\n' +
        '  - \'\'\n' +
        'components:\n' +
        '  max_stack_size: 16\n' +
        'sounds:\n' +
        '  place: minecraft:block.grass.place\n' +
        '  break: minecraft:block.grass.break\n' +
        '  interact: minecraft:ui.button.click',
    "triple_chair": 'name: \'Triple Stairs Chair\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 2\n' +
        'effectiveTool: axe\n' +
        'hasDrop: true\n' +
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
        '  id: acacia_stairs\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: acacia_stairs\n' +
        '  itemCmd: \'none\'\n' +
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
        '  itemLore:\n' +
        '  - \'\'\n' +
        'components:\n' +
        '  max_stack_size: 64\n' +
        'sounds:\n' +
        '  place: minecraft:block.wood.place\n' +
        '  break: minecraft:block.wood.break\n' +
        '  interact: minecraft:ui.button.click\n' +
        'additional-blocks:\n' +
        '  \'1\':\n' +
        '    id: triple_chair_part\n' +
        '    position: -1 0 0\n' +
        '  \'2\':\n' +
        '    id: triple_chair_part\n' +
        '    position: 1 0 0',
    "triple_chair_part": 'name: \'triple_chair_part\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: true\n' +
        'destroy-time: 2\n' +
        'effectiveTool: axe\n' +
        'hasDrop: true\n' +
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
        '  id: acacia_stairs\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: acacia_stairs\n' +
        '  itemCmd: \'none\'\n' +
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
        '  itemLore:\n' +
        '  - \'\'\n' +
        'components:\n' +
        '  max_stack_size: 64\n' +
        'sounds:\n' +
        '  place: minecraft:block.wood.place\n' +
        '  break: minecraft:block.wood.break\n' +
        '  interact: minecraft:ui.button.click',
    "hat": 'name: \'Hat\'\n' +
        'baseType: barrier\n' +
        'isSolid: true\n' +
        'canDestroy: false\n' +
        'hasDrop: true\n' +
        'model:\n' +
        '  id: melon\n' +
        '  cmd: \'none\'\n' +
        '  color: \'#ffffff\'\n' +
        '  itemId: melon\n' +
        '  itemCmd: \'none\'\n' +
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
        '  isHat: true\n' +
        'components:\n' +
        '  max_stack_size: 1\n' +
        'sounds:\n' +
        '  place: minecraft:block.stone.place\n' +
        '  break: minecraft:block.stone.break\n' +
        '  interact: minecraft:ui.button.click',
    "close": ''
}
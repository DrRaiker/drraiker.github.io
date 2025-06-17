
function generateCode() {
    const get = id => document.getElementById(id);
    const bool = id => get(id).checked;
    const val = id => get(id)?.value;
    const num = id => Number(val(id)) || 0;

    let yaml = `name: '${val('name') || '&fТест'}'
baseType: ${val('baseType') || 'barrier'}
isSolid: ${bool('isSolid')}
${!bool('isSolid') ? `
nonSolid:
  width: ${num('nonSolidWidth')}
  height: ${num('nonSolidHeight')}
  hitbox-offset:
    x: ${num('hitboxX')}
    y: ${num('hitboxY')}
    z: ${num('hitboxZ')}
  free-place: ${bool('freePlace')}` : ''}
canDestroy: ${bool('canDestroy')}
${bool('canDestroy') ? `
destroy-time: ${num('destroyTime')}
hasDrop: ${bool('hasDrop')}
effectiveTool: ${val('effectiveTool') || 'pickaxe'}` : ''}

${bool('placeNorth') || bool('placeSouth') || bool('placeWest') || bool('placeEast') || bool('placeUp') || bool('placeDown') ? `
canPlace:
${bool('placeNorth') ? `  north: ${bool('placeNorth')}` : ''}${bool('placeSouth') ? `
  south: ${bool('placeSouth')}` : ''}${bool('placeWest') ? `
  west: ${bool('placeWest')}` : ''}${bool('placeEast') ? `
  east: ${bool('placeEast')}` : ''}${bool('placeUp') ? `
  up: ${bool('placeUp')}` : ''}${bool('placeDown') ? `
  down: ${bool('placeDown')}` : ''}` : ''}


isSeat: ${bool('isSeat')}
${bool('isSeat') ? `
seat:
  offset:
    x: ${num('seatX')}
    y: ${num('seatY')}
    z: ${num('seatZ')}
  rotate-by-passenger: ${bool('rotateByPassenger')}
` : ''}
model:
  id: ${val('modelId') || 'gold_ingot'}
  cmd: ${num('modelCmd')}
  color: '${val('modelColor') || '#FFFFFF'}'
  itemId: ${val('itemId') || 'stick'}
  itemCmd: ${num('itemCmd')}
  itemColor: '${val('itemColor') || '#FFFFFF'}'
  isRotates: ${bool('isRotates')}
  scale:
    x: ${num('scaleX')}
    y: ${num('scaleY')}
    z: ${num('scaleZ')}
  rotation:
    yaw: ${num('yaw')}
    pitch: ${num('pitch')}${!bool('rotateByBlockface') ? `
  offset:
    x: ${num('offsetX')}
    y: ${num('offsetY')}
    z: ${num('offsetZ')}` : ''}
    
${bool('rotateByBlockface') ? `
  rotate-by-blockface: ${bool('rotateByBlockface')}
  blockface-offset:
    x: ${num('blockface-offsetX')}
    y: ${num('blockface-offsetY')}
    z: ${num('blockface-offsetZ')}` : ''}${bool('rotate45') ? `
  45-rotating: ${bool('rotate45')}` : ''}${bool('freeRotating') ? `
  free-rotating: ${bool('freeRotating')}` : ''}${bool('rotateByBlockface') ? `
  blockface-binding: ${val('blockfaceBinding') || 'down'}` : ''}
  itemLore:
${(val('itemLore') || ' ').split('\\n').map(i => `  - '${i.trim()}\'`).join('\n')}
${bool('isHat') ? `
  isHat: ${bool('isHat')}` : ''}
${bool('hasInventory') ? `
hasInventory: ${bool('hasInventory')}
inventory:
  lines: ${num('lines')}
  name: '${val('invName')}'` : ''}
components:
  max_stack_size: ${num('maxStack')}
sounds:
  place: ${val('soundPlace') || 'minecraft:block.stone.place'}
  break: ${val('soundBreak') || 'minecraft:block.stone.break'}
  interact: ${val('soundInteract') || 'minecraft:block.stone.ui.button.click'}`;

    const additionalBlocks = [...document.querySelectorAll('#additionalBlocks > div')].map((div, i) => {
        const id = div.querySelector('.id').value || 'none';
        const x = div.querySelector('.x').value || 0;
        const y = div.querySelector('.y').value || 0;
        const z = div.querySelector('.z').value || 0;
        return `  '${i + 1}':\n    id: ${id}\n    position: ${x} ${y} ${z}`;
    }).join('\n');

    yaml += `\nadditional-blocks:\n${additionalBlocks || "  '1':\n    id: none\n    position: 0 1 0"}`;

    get('codeOutput').textContent = yaml;
}

function setupAutoUpdate() {
    const allInputs = document.querySelectorAll(
        'input, select, textarea'
    );
    allInputs.forEach(el => {
        const eventType = el.tagName === 'SELECT' ? 'change' : 'input';
        el.addEventListener(eventType, generateCode);
    });
}

function toggleOptions(elstr, arr, negative = false) {
    let enabled = document.getElementById(elstr).checked;

    if (negative) {
        enabled = !enabled
    }

    arr.forEach(id => {
        const el = document.getElementById(id)
        if (enabled) {
            el.style.display = "block"
        } else {
            el.style.display = "none"
        }
    });
}

let additionalBlockIndex = 1;

function addAdditionalBlock(idValue = '', x = 0, y = 1, z = 0) {
    const container = document.getElementById("additionalBlocks");

    const blockWrapper = document.createElement("div");
    blockWrapper.className = "flex flex-wrap items-center gap-2";
    blockWrapper.dataset.index = additionalBlockIndex;

    blockWrapper.innerHTML = `
<div class="m-1">
    <span class="text-sm font-medium">#${additionalBlockIndex}</span>
    <input type="text" placeholder="id" class="id bg-gray-700 text-white p-1 rounded" value="${idValue}" />
    <input type="number" class="x w-16 bg-gray-700 text-white p-1 rounded" value="${x}" />
    <input type="number" class="y w-16 bg-gray-700 text-white p-1 rounded" value="${y}" />
    <input type="number" class="z w-16 bg-gray-700 text-white p-1 rounded" value="${z}" />
    <button type="button" class="text-red-400 hover:text-red-600" onclick="this.parentElement.remove(); generateCode()">✖</button>
    </div>
  `;

    // Обновлять YAML при изменении любого поля
    blockWrapper.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", generateCode);
    });

    container.appendChild(blockWrapper);
    additionalBlockIndex++;
}


window.onload = () => {
    generateCode();

    toggleOptions('isRotates', ['rotate-options']);
    toggleOptions('isSeat', ['seat-options']);
    toggleOptions('isSolid', ['solid-options'], true);
    toggleOptions('canDestroy', ["destroy-options"]);
    toggleOptions('rotateByBlockface', ["binding"]);
    toggleOptions('hasInventory', ["inv-options"]);
    setupAutoUpdate()

    document.getElementById('isRotates').addEventListener('change', () => {
        toggleOptions('isRotates', ['rotate-options']);
        generateCode();
    });

    document.getElementById('isSeat').addEventListener('change', () => {
        toggleOptions('isSeat', ['seat-options']);
        generateCode();
    });

    document.getElementById('isSolid').addEventListener('change', () => {
        toggleOptions('isSolid', ['solid-options'], true);
        generateCode();
    });


    document.getElementById('canDestroy').addEventListener('change', () => {
        toggleOptions('canDestroy', ["destroy-options"]);
        generateCode();
    });

    document.getElementById('rotateByBlockface').addEventListener('change', () => {
        toggleOptions('rotateByBlockface', ["binding"]);
        toggleOptions('rotateByBlockface', ["offset"], true);
        generateCode();
    });
    document.getElementById('hasInventory').addEventListener('change', () => {
        toggleOptions('hasInventory', ["inv-options"]);
        generateCode();
    });


};

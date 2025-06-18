
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
${bool('hasClickCommands') ? `hasClickCommands: true` : ''}
${bool('hasRecipe') ? `hasRecipe: true` : ''}
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

    if (bool('hasClickCommands')) {
        const commandInputs = [...document.querySelectorAll('.commandInput')]
            .map(input => input.value.trim())
            .filter(cmd => cmd !== '');

        if (commandInputs.length > 0) {
            yaml += `\nclickCommands:\n${commandInputs.map(cmd => `- ${cmd}`).join('\n')}`;
        }
    }

    if (bool('hasRecipe')) {
        let shape = [];
        for (let i = 0; i < 3; i++) {
            const row = symbolInputs.slice(i * 3, i * 3 + 3).map(input => input.value || ' ').join('');
            shape.push(`${row}`);
        }

        const ingredientsYAML = [];
        ingredientFields.forEach((wrapper, symbol) => {
            const value = wrapper.querySelector("input").value || "air";
            ingredientsYAML.push(`    ${symbol}: ${value}`);
        });

        let startIndex = 5
        let endIndex = 0

        for (let j = 0; j < shape.length; j++) {
            const str = shape[j]

            for (let i = 0; i < str.length; i++) {
                if (str[i] !== " ") {
                    startIndex = Math.min(startIndex, i)
                }
            }
        }

        for (let j = 0; j < shape.length; j++) {
            const str = shape[j]

            for (let i = 2; i > 0; i--) {
                if (str[i] !== " ") {
                    endIndex = Math.max(endIndex, i)
                }
            }
        }

        if (shape[0] === "   ") {
            shape.shift()
        }
        if (shape[0] === "   " && shape.length === 2) {
            shape.shift()
        }


        if (shape[2] === "   ") {
            shape.pop()
        }
        if (shape[1] === "   " && shape.length === 2) {
            shape.pop()
        }

        for (let j = 0; j < shape.length; j++) {

            shape[j] = `  - '${shape[j].slice(startIndex, endIndex + 1)}'`

        }


        yaml += `
recipe:
  shape:
${shape.join('\n')}
  ingredients:
${ingredientsYAML.join('\n')}
`
    }

    yaml = yaml.split('\n')
        .filter(line => line.trim() !== '')
        .join('\n');

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

const grid = document.getElementById("shapeGrid");
const ingredientsContainer = document.getElementById("ingredientsFields");
const symbolInputs = [];
const ingredientFields = new Map(); // symbol -> DOM element

// Создаём 9 input-полей
for (let i = 0; i < 9; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.className = "bg-gray-700 text-white p-2 text-center rounded w-12 h-12 symbol-input";
    symbolInputs.push(input);

    input.addEventListener("input", () => {
        updateIngredientFields();
    });

    grid.appendChild(input);
}

function updateIngredientFields() {
    const symbols = symbolInputs
        .map(i => i.value.trim())
        .filter(s => s !== '');

    const uniqueSymbols = new Set(symbols);

    uniqueSymbols.forEach(symbol => {
        if (!ingredientFields.has(symbol)) {
            addIngredientField(symbol);
        }
    });

    [...ingredientFields.keys()].forEach(symbol => {
        if (!uniqueSymbols.has(symbol)) {
            const el = ingredientFields.get(symbol);
            el.remove();
            ingredientFields.delete(symbol);
        }
    });
}

function addIngredientField(symbol) {
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center mb-2";
    wrapper.dataset.symbol = symbol;

    const label = document.createElement("span");
    label.textContent = `${symbol} :`;
    label.className = "w-6";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Spigot material or minecraft tag";
    input.className = "bg-gray-700 text-white p-1 rounded ml-2 w-full";

    // ВАЖНО: обновляем YAML при вводе
    input.addEventListener("input", generateCode);

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    ingredientsContainer.appendChild(wrapper);

    ingredientFields.set(symbol, wrapper);
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

function addClickCommand(value = '') {
    const container = document.getElementById("clickCommandsContainer");

    const div = document.createElement("div");
    div.className = "flex gap-2 items-center";

    div.innerHTML = `
    <input type="text" class="commandInput bg-gray-700 text-white p-1 m-1 rounded w-full" value="${value}" />
    <button type="button" class="text-red-400 hover:text-red-600" onclick="this.parentElement.remove(); generateCode()">✖</button>
  `;

    div.querySelector("input").addEventListener("input", generateCode);
    container.appendChild(div);
}


let additionalBlockIndex = 1;
function addAdditionalBlock(idValue = '', x = 0, y = 1, z = 0) {
    const container = document.getElementById("additionalBlocks");

    const blockWrapper = document.createElement("div");
    blockWrapper.className = "flex flex-wrap items-center gap-2";
    blockWrapper.dataset.index = additionalBlockIndex;

    blockWrapper.innerHTML = `
<div class="m-1">
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

function copyToClipboard() {
    const text = document.getElementById("codeOutput").textContent;

    navigator.clipboard.writeText(text).then(() => {
        alert("Скопировано в буфер обмена!\nВставьте этот текст в MeowFurniture/blocks/your_block.yml");
    }).catch(err => {
        alert("Ошибка копирования: " + err);
    });
}


window.onload = () => {
    addClickCommand('say %player_name% clicked on the block'); // Значение по умолчанию
    generateCode();

    toggleOptions('isRotates', ['rotate-options']);
    toggleOptions('isSeat', ['seat-options']);
    toggleOptions('isSolid', ['solid-options'], true);
    toggleOptions('canDestroy', ["destroy-options"]);
    toggleOptions('rotateByBlockface', ["binding"]);
    toggleOptions('hasInventory', ["inv-options"]);
    toggleOptions('hasClickCommands', ["clickCommands"]);
    toggleOptions('hasRecipe', ["recipe-options"]);
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
    document.getElementById('hasClickCommands').addEventListener('change', () => {
        toggleOptions('hasClickCommands', ["clickCommands"]);
        generateCode();
    });
    document.getElementById('hasRecipe').addEventListener('change', () => {
        toggleOptions('hasRecipe', ["recipe-options"]);
        generateCode();
    });


};


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
effectiveTool: ${val('effectiveTool') || 'pickaxe'}` : ''}
${bool('hasDrop') ? `
hasDrop: ${bool('hasDrop')}
${bool('requireTool') ? `
requireTool: ${bool('requireTool')}
requireToolMaterial: ${val('effectiveMaterial') || 'wooden'}
` : ''}
` : ''}
${bool('placeNorth') || bool('placeSouth') || bool('placeWest') || bool('placeEast') || bool('placeUp') || bool('placeDown') ? `
canPlace:
${bool('placeNorth') ? `  north: ${bool('placeNorth')}` : ''}${bool('placeSouth') ? `
  south: ${bool('placeSouth')}` : ''}${bool('placeWest') ? `
  west: ${bool('placeWest')}` : ''}${bool('placeEast') ? `
  east: ${bool('placeEast')}` : ''}${bool('placeUp') ? `
  up: ${bool('placeUp')}` : ''}${bool('placeDown') ? `
  down: ${bool('placeDown')}` : ''}` : ''}


${bool('isSeat') ? `
isSeat: ${bool('isSeat')}
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

${bool('isOre') ? `
isOre: ${bool('isOre')}
ore:
  height: 
    min: ${num('minHeight')}
    max: ${num('maxHeight')}
  max-blocks-in-vein: ${num('maxBlocks')}
  max-veins-in-chunk: ${num('maxVeins')}
  dimension: ${val('dimension')}
  
  ` : ''}
  
${bool('hasInventory') ? `
hasInventory: ${bool('hasInventory')}
inventory:
  lines: ${num('lines')}
  name: '${val('invName')}'` : ''}
components:
  max_stack_size: ${num('maxStack')}
  ${bool('isHat') ? `
  camera_overlay: '${val('overlay')}'
` : ''}

  
${bool('hasRecipe') ? `hasRecipe: true` : ''}
sounds:
  place: ${val('soundPlace') || 'minecraft:block.stone.place'}
  break: ${val('soundBreak') || 'minecraft:block.stone.break'}
  interact: ${val('soundInteract') || 'minecraft:ui.button.click'}`;

    const additionalBlocks = [...document.querySelectorAll('#additionalBlocks > div')].map((div, i) => {
        const id = div.querySelector('.id').value || 'none';
        const x = div.querySelector('.x').value || 0;
        const y = div.querySelector('.y').value || 0;
        const z = div.querySelector('.z').value || 0;
        return `  '${i + 1}':\n    id: ${id}\n    position: ${x} ${y} ${z}`;
    }).join('\n');

    if (additionalBlocks.length !== 0 && additionalBlocks !== "  '1':\n    id: none\n    position: 0 1 0") {

        yaml += `\nadditional-blocks:\n${additionalBlocks || "  '1':\n    id: none\n    position: 0 1 0"}`;
    }
    if (bool('hasClickCommands')) {
        yaml += '\nhasClickCommands: true'
        const commandInputs = [...document.querySelectorAll('.commandInput')]
            .map(input => input.value.trim())
            .filter(cmd => cmd !== '');

        if (commandInputs.length > 0) {
            yaml += `\nclickCommands:\n${commandInputs.map(cmd => `- ${cmd}`).join('\n')}`;
        }
    }
    if (bool('hasPlaceCommands')) {
        yaml += '\nhasPlaceCommands: true'
        const commandInputs = [...document.querySelectorAll('.commandPlaceInput')]
            .map(input => input.value.trim())
            .filter(cmd => cmd !== '');

        if (commandInputs.length > 0) {
            yaml += `\nplaceCommands:\n${commandInputs.map(cmd => `- ${cmd}`).join('\n')}`;
        }
    }
    if (bool('hasBreakCommands')) {
        yaml += '\nhasBreakCommands: true'
        const commandInputs = [...document.querySelectorAll('.commandBreakInput')]
            .map(input => input.value.trim())
            .filter(cmd => cmd !== '');

        if (commandInputs.length > 0) {
            yaml += `\nbreakCommands:\n${commandInputs.map(cmd => `- ${cmd}`).join('\n')}`;
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
            ingredientsYAML.push(`    ${symbol}: '${value}'`);
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
  amount: ${val('amount')}`
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
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "gridSymbol_" + row + "_" + col;
        input.maxLength = 1;
        input.className = "bg-gray-700 text-white p-2 text-center rounded w-12 h-12 symbol-input";
        symbolInputs.push(input);

        input.addEventListener("input", () => {
            updateIngredientFields();
        });

        grid.appendChild(input);
    }
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

function addIngredientField(symbol, value = '') {
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
    input.value = value;

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


function addClickCommand(id, value = '') {
    const container = document.getElementById(id);

    const div = document.createElement("div");
    div.className = "flex gap-2 items-center";

    inp = "commandInput"

    if (id === "breakCommandsContainer") {
        inp = "commandBreakInput"
    } else if (id === "placeCommandsContainer") {
        inp = "commandPlaceInput"
    }

    div.innerHTML = `
    <input type="text" class="${inp} bg-gray-700 text-white p-1 m-1 rounded w-full" value="${value}" />
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

function hidePopup() {
    const box = document.getElementById('popup');
    box.style.opacity = '0';
    box.style.transform = 'translate(-50%, -50%) scale(1)';
    box.addEventListener('transitionend', function handler() {
        box.style.display = 'none';
        box.removeEventListener('transitionend', handler);
    });
}

function showPopup() {
    const box = document.getElementById('popup');
    box.style.display = 'block';
    box.style.transform = 'translate(-50%, -50%) scale(1.1)';
    requestAnimationFrame(() => {
        box.style.transform = 'translate(-50%, -50%) scale(1.1)';
        box.style.opacity = '1';
    });
}

function copyToClipboard() {
    const text = document.getElementById("codeOutput").textContent;

    navigator.clipboard.writeText(text).then(() => {
        showPopup()
    }).catch(err => {
        alert("Ошибка копирования: " + err);
    });
}

function toggleYamlImport() {
    const box = document.getElementById('yamlImportBox');
    box.classList.toggle('hidden');
}

function toggleExamples() {
    const box = document.getElementById('examplesBox');
    box.classList.toggle('hidden');
}

function loadExample(name) {
    document.getElementById('examplesBox').classList.add('hidden');
    applyYaml(examples[name])


}

function importYaml() {
    let text = document.getElementById('yamlInput').value
    applyYaml(text)
    document.getElementById('yamlImportBox').classList.add('hidden');
}
function applyYaml(text) {
    try {

        const data = jsyaml.load(text);

        document.getElementById('name').value = data.name;
        document.getElementById('baseType').value = data.baseType;

        document.getElementById('isSolid').checked = data.isSolid ?? false;
        document.getElementById('isSolid').dispatchEvent(new Event("change"));

        document.getElementById('nonSolidWidth').value = data.nonSolid?.width ?? 1;
        document.getElementById('nonSolidHeight').value = data.nonSolid?.height ?? 1;

        document.getElementById('hitboxX').value = data.nonSolid?.['hitbox-offset']?.x ?? 0;
        document.getElementById('hitboxY').value = data.nonSolid?.['hitbox-offset']?.y ?? 0;
        document.getElementById('hitboxZ').value = data.nonSolid?.['hitbox-offset']?.z ?? 0;

        document.getElementById('freePlace').checked = data.nonSolid?.['free-place'] ?? false;
        document.getElementById('freePlace').dispatchEvent(new Event("change"));

        document.getElementById('canDestroy').checked = data.canDestroy ?? true;
        document.getElementById('canDestroy').dispatchEvent(new Event("change"));

        document.getElementById('hasDrop').checked = data.hasDrop ?? true;
        document.getElementById('hasDrop').dispatchEvent(new Event("change"));

        document.getElementById('requireTool').checked = data.requireTool ?? false;
        document.getElementById('requireTool').dispatchEvent(new Event("change"));

        document.getElementById('effectiveMaterial').value = data.requireToolMaterial ?? "wooden";

        document.getElementById('destroyTime').value = data?.['destroy-time'] ?? 1;

        document.getElementById('effectiveTool').value = data?.effectiveTool ?? 'pickaxe';

        document.getElementById('itemLore').value = (data.model?.itemLore ?? '').join("\\n");

        document.getElementById('isOre').checked = data.isOre ?? false;
        document.getElementById('isOre').dispatchEvent(new Event("change"));
        document.getElementById('minHeight').value = data.ore?.height?.min ?? -64;
        document.getElementById('maxHeight').value = data.ore?.height?.max ?? 120;
        document.getElementById('maxBlocks').value = data.ore?.['max-blocks-in-vein'] ?? 10;
        document.getElementById('maxVeins').value = data.ore?.['max-veins-in-chunk'] ?? 3;
        document.getElementById('dimension').value = data.ore?.dimension ?? "normal";

        document.getElementById('isSeat').checked = data.isSeat ?? false;
        document.getElementById('isSeat').dispatchEvent(new Event("change"));

        document.getElementById('seatX').value = data.seat?.offset?.x ?? 0;
        document.getElementById('seatY').value = data.seat?.offset?.y ?? 0;
        document.getElementById('seatZ').value = data.seat?.offset?.z ?? 0;

        document.getElementById('rotateByPassenger').checked = data.seat?.['rotate-by-passenger'] ?? true;
        document.getElementById('rotateByPassenger').dispatchEvent(new Event("change"));

        document.getElementById('placeNorth').checked = data?.canPlace?.north ?? false;
        document.getElementById('placeSouth').checked = data?.canPlace?.south ?? false;
        document.getElementById('placeWest').checked = data?.canPlace?.west ?? false;
        document.getElementById('placeEast').checked = data?.canPlace?.east ?? false;
        document.getElementById('placeUp').checked = data?.canPlace?.up ?? false;
        document.getElementById('placeDown').checked = data?.canPlace?.down ?? false;


        document.getElementById('modelId').value = data.model?.id;
        document.getElementById('modelCmd').value = data.model?.cmd;
        document.getElementById('modelColor').value = data.model?.color;

        document.getElementById('itemId').value = data.model?.itemId;
        document.getElementById('itemCmd').value = data.model?.itemCmd;
        document.getElementById('itemColor').value = data.model?.itemColor;


        document.getElementById('scaleX').value = data.model?.scale?.x ?? 1;
        document.getElementById('scaleY').value = data.model?.scale?.y ?? 1;
        document.getElementById('scaleZ').value = data.model?.scale?.z ?? 1;

        document.getElementById('offsetX').value = data.model?.offset?.x ?? 1;
        document.getElementById('offsetY').value = data.model?.offset?.y ?? 1;
        document.getElementById('offsetZ').value = data.model?.offset?.z ?? 1;

        document.getElementById('yaw').value = data.model?.rotation?.yaw ?? 0;
        document.getElementById('pitch').value = data.model?.rotation?.pitch ?? 0;


        document.getElementById('isRotates').checked = data.model?.isRotates ?? false;
        document.getElementById('isRotates').dispatchEvent(new Event("change"));

        document.getElementById('rotate45').checked = data.model?.['45-rotating'] ?? false;
        document.getElementById('rotate45').dispatchEvent(new Event("change"));

        document.getElementById('freeRotating').checked = data.model?.['free-rotating'] ?? false;
        document.getElementById('freeRotating').dispatchEvent(new Event("change"));

        document.getElementById('rotateByBlockface').checked = data.model?.['rotate-by-blockface'] ?? false;
        document.getElementById('rotateByBlockface').dispatchEvent(new Event("change"));


        document.getElementById('blockfaceBinding').value = data.model?.['blockface-binding'] ?? 'down';


        document.getElementById('blockface-offsetX').value = data.model?.['blockface-offset']?.x ?? 0;
        document.getElementById('blockface-offsetY').value = data.model?.['blockface-offset']?.y ?? 0;
        document.getElementById('blockface-offsetZ').value = data.model?.['blockface-offset']?.z ?? 0;


        document.getElementById('hasInventory').checked = data.hasInventory ?? false;
        document.getElementById('hasInventory').dispatchEvent(new Event("change"));

        document.getElementById('lines-span').innerHTML = data.inventory?.lines ?? 1;
        document.getElementById('lines').value = data.inventory?.lines ?? 1;
        document.getElementById('invName').value = data.inventory?.name ?? "Inventory Name";


        document.getElementById('isHat').checked = data.model?.isHat ?? false;
        document.getElementById('isHat').dispatchEvent(new Event("change"));

        document.getElementById('overlay').value = data?.components?.['camera_overlay'] ?? "";

        document.getElementById('maxStack').value = data?.components?.['max_stack_size'] ?? 64;
        document.getElementById('max-stack-span').innerHTML = data?.components?.['max_stack_size'] ?? 64;

        document.getElementById('additionalBlocks').innerHTML = '';


        if (data['additional-blocks']) {
            for (const key in data['additional-blocks']) {
                const block = data['additional-blocks'][key];
                const [x, y, z] = block.position?.split(' ').map(Number) || [0, 1, 0];
                addAdditionalBlock(block.id || '', x, y, z);
            }
        }


        document.getElementById('hasClickCommands').checked = data.hasClickCommands ?? false;
        document.getElementById('hasClickCommands').dispatchEvent(new Event("change"));


        document.getElementById('clickCommandsContainer').innerHTML = '';

        if (data['clickCommands']) {
            for (const key in data['clickCommands']) {
                const block = data['clickCommands'][key];
                addClickCommand("clickCommandsContainer",block);
            }
        }

        document.getElementById('hasPlaceCommands').checked = data.hasPlaceCommands ?? false;
        document.getElementById('hasPlaceCommands').dispatchEvent(new Event("change"));


        document.getElementById('placeCommandsContainer').innerHTML = '';

        if (data['placeCommands']) {
            for (const key in data['placeCommands']) {
                const block = data['placeCommands'][key];
                addClickCommand("placeCommandsContainer",block);
            }
        }

        document.getElementById('hasBreakCommands').checked = data.hasBreakCommands ?? false;
        document.getElementById('hasBreakCommands').dispatchEvent(new Event("change"));


        document.getElementById('breakCommandsContainer').innerHTML = '';

        if (data['breakCommands']) {
            for (const key in data['breakCommands']) {
                const block = data['breakCommands'][key];
                addClickCommand("breakCommandsContainer",block);
            }
        }

        document.getElementById('hasRecipe').checked = data.hasRecipe ?? false;
        document.getElementById('hasRecipe').dispatchEvent(new Event("change"));

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                document.getElementById('gridSymbol_' + row + "_" + col).value = '';
            }
        }

        ingredientsContainer.innerHTML = '';

        if (data.hasRecipe ?? false) {

            if (data.recipe && Array.isArray(data.recipe.shape)) {
                data.recipe.shape.forEach((row, rowIndex) => {

                    for (let colIndex = 0; colIndex < row.length; colIndex++) {
                        const symbol = row[colIndex];
                        document.getElementById('gridSymbol_' + rowIndex + "_" + colIndex).value = symbol ?? '';
                    }
                });
            }

            for (const [symbol, value] of Object.entries(data.recipe?.ingredients)) {
                addIngredientField(symbol, value);
            }

            document.getElementById('amount').value = data.recipe?.amount ?? 1;
        }

        document.getElementById('soundPlace').value = data.sounds?.place ?? "minecraft:block.stone.place";
        document.getElementById('soundBreak').value = data.sounds?.break ?? "minecraft:block.stone.break";
        document.getElementById('soundInteract').value = data.sounds?.interact ?? "minecraft:ui.button.click";


        generateCode();

    } catch (err) {}
}
window.onload = () => {

    addClickCommand("clickCommandsContainer", 'say %player_name% clicked on the block %block_x% %block_y% %block_z%');
    addClickCommand("placeCommandsContainer", 'say %player_name% place the block %block_x% %block_y% %block_z%');
    addClickCommand("breakCommandsContainer", 'say %player_name% break the block %block_x% %block_y% %block_z%');
    generateCode();

    toggleOptions('isRotates', ['rotate-options']);
    toggleOptions('isSeat', ['seat-options']);
    toggleOptions('isSolid', ['solid-options'], true);
    toggleOptions('canDestroy', ["destroy-options"]);
    toggleOptions('rotateByBlockface', ["binding"]);
    toggleOptions('hasInventory', ["inv-options"]);
    toggleOptions('hasClickCommands', ["clickCommands"]);
    toggleOptions('hasPlaceCommands', ["placeCommands"]);
    toggleOptions('hasBreakCommands', ["breakCommands"]);
    toggleOptions('hasRecipe', ["recipe-options"]);
    toggleOptions('isOre', ["ore-options"]);
    toggleOptions('requireTool', ["tool-options"]);
    toggleOptions('hasDrop', ["drop-options"]);
    toggleOptions('isHat', ["blur"]);
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
    document.getElementById('hasPlaceCommands').addEventListener('change', () => {
        toggleOptions('hasPlaceCommands', ["placeCommands"]);
        generateCode();
    });
    document.getElementById('hasBreakCommands').addEventListener('change', () => {
        toggleOptions('hasBreakCommands', ["breakCommands"]);
        generateCode();
    });
    document.getElementById('hasRecipe').addEventListener('change', () => {
        toggleOptions('hasRecipe', ["recipe-options"]);
        generateCode();
    });

    document.getElementById('isOre').addEventListener('change', () => {
        toggleOptions('isOre', ["ore-options"]);
        generateCode();
    });

    document.getElementById('requireTool').addEventListener('change', () => {
        toggleOptions('requireTool', ["tool-options"]);
        generateCode();
    });

    document.getElementById('hasDrop').addEventListener('change', () => {
        toggleOptions('hasDrop', ["drop-options"]);
        generateCode();
    });

    document.getElementById('isHat').addEventListener('change', () => {
        toggleOptions('isHat', ["blur"]);
        generateCode();
    });


    const savedLang = localStorage.getItem("lang") || "en";
    document.getElementById("languageSelect").value = savedLang;
    applyTranslations(savedLang);

    document.getElementById("languageSelect").addEventListener("change", function () {
        const selectedLang = this.value;
        localStorage.setItem("lang", selectedLang);
        applyTranslations(selectedLang);
    });

    document.body.classList.add('overflow-hidden'); // заблокировать

};


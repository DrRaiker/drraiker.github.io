const translations = {
    ru: {
        title: "Свойства блока",
        baseType: "Тип блока, который будет использоваться как хитбокс, барьер универсальный",
        hat: "Игрок может надеть блок себе на голову через инвентарь.",
        solid: "Если отключено, то базовый тип не будет использоваться. Блок будет иметь хитбокс-сущность",
        offset: "Смещение хитбокса относительно центра блока",
        destroyTime: "Время разрушения блока в секундах",
        freePlace: "Если включено, блок можно разместить в любом месте, независимо от сетки блоков.",
        instrument: "Эффективный инструмент",
        seat: "Сможет ли игрок сесть на этот блок, нажав ПКМ?",
        seatPos: "Позиция, где будет сидеть игрок.<br> 0 0 0 - центр блока",
        seatRotate: "Будет ли модель вращаться, следуя за телом сидящего игрока?",
        sidePlace: "С каких сторон блока можно разместить этот блок?",
        modelBlock: "Какой предмет будет отображаться при размещении блока",
        modelItem: "Какой предмет будет отображаться в инвентаре игрока",
        modelColor: "Поддерживаются только <b>leather_armor</b> и <b>leather_horse_armor</b>",
        lore: "Можно разделить \\n для новых строк. Оставьте пустым, чтобы не было лора.",
        modelProperties: "Свойства модели установленного блока",
        modelOffset: "Смещение",
        modelRotation: "Поворот",
        modelScale: "Размер",
        isRotates: "Если эта функция включена, блок будет поворачиваться к игроку при размещении, например, как сундук.",
        rotate45: "Поворот похожий на головы",
        rotateFree: "Модель поворачивается точно на игрока",
        rotateFace: "Вращение зависит от стороны блока, на которой этот блок установлен. Аналогично вращению рамки или картины.",
        binding: "Сторона модели, которой она должна быть прикреплена к блоку. Blockface указывается в соответствии с BlockBench",
        blockOffset: "Заменяет смещение из раздела Model. Смещение относительно стороны блока, на которой этот блок размещен",
        inventory: "Открывает инвентарь на RMB",
        lines: "Количество строчек",
        maxStack: "Размер стака",
        maxStackTip: "Максимальный размер стака этого блока. Если используется предмет с максимальным стаком меньше указанного, это вызовет ошибку",
        addBlocks: "Полезно, если вы хотите сделать блок, состоящий из нескольких блоков. Например, диван длиной в три блока.<br><br>\n" +
            "id - Имя файла кастомного блока<br>\n" +
            "если блок по id не найден, он пропускается<br>\n" +
            "x y z - смещение в блоках относительно основного блока. 0 0 0 - ничего не сделает",
        hasCommands: "Команды, которые консоль выполнит, когда игрок нажмет на блок. Плейсхолдеры будут выполнены от имени игрока, который нажал на блок.",
        recipe: "Разместите символы в ячейках так, как предметы должны быть размещены в верстаке. Не заполняйте пустые слоты.",
        ingredients: "Назначьте каждому символу spigot материал, например, stone, diamond, stick.\n" +
            "Или вы можете использовать теги minecraft, например, #minecraft:planks, #minecraft:logs, #minecraft:wooden_slabs",
        interactSound: "Воспроизводится, когда игрок садится на блок или открывает инвентарь блока.",
        emmmm: "",

        cancel: "Отмена"
    },
    en: {
        title: "Block properties",
        baseType: "The type of block that will be used as a hitbox, barrier universal",
        hat: "The player can put a block on his head through the inventory.",
        solid: "If disabled, the Base Type will not be used. The block will have a hitbox entity.",
        offset: "Offset of hitbox relative to block center",
        freePlace: "If enabled, the block can be placed anywhere, regardless of the block grid",
        destroyTime: "Block break time in seconds",
        instrument: "Effective instrument",
        seat: "Will the player be able to sit on this block by pressing RMB",
        seatPos: "The position where the player will sit.<br> 0 0 0 - center of the block",
        seatRotate: "Will the model rotate to follow the body of a seated player?",
        sidePlace: "On which sides of the block can this block be placed?",
        modelBlock: "What item will be displayed when the block is placed",
        modelItem: "What item will be displayed when the block is in inventory",
        modelColor: "Only <b>leather_armor</b> and <b>leather_horse_armor</b> are supported",
        lore: "Can be separated with \\n for new lines. Leave blank for no lore.",
        modelProperties: "Properties of the placed block model",
        modelOffset: "Offset",
        modelRotation: "Rotation",
        modelScale: "Scale",
        isRotates: "If enabled, the block will turn towards the player when placed, like a chest for example.",
        rotate45: "Rotation similar to heads.",
        rotateFree: "The model will turn exactly towards the player.",
        rotateFace: "The rotation depends on the side of the block on which this block is placed. Similar to the rotation of the frame or painting",
        binding: "The side of the model that it should be attached to the block. Blockface is specified according to BlockBench",
        blockOffset: "Replaces the offset from the Model section. Offsets relative to the side of the block on which this block is placed",
        inventory: "Opens inventory on RMB",
        lines: "Number of lines:",
        maxStack: "Max Stack:",
        maxStackTip: "The maximum stack size of this block. If an item with a maximum stack less than the specified one is used, it will cause an error",
        addBlocks: "Useful if you want to make a block consisting of several blocks. For example, a sofa three blocks long.<br><br>\n" +
            "                  id - Custom block file name<br>\n" +
            "                  if a block by id is not found, it is skipped<br>\n" +
            "                  x y z - offset in blocks, relative to the main block. 0 0 0 - will do nothing",
        hasCommands: "Commands that the console will execute when the player clicks on the block. Placeholders will be executed on behalf of the player who clicked.",
        recipe: "Place the symbols in the cells as the items should be placed in the crafting table. Do not fill empty slots.",
        ingredients: "Assign each symbol a spigot material, such as stone, diamond, stick.\n" +
            "Or you can use minecraft tags, such as #minecraft:planks, #minecraft:logs, #minecraft:wooden_slabs",
        interactSound: "Plays when the player sits on a block or opens the block's inventory.",

        cancel: "Отмена"
    }
};

function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key] || key;
    });
}


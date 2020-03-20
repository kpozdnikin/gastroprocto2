const zonesOfPain = [
    {
        id: 1,
        title: 'Болит под ложечкой',
        subTitle: 'эпигастральная область',
        text: 'Боли в животе под ложечкой, ноющего характера, ' +
            'могут характеризоваться пациентом как "дискомфорт", ' +
            '"чувство тяжести", возникающие, после приема пищи, ' +
            'сопровождающиеся изжогой более характерны для хронического гастрита. ' +
            'При плохой работе пищеводно-желудочного клапана - недостаточности кардии - болевые ощущения могут ' +
            'распространяться на область за грудиной, имитировать сердечный приступ. Неприятным сюрпризом' +
            ' может быть запах изо рта. При остром отравлении продуктами, не предназначенными для приема в ' +
            'пищу или недоброкачественными, боль в животе может быть острой - острый гастрит.' +
            ' Интенсивные и длительные боли позволяют заподозрить не просто острый гастрит, но язву желудка.'
    },
    {
        id: 2,
        title: 'Болит справа вверху живота, ближе к ребрам',
        subTitle: 'область правого подреберья',
        text: 'Боли в животе локализующиеся в правом подреберье, от ноющих до интенсивных, возникающие ' +
            'примерно через 30 минут после приема пищи или натощаковые (возможно ночные) -' +
            ' могут сопровождать язву луковицы двенадцатиперстной кишки. ' +
            'Второй вариант - хронический холецистит. При вторичной дискинезии желчевыводящих путей ' +
            '(шифруется врачами как - ДЖВП) боли в правых отделах живота становятся интенсивными, ' +
            'приступообразными, отдают в ключицу, поясничную область, под лопатку. В дополнение ' +
            'присоединяются тошнота, рвота, повышение температуры, а, при наличии камней, желтушность ' +
            'кожных покровов и склер, кожный зуд, задержка стула и газов - печеночная колика. Но возможно и гепатит. ' +
            'Возникновение и усиление таких болей обычно связано с погрешностями в диете, употреблением алкаголя, эмоциональной и физической нагрузкой.'
    },
    {
        id: 3,
        title: 'Болит в верху живота: под ложечкой, справа или слева',
        subTitle: 'правое и/или левое подреберье',
        text: 'Боль в верхних отделах живота ноющая, давящая, иррадиирующая в спину, возможно опоясывающая, ' +
            'ослабевающая при наклоне вперед. Возникает через 15 минут после приема пищи и ' +
            'продолжается от нескольких часов до нескольких суток. Рассматриваем вариант хронического панкреатита.' +
            'Это заболевание провоцируется приемом жареной, жирной пищи, алкаголя - "праздничная болезнь". ' +
            'Однако в практике были случаи, связанные с большой фруктовой нагрузкой, например, килограммом груш, ' +
            'съеденным в один прием. Такая боль может сопровождаться тошнотой, рвотой, вздутием живота, учащением стула.' +
            'Пациентов с подозрением на панкреатит обычно направляют на УЗИ органов брюшной полости. Однако этого недостаточно.' +
            ' ТРЕБУЕТСЯ СЕРЬЕЗНАЯ ЛАБОРАТОРНАЯ ДИАГНОСТИКА, ЧТО НЕВОЗМОЖНО БЕЗ ВРАЧА-ГАСТРОЭНТЕРОЛОГА.'
    },
    {
        id: 4,
        title: 'Болит справа или слева сбоку живота, колет в боку',
        subTitle: 'правая или левая боковая область',
        text: 'Внезапно возникшие сильные боли в правом или левом боковом отделе живота (в поясничной области), ' +
            'чаще односторонние, постоянные или схваткообразные, иррадиирующие в паховую область, ' +
            'половые органы, усиливающиеся при мочеиспускании.' +
            ' Могут сопровождаться тошнотой рвотой, затруднением отхождения газов.' +
            'Основной вариант - почечная колика.' +
            'Другие варианты: аппендицит, холецистит, панкреатит, язва луковицы 12 кишки, аднексит, межреберная невралгия. ' +
            'Главный диагностический критерий - УЗИ органов брюшной полости. Но, возвращаясь к сказанному выше, только УЗИ может быть недостаточно. ОБЯЗАТЕЛЬНО ОБРАТИТЕСЬ К ВРАЧУ!'
    },
    {
        id: 5,
        title: 'Болит слева или справа внизу живота',
        subTitle: 'подвздошная область справа или слева',
        text: 'Боль постоянная, разной степени интенсивности, чаще односторонняя, ' +
            'сопровождающаяся повышением температуры тела, общим недомоганием ' +
            'характерна для хронического аднексита. Аднексит или сальпингоофорит ' +
            '— это воспаление придатков матки (маточных труб и яичников) ' +
            '– одно из самых часто встречающихся заболеваний половых органов женщины. ' +
            'Если боль возникла внезапно в области солнечного сплетения, затем переместилась в правую ' +
            'подвздошную область, носит постоянный характер, усиливается при кашле, ' +
            'движении, перемене положения тела - стоит задуматься об остром аппендиците. ' +
            'Такая боль может сопровождаться подъемом температуры, тошнотой, рвотой и даже учащением мочеиспускания. ' +
            'Острая, постоянная, усиливающаяся при движении, сопровождающаяся напряжением мышц брюшной ' +
            'стенки боль указывает на раздражение брюшины. Ни в коем случае нельзя заниматься самолечением. НУЖНО СРОЧНО ОБРАТИТЬСЯ К ВРАЧУ'
    },
    {
        id: 6,
        title: 'Болит низ живота по середине',
        subTitle: 'надлобковая область',
        text: 'Боли, локализующиеся в данной области, возможно режущие, сопровождающиеся ' +
            'болезненным и частым мочеиспусканием, помутнением мочи - характерны для цистита ' +
            '(воспаления мочевого пузыря). Возникают они, обычно, после переохлаждения организма.'
    },
    {
        id: 7,
        title: 'Болит в середине живота',
        subTitle: 'околопупочная область',
        text: 'Рецидивирующие боли - чувство «распирания» в животе, возникающие ' +
            'по меньшей мере 1 раз в неделю на протяжении последних 3-х месяцев, ' +
            'связанные с дефекацией, сопровождающиеся изменением частоты и консистенции стула' +
            ' – диагностические признаки синдрома раздраженной кишки. Такие боли сопровождаются вздутием.' +
            ' Им могут сопутствовать жалобы, относящиеся к другим отделам желудочно-кишечного тракта ' +
            'и организма в целом (головная боль, боли в области сердца, хроническая усталость, раздражительность и т.д.). ' +
            'Будьте внимательны. Под картиной синдрома раздраженной кишки может прятаться начало воспаления толстой кишки - колита. ' +
            'Есть вариант еще хуже – опухоль толстой кишки. НЕЛЬЗЯ ЗАНИМАТЬСЯ САМОЛЕЧЕНИЕМ, ' +
            'ОБЯЗАТЕЛЬНО НЕОБХОДИМО ОБРАТИТЬСЯ К ВРАЧУ. ОСОБЕННО БЫСТРО ЭТО НУЖНО СДЕЛАТЬ ПРИ ПОЯВЛЕНИИ В КАЛОВЫХ МАССАХ ПРИМЕСИ КРОВИ.'
    }
];

export default zonesOfPain;

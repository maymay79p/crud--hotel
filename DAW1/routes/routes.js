router.get('/servico/add', abreAddServico);
router.post('/servico/add', addServico);

router.get('/servico/lst', listarServico);
router.post('/servico/lst', filtrarServico);

router.get('/servico/edit/:id', abreEditServico);
router.post('/servico/update/:id', editServico);

router.post('/servico/delete/:id', deleteServico);

// ------------------ Extra -------------------------
router.get('/extra/add', abreAddExtra);
router.post('/extra/add', addExtra);

router.get('/extra/lst', listarExtra);
router.post('/extra/lst', filtrarExtra);

router.get('/extra/edit/:id', abreEditExtra);
router.post('/extra/update/:id', editExtra);

router.post('/extra/delete/:id', deleteExtra);

// ------------------ Fixo --------------------------
router.get('/fixo/add', abreAddFixo);
router.post('/fixo/add', addFixo);

router.get('/fixo/lst', listarFixo);
router.post('/fixo/lst', filtrarFixo);

router.get('/fixo/edit/:id', abreEditFixo);
router.post('/fixo/update/:id', editFixo);

router.post('/fixo/delete/:id', deleteFixo);

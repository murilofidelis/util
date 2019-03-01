
/* metódo calcula a diferença entre duas datas
*/

    calculaDiferencaEntreDatas(dataInicio: Date, dataFim: Date) {

        if (!dataFim) {
            dataFim = new Date();
        }

        const anoInicio = dataInicio.getFullYear();
        const mesInicio = dataInicio.getMonth() + 1;
        const diaInicio = dataInicio.getDate();

        const anoFim = dataFim.getFullYear();
        const mesFim = dataFim.getMonth() + 1;
        const diaFim = dataFim.getDate();

        let anos, meses, dias;

        meses = mesFim - mesInicio;
        if (diaFim < diaInicio) {
            meses = meses - 1;
        }

        anos = anoFim - anoInicio;
        if (mesFim * 100 + diaFim < mesInicio * 100 + diaInicio) {
            anos = anos - 1;
            meses = meses + 12;
        }

        dias = Math.floor((dataFim.getTime() - (new Date(anoInicio + anos, mesInicio + meses - 1, diaInicio)).getTime())
            / (24 * 60 * 60 * 1000));

        return { anos: anos, meses: meses, dias: dias };
    }

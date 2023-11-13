import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "78952",
    database: "crud"
});


const produtos = [
    {
        "Cod_produto": "PA0000001",
        "Nome": "TH4+ - CAIXA 12 X 1 LT",
        "Quantidade": 100,
        "Valor": 46.0874017291911
       },
       {
        "Cod_produto": "PA0000002",
        "Nome": "TH4+ - CAIXA 4 X 5 LT",
        "Quantidade": 100,
        "Valor": 76.6207985010613
       },
       {
        "Cod_produto": "PA0000005",
        "Nome": "TH4+ 1 LT",
        "Quantidade": 100,
        "Valor": 86.6907902000193
       },
       {
        "Cod_produto": "PA0000006",
        "Nome": "SANIQUAT 80% - CX 12X1 LT",
        "Quantidade": 100,
        "Valor": 4.21077287999689
       },
       {
        "Cod_produto": "PA0000007",
        "Nome": "TH4+ 5L",
        "Quantidade": 100,
        "Valor": 84.9789975168167
       },
       {
        "Cod_produto": "PA0000008",
        "Nome": "TH4+ 25 LT",
        "Quantidade": 100,
        "Valor": 77.4569485372117
       },
       {
        "Cod_produto": "PA000001",
        "Nome": "AUROTRIM 1KG",
        "Quantidade": 100,
        "Valor": 65.9628272799469
       },
       {
        "Cod_produto": "PA0000012",
        "Nome": "SANOTETO GALAO DE 05 LITROS",
        "Quantidade": 100,
        "Valor": 87.8807493273737
       },
       {
        "Cod_produto": "PA0000014",
        "Nome": "SANOTETO GALAO DE 50 LITROS",
        "Quantidade": 100,
        "Valor": 98.0056730716846
       },
       {
        "Cod_produto": "PA0000015",
        "Nome": "AMONEA QUATERNARIA SANEBRAS 12X1L",
        "Quantidade": 100,
        "Valor": 53.4479782449711
       },
       {
        "Cod_produto": "PA0000016",
        "Nome": "AMONEA QUATERNARIA SANEBRAS 4X5L",
        "Quantidade": 100,
        "Valor": 43.9760133039793
       },
       {
        "Cod_produto": "PA0000017",
        "Nome": "SANOTETO GALAO DE 200 LITROS",
        "Quantidade": 100,
        "Valor": 88.7341344388553
       },
       {
        "Cod_produto": "PA0000018",
        "Nome": "BIODRI SACO 25 KG",
        "Quantidade": 100,
        "Valor": 85.4507995774901
       },
       {
        "Cod_produto": "PA0000019",
        "Nome": "MEFISTO SHOCK - CAIXA 12 X 1",
        "Quantidade": 100,
        "Valor": 69.2691521682738
       },
       {
        "Cod_produto": "PA000002",
        "Nome": "AUROTRIM 20KG",
        "Quantidade": 100,
        "Valor": 8.06312769535558
       },
       {
        "Cod_produto": "PA0000020",
        "Nome": "MEFISTO SHOCK - A - CAIXA 12 X 1",
        "Quantidade": 100,
        "Valor": 75.4224636069533
       },
       {
        "Cod_produto": "PA0000022",
        "Nome": "ENTHOMO - CAIXA 12 X 1",
        "Quantidade": 100,
        "Valor": 65.0662622067378
       },
       {
        "Cod_produto": "PA0000023",
        "Nome": "ALDECOC 1 LT",
        "Quantidade": 100,
        "Valor": 26.8331584732524
       },
       {
        "Cod_produto": "PA0000024",
        "Nome": "ALDECOC -CAIXA 12 X 1 LT",
        "Quantidade": 100,
        "Valor": 85.2226453243774
       },
       {
        "Cod_produto": "PA0000025",
        "Nome": "MEFISTO SHOCK -B - CAIXA 12 X 1",
        "Quantidade": 100,
        "Valor": 13.4113630739609
       },
       {
        "Cod_produto": "PA0000026",
        "Nome": "ALCOOL EM GEL 70% - CAIXA 12 X 1 LT",
        "Quantidade": 100,
        "Valor": 93.9235394669421
       },
       {
        "Cod_produto": "PA000003",
        "Nome": "CIROMAZIN 1% 25KG",
        "Quantidade": 100,
        "Valor": 83.293055323741
       },
       {
        "Cod_produto": "PA000004",
        "Nome": "COCZURIL 20 KG",
        "Quantidade": 100,
        "Valor": 18.3512004499172
       },
       {
        "Cod_produto": "PA000005",
        "Nome": "SULFAQUINOXALINA VANSIL 20 KG",
        "Quantidade": 100,
        "Valor": 2.26112136046129
       },
       {
        "Cod_produto": "PA000006",
        "Nome": "SULFAQUINOXALINA VANSIL 10KG",
        "Quantidade": 100,
        "Valor": 83.6397220089996
       },
       {
        "Cod_produto": "PA000007",
        "Nome": "MEBENDASIL 12KG",
        "Quantidade": 100,
        "Valor": 28.9370616273845
       },
       {
        "Cod_produto": "PA000008",
        "Nome": "MEBENDASIL 600G",
        "Quantidade": 100,
        "Valor": 85.3615005157228
       },
       {
        "Cod_produto": "PA000009",
        "Nome": "AGROSIL 6.000.000",
        "Quantidade": 100,
        "Valor": 51.2644403856223
       },
       {
        "Cod_produto": "PA000010",
        "Nome": "AGROSIL 6.000.000 DISPLAY 25 FRASCOS",
        "Quantidade": 100,
        "Valor": 10.0061622602671
       },
       {
        "Cod_produto": "PA000011",
        "Nome": "AGROSIL 6.000.000 DISPLAY 6 FRASCOS",
        "Quantidade": 100,
        "Valor": 18.8582855245914
       },
       {
        "Cod_produto": "PA000012",
        "Nome": "SILVERM 05KG",
        "Quantidade": 100,
        "Valor": 72.5401200626611
       },
       {
        "Cod_produto": "PA000013",
        "Nome": "SILVERM 25KG",
        "Quantidade": 100,
        "Valor": 95.2799612697227
       },
       {
        "Cod_produto": "PA000014",
        "Nome": "VEICULO UNIVERSAL VANSIL 20 LITROS",
        "Quantidade": 100,
        "Valor": 21.0212871817417
       },
       {
        "Cod_produto": "PA000015",
        "Nome": "VEICULO UNIVERSAL VANSIL 50 LITROS",
        "Quantidade": 100,
        "Valor": 54.2963237238558
       },
       {
        "Cod_produto": "PA000016",
        "Nome": "AVECOX 400",
        "Quantidade": 100,
        "Valor": 12.0225990209868
       },
       {
        "Cod_produto": "PA000017",
        "Nome": "ALBEMAX 100 - LITRO",
        "Quantidade": 100,
        "Valor": 95.0133317505759
       },
       {
        "Cod_produto": "PA000018",
        "Nome": "CYPERMEIT 20ML DISPLAY C\/25 FR",
        "Quantidade": 100,
        "Valor": 34.8270587338778
       },
       {
        "Cod_produto": "PA000019",
        "Nome": "ECTOLIN 300ML",
        "Quantidade": 100,
        "Valor": 76.9391074586106
       },
       {
        "Cod_produto": "PA000020",
        "Nome": "TOP GARD 100 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 55.3525297433834
       },
       {
        "Cod_produto": "PA000021",
        "Nome": "TOP GARD 4 X 660MG",
        "Quantidade": 100,
        "Valor": 60.6274326514818
       },
       {
        "Cod_produto": "PA000022",
        "Nome": "TOP GARD PLUS 100 X 600MG",
        "Quantidade": 100,
        "Valor": 74.6892032846001
       },
       {
        "Cod_produto": "PA000023",
        "Nome": "TOP GARD PLUS 4 X 600 MG",
        "Quantidade": 100,
        "Valor": 21.8512451336526
       },
       {
        "Cod_produto": "PA000024",
        "Nome": "TOP GARD PUPPY 20ML",
        "Quantidade": 100,
        "Valor": 93.0465799478592
       },
       {
        "Cod_produto": "PA000025",
        "Nome": ".INATIVO - PET DERMYL 500 ML",
        "Quantidade": 100,
        "Valor": 50.9404768788216
       },
       {
        "Cod_produto": "PA000026",
        "Nome": "RICINUS 50G",
        "Quantidade": 100,
        "Valor": 10.1389725519982
       },
       {
        "Cod_produto": "PA000027",
        "Nome": "V-CORT 0,5MG C\/20 COMP.",
        "Quantidade": 100,
        "Valor": 94.6996100968733
       },
       {
        "Cod_produto": "PA000028",
        "Nome": ".INATIVO - MEBENDASIL PASTA 30G",
        "Quantidade": 100,
        "Valor": 46.2029227873204
       },
       {
        "Cod_produto": "PA000029",
        "Nome": "TRICLORSIL PASTA 30G",
        "Quantidade": 100,
        "Valor": 18.333523444981
       },
       {
        "Cod_produto": "PA000030",
        "Nome": "RICINUS PASTA 250G",
        "Quantidade": 100,
        "Valor": 72.2237264194634
       },
       {
        "Cod_produto": "PA000031",
        "Nome": "HIPROSIL - 7 X 30G",
        "Quantidade": 100,
        "Valor": 25.6607306033937
       },
       {
        "Cod_produto": "PA000032",
        "Nome": "AVECOX 15ML",
        "Quantidade": 100,
        "Valor": 5.86579221893279
       },
       {
        "Cod_produto": "PA000033",
        "Nome": "ENRO FLEC LIQUIDO 10ML - ORAL",
        "Quantidade": 100,
        "Valor": 25.4145795294039
       },
       {
        "Cod_produto": "PA000034",
        "Nome": "ASCORSIL AQUA 1KG",
        "Quantidade": 100,
        "Valor": 68.2898484528714
       },
       {
        "Cod_produto": "PA000035",
        "Nome": "ASCORSIL AQUA 500G",
        "Quantidade": 100,
        "Valor": 0.08212367553475
       },
       {
        "Cod_produto": "PA000036",
        "Nome": "CRIASIL AQUA 500G",
        "Quantidade": 100,
        "Valor": 50.480730907401
       },
       {
        "Cod_produto": "PA000037",
        "Nome": "VITALMAX AQUA 1KG",
        "Quantidade": 100,
        "Valor": 92.5052934305778
       },
       {
        "Cod_produto": "PA000038",
        "Nome": "VITALMAX AQUA 500G",
        "Quantidade": 100,
        "Valor": 33.3710427209491
       },
       {
        "Cod_produto": "PA000039",
        "Nome": "VITASIL AQUA 10KG",
        "Quantidade": 100,
        "Valor": 64.5358013379643
       },
       {
        "Cod_produto": "PA000040",
        "Nome": "VITASIL AQUA 1KG",
        "Quantidade": 100,
        "Valor": 15.0840111511573
       },
       {
        "Cod_produto": "PA000041",
        "Nome": "VITASIL AQUA 25KG",
        "Quantidade": 100,
        "Valor": 87.9709463883042
       },
       {
        "Cod_produto": "PA000044",
        "Nome": "VITASIL GALAO 5LTS",
        "Quantidade": 100,
        "Valor": 11.4294528765111
       },
       {
        "Cod_produto": "PA000045",
        "Nome": "VITASIL LITRO",
        "Quantidade": 100,
        "Valor": 51.0583112351527
       },
       {
        "Cod_produto": "PA000047",
        "Nome": ".INATIVO - HALITO DINE 50ML",
        "Quantidade": 100,
        "Valor": 1.9902463039388
       },
       {
        "Cod_produto": "PA000048",
        "Nome": "AMINODOG 60G",
        "Quantidade": 100,
        "Valor": 52.234050204149
       },
       {
        "Cod_produto": "PA000049",
        "Nome": "CALCIO FOR 75G",
        "Quantidade": 100,
        "Valor": 4.30002062275702
       },
       {
        "Cod_produto": "PA000050",
        "Nome": "CALCIO FOR SUSPENSAO 100ML",
        "Quantidade": 100,
        "Valor": 84.898746392964
       },
       {
        "Cod_produto": "PA000051",
        "Nome": "CAT MALT - 30G",
        "Quantidade": 100,
        "Valor": 73.9586974066252
       },
       {
        "Cod_produto": "PA000052",
        "Nome": "CREATINA E 100 - 750G",
        "Quantidade": 100,
        "Valor": 29.1582132418178
       },
       {
        "Cod_produto": "PA000053",
        "Nome": "ENERGYSI 10G",
        "Quantidade": 100,
        "Valor": 1.70289000035545
       },
       {
        "Cod_produto": "PA000054",
        "Nome": "PET SLIM 50ML",
        "Quantidade": 100,
        "Valor": 90.2207281509152
       },
       {
        "Cod_produto": "PA000055",
        "Nome": "PRO-ARTRO 1000 - 60G",
        "Quantidade": 100,
        "Valor": 96.4755690467009
       },
       {
        "Cod_produto": "PA000056",
        "Nome": "PRO-ARTRO 500 - 30G",
        "Quantidade": 100,
        "Valor": 60.2887263408893
       },
       {
        "Cod_produto": "PA000057",
        "Nome": "PROBSIL 14G DISPLAY (6 UNIDADES)",
        "Quantidade": 100,
        "Valor": 76.3723150064032
       },
       {
        "Cod_produto": "PA000058",
        "Nome": "VITASIL ENERGY 60G",
        "Quantidade": 100,
        "Valor": 26.3447196007475
       },
       {
        "Cod_produto": "PA000059",
        "Nome": "VITASIL ENERGY 120ML",
        "Quantidade": 100,
        "Valor": 83.4573568132559
       },
       {
        "Cod_produto": "PA000060",
        "Nome": "VITASIL ENERGY 30ML",
        "Quantidade": 100,
        "Valor": 88.5304812746686
       },
       {
        "Cod_produto": "PA000061",
        "Nome": "VITASIL HEP COMPRIMIDOS 60G",
        "Quantidade": 100,
        "Valor": 82.9118065969879
       },
       {
        "Cod_produto": "PA000062",
        "Nome": "VITASIL HEP LIQUIDO 60ML",
        "Quantidade": 100,
        "Valor": 36.0734631345155
       },
       {
        "Cod_produto": "PA000063",
        "Nome": "VITASIL PELO 2000 120G",
        "Quantidade": 100,
        "Valor": 71.3288644991416
       },
       {
        "Cod_produto": "PA000064",
        "Nome": "VITASIL PELO 60G",
        "Quantidade": 100,
        "Valor": 58.8097699396985
       },
       {
        "Cod_produto": "PA000065",
        "Nome": "VITASIL SENIOR 60G",
        "Quantidade": 100,
        "Valor": 52.4948906065876
       },
       {
        "Cod_produto": "PA000066",
        "Nome": "ZEOTOP 10G",
        "Quantidade": 100,
        "Valor": 75.0232236765954
       },
       {
        "Cod_produto": "PA000068",
        "Nome": "CRIASIL CALCIO 15ML",
        "Quantidade": 100,
        "Valor": 37.0782375154384
       },
       {
        "Cod_produto": "PA000069",
        "Nome": "BIOMASTER 2,5% 500G",
        "Quantidade": 100,
        "Valor": 3.85729008844027
       },
       {
        "Cod_produto": "PA000070",
        "Nome": "CREATINA SUPER E 500G",
        "Quantidade": 100,
        "Valor": 42.1780498767153
       },
       {
        "Cod_produto": "PA000071",
        "Nome": "CREATINA SUPER E 2KG",
        "Quantidade": 100,
        "Valor": 88.4552758668871
       },
       {
        "Cod_produto": "PA000072",
        "Nome": "EVOLUTION M.O. 2 X 40G",
        "Quantidade": 100,
        "Valor": 14.7376393447919
       },
       {
        "Cod_produto": "PA000073",
        "Nome": "VITASIL ENERGY LITRO",
        "Quantidade": 100,
        "Valor": 54.2259126095528
       },
       {
        "Cod_produto": "PA000074",
        "Nome": "VITASIL ENERGY 5 LITROS",
        "Quantidade": 100,
        "Valor": 63.6795719382898
       },
       {
        "Cod_produto": "PA000075",
        "Nome": "VITASIL MIX 2,5KG",
        "Quantidade": 100,
        "Valor": 37.2497386774075
       },
       {
        "Cod_produto": "PA000076",
        "Nome": "CRIASIL E 15ML",
        "Quantidade": 100,
        "Valor": 71.663672535856
       },
       {
        "Cod_produto": "PA000077",
        "Nome": "CRIASIL FERRO 15ML",
        "Quantidade": 100,
        "Valor": 64.3646835269862
       },
       {
        "Cod_produto": "PA000079",
        "Nome": "VITASIL PASSAROS 15ML",
        "Quantidade": 100,
        "Valor": 68.3967919066641
       },
       {
        "Cod_produto": "PA000080",
        "Nome": "NEOCOLIN LIQUIDO 10ML",
        "Quantidade": 100,
        "Valor": 11.0199320018696
       },
       {
        "Cod_produto": "PA000081",
        "Nome": "VITASIL PIG 250ML",
        "Quantidade": 100,
        "Valor": 17.6658683004141
       },
       {
        "Cod_produto": "PA000082",
        "Nome": "VITASIL PIG 5 LITROS",
        "Quantidade": 100,
        "Valor": 5.88910209925603
       },
       {
        "Cod_produto": "PA000083",
        "Nome": "VITASIL PIG LITRO",
        "Quantidade": 100,
        "Valor": 56.576607926688
       },
       {
        "Cod_produto": "PA000084",
        "Nome": "GLUTASIL 50 - GALAO 20 LTS",
        "Quantidade": 100,
        "Valor": 13.019184753151
       },
       {
        "Cod_produto": "PA000086",
        "Nome": "GLUTASIL 50 - LITRO",
        "Quantidade": 100,
        "Valor": 27.6971452204889
       },
       {
        "Cod_produto": "PA000087",
        "Nome": "VANCID 50% GALÃO 20 LTS",
        "Quantidade": 100,
        "Valor": 73.4223459098583
       },
       {
        "Cod_produto": "PA000089",
        "Nome": "VANCID 50% LITRO",
        "Quantidade": 100,
        "Valor": 92.0215120152995
       },
       {
        "Cod_produto": "PA000090",
        "Nome": "UNGUENTO 50 G",
        "Quantidade": 100,
        "Valor": 67.4827377928439
       },
       {
        "Cod_produto": "PA000091",
        "Nome": "SOLUCAO OTOLOGICA 100ML",
        "Quantidade": 100,
        "Valor": 74.6936048938858
       },
       {
        "Cod_produto": "PA000092",
        "Nome": "ALUMEX 30G",
        "Quantidade": 100,
        "Valor": 80.630675927021
       },
       {
        "Cod_produto": "PA000093",
        "Nome": "VANCID 10% LITRO HERBAL",
        "Quantidade": 100,
        "Valor": 89.8178572419486
       },
       {
        "Cod_produto": "PA000094",
        "Nome": "ALUMEX 100G",
        "Quantidade": 100,
        "Valor": 31.5963030123741
       },
       {
        "Cod_produto": "PA000095",
        "Nome": "ALUMEX 500G",
        "Quantidade": 100,
        "Valor": 27.6516242736004
       },
       {
        "Cod_produto": "PA000096",
        "Nome": "FLUIDO REUMATOSOL 100ML",
        "Quantidade": 100,
        "Valor": 83.7765212240354
       },
       {
        "Cod_produto": "PA000097",
        "Nome": "SULFAQUINOXALINA LIQUIDA 10ML",
        "Quantidade": 100,
        "Valor": 60.7499182454286
       },
       {
        "Cod_produto": "PA000098",
        "Nome": "AGROSIL 5 MEGA DISPLAY 25 FRASCOS",
        "Quantidade": 100,
        "Valor": 33.6094954600473
       },
       {
        "Cod_produto": "PA000099",
        "Nome": "AGROSIL 5 MEGA DISPLAY 6 FRASCOS",
        "Quantidade": 100,
        "Valor": 93.588009749294
       },
       {
        "Cod_produto": "PA000100",
        "Nome": "AGROSIL PPU - 100ML",
        "Quantidade": 100,
        "Valor": 75.9472575350042
       },
       {
        "Cod_produto": "PA000101",
        "Nome": "AGROSIL PPU - 50ML",
        "Quantidade": 100,
        "Valor": 55.4656670450239
       },
       {
        "Cod_produto": "PA000102",
        "Nome": ".INATIVO - SILMETRIN 100G **",
        "Quantidade": 100,
        "Valor": 42.6913963435719
       },
       {
        "Cod_produto": "PA000103",
        "Nome": "IVERMECTINA PREMIX 0,6% 33G DP C\/24",
        "Quantidade": 100,
        "Valor": 60.3776790820196
       },
       {
        "Cod_produto": "PA000104",
        "Nome": "IVERMECTINA PREMIX 0,6% 333G",
        "Quantidade": 100,
        "Valor": 17.5685024870719
       },
       {
        "Cod_produto": "PA000106",
        "Nome": "SILVERM 20G DISPLAY C\/25 SACHES",
        "Quantidade": 100,
        "Valor": 29.3820616814677
       },
       {
        "Cod_produto": "PA000107",
        "Nome": "SILVERM 125G",
        "Quantidade": 100,
        "Valor": 45.3099034498302
       },
       {
        "Cod_produto": "PA000108",
        "Nome": "SULFAQUINOXALINA VANSIL 100G",
        "Quantidade": 100,
        "Valor": 0.700542390579465
       },
       {
        "Cod_produto": "PA000109",
        "Nome": "SULFAQUINOXALINA VANSIL 1KG",
        "Quantidade": 100,
        "Valor": 26.7259129341541
       },
       {
        "Cod_produto": "PA000110",
        "Nome": "ENRO FLEC LIQUIDO 10% 100ML - ORAL",
        "Quantidade": 100,
        "Valor": 55.670791026055
       },
       {
        "Cod_produto": "PA000111",
        "Nome": "SILMAST BALDE 24 X 5G",
        "Quantidade": 100,
        "Valor": 40.2396427698682
       },
       {
        "Cod_produto": "PA000113",
        "Nome": "TRICLORSIL 20G DISPLAY C\/ 25 SACHES",
        "Quantidade": 100,
        "Valor": 83.6484145461776
       },
       {
        "Cod_produto": "PA000114",
        "Nome": "TRICLORSIL 150G",
        "Quantidade": 100,
        "Valor": 4.62684882545452
       },
       {
        "Cod_produto": "PA000115",
        "Nome": "TRICLORSIL 500G",
        "Quantidade": 100,
        "Valor": 27.5154483845528
       },
       {
        "Cod_produto": "PA000116",
        "Nome": "CITRAX PO 200G",
        "Quantidade": 100,
        "Valor": 33.2287010986647
       },
       {
        "Cod_produto": "PA000117",
        "Nome": "CITRAX PO 2KG",
        "Quantidade": 100,
        "Valor": 70.7538895997742
       },
       {
        "Cod_produto": "PA000118",
        "Nome": "RICINUS 120ML SPRAY",
        "Quantidade": 100,
        "Valor": 78.890439207039
       },
       {
        "Cod_produto": "PA000119",
        "Nome": "DAIRY DUNK 1KG",
        "Quantidade": 100,
        "Valor": 62.3658452598336
       },
       {
        "Cod_produto": "PA000120",
        "Nome": "DAIRY DUNK 20KG",
        "Quantidade": 100,
        "Valor": 40.8737112292835
       },
       {
        "Cod_produto": "PA000121",
        "Nome": "DAIRY DUNK SP 1KG",
        "Quantidade": 100,
        "Valor": 24.4517790561182
       },
       {
        "Cod_produto": "PA000122",
        "Nome": "DAIRY DUNK SP 20KG",
        "Quantidade": 100,
        "Valor": 4.07434979178338
       },
       {
        "Cod_produto": "PA000123",
        "Nome": "ENERGYSI H 150G CX C\/ 12 SACHES",
        "Quantidade": 100,
        "Valor": 86.4813255551332
       },
       {
        "Cod_produto": "PA000124",
        "Nome": "NEOCOLIN LIQUIDO 480ML",
        "Quantidade": 100,
        "Valor": 48.1389714274515
       },
       {
        "Cod_produto": "PA000125",
        "Nome": "UBRECILIN 100ML",
        "Quantidade": 100,
        "Valor": 15.9487003753908
       },
       {
        "Cod_produto": "PA000126",
        "Nome": "UNGUENTO 250G",
        "Quantidade": 100,
        "Valor": 87.3051433291813
       },
       {
        "Cod_produto": "PA000127",
        "Nome": "CICATRIZANTOL 50G",
        "Quantidade": 100,
        "Valor": 40.8840567249547
       },
       {
        "Cod_produto": "PA000128",
        "Nome": "SULFAQUINOXALINA LIQUIDA 20% 250ML",
        "Quantidade": 100,
        "Valor": 66.8137867767659
       },
       {
        "Cod_produto": "PA000129",
        "Nome": "SULFAQUINOXALINA LIQUIDA 20% LITRO",
        "Quantidade": 100,
        "Valor": 62.0096928857411
       },
       {
        "Cod_produto": "PA000130",
        "Nome": "IODOFARM 1 L",
        "Quantidade": 100,
        "Valor": 61.8282039065695
       },
       {
        "Cod_produto": "PA000131",
        "Nome": "VETOMIL 250ML",
        "Quantidade": 100,
        "Valor": 76.9444963925075
       },
       {
        "Cod_produto": "PA000132",
        "Nome": "VETOMIL LITRO",
        "Quantidade": 100,
        "Valor": 64.7968747166608
       },
       {
        "Cod_produto": "PA000133",
        "Nome": "VETOMIL GALÃO 5 LTS",
        "Quantidade": 100,
        "Valor": 48.1661553414785
       },
       {
        "Cod_produto": "PA000134",
        "Nome": "AMPICIL 20 KG",
        "Quantidade": 100,
        "Valor": 87.9594635993729
       },
       {
        "Cod_produto": "PA000135",
        "Nome": "AMPICIL 10 KG",
        "Quantidade": 100,
        "Valor": 75.3983662045469
       },
       {
        "Cod_produto": "PA000136",
        "Nome": "LINCOSIL 44% - 10KG **",
        "Quantidade": 100,
        "Valor": 18.2799662564233
       },
       {
        "Cod_produto": "PA000138",
        "Nome": "MEBENDASIL 20KG",
        "Quantidade": 100,
        "Valor": 40.8172387001724
       },
       {
        "Cod_produto": "PA000142",
        "Nome": "POTENSIL 50 10KG",
        "Quantidade": 100,
        "Valor": 74.7000827215472
       },
       {
        "Cod_produto": "PA000143",
        "Nome": "POTENSIL 50 2KG (20 X 100G)",
        "Quantidade": 100,
        "Valor": 71.7616809783485
       },
       {
        "Cod_produto": "PA000146",
        "Nome": "SUISTIN 50 10KG",
        "Quantidade": 100,
        "Valor": 78.5035869142111
       },
       {
        "Cod_produto": "PA000147",
        "Nome": "SUISTIN 50 1KG",
        "Quantidade": 100,
        "Valor": 92.4543846594021
       },
       {
        "Cod_produto": "PA000148",
        "Nome": "SUISTIN 50 20KG",
        "Quantidade": 100,
        "Valor": 16.533554962597
       },
       {
        "Cod_produto": "PA000149",
        "Nome": "SUISTIN 50 5KG",
        "Quantidade": 100,
        "Valor": 47.0897025680372
       },
       {
        "Cod_produto": "PA000151",
        "Nome": "AUROTRIM 25KG",
        "Quantidade": 100,
        "Valor": 84.512765681471
       },
       {
        "Cod_produto": "PA000152",
        "Nome": "LINCOSIL 10KG",
        "Quantidade": 100,
        "Valor": 97.9998573590932
       },
       {
        "Cod_produto": "PA000153",
        "Nome": "NEOCOLIN PREMIX 10KG",
        "Quantidade": 100,
        "Valor": 45.9579545866137
       },
       {
        "Cod_produto": "PA000154",
        "Nome": "NEOCOLIN PREMIX 20KG",
        "Quantidade": 100,
        "Valor": 84.0637711151061
       },
       {
        "Cod_produto": "PA000155",
        "Nome": "ST-MIX 5KG",
        "Quantidade": 100,
        "Valor": 77.4631571642066
       },
       {
        "Cod_produto": "PA000157",
        "Nome": "TRIDIAZIN 5 X 30",
        "Quantidade": 100,
        "Valor": 20.7491073707804
       },
       {
        "Cod_produto": "PA000158",
        "Nome": "VEICULO UNIVERSAL VANSIL 5 LITROS",
        "Quantidade": 100,
        "Valor": 72.7680383827027
       },
       {
        "Cod_produto": "PA000166",
        "Nome": "SECLIMP 10KG",
        "Quantidade": 100,
        "Valor": 47.9706653890159
       },
       {
        "Cod_produto": "PA000167",
        "Nome": "SECLIMP 20KG",
        "Quantidade": 100,
        "Valor": 32.5270475737955
       },
       {
        "Cod_produto": "PA000168",
        "Nome": "SECLIMP 5KG - AMOSTRA GRATIS",
        "Quantidade": 100,
        "Valor": 5.44761676402657
       },
       {
        "Cod_produto": "PA000169",
        "Nome": "IVERMECTINA PREMIX 0,6% - 25KG",
        "Quantidade": 100,
        "Valor": 7.2342758088605
       },
       {
        "Cod_produto": "PA000170",
        "Nome": "IVERMECTINA PREMIX 0,6% - 5KG",
        "Quantidade": 100,
        "Valor": 88.0579140470245
       },
       {
        "Cod_produto": "PA000184",
        "Nome": ".INATIVO - TOP LARV 200G",
        "Quantidade": 100,
        "Valor": 0.578060390791069
       },
       {
        "Cod_produto": "PA000185",
        "Nome": ".INATIVO - TOP LARV 2KG",
        "Quantidade": 100,
        "Valor": 60.975576709365
       },
       {
        "Cod_produto": "PA000186",
        "Nome": ".INATIVO - TOP LARV 5KG",
        "Quantidade": 100,
        "Valor": 26.2678055235738
       },
       {
        "Cod_produto": "PA000193",
        "Nome": "ENRO FLEC 10% LITRO",
        "Quantidade": 100,
        "Valor": 51.2614135027448
       },
       {
        "Cod_produto": "PA000194",
        "Nome": "NEOCOLIN LIQUIDO 05LTS",
        "Quantidade": 100,
        "Valor": 35.9766566341105
       },
       {
        "Cod_produto": "PA000195",
        "Nome": "NEOCOLIN LIQUIDO LITRO",
        "Quantidade": 100,
        "Valor": 23.8947289723994
       },
       {
        "Cod_produto": "PA000197",
        "Nome": "TINTURA DE IODO 10% VANSIL 100ML",
        "Quantidade": 100,
        "Valor": 14.3866429226961
       },
       {
        "Cod_produto": "PA000198",
        "Nome": "TINTURA DE IODO 10% VANSIL LITRO",
        "Quantidade": 100,
        "Valor": 36.7482952250322
       },
       {
        "Cod_produto": "PA000199",
        "Nome": "MAX PRATA 200ML",
        "Quantidade": 100,
        "Valor": 91.0481290959735
       },
       {
        "Cod_produto": "PA000200",
        "Nome": "GENTASIL 100ML",
        "Quantidade": 100,
        "Valor": 38.6809525320862
       },
       {
        "Cod_produto": "PA000201",
        "Nome": "ARSENATROL 3 X 20ML",
        "Quantidade": 100,
        "Valor": 72.9841790705662
       },
       {
        "Cod_produto": "PA000202",
        "Nome": "FENILVET 20ML",
        "Quantidade": 100,
        "Valor": 87.1861258906983
       },
       {
        "Cod_produto": "PA000203",
        "Nome": "FENILVET 100ML",
        "Quantidade": 100,
        "Valor": 16.0360437483254
       },
       {
        "Cod_produto": "PA000204",
        "Nome": "ENRO FLEC INJETAVEL 10ML",
        "Quantidade": 100,
        "Valor": 55.5999658137861
       },
       {
        "Cod_produto": "PA000205",
        "Nome": "ENRO FLEC INJETAVEL 50ML",
        "Quantidade": 100,
        "Valor": 58.4812537147324
       },
       {
        "Cod_produto": "PA000206",
        "Nome": "FORTLOZIN 50ML",
        "Quantidade": 100,
        "Valor": 94.510551099732
       },
       {
        "Cod_produto": "PA000207",
        "Nome": "FORTLOZIN 100ML",
        "Quantidade": 100,
        "Valor": 44.0268231076322
       },
       {
        "Cod_produto": "PA000208",
        "Nome": "OXI VANSIL LA 100ML",
        "Quantidade": 100,
        "Valor": 29.5524455789665
       },
       {
        "Cod_produto": "PA000209",
        "Nome": "OXI VANSIL LA 50ML",
        "Quantidade": 100,
        "Valor": 31.4272904320276
       },
       {
        "Cod_produto": "PA000210",
        "Nome": "TRIDIAZIN 15ML",
        "Quantidade": 100,
        "Valor": 64.2111655126869
       },
       {
        "Cod_produto": "PA000211",
        "Nome": "TRIDIAZIN 50ML",
        "Quantidade": 100,
        "Valor": 40.7911433789925
       },
       {
        "Cod_produto": "PA000212",
        "Nome": "IVERMECTINA 1% 50ML",
        "Quantidade": 100,
        "Valor": 1.78096161416448
       },
       {
        "Cod_produto": "PA000213",
        "Nome": "IVERMECTINA 1% 500ML",
        "Quantidade": 100,
        "Valor": 62.9847911600523
       },
       {
        "Cod_produto": "PA000214",
        "Nome": "MAX PRATA 500ML",
        "Quantidade": 100,
        "Valor": 73.2992619091954
       },
       {
        "Cod_produto": "PA000215",
        "Nome": "PLACEN-P 20ML",
        "Quantidade": 100,
        "Valor": 18.226972749339
       },
       {
        "Cod_produto": "PA000216",
        "Nome": "ANESTESICO VANSIL 50ML INJETAVEL",
        "Quantidade": 100,
        "Valor": 18.2532092163116
       },
       {
        "Cod_produto": "PA000217",
        "Nome": "CALCIO REFORCADO 200ML",
        "Quantidade": 100,
        "Valor": 49.5823219315566
       },
       {
        "Cod_produto": "PA000218",
        "Nome": "CALCIO REFORCADO 500ML",
        "Quantidade": 100,
        "Valor": 37.4065388979956
       },
       {
        "Cod_produto": "PA000219",
        "Nome": "DEXFER B12 50ML",
        "Quantidade": 100,
        "Valor": 90.767876123757
       },
       {
        "Cod_produto": "PA000220",
        "Nome": "GLICOSE VITAMINADA 100ML",
        "Quantidade": 100,
        "Valor": 71.0125333157872
       },
       {
        "Cod_produto": "PA000221",
        "Nome": "OLEO CANFORADO 20ML DP C\/ 12 FRASCOS",
        "Quantidade": 100,
        "Valor": 86.216176920921
       },
       {
        "Cod_produto": "PA000222",
        "Nome": "SILCORT 10ML",
        "Quantidade": 100,
        "Valor": 37.0593088077728
       },
       {
        "Cod_produto": "PA000223",
        "Nome": "ECTOLIN AMOSTRA",
        "Quantidade": 100,
        "Valor": 92.3175629010679
       },
       {
        "Cod_produto": "PA000224",
        "Nome": "PET DERMYL AMOSTRA",
        "Quantidade": 100,
        "Valor": 76.987622291447
       },
       {
        "Cod_produto": "PA000230",
        "Nome": "ENRO FLEC INJ. 500ML",
        "Quantidade": 100,
        "Valor": 67.3404400357509
       },
       {
        "Cod_produto": "PA000236",
        "Nome": "ENERGYSI H 5KG",
        "Quantidade": 100,
        "Valor": 33.3172912337228
       },
       {
        "Cod_produto": "PA000237",
        "Nome": "V-FERTIL 1 LITRO",
        "Quantidade": 100,
        "Valor": 10.5522877499958
       },
       {
        "Cod_produto": "PA000239",
        "Nome": "POTENSIL 50 5KG (50 X 100G)",
        "Quantidade": 100,
        "Valor": 90.6218942743063
       },
       {
        "Cod_produto": "PA000240",
        "Nome": "MEBENDASIL 100G",
        "Quantidade": 100,
        "Valor": 87.2841531076602
       },
       {
        "Cod_produto": "PA000244",
        "Nome": "MEBENDASIL 6KG",
        "Quantidade": 100,
        "Valor": 23.0243641470457
       },
       {
        "Cod_produto": "PA000297",
        "Nome": "SILMOX CL 50 MG",
        "Quantidade": 100,
        "Valor": 31.0403791241581
       },
       {
        "Cod_produto": "PA000298",
        "Nome": "SILMOX CL 300 MG",
        "Quantidade": 100,
        "Valor": 17.7104067850778
       },
       {
        "Cod_produto": "PA000299",
        "Nome": "IODOFARM 5 L",
        "Quantidade": 100,
        "Valor": 78.4109048106497
       },
       {
        "Cod_produto": "PA000300",
        "Nome": "VANCID 10 HERBAL 20 ML",
        "Quantidade": 100,
        "Valor": 80.272549253439
       },
       {
        "Cod_produto": "PA000301",
        "Nome": "ASCORSIL C 200 ML",
        "Quantidade": 100,
        "Valor": 14.3758104240025
       },
       {
        "Cod_produto": "PA000307",
        "Nome": "EVOLUTION BEZERROS 6 X 15G",
        "Quantidade": 100,
        "Valor": 86.6720383988062
       },
       {
        "Cod_produto": "PA000316",
        "Nome": "RICINUS 90G",
        "Quantidade": 100,
        "Valor": 25.4384946935903
       },
       {
        "Cod_produto": "PA000319",
        "Nome": "CEFA SID 110MG - 10 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 63.6156284849326
       },
       {
        "Cod_produto": "PA000320",
        "Nome": "CEFA SID 220MG - 10 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 49.4688764357494
       },
       {
        "Cod_produto": "PA000321",
        "Nome": "CEFA SID 440MG - 10 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 65.5806656668577
       },
       {
        "Cod_produto": "PA000322",
        "Nome": "CEFA SID 660MG - 10 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 90.8130354932455
       },
       {
        "Cod_produto": "PA000324",
        "Nome": ".INATIVO - SILMOX CL 50 MG - AMOSTRA GRATIS",
        "Quantidade": 100,
        "Valor": 66.8400632267345
       },
       {
        "Cod_produto": "PA000325",
        "Nome": ".INATIVO - SILMOX CL 300 MG - AMOSTRA GRATIS",
        "Quantidade": 100,
        "Valor": 3.67668858786733
       },
       {
        "Cod_produto": "PA000329",
        "Nome": "ESTREPTOMICIN DISPLAY 6 FRASCOS",
        "Quantidade": 100,
        "Valor": 64.3098155816311
       },
       {
        "Cod_produto": "PA000333",
        "Nome": "SECLIMP 2KG - AMOSTRA GRATIS",
        "Quantidade": 100,
        "Valor": 49.5989868673707
       },
       {
        "Cod_produto": "PA000335",
        "Nome": "SUPEROVO 25Kg",
        "Quantidade": 100,
        "Valor": 14.5143928268989
       },
       {
        "Cod_produto": "PA000346",
        "Nome": "CEFA SID 110MG - 100 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 11.2042069343871
       },
       {
        "Cod_produto": "PA000347",
        "Nome": "CEFA SID 220MG - 100 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 22.8490690009077
       },
       {
        "Cod_produto": "PA000348",
        "Nome": "CEFA SID 440MG - 100 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 93.6530471675678
       },
       {
        "Cod_produto": "PA000349",
        "Nome": "CEFA SID 660MG - 100 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 34.7535142516504
       },
       {
        "Cod_produto": "PA000396",
        "Nome": "CEFA SID 110MG - 5 COMPRIMIDOS – AMOSTRA GRATIS",
        "Quantidade": 100,
        "Valor": 44.5973077746904
       },
       {
        "Cod_produto": "PA000399",
        "Nome": "BROMY-L 20 G - DISPLAY COM 50 SACHES",
        "Quantidade": 100,
        "Valor": 94.419748731117
       },
       {
        "Cod_produto": "PA000410",
        "Nome": "BROMY-L 200 G - CAIXA COM 90 SACHES",
        "Quantidade": 100,
        "Valor": 22.9370304553769
       },
       {
        "Cod_produto": "PA000411",
        "Nome": "ALCOOL EM GEL 70%",
        "Quantidade": 100,
        "Valor": 25.4551198551993
       },
       {
        "Cod_produto": "PA000412",
        "Nome": "INATIVO - HALITO DINE 100 ML",
        "Quantidade": 100,
        "Valor": 67.0814703201968
       },
       {
        "Cod_produto": "PA000413",
        "Nome": "BROMY-L 20 G - DISPLAY COM 50 SACHES",
        "Quantidade": 100,
        "Valor": 96.3149679258045
       },
       {
        "Cod_produto": "PA000414",
        "Nome": "BROMY-L 200G (20 ISCAS POR SACHE E 90 SACHES POR CX)",
        "Quantidade": 100,
        "Valor": 97.4506642156891
       },
       {
        "Cod_produto": "PA000437",
        "Nome": "V-CORT 0,5 MG DISPLAY 200 COMPRIMIDOS",
        "Quantidade": 100,
        "Valor": 8.78691566820761
       },
       {
        "Cod_produto": "PA000438",
        "Nome": "CYPERMEIT 1 LITRO",
        "Quantidade": 100,
        "Valor": 69.5530110079616
       },
       {
        "Cod_produto": "PA000439",
        "Nome": "PET DERMYL 300 ML",
        "Quantidade": 100,
        "Valor": 36.5222495865955
       },
       {
        "Cod_produto": "PA000441",
        "Nome": "HALITO DINE 100 ML",
        "Quantidade": 100,
        "Valor": 48.3091852527236
       },
       {
        "Cod_produto": "PA000444",
        "Nome": "SILCORT 50 ML",
        "Quantidade": 100,
        "Valor": 82.9342875655072
       },
       {
        "Cod_produto": "PA000447",
        "Nome": "TOP GARD 2 x 1980 MG - 30 KG",
        "Quantidade": 100,
        "Valor": 15.7508433103785
       },
       {
        "Cod_produto": "PA000448",
        "Nome": "TOP GARD PLUS 2 X 1800 MG - 30 KG",
        "Quantidade": 100,
        "Valor": 90.7483239012248
       },
       {
        "Cod_produto": "PA000449",
        "Nome": "TOP GARD IVER 3 MG",
        "Quantidade": 100,
        "Valor": 27.9223099000918
       },
       {
        "Cod_produto": "PA000450",
        "Nome": "TOP GARD IVER 6 MG",
        "Quantidade": 100,
        "Valor": 32.1280644977767
       },
       {
        "Cod_produto": "PA000452",
        "Nome": "CARPROFEN 25 MG",
        "Quantidade": 100,
        "Valor": 58.4571811665871
       },
       {
        "Cod_produto": "PA000453",
        "Nome": "CARPROFEN 75 MG",
        "Quantidade": 100,
        "Valor": 16.1755409717903
       },
       {
        "Cod_produto": "PA000454",
        "Nome": "CARPROFEN 100 MG",
        "Quantidade": 100,
        "Valor": 75.0244350421549
       },
       {
        "Cod_produto": "PA000456",
        "Nome": "ENRO FLEC COMPRIMIDOS 50 MG",
        "Quantidade": 100,
        "Valor": 49.0189767297945
       },
       {
        "Cod_produto": "PA000457",
        "Nome": "ENRO FLEC COMPRIMIDOS 150 MG",
        "Quantidade": 100,
        "Valor": 68.2662492990738
       },
       {
        "Cod_produto": "PA000478",
        "Nome": "SILMOX CL 150 MG",
        "Quantidade": 100,
        "Valor": 76.3649617495412
       }
]; //usei pra adicionar todos os dados no bdd

export function inserirProdutos() {
    // loop para inserir cada produto
    for (const produto of produtos) {
        const { Nome, Valor, Quantidade, Cod_produto } = produto;
        const query = `INSERT INTO produtos (Nome, Valor, Quantidade, Cod_produto) VALUES (?, ?, ?, ?)`;
        const values = [Nome, Valor, Quantidade, Cod_produto];

        // utilizando a constante 'db' para realizar a consulta
        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Erro ao inserir produto:', err);
            } else {
                console.log(`Produto inserido com sucesso. ID: ${result.insertId}`);
            }
        });
    }

}

export function cancelarCompra(){
    
}
const arr = [
    {
        id: 1,
        name: 'MSI Modern 14 B11MOU',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/589efa18969713b0b8e583cfcbda531e/6274664fe9eb2bcc9a3de254f1b082ba84c17ef6c79d65b245c525f56b5dfb4c.jpg.webp' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I3-1115G4',
            ram: 8,
            ssd: 256,
            display: 14,
            display_hz: '60 hz',
            video_card: 'UHD Graphics Xe G4 48EUs'
        }
    },
    {
        id: 2,
        name: 'MSI Bravo 17 C7VE',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://cdn.citilink.ru/Hz0IvruarKRPRHvrFTwHNnOkIat1mFlPK9eo_RIBdB8/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/ac1dbc6d-892c-4070-9094-57c35371cb96.jpg' ,
        characteristic: {
            processer: 'amd',
            processer_model: 'Ryzen7-7535HS',
            ram: 16,
            ssd: 512,
            display: 17.3,
            display_hz: 144,
            video_card: 'RTX 4050'
        }
    }, {
        id: 3,
        name: 'MSI Bravo 15 B5DD',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://cdn.citilink.ru/D0sFqNEs1UPqN-y8evAJUNWPQC8cMvUDVTN3u5ggRn0/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/8df2ba04-f12a-4088-8367-36fbf5966dab.jpg' ,
        characteristic: {
            processer: 'amd',
            processer_model: 'Ryzen5-5600H',
            ram: 8,
            ssd: 512,
            display: 15.6,
            display_hz: 144,
            video_card: 'RX 5500M'
        }
    },
    {
        id: 4,
        name: 'MSI Alpha 15 B5EEK',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/ee91dd5bfa137b9a20d575fbfd923c46/96d216b34d48b8d202db8f9fe9caca69fceedb13ff5c336cd89be42d14cf6d46.jpg.webp' ,
        characteristic: {
            processer: 'amd',
            processer_model: 'Ryzen5-5600H',
            ram: 8,
            ssd: 512,
            display: 15.6,
            display_hz: 144,
            video_card: 'RX 6600M'
        }
    },
    {
        id: 5,
        name: 'MSI GF63 Thin 11UC',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://cdn.citilink.ru/OqN8GHu8k_UHwyu7uA3MCnDNvXvwtKYyBpeNsWAfTf0/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/00655a76-e3d2-49b9-b4d9-52afa0af1175.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I5-11400H',
            ram: 8,
            ssd: 512,
            display: 15.6,
            display_hz: 144,
            video_card: 'RTX 3050'
        }
    }, {
        id: 6,
        name: 'MSI Katana GF66 12UD',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://c.dns-shop.kz/thumb/st4/fit/0/0/eed45a5fcbcad3062884e773d69fa52e/f6b7920246f54a4dbf45543f41dd93d4053c2cc6cf66ae57e9a2fc9116688272.jpg.webp' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I7-12700H',
            ram: 8,
            ssd: 512,
            display: 15.6,
            display_hz: 144,
            video_card: 'RTX 3050 Ti'
        }
    },
    {
        id: 7,
        name: 'MSI Katana GF66 11UC',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2034985.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I5-11400H',
            ram: 16,
            ssd: 512,
            display: 17.3,
            display_hz: 144,
            video_card: 'RTX 3050'
        }
    }, {
        id: 8,
        name: 'MSI Katana GF76 12UEOK',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2384646.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I7-12700H',
            ram: 16,
            ssd: 512,
            display: 17.3,
            display_hz: 144,
            video_card: 'RTX 3060'
        }
    },
    {
        id: 9,
        name: 'MSI Summit E16 Flip Evo A12MT',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2193864.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I7-1280P',
            ram: 16,
            ssd: 1024,
            display: 16,
            display_hz: 165,
            video_card: 'integrated'
        }
    },
    {
        id: 10,
        name: 'MSI Thin GF63 12VF',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2404973.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I5-12450H',
            ram: 16,
            ssd: 512,
            display: 15.6,
            display_hz: 144,
            video_card: 'RTX 4060'
        }
    },
    {
        id: 11,
        name: 'MSI Raider GE78HX 13VH',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2385712.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I9-13950HX ',
            ram: 32,
            ssd: 1024,
            display: 17.3,
            display_hz: '240 hz',
            video_card: 'RTX 4080'
        }
    },
    {
        id: 12,
        name: 'MSI Katana 15 B13VGK',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2479782.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I9-13900H',
            ram: 16,
            ssd: 1024,
            display: 15.6,
            display_hz: '144 hz',
            video_card: 'RTX 4070'
        }
    },
    {
        id: 13,
        name: 'MSI Raider GE68HX 13VF',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2385749.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I9-13950HX',
            ram: 32,
            ssd: 1024,
            display: 16,
            display_hz: '144 hz',
            video_card: 'RTX 4060'
        }
    },
    {
        id: 14,
        name: 'MSI Vector GP77 13VG',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2416720.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I9-13700H',
            ram: 32,
            ssd: 1024,
            display: 17.3,
            display_hz: '240 hz',
            video_card: 'RTX 4070'
        }
    },
    {
        id: 15,
        name: 'MSI Stealth 17 Studio A13VH',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2385754.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I9-13900H',
            ram: 32,
            ssd: 1024,
            display: 17.3,
            display_hz: '240 hz',
            video_card: 'RTX 4080'
        }
    },
    {
        id: 16,
        name: 'MSI Raider GE68HX 13VG',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2385748.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I9-13980HX',
            ram: 32,
            ssd: 1024,
            display: 16,
            display_hz: '240 hz',
            video_card: 'RTX 4070'
        }
    },
    {
        id: 17,
        name: 'MSI Raider GE78HX 13VH',
        category:'laptop',
        price: 0,
        old_price: 0,
        image: 'https://e-katalog.kz/jpg_zoom1/2385712.jpg' ,
        characteristic: {
            processer: 'intel',
            processer_model: 'I9-13950HX',
            ram: 32,
            ssd: 1024,
            display: 17.3,
            display_hz: '240 hz',
            video_card: 'RTX 4080'
        }
    },

]


const dekstops = [
    {id: 18,
    name: 'MSI MAG codex X5 12TE-1458RU',
    category: 'dekstop',
    price: 0,
    old_price: 0,
    image: img,
    characteristic: {
        processer:'intel',
        processer_model:'I9-12900K',
        motherboard: 'z690',
        ram: 32,
        ssd: 1024,
        video_card: 'RTX 3080',
        block_power: 750,
        type_ram: 'ddr5'
    }
},
    {id: 19,
        name: 'MSI Codex X5 11TD-1463XRUU',
        category: 'dekstop',
        price: 0,
        old_price: 0,
        image: img,
        characteristic: {
           processer:'intel',
            processer_model:'I7-11700KF',
            motherboard: 'z590',
            ram: 32,
            ssd: 1024,
            video_card: 'RTX 3070',
            block_power: 750,
            type_ram: 'ddr4'
        }
    },
    {id: 20,
        name: 'MSI Pro DP130 11-478XRU',
        category: 'dekstop',
        price: 0,
        old_price: 0,
        image: 'https://www.overgameweb.com/msi-mag-codex-x5-12tf-1075mys-i9-12900kf-32gb-ddr4-1tb-ssd-2tb-hdd-rtx3080ti-gddr6-12g-w11-siyah-gaming-pc-msi-22059-15-B.jpg' ,
        characteristic: {
           processer:'intel',
            processer_model:'I3-10105',
            motherboard: 'h510',
            ram: 8,
            ssd: 512,
            video_card: 'integrated',
            block_power: 350,
            type_ram: 'ddr4'
        }
    },
]
